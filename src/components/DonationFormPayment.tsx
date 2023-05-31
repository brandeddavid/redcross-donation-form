import React, { useState, useContext } from "react";
import { Tabs, Tab, TextField } from "@mui/material";
import Button from "./Button";
import { DonationFormContext } from "../context/donationFormContext";

type Props = {};

const paymentOptions = ["Mpesa", "Card", "Airtel Money", "TKash"];

const DonationFormPayment = ({}: Props) => {
	const {
		donationFormDetails,
		setPaymentOption,
		setDonationAmount,
		setPhoneNumber,
	} = useContext(DonationFormContext);

	return (
		<div className="space-y-[40px]">
			<div className="max-w-[300px] md:max-w-none mt-[20px]">
				<Tabs
					value={donationFormDetails?.paymentOption}
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
				>
					{paymentOptions.map((option) => (
						<Tab
							key={option}
							label={option}
							value={option}
							onClick={() => setPaymentOption(option)}
						/>
					))}
				</Tabs>
			</div>
			{donationFormDetails?.paymentOption === "Mpesa" && (
				<div className="flex justify-center min-h-[250px]">
					<div className="flex flex-col justify-center space-y-[40px] w-[300px]">
						<TextField
							label="Enter Mpesa Number"
							placeholder="Enter Mpesa number"
							variant="standard"
							value={donationFormDetails?.phoneNumber}
							onChange={(event) => {
								setPhoneNumber(event.target.value);
							}}
						/>

						<TextField
							label="Amount"
							placeholder="Enter amount"
							variant="standard"
							value={`${
								donationFormDetails?.handleProcessingFee
									? donationFormDetails?.totalDonationAmount
									: donationFormDetails?.donationAmount
							}`}
							onChange={(event) => {
								setDonationAmount(event.target.value);
							}}
						/>
					</div>
				</div>
			)}

			{/* {donationFormDetails?.paymentOption === "Card" && (
				<div className="flex flex-col justify-center space-y-[40px]">
					<Button onClick={() => {}}>{`Donate ${
						donationFormDetails?.selectedCurrency
					} ${
						donationFormDetails?.handleProcessingFee
							? donationFormDetails?.totalDonationAmount
							: donationFormDetails?.donationAmount
					}`}</Button>
				</div>
			)} */}

			{donationFormDetails?.paymentOption === "Airtel Money" && (
				<div>
					<p>To make payment, follow these steps:</p>
					<div className="flex p-[20px]">
						<ol className="text-gray-500 mt-[20px] list-outside list-decimal">
							<li>Go to Airtel on your phone.</li>
							<li>Select &#39;Send Money&#39;.</li>
							<li>Enter &#39;Nick Name&#39;: Redcross.</li>
							<li>Enter your Airtel PIN.</li>
							<li>Enter the reference: leave it blank.</li>
							<li>You will receive an SMS from Airtel.</li>
						</ol>
					</div>
				</div>
			)}

			{donationFormDetails?.paymentOption === "TKash" && (
				<div>
					<p>To make payment, follow these steps:</p>
					<div className="flex p-[20px]">
						<ol className="text-gray-500 mt-[20px] list-outside list-decimal">
							<li>Go to Tkash menu on your phone or Use the T-kash App.</li>
							<li>Select “Paybill”</li>
							<li>Select “T-kash Paybill”.</li>
							<li>Enter “Paybill Number”</li>
							<li>Enter “Campaign”</li>
							<li>
								Enter{" "}
								{`${
									donationFormDetails?.handleProcessingFee
										? donationFormDetails?.totalDonationAmount
										: donationFormDetails?.donationAmount
								}`}
							</li>
							<li>Confirm transaction.</li>
							<li>Enter T-kash PIN.</li>
							<li>You will receive a confirmation SMS from T-kash.</li>
						</ol>
					</div>
				</div>
			)}
		</div>
	);
};

export default DonationFormPayment;
