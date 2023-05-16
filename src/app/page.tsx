"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@mui/material/Button";
import SelectDropdown from "@/components/SelectDropdown";
import { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DonationForm from "@/components/DonationForm";

export default function Home() {
	const causeOptions = [
		{
			label: "Red Cross 1",
			value: "red-cross-1",
		},
		{
			label: "Red Cross 2",
			value: "red-cross-2",
		},
	];

	const [step, setStep] = useState(0);
	const [selectedCause, setSelectedCause] = useState("");

	const onCauseSelect = (event: SelectChangeEvent) => {
		setSelectedCause(event.target.value);
	};
	const handleContinue = () => {
		if (step >= 0 && step < 2) {
			setStep(step + 1);
		}
	};
	const handleBack = () => {
		if (step >= 0 && step < 3) {
			setStep(step - 1);
		}
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: "#dc1a22",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<main className="flex w-full min-h-screen">
				<div className="flex-1 hidden md:flex">
					<div className="relative w-full h-full">
						<Image src={`/${selectedCause || "maasai"}.jpg`} alt="" fill />
					</div>
				</div>
				{step === 0 && (
					<div className="flex flex-col justify-center flex-1 text-center bg-white space-y-[50px] md:px-5">
						<div>
							<h1 className="text-5xl text-[#dc1a22]">Support our Cause</h1>
							<p className="px-5 mt-5">
								Donate today to support humanitarian work around Kenya. In times
								of crisis, we meet the urgent needs of women, men, young and the
								old. Help enable a rapid response to disasters. Your
								contribution can make a difference.
							</p>
						</div>

						<div>
							<SelectDropdown
								dropDownOptions={causeOptions}
								selectedOption={selectedCause}
								onChange={onCauseSelect}
							/>
						</div>
						<div>
							<Button className="" variant="outlined" onClick={handleContinue}>
								Continue
							</Button>
						</div>
					</div>
				)}
				{step > 0 && (
					<div className="flex justify-center flex-1 bg-white space-y-[50px] md:p-5">
						<DonationForm
							step={step}
							onBack={handleBack}
							onContinue={handleContinue}
						/>
					</div>
				)}
			</main>
		</ThemeProvider>
	);
}
