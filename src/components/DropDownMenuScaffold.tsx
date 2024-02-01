import React from "react";
import { Box } from "@mui/material";
import { ClickAwayListener } from "@mui/base";

type Props = {
	children?: JSX.Element | null;
	onClickAway: () => void;
};

const DropDownMenuScaffold = ({ children = null, onClickAway }: Props) => {
	return (
		<ClickAwayListener onClickAway={onClickAway}>
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
		</ClickAwayListener>
	);
};

export default DropDownMenuScaffold;
