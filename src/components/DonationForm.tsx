"use client";
import React, { useContext, useEffect, useState } from "react";
import { Divider, StepLabel, Step, Stepper, CardActions } from "@mui/material";
import Button from "./Button";
import DonationFormAmount from "./DonationFormAmount";
import DonationFormPersonalDetails from "./DonationFormPersonalDetails";
import DonationFormPayment from "./DonationFormPayment";
import { DonationFormContext } from "../context/donationFormContext";
import { RedcrossCausesContext } from "../context/redcrossCausesContext";

type Props = {
	step: number;
	onContinue: () => void;
	onBack: () => void;
};

const steps = ["Cause", "Amount", "Donate", "Pay"];

function DonationForm({ step, onContinue, onBack }: Props) {
	const [donation, setDonation] = useState<number | string>("");
	const [processingFee, setProcessingFee] = useState(0);
	const [totalDonationAmount, setTotalDonationAmount] = useState<
		number | string
	>(0);

	const { donationFormDetails } = useContext(DonationFormContext);
	const { selectedCause } = useContext(RedcrossCausesContext);

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
						processingFee={processingFee}
					/>
				)}
				{step === 2 && <DonationFormPersonalDetails />}
				{step === 3 && <DonationFormPayment />}
			</div>

			{step !== 3 && (
				<div>
					<Divider />
					<CardActions className="flex flex-col p-5">
						<div className="flex text-left">
							{step === 2 && (
								<p className="mb-5 text-sm text-gray-500">
									You are donating
									<span className="text-[#ed1c24]">{` ${
										donationFormDetails?.selectedCurrency
									} ${
										donationFormDetails?.handleProcessingFee
											? totalDonationAmount
											: donation
									}`}</span>{" "}
									{`to ${selectedCause?.label}`}
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
									className="px-[10px] bg-[#ed1c24] text-white hover:bg-[#ed1c24]"
									onClick={onContinue}
								>
									{step !== 3 ? "Continue" : "Donate"}
								</Button>
							</div>
						</div>
					</CardActions>
				</div>
			)}
		</div>
	);
}

export default DonationForm;
