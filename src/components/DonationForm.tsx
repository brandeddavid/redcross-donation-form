"use client";
import React from "react";
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
};

const steps = ["Cause", "Amount", "Donate"];

function DonationForm({ step, onContinue, onBack }: Props) {
	return (
		<div className="flex flex-col justify-between w-full md:w-[400px] lg:w-[600px]">
			<Stepper
				activeStep={step}
				alternativeLabel
				// orientation="vertical"
				className="px-[10px] py-[20px]"
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Divider />
			<div className="min-h-[400px]">
				{step === 1 && <DonationFormAmount />}
				{step === 2 && <DonationFormPersonalDetails />}
			</div>

			<Divider />
			<CardActions className="flex justify-between p-5">
				<Button className="px-[10px]" variant="outlined" onClick={onBack}>
					Back
				</Button>
				<Button
					className="px-[10px] bg-[#dc1a22] text-white hover:bg-[#dc1a22]"
					onClick={onContinue}
				>
					Continue
				</Button>
			</CardActions>
		</div>
	);
}

export default DonationForm;
