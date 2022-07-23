import Styles from "../styles/Home.module.css"
import { useState } from 'react';
import dynamic from 'next/dist/shared/lib/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.bubble.css';

const modules = {
  toolbar: [
    [{ header: '2' }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
}
const formats = [
  'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video',
]

export default function UploadContent() {
  const [content, setContent] = useState("");

  return (
    <div className={Styles.writeContent}>

      <div className="h-12 w-full bg-white fixed md:hidden z-10"></div>

      <article className="pt-12 px-10 md:pl-14 md:pr-24 lg:px-24 xl:px-36 text-gray-900 w-full">
        <div className="w-full">
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">Title</div>
            <input className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none text-xl" type="text" />
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">Content</div>
            <ReactQuill
              onChange={setContent}
              modules={modules}
              formats={formats}
              theme="bubble"
              className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none"
            />
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">Categories <span className="text-base font-normal">(1–5 comma seperated values)</span></div>
            <input className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none text-xl" type="text" />
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">Featured Image <span className="text-base font-normal">(16:9 ratio preferred)</span></div>
            <input type="file" id="img" name="img" accept="image/*" />
          </div>
        </div>
      </article>
    </div>
  );
}
