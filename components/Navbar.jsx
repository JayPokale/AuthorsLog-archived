import Script from "next/script";
import Styles from "../styles/Home.module.css"

const Navbar = () => {

  return (
    <nav className="flex bg-white z-30 fixed">
      <div className="pl-4 pt-2 md:hidden fixed z-20">Logo</div>
      <div className="hidden md:flex my-auto">
        <div className={Styles.sideMenuLargeScreen}>
          <div className="cursor-pointer">Logo</div>
          <ul>
            <li><ion-icon name="home-outline"></ion-icon></li>
            <li><ion-icon name="bookmarks-outline"></ion-icon></li>
            <li><ion-icon name="add-outline"></ion-icon></li>
            <li><ion-icon name="chatbubbles-outline"></ion-icon></li>
          </ul>
          <div className="cursor-pointer">DP</div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 z-10">
        <div className={Styles.sideMenuSmallScreen}>
          <ul className="flex justify-evenly w-full py-2">
            <li><ion-icon name="home-outline"></ion-icon></li>
            <li><ion-icon name="bookmarks-outline"></ion-icon></li>
            <li><ion-icon name="add-outline"></ion-icon></li>
            <li><ion-icon name="chatbubbles-outline"></ion-icon></li>
            <li>DP</li>
          </ul>
        </div>
      </div>


      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </nav>
  );
}

export default Navbar;