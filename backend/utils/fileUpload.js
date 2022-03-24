const cloudinary = require("cloudinary");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.upload = catchAsyncErrors(async (file, folderName) => {
  let images = [];
  for (let i = 0; i < images.length; i++) {
    images.push(file[i].tempFilePath);
  }

  const imagesLink = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: folderName,
      quality: 50,
    });
    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  return imagesLink;
});
