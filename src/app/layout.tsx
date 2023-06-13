import "./globals.css";
import React from "react";
import Image from "next/image";
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
	const imageLoader = () => {
		return "https://www.redcross.or.ke/assets/img/Large.jpg";
	};

	return (
		<RedcrossCausesProvider>
			<DonationFormProvider>
				<html lang="en">
					<body className={`${inter.className} flex flex-col`}>
						<div className="fixed top-0 left-0 right-0 z-50 bg-white">
							<header>
								<NavBar />
							</header>
						</div>
						<div className="absolute top-[175px] w-full z-10">
							<div className="">{children}</div>
							<div className="hidden md:block w-full h-[500px] relative">
								<Image
									src="https://www.redcross.or.ke/assets/img/Large.jpg"
									alt=""
									fill
									style={{
										opacity: 0.7,
									}}
								/>
							</div>
						</div>
					</body>
				</html>
			</DonationFormProvider>
		</RedcrossCausesProvider>
	);
};

export default RootLayout;
