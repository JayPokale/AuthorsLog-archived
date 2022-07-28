import Navbar from "../../components/Navbar";
import Rightbar from "../../components/Rightbar";
import Article from "../../components/Article";

const Post = () => {
  return (
    <div className="max-w-screen-2xl w-screen h-screen flex mx-auto justify-between">
      <div>
        <Navbar />
      </div>
      <div>
        <Article />
      </div>
      <div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Post;
