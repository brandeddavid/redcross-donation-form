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
					<body className={`${inter.className} bg-[#f8f9fa]`}>
						<div className="h-[100px] sticky bg-slate-800 text-white">
							NavBarHere
						</div>
						{children}
					</body>
				</html>
			</RedcrossCausesProvider>
		</DonationFormProvider>
	);
}
