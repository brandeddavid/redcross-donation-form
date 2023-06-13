import React from "react";
import { Box } from "@mui/material";

type Props = {
	children?: JSX.Element | null;
};

const DropDownMenuScaffold = ({ children = null }: Props) => {
	return (
		<Box
			sx={{
				backgroundColor: "#FFF1F1",
				position: "absolute",
				"z-index": 1000,
				left: "60px",
				right: "60px",
			}}
		>
			{children}
		</Box>
	);
};

export default DropDownMenuScaffold;
