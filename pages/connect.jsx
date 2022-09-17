import Link from "next/link";
import Image from "next/image";
import { app } from "../config/firebase";
import { setCookie } from "cookies-next";
import cookieCutter from "cookie-cutter";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
const connectus = () => {
  const [error, setError] = useState(null);

  // creating new user in backend-databse
  const createUser = async (userdata) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(userdata),

      // credentials: "include",
      headers: {
        Accept: "*",
        "Content-type": "application/json",
      },
    });
    const res = await req.json();
    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(res.user));
      console.log(res.cookie);
      setCookie("user", res.user_token);
      Router.push("/");
      return;
    }
    alert("something went wrong");
  };

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const userWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        createUser(user);
      })
      .catch((error) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        console.log(error);
      });
  };

  const userWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        createUser(user);
      })
      .catch((error) => {
        setTimeout(() => {
          setError(false);
        }, 5000);
        setError(true);
      });
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-slate-50 select-none relative">
      {/*  error dialogue */}
      {error && (
        <section className="absolute bottom-8 flex items-center space-x-6 right-8 bg-red-500 text-white shadow-lg  px-5  rounded-md">
          <p className="">Something went wrong !</p>
          <FaTimes className="cursor-pointer" onClick={() => setError(false)} />
        </section>
      )}
      <div className="max-w-screen-lg w-full flex flex-col lg:flex-row px-12">
        <div className="lg:w-1/2 md:px-0 justify-center text-center tracking-wide">
          <Link href={"/"}>
            <p className="flex justify-center text-5xl font-bold my-6 cursor-pointer">
              AuthorsLog
            </p>
          </Link>
          <p className="flex justify-center text-2xl my-6">
            You are most welcome to our website.
            <br />
            Get connected to access more features.
          </p>
        </div>

        <div className="lg:w-1/2 flex items-center sm:px-8">
          <div className="flex flex-col items-center pb-4 w-full bg-white rounded-xl mx-auto shadow-lg max-w-sm">
            <div className="w-full flex flex-col items-center px-4 space-y-4 mt-8 mb-4">
              <div className="w-full flex justify-center text-gray-400">
                Let's get connected with
              </div>
              <div className="w-full flex justify-center">
                <div
                  className="flex w-48 px-6 py-1 border-2 border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 hover:shadow-md"
                  onClick={userWithGoogle}
                >
                  <Image
                    src={"/icon-google.svg"}
                    width={32}
                    height={32}
                  ></Image>
                  <div className="text-xl my-auto ml-2">Google</div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div
                  className="flex w-48 px-6 py-1 border-2 border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 hover:shadow-md"
                  onClick={userWithFacebook}
                >
                  <Image
                    src={"/icon-facebook.svg"}
                    width={32}
                    height={32}
                  ></Image>
                  <div className="text-xl my-auto ml-2">Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connectus;
