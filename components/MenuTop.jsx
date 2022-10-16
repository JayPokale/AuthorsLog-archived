import Image from "next/image";
import { useContext } from "react";
import { menuState } from "../pages/trial";

const MenuTop = () => {
  const { open, setOpen } = useContext(menuState)
  const menuIcon = open ? "/icon_menuclose.svg" : "/icon_menuopen.svg";
  return (
    <>
      <nav className="flex h-14 items-center px-8 py-2 justify-between max-w-[1536px] mx-auto border-b-2 sticky">
        <div className="flex">
          <button className="w-6 h-6" onClick={() => setOpen(!open)}>
            <Image src={`${menuIcon}`} width={24} height={24} layout="fixed" />
          </button>
          <div className="mx-4 items-center cursor-pointer">Logo</div>
        </div>
        <div className="w-full flex items-center ml-4 max-w-2xl">
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
              </svg>
            </div>
            <input
              type="search"
              className="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-l-lg block w-full pl-10 p-2.5 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <button className="py-2.5 px-4 text-sm font-medium text-white bg-black rounded-r-lg">
            <svg className="w-5 h-5" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="md:block hidden ml-4">
          <div className="border-2 border-black text-gray-700 font-bold py-[5px] px-4 rounded-full">
            Connect
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuTop;
