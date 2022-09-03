import Link from "next/link";
import Image from "next/image";
import { app } from "../config/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAdditionalUserInfo,
} from "firebase/auth";
import { useRouter } from "next/router";

const connectus = () => {
  const auth = getAuth();
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const userWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        router.push("/");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const userWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        router.push("/");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-slate-50 select-none">
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
