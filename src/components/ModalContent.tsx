import React, { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Button, CircularProgress } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { DonationFormContext } from "../context/donationFormContext";
import { RedcrossCausesContext } from "../context/redcrossCausesContext";

type Props = {
	status: string | number;
	fetchDonation: () => void;
	paymentBody: string;
};

const Message = ({ type, paymentBody }: any) => {
	if (type === "mpesa") {
		return (
			<div className="p-5 bg-[#ed1c24] text-white">
				<span>
					Complete payment by entering pin on your phone then press the verify
					button.
				</span>
			</div>
		);
	}

	if (type === "pledge") {
		return (
			<div className="p-5 bg-[#ed1c24] text-white">
				<span>
					Invoice has been sent to your email address. Check your email to
					complete payment.
				</span>
			</div>
		);
	}

	return (
		<div className="p-5 bg-[#ed1c24] text-white">
			<span>{paymentBody}</span>
		</div>
	);
};

const getDonationStatus = (
	status: string | number,
	isMpesaPending: boolean,
	isPledge: boolean,
	isCardPayment: boolean
) => {
	if (status === -1) {
		return {
			status: "ERRORED",
			message: (
				<Message paymentBody="Error occurred while processing your donation, please retry" />
			),
			icon: <ErrorOutlineIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	if (status === 1 || isCardPayment) {
		return {
			status: "SUCCESSFUL",
			message: (
				<Message paymentBody="Your donation has been successfully processed" />
			),
			icon: <CheckCircleOutlineIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	if (isMpesaPending) {
		return {
			status: "PENDING",
			message: <Message type="mpesa" />,
			icon: <PendingOutlinedIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	if (isPledge) {
		return {
			status: "PENDING",
			message: <Message type="pledge" />,
			icon: <PendingOutlinedIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	if (!isMpesaPending && status === 0) {
		return {
			status: "PENDING",
			message: "Your donation is pending",
			icon: <PendingOutlinedIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	return {
		status: "SENDING",
		message: <CircularProgress size="large" />,
		icon: <PendingOutlinedIcon fontSize="large" sx={{ fill: "white" }} />,
	};
};

const ModalContent = ({ status, fetchDonation, paymentBody }: Props) => {
	const router = useRouter();
	const [isMpesaPending, setIsMpesaPending] = useState(false);
	const [isPledge, setIsPledge] = useState(false);
	const [isCardPayment, setIsCardPayment] = useState(false);

	const {
		donationFormDetails: { paymentOption, donationOption },
		resetDonationForm,
	}: any = useContext(DonationFormContext);
	const { setSelectedCause }: any = useContext(RedcrossCausesContext);

	useEffect(() => {
		setIsCardPayment(paymentOption === "Card");
	}, [status, paymentOption]);

	useEffect(() => {
		setIsMpesaPending(Number(status) === 0 && paymentOption === "Mpesa");
	}, [status, paymentOption]);

	useEffect(() => {
		setIsPledge(Number(status) === 0 && donationOption === "make-pledge");
	}, [status, donationOption]);

	const donationStatus = getDonationStatus(
		Number(status),
		isMpesaPending,
		isPledge,
		isCardPayment
	);

	const onSubmit = () => {
		if (isMpesaPending) {
			return fetchDonation();
		}

		resetDonationForm();
		setSelectedCause(null);
		return router.push("/");
	};

	return (
		<Box className="w-[500px] my-5">
			<div className="h-[200px] bg-[#ed1c24] flex flex-col justify-center text-center">
				<div>{donationStatus.icon}</div>
				<div className="text-white">{donationStatus.status}</div>
			</div>
			<div className="p-[50px] space-y-[40px] flex flex-col justify-center text-center border">
				<div className="text-xl">{donationStatus.message}</div>
				<div>
					<Button
						className="bg-[#ed1c24] text-white"
						sx={{
							width: "200px",
							backgroundColor: "#ed1c24",
							color: "white",
							"&:hover": {
								backgroundColor: "#ed1c24",
								color: "white",
							},
						}}
						color="primary"
						onClick={onSubmit}
					>
						{isMpesaPending ? "Verify" : "Back"}
					</Button>
				</div>
			</div>
		</Box>
	);
};

export default ModalContent;
