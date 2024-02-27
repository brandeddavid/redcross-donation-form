import "./globals.css";
import React from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";
import RedcrossCausesProvider from "../context/redcrossCausesContext";
import DonationFormProvider from "../context/donationFormContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import getImageBase from "../helpers/getImageBase";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
	title: "Kenya Redcross | Donation Form",
	description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const baseImageUrl = getImageBase();
	const imageLoader = () => {
		return `${baseImageUrl}/large.jpeg`;
	};

	return (
		<RedcrossCausesProvider>
			<DonationFormProvider>
				<html lang="en">
					<body
						className={`${inter.className} flex flex-col font-sans justify-center items-center min-h-screen`}
					>
						<div className="fixed top-0 left-0 right-0 z-50 bg-white">
							<header>
								<NavBar />
							</header>
						</div>
						<div className="absolute top-[130px] md:top-[210px] z-10 w-full">
							<div className="">{children}</div>
							<section className="hidden md:block py-12 bg-[#f8f9fa]">
								<div className="my-4 max-w-[960px] px-[15px]">
									<h3 className="text-4xl font-medium"></h3>
								</div>
							</section>
							<section className="hidden md:block w-full h-[500px] relative">
								<Image
									src={`${baseImageUrl}/large.jpeg`}
									alt=""
									fill
									style={{
										objectFit: "cover",
									}}
								/>
								<div className="absolute z-10 flex flex-col text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
									<div className="flex justify-center mb-6 text-4xl font-medium">
										You Can Make A Difference
									</div>
									<div className="flex justify-center">
										<button className="px-4 py-2 text-xl uppercase border border-white hover:bg-[#ed1c24]">
											Volunteer
										</button>
									</div>
								</div>
							</section>
							<section className="hidden w-full md:block">
								<Footer />
							</section>
						</div>
					</body>
				</html>
			</DonationFormProvider>
		</RedcrossCausesProvider>
	);
};

export default RootLayout;
