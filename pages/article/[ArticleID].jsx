import Navbar from "../../components/Navbar";
import Rightbar from "../../components/Rightbar";
import Article from "../../components/Article";

const temppost = () => {
  return (
    <div className="flex">
      <Navbar />
      <Article />
      <Rightbar />
    </div>
  );
}

export default temppost;