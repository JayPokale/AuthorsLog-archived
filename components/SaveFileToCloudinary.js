// On click event to start upload
async function uploadFiles(uploadFileObj) {
  var apiUrl = `https://api.cloudinary.com/v1_1/AuthorsLog/image/upload`;

  if (uploadFileObj != "") {
    const data = await fetch(apiUrl, {
      method: "POST",
      body: uploadFileObj,
    })
      .then((r) => r.json())
      .catch((err) => console.log({ err }));
    return data?.secure_url;
  } else {
    alert("An error occured");
  }
}

async function uploadFile(file, folder) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", folder);
  const res = await uploadFiles(formData);
  return res;
  // Upload image to cloudinary
}

export {uploadFile}
