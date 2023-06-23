import React from "react";
import { Box, Modal } from "@mui/material";

type Props = {
	children?: JSX.Element | null;
	open: boolean;
	onClose: () => void;
};

const DropDownMenuScaffold = ({ children = null, open, onClose }: Props) => {
	return (
		// <Modal open={open} onClose={onClose}>
		<Box
			sx={{
				backgroundColor: "#FFF1F1",
				position: "absolute",
				"z-index": 1000,
				left: "60px",
				right: "60px",
				top: "160px",
			}}
		>
			{children}
		</Box>
		// </Modal>
	);
};

export default DropDownMenuScaffold;
