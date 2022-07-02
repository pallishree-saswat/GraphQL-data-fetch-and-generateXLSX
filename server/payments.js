const axios = require("axios");
const getPaymentsBills = async () => {
  let result = await axios({
    url: `${process.env.GRAPHQL_URL}`,
    method: "post",
    data: {
      query: `
          query{
            listPayments(limit:100, startDate:"2022-05-08", endDate:"2022-05-09"){
              billingHistory{
                userId
                user{
                  id
                  email
                  isActive
                }
                id
                billingCyclePeriodType
                billingCyclePeriodMultiplier
                chargedAmountCurrencyCode
                completedAt
                description
                type
                servicePeriodFrom
                servicePeriodTo
                purchaseType
                videoQuality
                monetizationModel
                gatewayChargeId
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

module.exports = getPaymentsBills;
