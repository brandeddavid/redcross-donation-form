import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import RedcrossCausesProvider from "../context/redcrossCausesContext";
import DonationFormProvider from "../context/donationFormContext";

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
		<DonationFormProvider>
			<RedcrossCausesProvider>
				<html lang="en">
					<body className={inter.className}>{children}</body>
				</html>
			</RedcrossCausesProvider>
		</DonationFormProvider>
	);
}
