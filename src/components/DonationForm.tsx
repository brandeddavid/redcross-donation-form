import React from "react";
import { Divider, StepLabel, Step, Stepper, Card } from "@mui/material";

type Props = {
	step: number;
};

const steps = ["Cause", "Donation", "Details"];

function DonationForm({ step }: Props) {
	return (
		<div className="w-full">
			<Card variant="outlined">
				<Stepper
					activeStep={step}
					alternativeLabel
					// orientation="vertical"
					className="h-[50px] p-[10px] mb-[20px]"
				>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<Divider />
			</Card>
		</div>
	);
}

export default DonationForm;
