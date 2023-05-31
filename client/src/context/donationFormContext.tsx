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
import { useRouter } from "next/navigation";

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
	recommended: number[] | string[];
	isSubmitting: boolean;
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
	onSubmit: () => void;
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
	country: "Kenya",
	county: "",
	address: "",
	recommended: [],
	isSubmitting: false,
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
	onSubmit: () => {},
});

const DonationFormProvider = ({ children }: Props) => {
	const { push } = useRouter();

	const [donationFormDetails, setDonationFormDetails] =
		useState(initialFormDetails);
	const { selectedCause }: any = useContext(RedcrossCausesContext);

	const selectedCauseId = selectedCause?.id || "";

	const setDonateAs = (option: string) => {
		setDonationFormDetails({ ...donationFormDetails, donateAs: option });
	};

	const setSelectedCurrency = (option: string) => {
		console.log("Hello", option);
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

	const setDonationAmount = (amount: any) => {
		const fee = 0.1 * Number(amount);

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

	useEffect(() => {
		setDonationFormDetails({ ...initialFormDetails });
	}, []);

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

	useEffect(() => {
		if (handleProcessingFee && donationAmount) {
			return setTotalDonationAmount(
				(Number(donationAmount) + Number(processingFee)).toString()
			);
		}

		return;
	}, [donationAmount, processingFee]);

	const { selectedCurrency, donateAs } = donationFormDetails;

	useEffect(() => {
		const fetchRecommended = async () => {
			try {
				const res = await axios.post("http://localhost:8800/api/recommended", {
					currency: selectedCurrency === "KES" ? 1 : 2,
					donorType: donateAs === "individual" ? 1 : 2,
					campaignId: selectedCauseId,
				});
				const { data } = res;
				let recommended: any = [];
				data &&
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

	const onSubmit = async () => {
		setIsSubmitting(true);

		let headersList = {
			Accept: "*/*",
			"User-Agent": "Thunder Client (https://www.thunderclient.com)",
			"Content-Type": "application/json",
			Authorization: "Bearer 2|xCkinFbNY92kH2dwZ2fHW6b0W2fVFfxouIatC5xG",
		};

		let bodyContent = JSON.stringify({
			reference_id: "56456",
			amount: donationAmount,
			currency: "KES",
			callback_url: "http://localhost:3000",
			redirect_url: "http://localhost:3000",
			express_mpesa:
				donationFormDetails.paymentOption === "Mpesa" ? true : false,
			msisdn: donationFormDetails.phoneNumber,
			first_name: donationFormDetails.firstName,
			last_name: donationFormDetails.lastName,
			address: donationFormDetails.address,
			state: donationFormDetails.county,
			country: donationFormDetails.country,
		});

		let reqOptions = {
			url: "http://sandbox.finsprint.io/api/v1/request-checkout",
			method: "POST",
			headers: headersList,
			data: bodyContent,
		};

		try {
			const response = await axios.request(reqOptions);
			const {
				data: { status, url },
			} = response;

			console.log({ status, url });

			if (status && donationFormDetails.paymentOption === "Mpesa") push("/");

			if (status && donationFormDetails.paymentOption === "Card") push(url);
			setIsSubmitting(false);
		} catch (error) {
			console.error(error);
		}
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
				onSubmit,
			}}
		>
			{children}
		</DonationFormContext.Provider>
	);
};

export default DonationFormProvider;
