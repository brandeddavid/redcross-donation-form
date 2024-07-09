import axios from "axios";

const getAuthToken = async () => {
  const headersList = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://sbkltest.finsprint.io/api/v1/token",
    method: "POST",
    headers: headersList,
    data: JSON.stringify({
      email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    }),
  };

  console.log("request body", {reqOptions})


  try {
    const response = await axios.request(reqOptions);

    console.log("response", {response})

    return response;
  } catch (error) {
    throw error;
  }
};

export default getAuthToken;
