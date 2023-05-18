import React from "react";
import { Button as Btn } from "@mui/material/";

type Props = {
	children: any;
	onClick: () => void;
	variant?: "text" | "outlined" | "contained";
};

const Button = ({ children, onClick, variant = "outlined" }: Props) => {
	return (
		<Btn variant={variant} onClick={onClick}>
			{children}
		</Btn>
	);
};

export default Button;
