"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../components/Button";
import SelectDropdown from "../components/SelectDropdown";
import { SelectChangeEvent } from "@mui/material/Select";
import DonationForm from "../components/DonationForm";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { RedcrossCausesContext } from "../context/redcrossCausesContext";
import { DonationFormContext } from "../context/donationFormContext";
import InvisibleForm from "../components/InvisibleForm";
import onSubmit from "../api/submitForm";

const Home = () => {
	const { push } = useRouter();
	const [step, setStep] = useState(0);
	const defaultDescription = `Donate today to support humanitarian work around Kenya. In times
								of crisis, we meet the urgent needs of women, men, young and the
								old. Help enable a rapid response to disasters. Your
								contribution can make a difference.`;
	const { redCrossCauses, selectedCause, onRedCrossCauseSelect } = useContext(
		RedcrossCausesContext
	);
	const {
		setIsSubmitting,
		donationFormDetails,
		setSubmissionComplete,
		setCardToken,
	} = useContext(DonationFormContext);
	const selectedCauseId = selectedCause?.id || "";

	const onCauseSelect = (event: SelectChangeEvent) => {
		onRedCrossCauseSelect(event.target.value);
	};

	const handleContinue = async () => {
		if (
			(step >= 0 && step < 2) ||
			(step === 2 && donationFormDetails?.donationOption === "donate-now")
		) {
			setStep(step + 1);
		}

		if (
			step === 3 ||
			(step === 2 && donationFormDetails?.donationOption === "make-pledge")
		) {
			try {
				const response = await onSubmit({
					setIsSubmitting,
					donationFormDetails,
					selectedCauseId,
				});
				const { referenceId }: any = response;

				if (
					donationFormDetails?.paymentOption === "Mpesa" ||
					donationFormDetails?.donationOption === "make-pledge"
				) {
					setSubmissionComplete(true);
					push(`/status?id=${referenceId}`);
				}

				if (donationFormDetails?.paymentOption === "Card") {
					if (donationFormDetails?.donationOption === "donate-now") {
						setCardToken(response);
					} else {
						push(`/status?id=${referenceId}`);
					}
				}
			} catch (error) {
				console.error(error);
			}
		}
	};
	const handleBack = () => {
		if (step >= 0 && step < 4) {
			setStep(step - 1);
		}
	};

	const imageLoader = () => {
		return "https://brandeddavid.s3.eu-west-1.amazonaws.com/public/redcross.jpg";
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<main className="flex w-full bg-[#f8f9fa]">
					<div className="relative flex-col justify-center flex-1 hidden md:flex h-[650px] bg-[#f8f9fa] overflow-hidden">
						<div className="flex justify-end w-full">
							<Image
								className="z-10"
								src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/redcross.jpg"
								alt=""
								fill
								loader={imageLoader}
							/>
						</div>
						{selectedCause && step > 0 && (
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								transition={{ duration: 0.5 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="z-50 absolute w-full right-0 h-[250px] bg-[#ed1c24] text-white flex flex-col text-center justify-center"
							>
								<div>
									<h1 className="text-5xl font-bold">{`Support ${selectedCause?.label}`}</h1>
									<p className="px-5 mt-5">
										{selectedCause?.description || defaultDescription}
									</p>
								</div>
							</motion.div>
						)}
					</div>

					{step === 0 && (
						<div className="flex flex-col md:justify-center flex-1 text-center space-y-[50px] bg-white">
							<div className="bg-[#ed1c24] text-white p-[20px] md:py-[40px] md:px-[20px] min-h-[250px]">
								<h1 className="text-5xl font-bold">{`Support ${
									selectedCause?.label || "our Cause"
								}`}</h1>
								<p className="px-5 mt-5">
									{selectedCause?.description || defaultDescription}
								</p>
							</div>

							<div>
								<SelectDropdown
									dropDownOptions={redCrossCauses}
									selectedOption={selectedCause?.value || ""}
									onChange={onCauseSelect}
								/>
							</div>
							<div>
								<Button
									className="py-[10px] px-[40px]"
									onClick={handleContinue}
									disabled={!selectedCause}
								>
									Continue
								</Button>
							</div>
						</div>
					)}
					{step > 0 && (
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							transition={{ duration: 0.5 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="flex flex-col flex-1 bg-white space-y-[20px] md:h-[650px] overflow-y-scroll px-10"
						>
							<DonationForm
								step={step}
								onBack={handleBack}
								onContinue={handleContinue}
							/>
						</motion.div>
					)}
				</main>
			</ThemeProvider>
			<InvisibleForm />
		</>
	);
};

export default Home;
