// let result = await axios({
// url: "URL",
// method: "post",
// data: {
// query: `// query{ // listPayments(limit:1000, startDate:"2022-05-08", endDate:"2022-05-09"){ // billingHistory{ // userId // user{ // id // email // isActive // } // id // billingCyclePeriodType // billingCyclePeriodMultiplier // chargedAmountCurrencyCode // completedAt // description // type // servicePeriodFrom // servicePeriodTo // purchaseType // videoQuality // monetizationModel // gatewayChargeId // } // } // } //`,
// },
// headers: {
// authorization: `Bearer ${process.env.TOKEN}`,
// },
// });

// console.log(result?.data.data?.listPayments?.billingHistory);

//generate XLSX
// const workSheet = XLSX.utils.json_to_sheet(
// result?.data.data?.listPayments?.billingHistory
// );
// const workBook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
// XLSX.writeFile(workBook, "./temp/sample.xlsx");

//Mutation
// const body = {
// query: `// mutation ($boardId: Int!, $groupId: String!, $itemName: String!, $columnValues: JSON!) { // create_item ( // board_id: $boardId, // group_id: $groupId, // item_name: $itemName, // column_values: $columnValues // ) { // id // } // } // `,
// variables: {
// boardId: 1234567,
// groupId: "topics",
// itemName: "New item name",
// columnValues: JSON.stringify({ status: { index: 1 } })
// }
// }
// axios.post(`URL`, body, {
// headers: {
// Authorization: 'API_TOKEN'
// }
// })
// .catch(err => {
// console.error(err.data)
// })
// .then(res => {
// console.log(res.data)
// })
