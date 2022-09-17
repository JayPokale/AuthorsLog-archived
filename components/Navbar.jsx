import Styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter().asPath.replace("#", "");
  const active = (
    <div className="h-10 w-[6px] absolute bg-slate-400 rounded-r-full"></div>
  );

  return (
    <nav className="flex z-30 md:z-0 md:hover:z-10 fixed ">
      <div className="hidden md:flex my-auto">
        <div className={Styles.sideMenuLargeScreen}>
          <div className="flex flex-col justify-between h-full w-16 hover:w-48 bg-white hover:bg-slate-50 ease-in-out duration-500 overflow-hidden rounded-md hover:shadow-2xl shadow-black">
            <div>
              <div className="h-48 flex items-start p-2">
                <main>
                  <Link href={"/profile"}>
                    <div>
                      <Image
                        src={"/userNone.webp"}
                        width={176}
                        height={176}
                      ></Image>
                    </div>
                  </Link>
                </main>
              </div>
              <ul>
                <Link href={"/"}>
                  <li className="flex items-center w-48 py-3 hover:bg-white ease-in-out duration-100 relative cursor-pointer">
                    <div className="flex justify-center w-16">
                      <Image
                        src={"/fa-list.svg"}
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                    <div className="ml-2 text-gray-500">All Posts</div>
                    {router === "/" || router === "/article" ? active : ""}
                  </li>
                </Link>
                <Link href={"/bookmark"}>
                  <li className="flex items-center w-48 py-3 hover:bg-white ease-in-out duration-100 relative cursor-pointer">
                    <div className="flex justify-center w-16">
                      <Image
                        src={"/fa-mark.svg"}
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                    <div className="ml-2 text-gray-500">Bookmark</div>
                    {router === "/bookmark" ? active : ""}
                  </li>
                </Link>
                <Link href={"/addpost"}>
                  <li className="flex items-center w-48 py-3 hover:bg-white ease-in-out duration-100 relative cursor-pointer">
                    <div className="flex justify-center w-16">
                      <Image
                        src={"/fa-write.svg"}
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                    <div className="ml-2 text-gray-500">Add Post</div>
                    {router === "/addpost" ? active : ""}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex items-center w-48 py-2 mb-2 hover:bg-white ease-in-out duration-100 cursor-pointer">
              <li className="flex justify-center w-16">
                <Image src={"/fa-logout.svg"} width={20} height={20}></Image>
              </li>
              <div className="ml-2 text-gray-500">Log Out</div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 z-10">
        <div className={Styles.sideMenuSmallScreen}>
          <ul className="flex items-center justify-evenly w-full py-3">
            <Link href={"/"}>
              <li>
                <section className="flex justify-center cursor-pointer">
                  <Image src={"/fa-list.svg"} width={24} height={24}></Image>
                </section>
              </li>
            </Link>
            <Link href={"/bookmark"}>
              <li>
                <section className="flex justify-center cursor-pointer">
                  <Image src={"/fa-mark.svg"} width={24} height={24}></Image>
                </section>
              </li>
            </Link>
            <Link href={"/addpost"}>
              <li>
                <section className="flex justify-center cursor-pointer">
                  <Image src={"/fa-write.svg"} width={24} height={24}></Image>
                </section>
              </li>
            </Link>
            <Link href={"/profile"}>
              <li>
                <div className="rounded-full overflow-hidden w-7 h-7 cursor-pointer">
                  <Image src={"/userNone.webp"} width={28} height={28}></Image>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
