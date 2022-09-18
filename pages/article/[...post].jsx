import Navbar from "../../components/Navbar";
import Rightbar from "../../components/Rightbar";
import Article from "../../components/Article";
import { useRouter } from "next/router";

const Post = ({ post }) => {
 
  return (
    <div className="max-w-screen-2xl w-full h-screen flex mx-auto justify-between pr-4">
      <div>
        <Navbar />
      </div>
      <div>
        <Article post={post} />
      </div>
      <div>
        <Rightbar />
      </div>
    </div>
  );
};

export async function getServerSideProps(rq, res) {
  const [pid, slug] = rq.query?.post;
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/${pid}/${slug}`
  );
  const post = await req.json();
 
  return {
    props: {
      post: post.post || {},
    },
  };
}
export default Post;
