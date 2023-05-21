"use client";
import React, { useEffect, useState } from "react";
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
import Button from "@/components/Button";

type Props = {
	donation: string | number;
	setDonation: (value: string) => void;
	selectedCurrency: string;
	setSelectedCurrency: (value: string) => void;
	donateAs: string;
	setDonateAs: (value: string) => void;
	handleProcessingFee: boolean;
	toggleHandleProcessingFee: () => void;
	processingFee: number;
};
type LabelProps = {
	processingFee: number;
	currency: string;
};

const tabs = ["ONE TIME", "MONTHLY"];
const acceptedCurrency = ["KES", "USD"];

const Label = ({ processingFee, currency }: LabelProps) => (
	<div className="text-sm text-gray-500">
		Please add{" "}
		<span className="text-[#dc1a22]">{`${currency} ${processingFee}`}</span> to
		cover processing fees & other expenses associated with my donation
	</div>
);

const DonationFormAmount = ({
	donation,
	setDonation,
	selectedCurrency,
	setSelectedCurrency,
	donateAs,
	setDonateAs,
	handleProcessingFee,
	toggleHandleProcessingFee,
	processingFee,
}: Props) => {
	const [activeTab, setActiveTab] = useState(0);
	const [donationOption, setDonationOption] = useState("");
	const [recommended, setRecommended] = useState<any[]>([]);
	const [showOtherAmountInput, setShowOtherAmountInput] = useState(false);

	useEffect(() => {
		const individualKSH = [100, 500, 1000, "Other"];
		const individualUSD = [1, 50, 100, "Other"];
		const companyKSH = [10000, 50000, 100000, "Other"];
		const companyUSD = [1000, 5000, 10000, "Other"];

		if (donateAs === "individual" && selectedCurrency === "KES")
			setRecommended(individualKSH);

		if (donateAs === "individual" && selectedCurrency === "USD")
			setRecommended(individualUSD);

		if (donateAs === "company" && selectedCurrency === "KES")
			setRecommended(companyKSH);

		if (donateAs === "company" && selectedCurrency === "USD")
			setRecommended(companyUSD);
	}, [donateAs, selectedCurrency]);

	return (
		<div className="py-[50px] px-5 flex flex-col space-y-[30px]">
			<RadioButton
				formLabel="Select donate as"
				radioOptions={[
					{ label: "Individual", value: "individual" },
					{ label: "Company", value: "company" },
				]}
				onChange={(value) => setDonateAs(value)}
				selectedOption={donateAs}
			/>
			<RadioButton
				formLabel="Select donation option"
				radioOptions={[
					{ label: "Donate Now", value: "donate-now" },
					{ label: "Make a Pledge", value: "make-pledge" },
				]}
				onChange={(value) => setDonationOption(value)}
				selectedOption={donationOption}
			/>

			{donationOption !== "donate-now" && (
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
									(currency === selectedCurrency &&
										"bg-[#dc1a22] text-white hover:bg-[#dc1a22]") ||
									""
								}`}
								onClick={() => {
									setSelectedCurrency(currency);
									setDonation("");
								}}
							>
								{currency}
							</Button>
						))}
					</ButtonGroup>
				</div>
			</div>

			<div className="flex flex-col">
				<p className="mb-[10px] text-gray-600">Select an amount</p>
				<div className="flex justify-between space-x-2">
					{recommended.map((amount) => (
						<div key={amount} className="flex">
							<Button
								variant="outlined"
								onClick={() => {
									if (amount === "Other") {
										setShowOtherAmountInput(true);
										setDonation("");
									} else {
										setShowOtherAmountInput(false);
										setDonation(amount);
									}
								}}
							>
								<div>
									{`${amount === "Other" ? "" : selectedCurrency} ${amount}`}
								</div>
							</Button>
						</div>
					))}
				</div>
				<div className="mt-[20px]">
					{showOtherAmountInput && (
						<Input
							placeholder="Enter amount"
							value={donation}
							onChange={(event) => setDonation(event.target.value)}
						/>
					)}
				</div>
			</div>

			{donation && (
				<div>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									onClick={toggleHandleProcessingFee}
									checked={handleProcessingFee}
								/>
							}
							label={
								<Label
									processingFee={processingFee}
									currency={selectedCurrency}
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
