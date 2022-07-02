const axios = require("axios");
const loginUser = async () => {
  let result = await axios({
    url: `${process.env.GRAPHQL_URL}`,
    method: "post",
    data: {
      query: `
      mutation login($email:String!, $password:String!){
        login(email: $email , password: $password) {
          ... on LoginSuccess {
            access_token
            token_type
            expires_in
          }
          ... on LoginError {
            error
            error_description
          }
        }
      }
                      `,
      variables: {
        email: `${process.env.EMAIL}`,
        password: `${process.env.PASSWORD}`,
      },
    },
  });

  return result;
};

module.exports = loginUser;
