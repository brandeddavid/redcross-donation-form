import React from "react";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";

type Props = {
	children?: JSX.Element | null;
	onClose: () => void;
};

const DropDownMenuScaffold = ({ children = null, onClose }: Props) => {
	return (
		<ClickAwayListener onClickAway={onClose}>
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
