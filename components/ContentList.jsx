import Styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { format } from "timeago.js";
import { useEffect, useState } from "react";
const ContentList = () => {
  const [contents, setContents] = useState(null);
  const getPosts = async () => {
    const posts = await fetch("http://localhost:6969/v1/api/post/allposts");
    const postJSON = await posts.json();
    setContents(postJSON?.result);
    console.log(postJSON?.result);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className={Styles.mainContent}>
      <div className="h-12 w-full bg-white fixed md:hidden z-10"></div>
      <div className="flex flex-wrap pt-12 lg:pt-0 mx-4">
        {contents?.map((obj) => {
          return (
            <section key={obj.pid} className="w-full sm:w-1/2 xl:w-1/3 p-4">
              <Link href={`/article/${obj?.pid}/${obj?.slug}`}>
                <div className="flex flex-col cursor-pointer">
                  <div className="-z-10">
                    <Image
                      src={obj.thumbnail}
                      width={640}
                      height={360}
                      layout="responsive"
                      style={{ margin: "0 auto" }}
                      className="aspect-video object-cover"
                    />
                  </div>
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full absolute -z-10">
                      <Image
                        src={obj.photo}
                        width={40}
                        height={40}
                        layout="responsive"
                        className="rounded-full aspect-square absolute"
                      />
                    </div>
                    <div className="ml-14">
                      <div className={Styles.h1title}>{obj.title}</div>
                      <div className="text-sm text-gray-800">{obj.name}</div>
                      <div className="text-sm text-gray-600">
                        {obj.likes} Likes •<span className="mr-1"></span>
                        {format(new Date("2022-09-15T21:18:11.000Z"))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          );
        })}

        {/* <section className="w-full sm:w-1/2 xl:w-1/3 p-4">
          <Link href={"/article/temp"}>
            <div className="flex flex-col cursor-pointer">
              <div className="-z-10">
                <Image src="/image1.png" width={640} height={360} />
              </div>
              <div className="flex">
                <div className="w-10 h-10 bg-black rounded-full absolute -z-10"></div>
                <div className="ml-14">
                  <div className={Styles.h1title}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ducimus maiores quos obcaecati rem! Adipisci exercitationem
                    esse unde rerum tempora ipsam, magni, eveniet, quam
                    repudiandae praesentium odio eius. Nisi, aliquid cumque!30
                  </div>
                  <div className="text-sm text-gray-800">Dare2Solve</div>
                  <div className="text-sm text-gray-600">
                    10k votes (70%) &#9679; 08 Mar 2001
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section> */}
      </div>
    </main>
  );
};

export default ContentList;
