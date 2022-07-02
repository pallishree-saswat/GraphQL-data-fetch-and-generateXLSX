const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

const awsConfig = {
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region,
};

const s3 = new AWS.S3(awsConfig);
const bucketName = process.env.bucketName;
let random = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);

const uploadFile = async () => {
  return new Promise((resolve, reject) => {
    const fileData = fs.createReadStream("./temp/sample.xlsx");

    const params = {
      Bucket: bucketName,
      Key: `${random}.xlsx`,
      Body: fileData,
      ContentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      // console.log("File uploaded successfully", data);
      return resolve(data);
    });
  });
};

module.exports = uploadFile;
