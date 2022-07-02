const XLSX = require("xlsx");
const generateXlsx = async (data) => {
  const workSheet = XLSX.utils.json_to_sheet(data);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
  XLSX.writeFile(workBook, "./temp/sample.xlsx");
};
module.exports = generateXlsx;
