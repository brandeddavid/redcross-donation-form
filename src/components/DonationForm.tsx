"use client";
import React, { useContext, useEffect, useState } from "react";
import {
	Divider,
	StepLabel,
	Step,
	Stepper,
	CardActions,
	Button,
	CircularProgress,
} from "@mui/material";
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

const DonationForm = ({ step, onContinue, onBack }: Props) => {
	const { donationFormDetails } = useContext(DonationFormContext);
	const { selectedCause } = useContext(RedcrossCausesContext);
	const [disabled, setDisabled] = useState(false);

	const {
		isSubmitting,
		donationAmount,
		donationOption,
		firstName,
		lastName,
		email,
		phoneNumber,
		address,
		donateAnonymously,
	}: any = donationFormDetails;

	useEffect(() => {
		if (isSubmitting) return setDisabled(true);

		if (step === 1) {
			return setDisabled(!donationAmount || !donationOption);
		}

		if (step === 2) {
			return setDisabled(
				!donateAnonymously &&
					(!firstName || !lastName || !email || !phoneNumber)
			);
		}

		if (step === 3) {
			return setDisabled(isSubmitting);
		}
	}, [
		isSubmitting,
		donationAmount,
		step,
		donationOption,
		isSubmitting,
		firstName,
		lastName,
		email,
		phoneNumber,
		address,
		donateAnonymously,
	]);

	return (
		<div className="flex flex-col justify-between">
			<div className="sticky top-0 z-30 bg-white">
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

			<div className="">
				{step === 1 && <DonationFormAmount />}
				{step === 2 && <DonationFormPersonalDetails />}
				{step === 3 && <DonationFormPayment />}
			</div>
			<div className="sticky bottom-0 z-50 bg-white">
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
										? donationFormDetails?.totalDonationAmount
										: donationFormDetails?.donationAmount
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
								onClick={onContinue}
								startIcon={
									donationFormDetails?.isSubmitting ? (
										<CircularProgress size={20} />
									) : null
								}
								disabled={disabled}
								variant="outlined"
								color="primary"
							>
								{step !== 3
									? "Continue"
									: `Donate ${donationFormDetails?.selectedCurrency} ${
											donationFormDetails?.handleProcessingFee
												? donationFormDetails?.totalDonationAmount
												: donationFormDetails?.donationAmount
									  }`}
							</Button>
						</div>
					</div>
				</CardActions>
			</div>
		</div>
	);
};

export default DonationForm;
