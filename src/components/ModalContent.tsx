import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { DonationFormContext } from "../context/donationFormContext";

type Props = {
	status: string | number;
};

const MpesaMessage = () => {
	return (
		<div className="p-5 bg-green-200">
			Complete payment by entering pin on your phone then press the verify
			button
		</div>
	);
};

const getDonationStatus = (
	status: string | number,
	isMpesaPending: boolean
) => {
	if (status === -1) {
		return {
			status: "ERRORED",
			message: "Your donation has errored",
			icon: <ErrorOutlineIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	if (status === 1) {
		return {
			status: "SUCCESSFUL",
			message: "Your donation has been successfully processed",
			icon: <CheckCircleOutlineIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	if (isMpesaPending) {
		return {
			status: "PENDING",
			message: <MpesaMessage />,
			icon: <PendingOutlinedIcon fontSize="large" sx={{ fill: "white" }} />,
		};
	}

	return {
		status: "PENDING",
		message: "Your donation is pending",
		icon: <PendingOutlinedIcon fontSize="large" sx={{ fill: "white" }} />,
	};
};

const ModalContent = ({ status }: Props) => {
	const router = useRouter();
	const {
		donationFormDetails: { paymentOption },
	}: any = useContext(DonationFormContext);
	const isMpesaPending = Number(status) === 0 && paymentOption === "Mpesa";
	const donationStatus = getDonationStatus(Number(status), isMpesaPending);

	console.log({ paymentOption, status });

	const onSubmit = () => {
		if (isMpesaPending) {
			router.refresh();
		}

		router.push("/");
	};

	return (
		<Box className="w-[500px]">
			<div className="h-[200px] bg-[#ed1c24] flex flex-col justify-center text-center">
				<div>{donationStatus.icon}</div>
				<div className="text-white">{donationStatus.status}</div>
			</div>
			<div className="p-[50px] space-y-[40px] flex flex-col justify-center text-center">
				<div className="text-xl">{donationStatus.message}</div>
				<div>
					<Button
						className="bg-[#ed1c24] text-white"
						sx={{ width: "200px", backgroundColor: "#ed1c24" }}
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
