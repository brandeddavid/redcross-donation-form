import React, { useContext, useState } from "react";
import { validateSafaricomNumber } from "@/helpers/functions";
import Image from "next/image";
import { Tabs, Tab, TextField, Modal } from "@mui/material";
import {
  DonationFormContext,
  AuthDetailsContext,
} from "../context/donationFormContext";
import { motion } from "framer-motion";
import getImageBase from "../helpers/getImageBase";
import VisaLogo from "../../public/visa-x.png";
import MpesaLogo from "../../public/M-PESA.png";

type Props = {};

const getPaymentOptions = (currency: string | undefined) => {
  if (currency === "USD") {
    return ["Card"];
  } else {
    return ["Mpesa", "Card"];
  }
};

const DonationFormPayment = ({}: Props) => {
  const [phoneError, setPhoneError] = useState<String>("");

  const baseImageUrl = getImageBase();
  const {
    donationFormDetails,
    setPaymentOption,
    setDonationAmount,
    setPhoneNumber,
  } = useContext(DonationFormContext);

  const { authDetails } = useContext(AuthDetailsContext);
  const paymentOptions = getPaymentOptions(
    donationFormDetails?.selectedCurrency
  );
  const imageLoader = () => {
    return `${baseImageUrl}/card-payment.jpeg`;
  };



  // console.log()

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-[40px]"
      >
        <div className="flex mt-[20px]">
          <Tabs
            value={donationFormDetails?.paymentOption}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {paymentOptions.map((option) => (
              <Tab
                key={option}
                label={option}
                value={option}
                onClick={() => setPaymentOption(option)}
              />
            ))}
          </Tabs>
        </div>
        {donationFormDetails?.paymentOption === "Mpesa" && (
          <div className="flex justify-center min-h-[350px]">
            <div className="flex flex-col justify-center space-y-[40px] w-[300px]">
              <Image
                alt="mpesa-logo"
                width={100}
                height={150}
                src={MpesaLogo}
              />
              <div className="flex">
                <TextField
                  label="Phone"
                  variant="standard"
                  value={donationFormDetails?.phoneCode}
                  sx={{
                    width: "50px",
                    "&:disabled": {
                      color: "black !important",
                    },
                  }}
                />
                <TextField
                  label="Phone Number"
                  placeholder="Enter Mpesa number"
                  variant="standard"
                  value={donationFormDetails?.phoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value.substring(0,9));
                  }}
                />
              </div>

              <TextField
                label="Amount"
                placeholder="Enter amount"
                variant="standard"
                value={`${
                  donationFormDetails?.handleProcessingFee
                    ? donationFormDetails?.totalDonationAmount
                    : donationFormDetails?.donationAmount
                }`}
                onChange={(event) => {
                  (!donationFormDetails?.handleProcessingFee &&
                    setDonationAmount(event.target.value)) ||
                    null;
                }}
              />
            </div>
          </div>
        )}

        {donationFormDetails?.paymentOption === "Card" && (
          <div className="flex justify-center texr-center pb-[50px]">
            <div>
              <Image
                src={VisaLogo}
                width={400}
                height={400}
                alt="visa-mastercard-logo"
              />
            </div>
          </div>
        )}

        {donationFormDetails?.paymentOption === "Airtel Money" && (
          <div>
            <p>To make payment, follow these steps:</p>
            <div className="flex p-[20px]">
              <ol className="text-gray-500 mt-[20px] list-outside list-decimal">
                <li>Go to Airtel on your phone.</li>
                <li>Select &#39;Send Money&#39;.</li>
                <li>Enter &#39;Nick Name&#39;: Redcross.</li>
                <li>Enter your Airtel PIN.</li>
                <li>Enter the reference: leave it blank.</li>
                <li>You will receive an SMS from Airtel.</li>
              </ol>
            </div>
          </div>
        )}

        {donationFormDetails?.paymentOption === "TKash" && (
          <div>
            <p>To make payment, follow these steps:</p>
            <div className="flex p-[20px]">
              <ol className="text-gray-500 mt-[20px] list-outside list-decimal">
                <li>Go to Tkash menu on your phone or Use the T-kash App.</li>
                <li>Select “Paybill”</li>
                <li>Select “T-kash Paybill”.</li>
                <li>Enter “Paybill Number”</li>
                <li>Enter “Campaign”</li>
                <li>
                  Enter{" "}
                  {`${
                    donationFormDetails?.handleProcessingFee
                      ? donationFormDetails?.totalDonationAmount
                      : donationFormDetails?.donationAmount
                  }`}
                </li>
                <li>Confirm transaction.</li>
                <li>Enter T-kash PIN.</li>
                <li>You will receive a confirmation SMS from T-kash.</li>
              </ol>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default DonationFormPayment;
