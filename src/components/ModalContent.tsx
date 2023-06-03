import React from "react";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type Props = {};

const ModalContent = (props: Props) => {
	return (
		<Box
			sx={{
				width: 300,
				position: "absolute" as "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				bgcolor: "background.paper",
				boxShadow: 50,
			}}
		>
			<div className="h-[200px] bg-[#ed1c24] flex flex-col justify-center text-center">
				<div>
					<CheckCircleOutlineIcon fontSize="large" sx={{ fill: "white" }} />
				</div>
				<div className="text-white">SUCCESSFUL</div>
			</div>
			<div className="p-[50px] space-y-[40px] flex flex-col justify-center text-center">
				<div className="text-xl">
					Your donation has been successfully processed
				</div>
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
