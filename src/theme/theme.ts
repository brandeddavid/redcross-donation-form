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
	// components: {
	// 	MuiButton: {
	// 		styleOverrides: {
	// 			root: {
	// 				"&hover": {
	// 					bgcolor: "#ed1c24",
	// 				},
	// 			},
	// 		},
	// 	},
	// },
});

export { theme };
