"use client";
import React, { createContext, useEffect, useState } from "react";

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
} | null;
type DonationFormDetailsContext = {
	donationFormDetails: DonationFormDetails | null;
	setDonateAs: (value: string) => void;
	setSelectedCurrency: (value: string) => void;
	setDonationOption: (value: string) => void;
	toggleHandleProcessingFee: () => void;
	setDonateAnonymously: () => void;
	setDonationAmount: (amount: string) => void;
};

const initialFormDetails = {
	donateAs: "individual",
	donationOption: "",
	selectedCurrency: "KES",
	handleProcessingFee: false,
	donateAnonymously: false,
	donationAmount: "",
};

export const DonationFormContext = createContext<DonationFormDetailsContext>({
	donationFormDetails: initialFormDetails,
	setDonateAs: () => {},
	setSelectedCurrency: () => {},
	setDonationOption: () => {},
	toggleHandleProcessingFee: () => {},
	setDonateAnonymously: () => {},
	setDonationAmount: () => {},
});

const DonationFormProvider = ({ children }: Props) => {
	const [donationFormDetails, setDonationFormDetails] =
		useState(initialFormDetails);

	useEffect(() => {
		setDonationFormDetails({ ...initialFormDetails });
	}, []);

	const setDonateAs = (option: string) => {
		setDonationFormDetails({ ...donationFormDetails, donateAs: option });
	};

	const setSelectedCurrency = (option: string) => {
		setDonationFormDetails({
			...donationFormDetails,
			selectedCurrency: option,
		});
	};

	const setDonationOption = (option: string) => {
		setDonationFormDetails({
			...donationFormDetails,
			donationOption: option,
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

	const setDonationAmount = (amount: string) => {
		setDonationFormDetails({
			...donationFormDetails,
			donationAmount: amount,
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
			}}
		>
			{children}
		</DonationFormContext.Provider>
	);
};

export default DonationFormProvider;
