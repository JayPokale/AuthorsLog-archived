import Script from "next/script";
import Styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex bg-white z-30 md:z-0 fixed">
      <Link href={"/"}>
        <div className="pl-4 pt-2 md:hidden fixed z-20">Logo</div>
      </Link>
      <div className="hidden md:flex my-auto">
        <div className={Styles.sideMenuLargeScreen}>
          <Link href={"/"}>
            <div className="cursor-pointer">Logo</div>
          </Link>
          <ul>
            <li>
              <Link href={"/"}>
                <ion-icon name="home-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <ion-icon name="bookmarks-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"/upload"}>
                <ion-icon name="add-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </Link>
            </li>
          </ul>
          <Link href={"#"}>
            <div className="cursor-pointer">DP</div>
          </Link>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 z-10">
        <div className={Styles.sideMenuSmallScreen}>
          <ul className="flex justify-evenly w-full py-2">
            <li>
              <Link href={"/"}>
                <ion-icon name="home-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <ion-icon name="bookmarks-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"/upload"}>
                <ion-icon name="add-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <ion-icon name="chatbubbles-outline"></ion-icon>
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
