"use client";
import React, { useContext, useEffect, useState } from "react";
import {
	Tabs,
	Tab,
	ButtonGroup,
	Input,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Button,
} from "@mui/material";
import RadioButton from "./RadioButton";
import { DonationFormContext } from "../context/donationFormContext";

type Props = {};
type LabelProps = {
	processingFee: string;
	currency: string | undefined;
};

const tabs = [
	{ label: "ONE TIME", value: "one-time" },
	{ label: "MONTHLY", value: "monthly" },
];
const acceptedCurrency = [
	{ label: "KES", value: "KES" },
	{ label: "USD", value: "USD" },
];

const Label = ({ processingFee, currency }: LabelProps) => (
	<div className="text-sm text-gray-500">
		Please add{" "}
		<span className="text-[#ed1c24]">{`${currency} ${processingFee}`}</span> to
		cover processing fees & other expenses associated with my donation
	</div>
);

const DonationFormAmount = ({}: Props) => {
	const [activeTab, setActiveTab] = useState(0);
	const [showOtherAmountInput, setShowOtherAmountInput] = useState(false);
	const {
		donationFormDetails,
		setDonateAs,
		setSelectedCurrency,
		setDonationOption,
		toggleHandleProcessingFee,
		setDonationAmount,
		setPledgeFrequency,
	} = useContext(DonationFormContext);

	useEffect(() => {
		setPledgeFrequency(activeTab === 0 ? "one-time" : "monthly");
	}, [activeTab]);

	return (
		<div className="py-[10px] md:pb-[50px] md:px-5 flex flex-col space-y-[20px]">
			<RadioButton
				formLabel="Select donate as"
				radioOptions={[
					{ label: "Private", value: "private" },
					{ label: "Organisation", value: "organisation" },
				]}
				onChange={(value) => setDonateAs(value)}
				selectedOption={donationFormDetails?.donateAs}
			/>
			<RadioButton
				formLabel="Select donation option"
				radioOptions={[
					{ label: "Donate Now", value: "donate-now" },
					{ label: "Make a Pledge", value: "make-pledge" },
				]}
				onChange={(value) => setDonationOption(value)}
				selectedOption={donationFormDetails?.donationOption}
			/>

			{donationFormDetails?.donationOption !== "donate-now" && (
				<div>
					<div className="flex justify-center">
						<Tabs
							value={activeTab}
							onChange={(event, value) => {
								console.log({ value });
								setActiveTab(value);
							}}
							aria-label="basic tabs example"
							className="flex w-full"
						>
							{tabs.map(({ label, value }) => (
								<Tab className="flex-auto" key={label} label={label} />
							))}
						</Tabs>
					</div>
				</div>
			)}

			<div className="flex justify-end">
				<div className="flex flex-col">
					<p className="flex text-sm text-gray-500 mb-[10px]">
						Toggle currency
					</p>
					<ButtonGroup variant="outlined">
						{acceptedCurrency.map(({ label, value }) => (
							<Button
								key={value}
								sx={{
									backgroundColor:
										(value === donationFormDetails?.selectedCurrency &&
											"#ed1c24 !important") ||
										"",
									color:
										(value === donationFormDetails?.selectedCurrency &&
											"white !important") ||
										"",
								}}
								onClick={() => {
									setSelectedCurrency(value);
								}}
							>
								{label}
							</Button>
						))}
					</ButtonGroup>
				</div>
			</div>

			<div className="flex flex-col">
				{donationFormDetails?.recommended.length === 0 && (
					<div>
						<p className="my-[20px] text-gray-600">Donation amount</p>
						<Input
							placeholder="Enter amount"
							value={donationFormDetails?.donationAmount}
							onChange={(event) => setDonationAmount(event.target.value)}
						/>
					</div>
				)}
				{donationFormDetails && donationFormDetails.recommended.length > 0 && (
					<div>
						<p className="mb-[10px] text-gray-600">Select an amount</p>
						<div className="flex flex-wrap space-x-2">
							{[...donationFormDetails?.recommended, "Other"].map((amount) => (
								<div key={amount} className="flex mb-[10px]">
									<Button
										variant="outlined"
										sx={{
											backgroundColor:
												(amount === donationFormDetails?.donationAmount &&
													"#ed1c24 !important") ||
												"",
											color:
												(amount === donationFormDetails?.donationAmount &&
													"white !important") ||
												"",
										}}
										onClick={() => {
											if (amount === "Other") {
												setShowOtherAmountInput(true);
												setDonationAmount("");
											} else {
												setShowOtherAmountInput(false);
												setDonationAmount(amount);
											}
										}}
									>
										<div>
											<span className="hidden md:inline-block">{`${
												amount === "Other"
													? ""
													: donationFormDetails?.selectedCurrency
											} `}</span>{" "}
											{amount}
										</div>
									</Button>
								</div>
							))}
						</div>
						<div className="">
							{showOtherAmountInput && (
								<Input
									placeholder="Enter amount"
									value={donationFormDetails?.donationAmount}
									onChange={(event) => setDonationAmount(event.target.value)}
								/>
							)}
						</div>
					</div>
				)}
			</div>

			{donationFormDetails?.donationAmount && (
				<div>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									onClick={toggleHandleProcessingFee}
									checked={donationFormDetails?.handleProcessingFee}
								/>
							}
							label={
								<Label
									processingFee={donationFormDetails?.processingFee}
									currency={donationFormDetails?.selectedCurrency}
								/>
							}
						/>
					</FormGroup>
				</div>
			)}
		</div>
	);
};

export default DonationFormAmount;
