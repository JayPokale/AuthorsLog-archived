import Styles from "../styles/Home.module.css";

const Article = () => {
  return (
    <div className={Styles.mainContent}>
      <div className="h-12 w-full bg-white fixed md:hidden z-10"></div>

      <main className="px-10 md:pl-14 md:pr-24 lg:px-24 xl:px-36">
        <div className="pt-24 md:pt-12 pb-8 flex justify-between border-b-2">
          <div className="flex cursor-pointer">
            <div className="w-14 h-14 bg-black rounded-full"></div>
            <div className="flex flex-col ml-4 justify-center">
              <div className="font-bold text-lg">
                Lily Laramar{" "}
                <span className="font-normal text-sm text-gray-600">
                  (420 Followers)
                </span>{" "}
                <span className="ml-2 text-base text-blue-600">Follow</span>
              </div>
              <div className="text-sm text-gray-600">69 days ago</div>
            </div>
          </div>
          <div className="flex space-x-4 items-center mr-8">
            <div className="cursor-pointer">Save</div>
            <div className="cursor-pointer">Share</div>
          </div>
        </div>
      </main>

      <article className="px-10 md:pl-14 md:pr-24 lg:px-24 xl:px-36 text-gray-900">
        <div className="py-8 border-b-2">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis voluptas fugit saepe. Iusto, dolorem?
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis voluptas fugit saepe. Iusto, dolorem?
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            adipisci asperiores nesciunt sint numquam reprehenderit, ea
            provident voluptatem soluta. Saepe, voluptatibus. Error id fugiat
            corporis, fugit totam cum officiis quaerat quisquam, natus quasi
            quam laudantium. Non aut officiis at distinctio perspiciatis,
            provident molestiae suscipit totam odio dolor, facere, consequatur
            labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            rerum cupiditate? Harum magni suscipit enim error dolorem aliquid a
            minus maxime ea dicta atque temporibus qui necessitatibus assumenda,
            doloremque adipisci voluptas. Possimus vel porro ea officiis,
            deleniti, sed tempore iste ullam ad expedita sequi aspernatur
            sapiente facilis labore accusamus laudantium?
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <img src="/image1.png" />
        </div>
      </article>
    </div>
  );
};

export default Article;
