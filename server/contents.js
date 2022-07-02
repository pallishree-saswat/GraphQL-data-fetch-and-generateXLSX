const axios = require("axios");
const getContentList = async () => {
  let result = await axios({
    url:`${process.env.GRAPHQL_URL}`,
    method: "post",
    data: {
      query: `
          query {
            listContents (first:100, type: video, status: open){
              pageInfo{
                hasNextPage
                startCursor
                endCursor
              }
              contentCount
              contents{
                id
                title
                type
                permalink
                status
                publishDate
                tags{
                  title
                }
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


module.exports = getContentList