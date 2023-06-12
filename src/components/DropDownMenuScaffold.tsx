import React from "react";
import { Box } from "@mui/material";

type Props = {};

const DropDownMenuScaffold = (props: Props) => {
	return (
		<Box
			sx={{
				backgroundColor: "#FFF1F1",
				width: "80%",
				position: "absolute",
				"z-index": 1000,
				marginLeft: "100px",
				marginRight: "100px",
				height: "300px",
			}}
		>
			DropDownMenuScaffold
		</Box>
	);
};

export default DropDownMenuScaffold;
