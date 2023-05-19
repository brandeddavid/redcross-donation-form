import React from "react";
import { Button as Btn, withStyles } from "@mui/material/";

type Props = {
	children: any;
	onClick: () => void;
	variant?: "text" | "outlined" | "contained";
};

const styles = () => ({
	default: {
		width: "300px",
	},
});

const Button = ({ children, onClick, variant = "outlined" }: Props) => {
	return (
		<Btn
			variant={variant}
			onClick={onClick}
			sx={{
				":hover": {
					bgcolor: "#ed1c24",
					color: "white",
				},
			}}
		>
			{children}
		</Btn>
	);
};

export default Button;
