import Image from "next/image";
import { useState } from "react";

const displayPhotoClick = () => {
  let displayPhoto = document.getElementById("displayPhoto");
  displayPhoto.click();
};

const userDetails = () => {
  return (
    <main className="bg-gray-200 h-screen flex items-center p-4">
      <div className="flex flex-col items-center bg-white w-screen max-w-lg rounded-md overflow-hidden mx-auto shadow-2xl select-none">
        <div className="flex justify-around w-full text-xl font-bold text-gray-500 tracking-wider cursor-default">
          <div
            className="w-1/2 flex justify-center py-4 z-10"
            style={{ border: "2px solid transparent" }}
          >
            User Details
          </div>
        </div>
        <div className=" w-full bg-white flex flex-col items-center z-20">
          <form className="w-full flex flex-col items-center px-10 space-y-4 mt-8 mb-4">
            <div className="w-full flex justify-center">
              <div className="relative h-52 w-52 rounded-full overflow-hidden">
                <Image
                  className="cursor-pointer"
                  src="/userNone.webp"
                  width={208}
                  height={208}
                  layout="responsive"
                  onClick={displayPhotoClick}
                />
                <input
                  className="hidden"
                  type="file"
                  id="displayPhoto"
                  name="displayPhoto"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <input
                className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-full shadow-inner py-3"
                type="text"
                name="name"
                placeholder="Display Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default userDetails;
