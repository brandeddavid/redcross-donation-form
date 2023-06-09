import React from "react";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";

type Props = {
	status: string | number;
};

const getDonationStatus = (status: string | number) => {
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

	return {
		status: "PENDING",
		message: "Your donation is pending",
		icon: <PendingOutlinedIcon fontSize="large" sx={{ fill: "white" }} />,
	};
};

const ModalContent = ({ status }: Props) => {
	const donationStatus = getDonationStatus(status);

	return (
		<Box>
			<div className="h-[200px] bg-[#ed1c24] flex flex-col justify-center text-center">
				<div>{donationStatus.icon}</div>
				<div className="text-white">{donationStatus.status}</div>
			</div>
			<div className="p-[50px] space-y-[40px] flex flex-col justify-center text-center">
				<div className="text-xl">{donationStatus.message}</div>
				<div>
					<Button
						className="bg-[#ed1c24] text-white"
						sx={{ width: "200px", bgcolor: "#ed1c24" }}
						color="primary"
					>
						Back
					</Button>
				</div>
			</div>
		</Box>
	);
};

export default ModalContent;
