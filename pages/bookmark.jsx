import Head from "next/head";
import ContentBookamark from "../components/ContentBookmark";
import Rightbar from "../components/Rightbar";

export default function Bookmark() {
  return (
    <div className="max-w-screen-2xl w-full h-screen flex mx-auto justify-center">
      <div>
        <ContentBookamark />
      </div>
      <div>
        <Rightbar />
      </div>
    </div>
  );
}
