import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import RedcrossCausesProvider from "../context/redcrossCausesContext";
import DonationFormProvider from "../context/donationFormContext";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Kenya Redcross | Donation Form",
	description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<RedcrossCausesProvider>
			<DonationFormProvider>
				<html lang="en">
					<body className={`${inter.className} relative`}>
						<div className="fixed top-0 left-0 right-0 z-50 bg-white">
							<header>
								<NavBar />
							</header>
						</div>

						<div className="absolute top-[100px] md:top-[175px] left-0 right-0 z-10">
							{children}
						</div>
					</body>
				</html>
			</DonationFormProvider>
		</RedcrossCausesProvider>
	);
};

export default RootLayout;
