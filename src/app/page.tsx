"use client";
import React from "react";
import Image from "next/image";
import { useContext, useState } from "react";
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
		if (step >= 0 && step < 3) {
			setStep(step + 1);
		}

		if (step === 3) {
			const response = await onSubmit({
				setIsSubmitting,
				donationFormDetails,
				selectedCauseId,
			});
			console.log({ response });

			if (donationFormDetails?.paymentOption === "Mpesa") {
				setSubmissionComplete(true);
			}

			if (donationFormDetails?.paymentOption === "Card") {
				console.log("Card payment");
				setCardToken(response);
			}
		}
	};
	const handleBack = () => {
		if (step >= 0 && step < 4) {
			setStep(step - 1);
		}
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<main className="flex w-full bg-[#f8f9fa]">
					<div className="relative flex-col justify-center flex-1 hidden md:flex h-[650px] bg-[#f8f9fa] overflow-hidden">
						<div className="flex justify-end w-full">
							<Image
								className="z-10 opacity-50"
								src="https://www.redcross.or.ke/assets/img/don1.JPG"
								alt=""
								fill
							/>
						</div>
						{selectedCause && step > 0 && (
							<div className="z-20 absolute w-[400px] right-0 h-[400px] bg-[#ed1c24] text-white opacity-70 flex flex-col text-center justify-center">
								<div>
									<h1 className="text-3xl">{`Support ${selectedCause?.label}`}</h1>
									<p className="px-5 mt-5">
										{selectedCause?.description || defaultDescription}
									</p>
								</div>
							</div>
						)}
					</div>

					{step === 0 && (
						<div className="flex flex-col md:justify-center flex-1 text-center space-y-[50px] bg-white">
							<div className="bg-[#ed1c24] text-white p-[20px] md:p-[40px] min-h-[250px]">
								<h1 className="text-5xl">{`Support ${
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
						<div className="flex flex-col flex-1 bg-white space-y-[20px] md:h-[650px] overflow-y-scroll px-10">
							<DonationForm
								step={step}
								onBack={handleBack}
								onContinue={handleContinue}
							/>
						</div>
					)}
				</main>
			</ThemeProvider>
			<InvisibleForm />
		</>
	);
};

export default Home;
