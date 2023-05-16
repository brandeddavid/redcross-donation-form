import React, { useState } from "react";
import {
	Divider,
	StepLabel,
	Step,
	Stepper,
	Card,
	Tabs,
	Tab,
	Button,
	ButtonGroup,
} from "@mui/material";
import RadioButton from "./RadioButton";

type Props = {
	step: number;
};

const steps = ["Cause", "Donation", "Details"];
const tabs = [
	{ label: "ONE TIME", value: "one-time" },
	{ label: "MONTHLY", value: "monthly" },
];
const acceptedCurrency = ["KSH", "USD"];

function DonationForm({ step }: Props) {
	const [selectedCurrency, setSelectedCurrency] = useState("KSH");
	return (
		<div className="w-full">
			<Card variant="outlined">
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
				<div className="p-[30px] flex flex-col space-y-[20px]">
					<RadioButton
						formLabel="Select donate as"
						radioOptions={[
							{ label: "Individual", value: "individual" },
							{ label: "Company", value: "company" },
						]}
					/>
					<RadioButton
						formLabel="Select payment option"
						radioOptions={[
							{ label: "Pay Now", value: "pay-now" },
							{ label: "Make Pledge", value: "make-pledge" },
						]}
					/>
					<div className="flex justify-center">
						<Tabs value={0} onChange={() => {}} aria-label="basic tabs example">
							{tabs.map(({ label, value }) => (
								<Tab key={label} label={label} />
							))}
						</Tabs>
					</div>
					<div className="flex justify-end">
						<ButtonGroup variant="outlined" aria-label="button group">
							{acceptedCurrency.map((currency) => (
								<Button
									key={currency}
									className={`${
										(currency === selectedCurrency &&
											"bg-[#dc1a22] text-white") ||
										""
									}`}
								>
									{currency}
								</Button>
							))}
						</ButtonGroup>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default DonationForm;
