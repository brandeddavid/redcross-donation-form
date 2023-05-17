"use client";
import React, { useState } from "react";
import {
	Divider,
	StepLabel,
	Step,
	Stepper,
	Button,
	CardActions,
} from "@mui/material";
import DonationFormAmount from "./DonationFormAmount";
import DonationFormPersonalDetails from "./DonationFormPersonalDetails";

type Props = {
	step: number;
	onContinue: () => void;
	onBack: () => void;
	selectedCause: string;
};

const steps = ["Cause", "Amount", "Donate"];

function DonationForm({ step, onContinue, onBack, selectedCause }: Props) {
	const [donation, setDonation] = useState("");
	const [selectedCurrency, setSelectedCurrency] = useState("KSH");
	const [donateAs, setDonateAs] = useState("individual");
	const [handleProcessingFee, setHandleProcessingFee] = useState(false);

	const toggleHandleProcessingFee = () =>
		setHandleProcessingFee(!handleProcessingFee);

	console.log(handleProcessingFee);

	return (
		<div className="flex flex-col justify-between w-full md:w-[400px] lg:w-[600px]">
			<div>
				<Stepper
					activeStep={step}
					alternativeLabel
					className="px-[10px] py-[20px]"
				>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<Divider />
			</div>

			<div className="h-full">
				{step === 1 && (
					<DonationFormAmount
						donation={donation}
						setDonation={setDonation}
						selectedCurrency={selectedCurrency}
						setSelectedCurrency={setSelectedCurrency}
						donateAs={donateAs}
						setDonateAs={setDonateAs}
						handleProcessingFee={handleProcessingFee}
						toggleHandleProcessingFee={toggleHandleProcessingFee}
					/>
				)}
				{step === 2 && <DonationFormPersonalDetails donateAs={donateAs} />}
			</div>

			<div>
				<Divider />
				<CardActions className="flex flex-col p-5">
					<div className="flex justify-start">
						{step === 2 && (
							<p>
								You are donating
								<span className="text-[#dc1a22]">{` ${selectedCurrency} ${donation}`}</span>{" "}
								{`to ${selectedCause}`}
							</p>
						)}
					</div>
					<div className="flex flex-row w-full justify-between">
						<div>
							<Button
								className="px-[10px] justify-start"
								variant="outlined"
								onClick={onBack}
							>
								Back
							</Button>
						</div>
						<div>
							<Button
								className="px-[10px] bg-[#dc1a22] text-white hover:bg-[#dc1a22]"
								onClick={onContinue}
							>
								{step !== 2 ? "Continue" : "Donate"}
							</Button>
						</div>
					</div>
				</CardActions>
			</div>
		</div>
	);
}

export default DonationForm;
