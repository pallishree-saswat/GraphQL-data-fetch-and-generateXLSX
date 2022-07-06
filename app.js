const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const uploadFile = require("./utils/upload");
const {
  generateXlsx,
  generateXlsxWithMultiple,
} = require("./utils/generateXlsx");
const getPaymentsBills = require("./server/payments");
const getUsersList = require("./server/users");
const getContentList = require("./server/contents");
const loginUser = require("./server/login");
app.use(express.json());

app.get("/", async (req, res) => {
  let result = await loginUser();
  process.env.access_token = result.data.data.login.access_token;
  let result2 = await getPaymentsBills();
  let result3 = await getContentList();

  //generate xlsx file
  await generateXlsxWithMultiple(
    result3?.data?.data?.listContents?.contents,
    result2?.data.data?.listPayments?.billingHistory
  );

  //upload to s3 buckect
  let filePath = await uploadFile();

  res.json({
    success: true,
    message: "Successfully created file and uploaded file",
    file: filePath.Location,
  });
});

app.get("/login", async (req, res) => {
  let result = await loginUser();
  // console.log(result.data.data.login.access_token);
  process.env.access_token = result.data.data.login.access_token;
  res.json({
    success: true,
    message: "Successfully loggedin.",
  });
});

app.get("/payment", async (req, res) => {
  let result = await getPaymentsBills();
  //generate xlsx file
  await generateXlsx(result?.data.data?.listPayments?.billingHistory);

  //upload to s3 buckect
  let filePath = await uploadFile();

  res.json({
    success: true,
    message: "Ok",
    data: result.data,
    file: filePath.Location,
  });
});

app.get("/users", async (req, res) => {
  let result = await getUsersList();
  //generate xlsx file
  await generateXlsx(result?.data?.data?.listUsers?.users);

  //upload to s3 buckect
  let filePath = await uploadFile();

  res.json({
    success: true,
    message: "Ok",
    data: result.data,
    file: filePath.Location,
  });
});

app.get("/content", async (req, res) => {
  let result = await getContentList();
  //generate xlsx file
  await generateXlsx(result?.data?.data?.listContents?.contents);

  //upload to s3 buckect
  let filePath = await uploadFile();

  res.json({
    success: true,
    message: "Ok",
    data: result.data,
    file: filePath.Location,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
