import React, { useEffect, useState } from "react";
import { Tabs, Tab, Button, ButtonGroup, Input } from "@mui/material";
import RadioButton from "./RadioButton";

type Props = {};
const tabs = ["ONE TIME", "MONTHLY"];
const acceptedCurrency = ["KSH", "USD"];

const DonationFormAmount = (props: Props) => {
	const [selectedCurrency, setSelectedCurrency] = useState("KSH");
	const [activeTab, setActiveTab] = useState(0);
	const [donateAs, setDonateAs] = useState("individual");
	const [paymentOption, setPaymentOption] = useState("");
	const [recommended, setRecommended] = useState([]);
	const [donation, setDonation] = useState("");
	const [showOtherAmountInput, setShowOtherAmountInput] = useState(false);

	useEffect(() => {
		const individualKSH = [100, 500, 1000, "Other"];
		const individualUSD = [1, 50, 100, "Other"];
		const companyKSH = [10000, 50000, 100000, "Other"];
		const companyUSD = [1000, 5000, 10000, "Other"];

		if (donateAs === "individual" && selectedCurrency === "KSH")
			setRecommended(individualKSH);

		if (donateAs === "individual" && selectedCurrency === "USD")
			setRecommended(individualUSD);

		if (donateAs === "company" && selectedCurrency === "KSH")
			setRecommended(companyKSH);

		if (donateAs === "company" && selectedCurrency === "USD")
			setRecommended(companyUSD);
	}, [donateAs, selectedCurrency]);
	return (
		<div className="p-[30px] flex flex-col space-y-[40px]">
			<RadioButton
				formLabel="Select donate as"
				radioOptions={[
					{ label: "Individual", value: "individual" },
					{ label: "Company", value: "company" },
				]}
				onChange={(value) => setDonateAs(value)}
				selectedOption={donateAs}
			/>
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
			<div className="flex justify-end overflow-scroll">
				<ButtonGroup variant="outlined" aria-label="button group">
					{acceptedCurrency.map((currency) => (
						<Button
							key={currency}
							className={`${
								(currency === selectedCurrency &&
									"bg-[#dc1a22] text-white hover:bg-[#dc1a22]") ||
								""
							}`}
							onClick={() => setSelectedCurrency(currency)}
						>
							{currency}
						</Button>
					))}
				</ButtonGroup>
			</div>
			<div className="flex flex-col space-y-2">
				<div className="flex space-x-2">
					{recommended.map((amount) => (
						<Button
							className={`${
								(amount === donation &&
									"bg-[#dc1a22] text-white hover:bg-[#dc1a22]") ||
								""
							}`}
							key={amount}
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
							{amount}
						</Button>
					))}
				</div>
				<div>{showOtherAmountInput && <Input />}</div>
			</div>
			<RadioButton
				formLabel="Select payment option"
				radioOptions={[
					{ label: "Pay Now", value: "pay-now" },
					{ label: "Make Pledge", value: "make-pledge" },
				]}
				onChange={(value) => setPaymentOption(value)}
				selectedOption={paymentOption}
			/>
		</div>
	);
};

export default DonationFormAmount;
