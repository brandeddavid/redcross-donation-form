import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ed1c24",
		},
		secondary: {
			main: "#f8f9fa",
		},
	},
	typography: {
		fontFamily: "Rubik, sans-serif",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						backgroundColor: "#ed1c24",
						color: "white",
					},
					"&.active": {
						backgroundColor: "#ed1c24",
						color: "white",
					},
				},
			},
		},
	},
});

export { theme };
