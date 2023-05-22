import "./globals.css";
import { Inter } from "next/font/google";
import RedcrossCausesProvider from "@/context/redcrossCausesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Kenya Redcross | Donation Form",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<RedcrossCausesProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</RedcrossCausesProvider>
	);
}
