"use client";
import React, { createContext, useCallback, useEffect, useState } from "react";

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
} | null;
type DonationFormDetailsContext = {
	donationFormDetails: DonationFormDetails | null;
	setDonateAs: (value: string) => void;
	setSelectedCurrency: (value: string) => void;
	setDonationOption: (value: string) => void;
	toggleHandleProcessingFee: () => void;
	setDonateAnonymously: () => void;
	setDonationAmount: (amount: string) => void;
	setPaymentOption: (value: string) => void;
};

const initialFormDetails = {
	donateAs: "individual",
	donationOption: "",
	selectedCurrency: "KES",
	handleProcessingFee: false,
	donateAnonymously: false,
	donationAmount: "",
	processingFee: "",
	totalDonationAmount: "",
	paymentOption: "Mpesa",
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
});

const DonationFormProvider = ({ children }: Props) => {
	const [donationFormDetails, setDonationFormDetails] =
		useState(initialFormDetails);

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

	useEffect(() => {
		setDonationFormDetails({ ...initialFormDetails });
	}, []);

	const setProcessingFee = useCallback(
		(amount: string) => {
			setDonationFormDetails({
				...donationFormDetails,
				processingFee: amount,
			});
		},
		[donationFormDetails]
	);

	const setTotalDonationAmount = useCallback(
		(amount: string) => {
			setDonationFormDetails({
				...donationFormDetails,
				totalDonationAmount: amount,
			});
		},
		[donationFormDetails]
	);

	const setPaymentOption = (option: string) => {
		setDonationFormDetails({
			...donationFormDetails,
			paymentOption: option,
		});
	};

	const { donationAmount, handleProcessingFee, processingFee } =
		donationFormDetails;

	useEffect(() => {
		if (donationAmount) {
			const fee = 0.1 * Number(donationAmount);
			setProcessingFee(fee.toString());
		}
	}, [donationAmount, setProcessingFee]);

	useEffect(() => {
		if (handleProcessingFee && donationAmount) {
			setTotalDonationAmount(
				(Number(donationAmount) + Number(processingFee)).toString()
			);
		}
	}, [
		handleProcessingFee,
		donationAmount,
		setTotalDonationAmount,
		processingFee,
	]);

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
			}}
		>
			{children}
		</DonationFormContext.Provider>
	);
};

export default DonationFormProvider;
