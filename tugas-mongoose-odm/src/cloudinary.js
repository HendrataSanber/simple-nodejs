const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dhoueqiv2", // silahkan pakai menggunakan cloud name kalian
  api_key: "944659878849711", // silahkan pakai menggunakan api key kalian
  api_secret: "JLzEblgGoGFcvKPLu2xz_PScDuY", // silahkan pakai menggunakan api secret kalian
});

module.exports = cloudinary;