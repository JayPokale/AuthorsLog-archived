// Uploading image to server remaining
// Uploading content to firebase ramaining

import Styles from "../styles/Home.module.css";
import { useState } from "react";
import FormData from "form-data";
import dynamic from "next/dist/shared/lib/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

const displayPhotoClick = () => {
  let displayPhoto = document.getElementById("displayPhoto");
  displayPhoto.click();
};

const modules = {
  toolbar: {
    container: [
      [{ header: "2" }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    },
  },
  clipboard: {
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
];

async function imageHandler() {
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    var file = input.files[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "AuthorsLog");
    var range = this.quill.getSelection();
    const res = await uploadFiles(formData).then((url) => {
      if (url) {
        this.quill.insertEmbed(range.index, "image", url);
      } else {
        alert("An error occured");
      }
    });
  };
}

async function uploadFiles(uploadFileObj) {
  var apiUrl = `https://api.cloudinary.com/v1_1/AuthorsLog/image/upload`;

  if (uploadFileObj != "") {
    const data = await fetch(apiUrl, {
      method: "POST",
      body: uploadFileObj,
    }).then((r) => r.json());
    return data.secure_url;
  } else {
    alert("An error occured");
  }
}

export default function UploadContent() {
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("/blankFeatured.jpg");
  const [uploadProfile, setUploadProfile] = useState("");

  const uploadImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFeaturedImage(reader.result);
      }
    };
    setUploadProfile(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className={Styles.writeContent}>
      <div className="h-12 w-full bg-white fixed md:hidden z-10"></div>

      <article className="pt-12 px-10 md:pl-14 md:pr-24 lg:px-24 xl:px-36 text-gray-900 w-full">
        <div className="w-full">
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">
              Title
            </div>
            <input
              className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none text-xl"
              type="text"
            />
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">
              Content
            </div>
            <ReactQuill
              onChange={setContent}
              modules={modules}
              formats={formats}
              theme="bubble"
              className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none"
            />
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">
              Categories
              <span className="text-base font-normal">
                (Comma seperated values)
              </span>
            </div>
            <input
              className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none text-xl"
              type="text"
              placeholder="1 to 5 categories preferred"
            />
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">
              Featured Image
              <span className="text-base font-normal">
                (16:9 ratio preferred)
              </span>
            </div>
            <div className="relative h-36 w-64 mx-auto overflow-hidden">
                <img
                  id="DP"
                  className="cursor-pointer"
                  src={featuredImage}
                  width={256}
                  height={144}
                  layout="responsive"
                  onClick={displayPhotoClick}
                  style={{margin: '0 auto'}}
                />
                <input
                  className="hidden"
                  type="file"
                  id="displayPhoto"
                  name="displayPhoto"
                  accept="image/*"
                  onChange={uploadImage}
                />
              </div>
          </div>
          <div
              className="w-36 flex justify-center mx-auto px-6 py-3 rounded-full bg-green-600 text-gray-50 font-semibold tracking-widest drop-shadow-md cursor-pointer"
              style={{ boxShadow: "0 4px 10px 0 rgba(27, 148, 71, 0.3)" }}
              type="submit"
              // onClick={}
            >
              Submit
            </div>
        </div>
      </article>
    </div>
  );
}
