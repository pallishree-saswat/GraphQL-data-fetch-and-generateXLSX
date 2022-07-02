const getUsersList = async () => {
  const axios = require("axios");
  let result = await axios({
    url: `${process.env.GRAPHQL_URL}`,
    method: "post",
    data: {
      query: `
          query {
            listUsers(first:100,dateRanges: {dateField:registeredOn, after:"2022-05-08"}){
              usersCount
              pageInfo{
                hasNextPage
                startCursor
                endCursor
              }
              users{
                id
                email
                isActive
                site
                acquisitionChannel
                accountDetails{
                  name
                  emailConsent
                  phoneNumber
                  isSubscribed
                  isActive
                  registeredOn
                }
                updateDate
              }
            }
          }
                `,
    },
    headers: {
      authorization: `Bearer ${process.env.access_token}`,
      "x-api-key": `${process.env.API_KEY}`,
    },
  });

  return result;
};

module.exports = getUsersList;
