import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

type Props = {};

const paymentOptions = ["Mpesa", "Card", "Airtel Money", "TKash"];

const DonationFormPayment = (props: Props) => {
	const [paymentOption, setPaymentOption] = useState("Mpesa");
	return (
		<div>
			<Tabs
				centered
				value={paymentOption}
				variant="scrollable"
				scrollButtons
				allowScrollButtonsMobile
			>
				{paymentOptions.map((option) => (
					<Tab key={option} label={option} value={option} onClick={() => {}} />
				))}
			</Tabs>
		</div>
	);
};

export default DonationFormPayment;
