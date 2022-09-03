import Link from "next/link";
import { useState } from "react";
import { app } from "../config/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";

const signin = () => {
  const auth = getAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logUser = () => {
    if (!email) {
      alert("Enter Email");
    } else if (!password) {
      alert("Enter Password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((r) => {
          sessionStorage.setItem("Token", r.user.accessToken);
          router.push("/");
        })
        .catch((e) => {
          alert(e);
        });
    }
  };

  return (
    <main className="bg-gray-200 h-screen flex items-center p-4">
      <div className="flex flex-col items-center bg-white w-screen max-w-lg rounded-md overflow-hidden mx-auto shadow-2xl select-none">
        <div className="flex justify-around w-full text-xl font-bold text-gray-500 tracking-wider cursor-default">
          <Link href={"/signup"}>
            <div
              className="w-1/2 flex justify-center py-4 bg-gray-50 cursor-pointer"
              style={{ border: "2px solid transparent" }}
            >
              Sign Up
            </div>
          </Link>
          <div
            className="w-1/2 flex justify-center py-4 z-10"
            style={{
              boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)",
              border: "2px solid rgb(256 256 256)",
            }}
          >
            Sign In
          </div>
        </div>
        <div className=" w-full bg-white flex flex-col items-center z-20">
          <form className="w-full flex flex-col items-center px-10 space-y-4 mt-8 mb-4">
            <div className="w-full flex justify-center">
              <input
                className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-full shadow-inner py-3"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center">
              <input
                className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-full shadow-inner py-3"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center h-12 items-center text-lg text-violet-600 drop-shadow-xl">
              <Link href="#">Forgot Password?</Link>
            </div>
            <div
              className="w-32 flex justify-center py-3 rounded-sm bg-green-600 text-gray-50 font-semibold tracking-widest drop-shadow-md cursor-pointer"
              style={{ boxShadow: "0 4px 10px 0 rgba(27, 148, 71, 0.3)" }}
              type="submit"
              onClick={logUser}
            >
              Sign In
            </div>
            <div className="w-full flex justify-center h-6 items-center text-lg text-violet-600 drop-shadow-xl"></div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default signin;
