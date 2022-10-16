import Styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
const Article = ({ post }) => {

  useEffect(() => {}, []);
  return (
    <div className={Styles.mainContent}>
      {!post.name && (
        <section className="fixed inset-0 bg-white/40 z-20 grid place-items-center text-4xl font-bold text-slate-800 backdrop-filter backdrop-blur-md">
          Loading...
        </section>
      )}
      <div className="h-12 w-full bg-white fixed md:hidden z-10"></div>
      <div className="pt-12 md:pt-0 px-10 md:pl-14 md:pr-24 lg:px-24 xl:px-36 text-gray-900">
        <div className="">
          {" "}
          <h1>{post?.title}</h1>{" "}
        </div>
      </div>
      <main className="sm:px-10 md:pl-14 md:pr-24 lg:px-24 xl:px-36">
        <div className="py-4 flex flex-wrap justify-between border-y-2">
          <div className="flex cursor-pointer">
            <div className="w-14 h-14 bg-black rounded-full"></div>
            <div className="flex flex-col ml-4 justify-center">
              <div className="font-bold text-lg flex flex-wrap">
                <span>{post?.name}</span>
                <span className="font-normal text-sm text-gray-600 contents">
                  &nbsp;({post?.followers} Followers)&nbsp;
                </span>
                <span className="ml-2 text-base text-blue-600 contents">
                  Follow
                </span>
              </div>
              <div className="text-sm text-gray-600 contents">
                {format(new Date(post.time))}
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-center mr-8">
            <div className="cursor-pointer">Save</div>
            <div className="cursor-pointer">Share</div>
          </div>
        </div>
      </main>

      <article className="px-10 md:pl-14 md:pr-24 lg:px-24 xl:px-36 text-gray-900">
        <div className="py-8" dangerouslySetInnerHTML={{ __html: post?.content }}>
          {/* <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis voluptas fugit saepe. Iusto, dolorem?
          </h2> */}

       
        </div>
      </article>
    </div>
  );
};

export default Article;
