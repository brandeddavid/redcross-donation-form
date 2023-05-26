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
} from "@mui/material";
import RadioButton from "./RadioButton";
import Button from "../components/Button";
import { DonationFormContext } from "../context/donationFormContext";

type Props = {};
type LabelProps = {
	processingFee: string;
	currency: string | undefined;
};

const tabs = ["ONE TIME", "MONTHLY"];
const acceptedCurrency = ["KES", "USD"];

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
	} = useContext(DonationFormContext);

	return (
		<div className="py-[10px] md:py-[50px] md:px-5 flex flex-col space-y-[20px] md:space-y-[30px]">
			<RadioButton
				formLabel="Select donate as"
				radioOptions={[
					{ label: "Individual", value: "individual" },
					{ label: "Company", value: "company" },
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
								setActiveTab(value);
							}}
							aria-label="basic tabs example"
							className="flex w-full"
						>
							{tabs.map((tab) => (
								<Tab className="flex-auto" key={tab} label={tab} />
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
					<ButtonGroup variant="outlined" aria-label="button group">
						{acceptedCurrency.map((currency) => (
							<Button
								key={currency}
								className={`${
									(currency === donationFormDetails?.selectedCurrency &&
										"bg-[#ed1c24] text-white hover:bg-[#ed1c24]") ||
									""
								}`}
								onClick={() => {
									setSelectedCurrency(currency);
									setDonationAmount("");
								}}
							>
								{currency}
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
							{donationFormDetails?.recommended.map((amount) => (
								<div key={amount} className="flex mb-[10px]">
									<Button
										className={`min-w-[100px] ${
											(amount === donationFormDetails?.donationAmount &&
												"bg-[#ed1c24] text-white hover:bg-[#ed1c24]") ||
											""
										}`}
										variant="outlined"
										onClick={() => {
											if (amount === "Other") {
												setShowOtherAmountInput(true);
												setDonationAmount("");
											} else {
												setShowOtherAmountInput(false);
												setDonationAmount(amount.toString());
											}
										}}
									>
										<div>
											<span className="hidden md:inline-block">{`${
												amount === "Other"
													? ""
													: donationFormDetails?.selectedCurrency
											} `}</span>
											{amount}
										</div>
									</Button>
								</div>
							))}
						</div>
						<div className="mt-[20px]">
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
