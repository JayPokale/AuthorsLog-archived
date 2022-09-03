import Script from "next/script";
import Styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/dist/client/image";

const Navbar = () => {
  const router = useRouter().asPath.replace("#", "");

  return (
    <nav className="flex bg-white z-30 md:z-0 fixed">
      <div className="hidden md:flex my-auto">
        <div className={Styles.sideMenuLargeScreen}>
          <aside className="flex flex-col justify-between h-full w-16 hover:w-48 bg-white ease-in-out duration-500 overflow-hidden">
            <div>
              <div className="h-56 flex items-start p-2">
                <div className="rounded-full overflow-hidden">
                  <Image src={'/userNone.webp'} width={176} height={176}></Image>
                </div>
              </div>
              <ul>
                <li className="flex items-center w-48 py-3 hover:bg-slate-50 ease-in-out duration-100 relative">
                  <div className="flex justify-center w-16">
                    <Image src={"/fa-list.svg"} width={20} height={20}></Image>
                  </div>
                  <div className="ml-2 text-gray-500">All Posts</div>
                  <div className="h-10 w-[6px] absolute bg-green-400 rounded-r-full"></div>
                </li>
                <li className="flex items-center w-48 py-3 hover:bg-slate-50 ease-in-out duration-100">
                  <div className="flex justify-center w-16">
                    <Image src={"/fa-bookmark.svg"} width={20} height={20}></Image>
                  </div>
                  <div className="ml-2 text-gray-500">Bookmark</div>
                </li>
                <li className="flex items-center w-48 py-3 hover:bg-slate-50 ease-in-out duration-100">
                  <div className="flex justify-center w-16">
                    <Image src={"/fa-write.svg"} width={20} height={20}></Image>
                  </div>
                  <div className="ml-2 text-gray-500">Add Post</div>
                </li>
              </ul>
            </div>
            <div className="flex items-center w-48 py-2 mb-2 hover:bg-slate-50 ease-in-out duration-100">
              <li className="flex justify-center w-16">
                <Image src={"/fa-logout.svg"} width={20} height={20}></Image>
              </li>
              <div className="ml-2 text-gray-500">Log Out</div>
            </div>
          </aside>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 z-10">
        <div className={Styles.sideMenuSmallScreen}>
          <ul className="flex justify-evenly w-full py-2">
            <li>
              <Link href={"/"}>
                <ion-icon
                  name={
                    router === `/` || router === "/article"
                      ? "home"
                      : "home-outline"
                  }
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <ion-icon
                  name={
                    router === `/collection` ? "bookmarks" : "bookmarks-outline"
                  }
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"/upload"}>
                <ion-icon
                  name={
                    router === `/upload` ? "add-circle" : "add-circle-outline"
                  }
                ></ion-icon>
              </Link>
            </li>
            <li>DP</li>
          </ul>
        </div>
      </div>

      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
    </nav>
  );
};

export default Navbar;
