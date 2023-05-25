"use client";
import React, {
	createContext,
	useContext,
	useCallback,
	useEffect,
	useState,
} from "react";
import axios from "axios";
import { RedcrossCausesContext } from "./redcrossCausesContext";

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
	phoneNumber: string;
	country: string;
	county: string;
	address: string;
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
	setFirstName: (value: string) => void;
	setLastName: (value: string) => void;
	setCompanyName: (value: string) => void;
	setEmail: (value: string) => void;
	setPhoneNumber: (value: string) => void;
	setCountry: (value: string) => void;
	setCounty: (value: string) => void;
	setAddress: (value: string) => void;
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
	companyName: "",
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: "",
	country: "KE",
	county: "",
	address: "",
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
});

const DonationFormProvider = ({ children }: Props) => {
	const [donationFormDetails, setDonationFormDetails] =
		useState(initialFormDetails);
	const { selectedCause }: any = useContext(RedcrossCausesContext);

	const selectedCauseId = selectedCause?.id || "";

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
	const setPhoneNumber = (value: string) => {
		setDonationFormDetails({
			...donationFormDetails,
			phoneNumber: value,
		});
	};
	const setCountry = (value: string) => {
		setDonationFormDetails({
			...donationFormDetails,
			country: value,
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

	const { donationAmount, handleProcessingFee, processingFee } =
		donationFormDetails;

	// TODO Check why this causes infinite refreshes

	useEffect(() => {
		if (donationAmount) {
			const fee = 0.1 * Number(donationAmount);
			return setProcessingFee(fee.toString());
		}

		return;
	}, [donationAmount, setProcessingFee]);

	useEffect(() => {
		if (handleProcessingFee && donationAmount) {
			return setTotalDonationAmount(
				(Number(donationAmount) + Number(processingFee)).toString()
			);
		}

		return;
	}, [
		handleProcessingFee,
		donationAmount,
		setTotalDonationAmount,
		processingFee,
	]);

	const { selectedCurrency, donateAs } = donationFormDetails;

	useEffect(() => {
		const fetchRecommended = async () => {
			try {
				const res = await axios.post("http://localhost:8800/recommended", {
					currency: selectedCurrency === "KES" ? 1 : 2,
					donorType: donateAs === "individual" ? 1 : 2,
					campaignId: selectedCauseId,
				});
				const { data } = res;

				console.log(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchRecommended();
	}, [selectedCurrency, donateAs, selectedCauseId]);

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
			}}
		>
			{children}
		</DonationFormContext.Provider>
	);
};

export default DonationFormProvider;
