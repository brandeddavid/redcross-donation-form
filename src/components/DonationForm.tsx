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
	currency?: string;
	donation?: string;
	selectedCause?: string;
};

const steps = ["Cause", "Amount", "Donate"];

function DonationForm({
	step,
	onContinue,
	onBack,
	currency = "KSH",
	donation = "1000",
	selectedCause = "Red-cross-1",
}: Props) {
	return (
		<div className="flex flex-col justify-between w-full md:w-[400px] lg:w-[600px]">
			<div>
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
			</div>

			<div className="h-full">
				{step === 1 && <DonationFormAmount />}
				{step === 2 && <DonationFormPersonalDetails />}
			</div>

			<div>
				<Divider />
				<CardActions className="flex flex-col p-5">
					<div>
						{step === 2 && (
							<p>{`You are donating ${currency} ${donation} to ${selectedCause}`}</p>
						)}
					</div>
					<div className="flex flex-row w-full justify-between mt-5">
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
