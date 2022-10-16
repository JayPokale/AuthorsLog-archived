import Head from "next/head";
import Upload from "../components/Upload";
import Rightbar from "../components/Rightbar";

export default function AddPost() {
  return (
    <div className="max-w-screen-2xl w-full h-screen flex mx-auto justify-between pr-4">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Upload />
      </div>
      <div>
        <Rightbar />
      </div>
    </div>
  );
}
