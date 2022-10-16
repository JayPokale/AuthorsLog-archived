import Styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import FormData from "form-data";
import dynamic from "next/dist/shared/lib/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";
import { uploadFile } from "./SaveFileToCloudinary";
import { FaTimes } from "react-icons/fa";

export default function UploadContent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [tagsArr, setTagsArr] = useState([]);
  const [postError, setPostError] = useState({});
  const [featuredImage, setFeaturedImage] = useState(null);
  const [fimage, setFimage] = useState("/blankFeatured.jpg");
  const [reqStatus, setRequestatus] = useState(null);

  useEffect(() => {
    setTagsArr(tags.split(","));
    const reader = new FileReader();
    if (featuredImage) {
      reader.readAsDataURL(featuredImage);
      reader.onload = () => {
        setFimage(reader.result);
      };
    }
  }, [tags, featuredImage]);
  // quil functions

  const modules = {
    toolbar: {
      container: [
        [{ header: "2" }],
        ["bold", "italic", "underline", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
        ["code-block"],
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
    "code-block",
    "link",
    "image",
  ];

  async function imageHandler(a) {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      var range = this.quill.getSelection();
      var file = input.files[0];
      var formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "AuthorsLog");

      uploadFiles(formData).then((url) => {
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

  // function for saving post
  const buttonRef = useRef();
  const savePost = async () => {
    if(!buttonRef.current.disabled){
      if (!title) {
        setPostError({ ...postError, title: true });
        return;
      }

      if (content.length < 12) {
        setPostError({ ...postError, content: true });
        return;
      }
      if (!featuredImage) {
        setPostError({ ...postError, featured_image: true });
        return;
      }
      buttonRef.current.disabled = true;
      setRequestatus("Uploading image...");
      const url = await uploadFile(featuredImage, "AuthorsLog");
      setRequestatus("Please wait, proccessing...");
      let newTags = tagsArr
              .filter((item) => item.trim().length > 0)
              .slice(0, 5);
      for (let i = 0; i < 5; i++) {
        newTags[i] = newTags[i] || null
      }
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/create`,
        {
          method: "post",
          credentials: "include",
          headers: {
            Accept: "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: content,
            featured_image: url,
            tagsArr: newTags
          }),
        }
      );
      const response = await req.json();
      console.log(response);
      setRequestatus("Done !");
      buttonRef.current.disabled = false;
    }
  };
  return (
    <div className={Styles.writeContent}>
      {reqStatus && (
        <section className="absolute bottom-8 flex items-center space-x-6 right-8 bg-green-500 text-white shadow-lg  px-5  rounded-md">
          <p className="">{reqStatus}</p>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setRequestatus(false)}
          />
        </section>
      )}
      <div className="h-12 w-full bg-white fixed md:hidden z-10"></div>

      <article className="pt-12 px-10 md:pl-14 md:pr-24 lg:px-24 text-gray-900 w-full">
        <div className="w-full">
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">
              Title
            </div>
            <input
              onInput={(e) => {
                setTitle(e.target.value.trim());
                setPostError({ ...postError, title: false });
              }}
              className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none text-xl"
              type="text"
            />
            {postError.title && (
              <span className="py-1 text-rose-500 text-sm px-1">
                {" "}
                Empty title not allowed .
              </span>
            )}
          </div>
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">
              Content
            </div>
            <ReactQuill
              value={content}
              onChange={(value) => {
                setContent(value);
                setPostError({ ...postError, content: false });
              }}
              modules={modules}
              formats={formats}
              theme="bubble"
              className="bg-gray-100 border-2 border-gray-100 rounded-lg w-full py-2 text-gray-700 focus:outline-none"
            />
          </div>
          {postError.content && (
            <span className="py-1 text-rose-500 text-sm px-1">
              {" "}
              Content is too small.
            </span>
          )}
          <div className="w-full mb-8">
            <div className="text-xl font-bold text-gray-600 pl-6 pb-1">
              Categories
              <span className="text-base font-normal">
                (Comma seperated values)
              </span>
              <br />
            </div>
            {/*  tags section */}
            <section className="my-2">
              {tags &&
                tagsArr
                  .filter((item) => item?.trim().length > 0)
                  .slice(0, 5)
                  .map((item) => (
                    <span className="mx-1 my-1 bg-blue-100 text-blue-500 border border-blue-500 rounded-full px-2 py-1 text-xs ">
                      {item.trim()}
                    </span>
                  ))}
            </section>
            <input
              onInput={(e) => setTags(e.target.value)}
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
            <div className="flex relative h-36 w-64 mx-auto overflow-hidden items-center">
              <img
                id="DP"
                className="cursor-pointer"
                src={fimage}
                width={256}
                height={144}
                layout="responsive"
                onClick={() => document.getElementById("displayPhoto").click()}
                style={{ margin: "0 auto" }}
              />
              <input
                className="hidden"
                type="file"
                id="displayPhoto"
                name="displayPhoto"
                accept="image/*"
                onChange={(e) => {
                  setFeaturedImage(e.target.files[0]);
                  setPostError({ ...postError, featured_image: false });
                }}
              />
            </div>
            {postError.featured_image && (
              <span className="py-1 text-rose-500 text-sm px-1">
                {" "}
                Featured image is required.
              </span>
            )}
          </div>
          <div
            className="w-36 flex justify-center mx-auto px-6 py-3 rounded-full bg-green-600 text-gray-50 font-semibold tracking-widest drop-shadow-md cursor-pointer"
            style={{ boxShadow: "0 4px 10px 0 rgba(27, 148, 71, 0.3)" }}
            type="submit"
            ref={buttonRef}
            onClick={savePost}
          >
            Submit
          </div>
        </div>
      </article>
    </div>
  );
}
