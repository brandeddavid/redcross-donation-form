import React from "react";
import { Button as Btn, withStyles } from "@mui/material/";

type Props = {
	children: any;
	onClick: () => void;
	variant?: "text" | "outlined" | "contained";
	className?: string;
};

const styles = () => ({
	default: {
		width: "300px",
	},
});

const Button = ({
	children,
	onClick,
	variant = "outlined",
	className = "",
}: Props) => {
	return (
		<Btn
			variant={variant}
			onClick={onClick}
			className={className}
			sx={{
				borderRadius: 0,
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
