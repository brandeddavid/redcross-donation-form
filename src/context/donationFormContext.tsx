"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { RedcrossCausesContext } from "./redcrossCausesContext";
import getAuthToken from "@/api/getAuthToken";
import proceedCheckout from "@/api/proceedCheckout";
import "dotenv/config";

type Props = {
  children: JSX.Element;
};
type DonationFormDetails = {
  donateAs: string;
  donationOption: string;
  selectedCurrency: string;
  handleProcessingFee: boolean;
  donateAnonymously: boolean;
  donationAmount: number | string;
  processingFee: string;
  totalDonationAmount: string;
  paymentOption: string;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | number;
  country: string;
  county: string;
  address: string;
  recommended: number[] | string[];
  isSubmitting: boolean;
  submissionComplete: boolean;
  emailError: string;
  phoneCode: string;
  pledgeFrequency: string;
} | null;

type DonationFormDetailsContext = {
  donationFormDetails: DonationFormDetails | null;
  setDonateAs: (value: string) => void;
  setSelectedCurrency: (value: string) => void;
  setDonationOption: (value: string) => void;
  toggleHandleProcessingFee: () => void;
  setDonateAnonymously: () => void;
  setDonationAmount: (amount: string | number) => void;
  setPaymentOption: (value: string) => void;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setCompanyName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setCountry: (value: string) => void;
  setCounty: (value: string) => void;
  setAddress: (value: string) => void;
  setSubmissionComplete: (value: boolean) => void;
  setIsSubmitting: (value: boolean) => void;
  setCardToken: (value: any) => void;
  resetDonationForm: () => void;
  setEmailError: (value: string) => void;
  setPledgeFrequency: (value: string) => void;
};

const initialFormDetails = {
  donateAs: "private",
  donationOption: "donate-now",
  selectedCurrency: "KES",
  handleProcessingFee: false,
  donateAnonymously: false,
  donationAmount: "",
  processingFee: "",
  totalDonationAmount: "",
  paymentOption: "Mpesa",
  companyName: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "Kenya",
  county: "",
  address: "",
  recommended: [],
  isSubmitting: false,
  submissionComplete: false,
  emailError: "",
  phoneCode: "+254",
  pledgeFrequency: "one-time",
};

export const DonationFormContext = createContext<DonationFormDetailsContext>({
  donationFormDetails: initialFormDetails,
  setDonateAs: () => {},
  setSelectedCurrency: () => {},
  setDonationOption: () => {},
  toggleHandleProcessingFee: () => {},
  setDonateAnonymously: () => {},
  setDonationAmount: () => {},
  setPaymentOption: () => {},
  setFirstName: () => {},
  setLastName: () => {},
  setCompanyName: () => {},
  setEmail: () => {},
  setPhoneNumber: () => {},
  setCountry: () => {},
  setCounty: () => {},
  setAddress: () => {},
  setSubmissionComplete: () => {},
  setIsSubmitting: () => {},
  setCardToken: () => {},
  resetDonationForm: () => {},
  setEmailError: () => {},
  setPledgeFrequency: () => {},
});

// auth details and context
type AuthDetails = {
  accessToken: string;
  expiryTime: number;
  handleCheckout: () => Promise<void>;
} | null;

type AuthDetailsTypeContext = {
  authDetails: AuthDetails | null;
  setAccessToken: (value: string) => void;
  setExpiryTime: (value: number) => void;
  handleCheckout: () => Promise<void>;
};

const initialAuthDetails: AuthDetails = {
  accessToken: "",
  expiryTime: 0,
  handleCheckout: async () => {},
};

export const AuthDetailsContext = createContext<AuthDetailsTypeContext>({
  authDetails: initialAuthDetails,
  setAccessToken: () => {},
  setExpiryTime: () => {},
  handleCheckout: async () => {},
});

// CREDIT CARD result below

const DonationFormProvider = ({ children }: Props) => {
  const [donationFormDetails, setDonationFormDetails] =
    useState(initialFormDetails);
  const { selectedCause, countries }: any = useContext(RedcrossCausesContext);

  const selectedCauseId = selectedCause?.id || "";

  const resetDonationForm = () => {
    setDonationFormDetails({ ...donationFormDetails, ...initialFormDetails });
  };

  const [authDetails, setAuthDetails] = useState(initialAuthDetails);

  const setDonateAs = (option: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      donateAs: option,
      donateAnonymously: option === "organisation" && false,
    });
  };

  const setPledgeFrequency = (value: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      pledgeFrequency: value,
    });
  };

  const setEmailError = (option: string) => {
    setDonationFormDetails({ ...donationFormDetails, emailError: option });
  };

  const setSelectedCurrency = (option: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      selectedCurrency: option,
      donationAmount: "",
      paymentOption:
        option === "USD" ? "Card" : donationFormDetails.paymentOption,
    });
  };

  const setDonationOption = (option: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      donationOption: option,
      paymentOption: option === "donate-now" ? "Mpesa" : "",
      donateAnonymously: option === "make-pledge" && false,
    });
  };

  const toggleHandleProcessingFee = () => {
    setDonationFormDetails({
      ...donationFormDetails,
      handleProcessingFee: !donationFormDetails.handleProcessingFee,
    });
  };

  const setDonateAnonymously = () => {
    setDonationFormDetails({
      ...donationFormDetails,
      donateAnonymously: !donationFormDetails.donateAnonymously,
    });
  };

  const setDonationAmount = (amount: any) => {
    const fee = Math.ceil(0.035 * Number(amount));
    const totalDonationAmount = (Number(amount) + fee).toString();

    setDonationFormDetails({
      ...donationFormDetails,
      donationAmount: amount,
      processingFee: fee.toString(),
      totalDonationAmount,
    });
  };

  const setRecommended = (value: any) => {
    setDonationFormDetails({
      ...donationFormDetails,
      recommended: value,
    });
  };

  const setSubmissionComplete = (value: boolean) => {
    setDonationFormDetails({
      ...donationFormDetails,
      submissionComplete: value,
      isSubmitting: false,
    });
  };

  const setTotalDonationAmount = (amount: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      totalDonationAmount: amount,
    });
  };

  const setPaymentOption = (option: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      paymentOption: option,
    });
  };

  const setCompanyName = (value: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      companyName: value,
    });
  };

  const setFirstName = (value: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      firstName: value,
    });
  };

  const setLastName = (value: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      lastName: value,
    });
  };

  const setEmail = (value: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      email: value,
    });
  };
  const setPhoneNumber = (value: any) => {
    setDonationFormDetails({
      ...donationFormDetails,
      phoneNumber: value,
    });
  };
  const setCountry = (value: string) => {
    const phoneCode = countries.find(
      (country: any) => country.label === value
    ).phoneCode;

    setDonationFormDetails({
      ...donationFormDetails,
      country: value,
      phoneCode: `+${phoneCode}`,
    });
  };
  const setCounty = (value: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      county: value,
    });
  };
  const setAddress = (value: string) => {
    setDonationFormDetails({
      ...donationFormDetails,
      address: value,
    });
  };
  const setCardToken = (value: any) => {
    setDonationFormDetails({
      ...donationFormDetails,
      ...value,
    });
  };

  const setAccessToken = (accessToken: string) => {
    setAuthDetails((prevAuthDetails) => ({
      ...prevAuthDetails,
      accessToken: accessToken,
    }));
  };

  const setExpiryTime = (expiryTime: number) => {
    setAuthDetails((prevAuthDetails) => ({
      ...prevAuthDetails,
      expiryTime: expiryTime,
    }));
  };

  const { donationAmount, handleProcessingFee, processingFee } =
    donationFormDetails;

  useEffect(() => {
    if (handleProcessingFee) {
      return setTotalDonationAmount(
        (Number(donationAmount) + Math.ceil(Number(processingFee))).toString()
      );
    }
  }, [donationAmount, handleProcessingFee, processingFee]);

  const { selectedCurrency, donateAs } = donationFormDetails;

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const res = await axios.post(
          `https://${process.env.API_HOST}/api/recommended`,
          {
            currency: selectedCurrency === "KES" ? 1 : 2,
            donorType: donateAs === "private" ? 1 : 2,
            campaignId: selectedCauseId,
          }
        );
        const { data } = res;
        let recommended: any = [];
        data.length &&
          data.forEach(({ Amount: amount }: never) => {
            recommended.push(amount);
          });

        if (recommended.length > 0) {
          return setRecommended(recommended);
        }

        return setRecommended([]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecommended();
  }, [selectedCurrency, donateAs, selectedCauseId]);

  // get the auth token
  const fetchToken = async () => {
    try {
      const response = await getAuthToken();

      if (response.status === 200 && response.data.access_token) {
        const accessToken = response.data.access_token;
        const expiryTime = response.data.expires_in;

        setAuthDetails((prevAuthDetails) => ({
          ...prevAuthDetails,
          accessToken: accessToken,
          expiryTime: expiryTime,
        }));

        return accessToken;
      } else {
        throw new Error("Failed to fetch access token");
      }
    } catch (error) {
      console.error("Error fetching access token:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  //   proceed checkout fn
  const handleCheckout = async () => {
    try {
      if (!authDetails?.accessToken) {
        throw new Error("Access token is missing");
      }

      let response = await proceedCheckout({
        phoneNumber: donationFormDetails?.phoneNumber || "0706723113",
        email: donationFormDetails?.email || "user@email.com",
        amount: donationFormDetails?.donationAmount,
        accessToken: authDetails?.accessToken,
      });

      //   handle unauthorized 401
      if (response.status === 401) {
        // Fetch a new token
        const newAccessToken = await fetchToken();
        if (!newAccessToken) {
          throw new Error("Failed to refresh access token");
        }

        // Retry the checkout with the new access token
        response = await proceedCheckout({
          phoneNumber: donationFormDetails?.phoneNumber || "0706723113",
          email: donationFormDetails?.email || "user@email.com",
          amount: donationFormDetails?.donationAmount,
          accessToken: newAccessToken,
        });
      }
      //   console.log("Checkout Response:", response);

      if (response.status === 200 && response.data.redirect_url !== "") {
        console.log("Redirecting to new URL");
        window.open(response.data.redirect_url);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      throw new Error("Error during checkout, please try again");
    }
  };

  const setIsSubmitting = (value: boolean) => {
    setDonationFormDetails({
      ...donationFormDetails,
      isSubmitting: value,
    });
  };

  return (
    <DonationFormContext.Provider
      value={{
        donationFormDetails,
        setDonateAs,
        setSelectedCurrency,
        setDonationOption,
        toggleHandleProcessingFee,
        setDonateAnonymously,
        setDonationAmount,
        setPaymentOption,
        setFirstName,
        setLastName,
        setCompanyName,
        setAddress,
        setCountry,
        setCounty,
        setEmail,
        setPhoneNumber,
        setSubmissionComplete,
        setIsSubmitting,
        setCardToken,
        resetDonationForm,
        setEmailError,
        setPledgeFrequency,
      }}
    >
      <AuthDetailsContext.Provider
        value={{
          authDetails,
          setAccessToken,
          setExpiryTime,
          handleCheckout,
        }}
      >
        {children}
      </AuthDetailsContext.Provider>
    </DonationFormContext.Provider>
  );
};

export default DonationFormProvider;
