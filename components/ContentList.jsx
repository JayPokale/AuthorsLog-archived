import Styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { format } from "timeago.js";
const ContentList = ({ posts }) => {
  console.log({ posts });
  return (
    <main className={Styles.mainContent}>
      <div className="h-12 w-full bg-white fixed md:hidden z-10"></div>
      <article className="flex flex-wrap pt-12 lg:pt-0 mx-4">
        {posts?.map((obj) => (
          <section key={obj.pid} className="w-full sm:w-1/2 xl:w-1/3 p-4">
            <Link href={`/article/${obj?.pid}/${obj?.slug}`}>
              <section className="flex flex-col cursor-pointer">
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
                <div className="flex h-24 items-center">
                  <div className="w-10 h-10 rounded-full absolute -z-10">
                    <Image
                      src={obj.photo}
                      width={40}
                      height={40}
                      layout="responsive"
                      className="rounded-full aspect-square absolute"
                    />
                  </div>
                  <div className="ml-14 mt-2 h-24">
                    <div className={Styles.h1title}>{obj.title}</div>
                    <div className="text-sm text-gray-800">{obj.name}</div>
                    <div className="text-sm text-gray-600">
                      {obj.likes} Likes •<span className="mr-1"></span>
                      {format(new Date("2022-09-15T21:18:11.000Z"))}
                    </div>
                  </div>
                </div>
              </section>
            </Link>
          </section>
        ))}
      </article>
    </main>
  );
};

export default ContentList;
