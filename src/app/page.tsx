"use client";
import React from "react";
import Image from "next/image";
import { useContext, useState } from "react";
import Button from "../components/Button";
import SelectDropdown from "../components/SelectDropdown";
import { SelectChangeEvent } from "@mui/material/Select";
import DonationForm from "..//components/DonationForm";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { RedcrossCausesContext } from "../context/redcrossCausesContext";

export default function Home() {
	const defaultDescription = `Donate today to support humanitarian work around Kenya. In times
								of crisis, we meet the urgent needs of women, men, young and the
								old. Help enable a rapid response to disasters. Your
								contribution can make a difference.`;
	const { redCrossCauses, selectedCause, onRedCrossCauseSelect } = useContext(
		RedcrossCausesContext
	);
	const [step, setStep] = useState(0);

	console.log({ redCrossCauses, selectedCause });

	const onCauseSelect = (event: SelectChangeEvent) => {
		console.log(event.target);
		onRedCrossCauseSelect(event.target.value);
	};
	const handleContinue = () => {
		if (step >= 0 && step < 3) {
			setStep(step + 1);
		}
	};
	const handleBack = () => {
		if (step >= 0 && step < 4) {
			setStep(step - 1);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<main className="flex w-full min-h-screen">
				<div className="relative flex-col justify-center flex-1 hidden md:flex">
					<div className="flex justify-end w-full h-full ">
						<Image
							className="z-10 opacity-50"
							src={`/${selectedCause?.value || "maasai"}.jpg`}
							alt=""
							fill
						/>
					</div>
					{selectedCause && step > 0 && (
						<div className="z-20 absolute top-[30%] h-[400px] bg-[#ed1c24] w-auto text-white opacity-70 flex flex-col text-center justify-center">
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
					<div className="flex flex-col justify-center flex-1 text-center bg-white space-y-[50px]">
						<div className="bg-[#ed1c24] text-white p-[20px] md:p-[40px]">
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
					<div className="flex justify-center flex-1 bg-white space-y-[50px] md:p-5 md:max-w-[500px] px-10">
						<DonationForm
							step={step}
							onBack={handleBack}
							onContinue={handleContinue}
							selectedCause={selectedCause?.value || ""}
						/>
					</div>
				)}
			</main>
		</ThemeProvider>
	);
}
