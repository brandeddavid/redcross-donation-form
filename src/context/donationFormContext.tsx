"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { RedcrossCausesContext } from "./redcrossCausesContext";
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

const DonationFormProvider = ({ children }: Props) => {
	const [donationFormDetails, setDonationFormDetails] =
		useState(initialFormDetails);
	const { selectedCause, countries }: any = useContext(RedcrossCausesContext);

	const selectedCauseId = selectedCause?.id || "";

	const resetDonationForm = () => {
		setDonationFormDetails({ ...donationFormDetails, ...initialFormDetails });
	};

	const setDonateAs = (option: string) => {
		setDonationFormDetails({
			...donationFormDetails,
			donateAs: option,
			donateAnonymously: option === "organisation" ? false : true,
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
		const fee = (0.03 * Number(amount)).toFixed(2);

		setDonationFormDetails({
			...donationFormDetails,
			donationAmount: amount,
			processingFee: fee.toString(),
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

	const { donationAmount, handleProcessingFee, processingFee } =
		donationFormDetails;

	useEffect(() => {
		if (handleProcessingFee) {
			return setTotalDonationAmount(
				(Number(donationAmount) + Number(processingFee)).toString()
			);
		}
	}, [donationAmount, handleProcessingFee, processingFee]);

	const { selectedCurrency, donateAs } = donationFormDetails;

	useEffect(() => {
		const fetchRecommended = async () => {
			try {
				const res = await axios.post(
					`http://${process.env.API_HOST}/api/recommended`,
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
			{children}
		</DonationFormContext.Provider>
	);
};

export default DonationFormProvider;
