import { useEffect, useRef } from "react";

const ContentList = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log('width', ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);
  return (
    <>
      <div id="contentList" className="bg-rose-300 h-96"></div>
    </>
  );
};

export default ContentList;
