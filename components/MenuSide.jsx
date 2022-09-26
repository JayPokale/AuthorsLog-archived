import Image from "next/image";
import { useContext } from "react";
import { menuState } from "../pages/trial";

const MenuSide = () => {
  const { open } = useContext(menuState);
  return (
    <>
      <nav
        className={`${open ? "w-[256px]" : "w-[88px]"}
        h-[calc(100vh-56px)] overflow-hidden border-x px-4 divide-y-2 ease-in-out duration-300`}
      >
        <div className="relative h-20 mb-4">
          <div className="absolute flex items-center w-72">
            <div className="h-12 w-12 bg-black rounded-full my-2 mx-1"></div>
            <div className="mx-4 my-2">
              <div>Jay Pokale</div>
              <div>5000 followers</div>
              <div>Profile</div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <ul>
            <li className="flex my-4 items-center w-72">
              <Image src={"/icon_home.svg"} width={24} height={24}></Image>
              <div className="ml-8">Home</div>
            </li>
            <li className="flex my-4 items-center w-72">
              <Image src={"/icon_saved.svg"} width={24} height={24}></Image>{" "}
              <div className="ml-8">Saved Posts</div>
            </li>
            <li className="flex my-4 items-center w-72">
              <Image src={"/icon_following.svg"} width={24} height={24}></Image>{" "}
              <div className="ml-8">Followings</div>
            </li>
          </ul>
        </div>
        <div className="px-4">
          <ul>
            <li className="flex my-4 items-center w-72">
              <Image src={"/icon_addpost.svg"} width={24} height={24}></Image>{" "}
              <div className="ml-8">Add Post</div>
            </li>
            <li className="flex my-4 items-center w-72">
              <Image src={"/icon_disabled.svg"} width={24} height={24}></Image>{" "}
              <div className="ml-8">Disabled Posts</div>
            </li>
          </ul>
        </div>
        <div className="px-4">
          <div>
            <div className="flex my-4 items-center w-72">
              <Image src={"/icon_logout.svg"} width={24} height={24}></Image>
              <div className="ml-8">Log Out</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuSide;
