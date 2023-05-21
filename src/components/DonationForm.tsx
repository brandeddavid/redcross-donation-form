"use client";
import React, { useEffect, useState } from "react";
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
import DonationFormPayment from "./DonationFormPayment";

type Props = {
	step: number;
	onContinue: () => void;
	onBack: () => void;
	selectedCause: string;
};

const steps = ["Cause", "Amount", "Donate", "Pay"];

function DonationForm({ step, onContinue, onBack, selectedCause }: Props) {
	const [donation, setDonation] = useState<number | string>("");
	const [selectedCurrency, setSelectedCurrency] = useState("KES");
	const [donateAs, setDonateAs] = useState("individual");
	const [handleProcessingFee, setHandleProcessingFee] = useState(false);
	const [processingFee, setProcessingFee] = useState(0);
	const [totalDonationAmount, setTotalDonationAmount] = useState<
		number | string
	>(0);

	const toggleHandleProcessingFee = () =>
		setHandleProcessingFee(!handleProcessingFee);

	useEffect(() => {
		if (donation) {
			const fee = 0.1 * Number(donation);

			setProcessingFee(fee);
			setTotalDonationAmount(Number(donation) + processingFee);
		}
	}, [donation, processingFee]);

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
						processingFee={processingFee}
					/>
				)}
				{step === 2 && <DonationFormPersonalDetails donateAs={donateAs} />}
				{step === 3 && <DonationFormPayment />}
			</div>

			<div>
				<Divider />
				<CardActions className="flex flex-col p-5">
					<div className="flex text-left">
						{step === 2 && (
							<p className="mb-5 text-sm text-gray-500">
								You are donating
								<span className="text-[#dc1a22]">{` ${selectedCurrency} ${
									handleProcessingFee ? totalDonationAmount : donation
								}`}</span>{" "}
								{`to ${selectedCause}`}
							</p>
						)}
					</div>
					<div className="flex flex-row justify-between w-full">
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
								{step !== 3 ? "Continue" : "Donate"}
							</Button>
						</div>
					</div>
				</CardActions>
			</div>
		</div>
	);
}

export default DonationForm;
