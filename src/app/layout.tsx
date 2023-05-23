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
					<body className={`${inter.className}`}>
						<div className="h-[100px] bg-slate-800 text-white fixed top-0 left-0 right-0 z-50">
							<header>NavBarHere</header>
						</div>

						<div className="absolute top-[100px] left-0 right-0 z-10">
							{children}
						</div>
					</body>
				</html>
			</RedcrossCausesProvider>
		</DonationFormProvider>
	);
}
