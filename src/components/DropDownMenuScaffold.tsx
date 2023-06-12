import React from "react";
import { Box } from "@mui/material";

type Props = {
	children: JSX.Element;
};

const DropDownMenuScaffold = ({ children }: Props) => {
	return (
		<Box
			sx={{
				backgroundColor: "#FFF1F1",
				width: "80%",
				position: "absolute",
				"z-index": 1000,
				marginLeft: "100px",
				marginRight: "100px",
			}}
		>
			{children}
		</Box>
	);
};

export default DropDownMenuScaffold;
