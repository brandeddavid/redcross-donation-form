import "./globals.css";
import React from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";
import RedcrossCausesProvider from "../context/redcrossCausesContext";
import DonationFormProvider from "../context/donationFormContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Rubik({ subsets: ["latin"] });

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
					<body className={`${inter.className} flex flex-col font-sans`}>
						<div className="fixed top-0 left-0 right-0 z-50 bg-white">
							<header>
								<NavBar />
							</header>
						</div>
						<div className="absolute top-[100px] md:top-[160px] w-full z-10">
							<div className="">{children}</div>
							<section className="hidden md:block py-12 bg-[#f8f9fa]">
								<div className="my-4 max-w-[960px] px-[15px]">
									<h3 className="text-4xl font-medium"></h3>
								</div>
							</section>
							<section className="hidden md:block w-full h-[500px] relative">
								<Image
									src="https://www.redcross.or.ke/assets/img/Large.jpg"
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
							<section className="hidden w-full py-12 md:block">
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
