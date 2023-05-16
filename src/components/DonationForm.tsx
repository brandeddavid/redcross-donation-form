import React, { useEffect, useState } from "react";
import {
	Divider,
	StepLabel,
	Step,
	Stepper,
	Tabs,
	Tab,
	Button,
	ButtonGroup,
	CardActions,
	CardHeader,
} from "@mui/material";
import RadioButton from "./RadioButton";

type Props = {
	step: number;
	onContinue: () => void;
};

const steps = ["Cause", "Amount", "Donate"];
const tabs = ["ONE TIME", "MONTHLY"];
const acceptedCurrency = ["KSH", "USD"];

function DonationForm({ step, onContinue }: Props) {
	const [selectedCurrency, setSelectedCurrency] = useState("KSH");
	const [activeTab, setActiveTab] = useState(0);
	const [donateAs, setDonateAs] = useState("individual");
	const [paymentOption, setPaymentOption] = useState("");
	const [recommended, setRecommended] = useState([]);
	const [donation, setDonation] = useState("");

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
		<div className="flex flex-col justify-center w-full md:w-[400px] lg:w-[600px]">
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
				<div className="flex justify-end">
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
							onClick={() => setDonation(amount)}
						>
							{amount}
						</Button>
					))}
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
			<Divider />
			<CardActions className="flex justify-between p-5">
				<Button className="px-[10px]" variant="outlined">
					Back
				</Button>
				<Button
					className="px-[10px] bg-[#dc1a22] text-white hover:bg-[#dc1a22]"
					onClick={onContinue}
				>
					Continue
				</Button>
			</CardActions>
		</div>
	);
}

export default DonationForm;
