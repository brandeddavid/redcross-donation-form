import React, { useState } from "react";
import { Tabs, Tab, TextField } from "@mui/material";
import Button from "./Button";

type Props = {};

const paymentOptions = ["Mpesa", "Card", "Airtel Money", "TKash"];

const DonationFormPayment = (props: Props) => {
	const [paymentOption, setPaymentOption] = useState("Mpesa");

	return (
		<div className="space-y-[40px]">
			<div className="max-w-[300px] md:max-w-none mt-[20px]">
				<Tabs
					value={paymentOption}
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
			{paymentOption === "Mpesa" && (
				<div className="flex flex-col justify-center space-y-[40px]">
					<TextField
						label="Enter Mpesa Number"
						placeholder="Enter Mpesa number"
						variant="standard"
					/>

					<TextField
						label="Amount"
						placeholder="Enter amount"
						variant="standard"
					/>
					<Button onClick={() => {}}>Initiate Payment</Button>
				</div>
			)}

			{paymentOption === "Card" && (
				<div className="flex flex-col justify-center space-y-[40px]">
					<Button onClick={() => {}}>Initiate Payment</Button>
				</div>
			)}

			{paymentOption === "Airtel Money" && (
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

			{paymentOption === "TKash" && (
				<div>
					<p>To make payment, follow these steps:</p>
					<div className="flex p-[20px]">
						<ol className="text-gray-500 mt-[20px] list-outside list-decimal">
							<li>Go to Tkash menu on your phone or Use the T-kash App.</li>
							<li>Select “Paybill”</li>
							<li>Select “T-kash Paybill”.</li>
							<li>Enter “Paybill Number”</li>
							<li>Enter “Campaign”</li>
							<li>Enter “Amount”</li>
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
