import axios from "axios";

const proceedCheckout = async ({ phoneNumber, email, accessToken}: any) => {
  const headersList = {
    Accept: "application/json",
    "Content-Type": "application/json",
     Authorization: `Bearer ${accessToken}`,
  };

  let reqOptions = {
    url: "https://sbkltest.finsprint.io/api/v1/invoices/checkout",
    method: "POST",
    headers: headersList,
    data: JSON.stringify({
      credit_account_number: "1115510052653",
      merchant_name: "Redcross",
      merchant_logo:
        "https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png",
      currency: "KES",
      amount: "100",
      result_url: "https://fulgence.free.beeceptor.com",
      reference_id: "60987RED",
      remarks: "string",
      email: email ,
      phone: phoneNumber,
      gateways: "mpesa",
      notification_channels: "sms",
    }),
  };

  console.log("request body", { reqOptions });

  try {
    const response = await axios.request(reqOptions);

    console.log("response", { response });

    return response;
  } catch (error) {
    throw error;
  }
};

export default proceedCheckout;
