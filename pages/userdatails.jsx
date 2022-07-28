import { useState } from "react";
import { app } from "../config/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import FormData from "form-data";
import { useRouter } from "next/router";

const auth = getAuth();

const displayPhotoClick = () => {
  let displayPhoto = document.getElementById("displayPhoto");
  displayPhoto.click();
};

const userDetails = () => {
  const [name, setName] = useState("");
  const [dp, setDp] = useState("/userNone.webp");
  const [uploadProfile, setUploadProfile] = useState("");
  const router = useRouter();

  const uploadDP = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDp(reader.result);
      }
    };
    setUploadProfile(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  };

  const dpUpload = async () => {
    var file = uploadProfile;
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ProfilePhotos");
    const res = await uploadFiles(formData).then((url) => {
      if (url) {
        uploadFunction(url)
      } else {
        alert("Photo not uploaded");
      }
    });
  };

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

  const uploadFunction = async (PhotoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: PhotoURL,
    })
      .then(() => {
        alert("Profile Updated!");
        router.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <main className="bg-gray-200 h-screen flex items-center p-4">
      <div className="flex flex-col items-center bg-white w-screen max-w-lg rounded-md overflow-hidden mx-auto shadow-2xl select-none">
        <div className="flex justify-around w-full text-xl font-bold text-gray-500 tracking-wider cursor-default">
          <div
            className="w-1/2 flex justify-center py-4 z-10"
            style={{ border: "2px solid transparent" }}
          >
            User Details
          </div>
        </div>
        <div className=" w-full bg-white flex flex-col items-center z-20">
          <form className="w-full flex flex-col items-center px-10 space-y-4 mt-8 mb-4">
            <div className="w-full flex justify-center">
              <div className="relative h-52 w-52 rounded-full overflow-hidden">
                <img
                  id="DP"
                  className="cursor-pointer"
                  src={dp}
                  width={208}
                  height={208}
                  layout="responsive"
                  onClick={displayPhotoClick}
                />
                <input
                  className="hidden"
                  type="file"
                  id="displayPhoto"
                  name="displayPhoto"
                  accept="image/*"
                  onChange={uploadDP}
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <input
                className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-full shadow-inner py-3"
                type="text"
                name="name"
                placeholder="Display Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              className="w-full flex justify-center px-6 py-3 rounded-sm bg-green-600 text-gray-50 font-semibold tracking-widest drop-shadow-md cursor-pointer"
              style={{ boxShadow: "0 4px 10px 0 rgba(27, 148, 71, 0.3)" }}
              type="submit"
              onClick={dpUpload}
            >
              Submit
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default userDetails;
