"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";
import SelectDropdown from "@/components/SelectDropdown";
import { SelectChangeEvent } from "@mui/material/Select";
import DonationForm from "@/components/DonationForm";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

export default function Home() {
	const causeOptions = [
		{
			label: "Red Cross 1",
			value: "red-cross-1",
			description: "",
			startDate: "14/02/2023",
			endDate: "14/02/2024",
		},
		{
			label: "Red Cross 2",
			value: "red-cross-2",
			description: "",
			startDate: "7/11/2022",
			endDate: "1/12/2023",
		},
	];

	const [step, setStep] = useState(0);
	const [selectedCause, setSelectedCause] = useState("");

	const onCauseSelect = (event: SelectChangeEvent) => {
		setSelectedCause(event.target.value);
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
				<div className="relative flex-col justify-center flex-1 hidden bg-gray-300 md:flex">
					<div className="flex justify-end w-full h-[700px]">
						<Image
							className={`${step > 0 ? "opacity-20" : "opacity-50"} z-10`}
							src={`/${selectedCause || "maasai"}.jpg`}
							alt=""
							height={700}
							width={700}
						/>
					</div>
					{selectedCause && step > 0 && (
						<div className="z-20 absolute top-[30%] h-[400px] bg-[#dc1a22] w-auto text-white opacity-70 flex flex-col text-center justify-center">
							<div>
								<h1 className="text-3xl">{`Support ${selectedCause}`}</h1>
								<p className="px-5 mt-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
					)}
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
							{selectedCause && (
								<p className="text-sm text-gray-500 mt-[5px]">
									Campaign from <strong>14 May 2023</strong> to{" "}
									<strong>25 Dec 2023</strong>
								</p>
							)}
						</div>
						<div>
							<Button onClick={handleContinue}>Continue</Button>
						</div>
					</div>
				)}
				{step > 0 && (
					<div className="flex justify-center flex-1 bg-white space-y-[50px] md:p-5 md:max-w-[500px] px-10">
						<DonationForm
							step={step}
							onBack={handleBack}
							onContinue={handleContinue}
							selectedCause={selectedCause}
						/>
					</div>
				)}
			</main>
		</ThemeProvider>
	);
}
