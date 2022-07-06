const XLSX = require("xlsx");
const generateXlsx = async (data) => {
  const workSheet = XLSX.utils.json_to_sheet(data);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
  XLSX.writeFile(workBook, "./temp/sample.xlsx");
};

const generateXlsxWithMultiple = async (data, data2) => {
  const workSheet = XLSX.utils.json_to_sheet(data);
  const workSheet2 = XLSX.utils.json_to_sheet(data2);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, "Content");
  XLSX.utils.book_append_sheet(workBook, workSheet2, "Payment");
  XLSX.writeFile(workBook, "./temp/sample.xlsx");
};

module.exports = { generateXlsx, generateXlsxWithMultiple };
