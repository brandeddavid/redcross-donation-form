import React, { useContext, useEffect } from "react";
import { DonationFormContext } from "../context/donationFormContext";

const InvisibleForm = () => {
	const { donationFormDetails } = useContext(DonationFormContext);

	const { traceId, token, merchantCode, referenceId, callbackUrl }: any =
		donationFormDetails;

	useEffect(() => {
		if (traceId && token && merchantCode && referenceId) {
			document.getElementById("button")?.click();
		}
	}, [traceId, token, merchantCode, referenceId]);

	return (
		<form
			id="submitCheckout"
			action="https://v3-uat.jengapgw.io/processPayment"
			method="POST"
		>
			<input
				type="hidden"
				id="token"
				value={token}
				v-model={token}
				name="token"
			/>
			<input
				type="hidden"
				id="merchantCode"
				v-model={merchantCode}
				name="merchantCode"
				value={merchantCode}
			/>
			<input
				type="hidden"
				id="currency"
				value={donationFormDetails?.selectedCurrency}
				name="currency"
			/>
			<input
				type="hidden"
				id="orderAmount"
				value={donationFormDetails?.donationAmount}
				name="orderAmount"
			/>
			<input
				type="hidden"
				id="orderReference"
				value={referenceId}
				name="orderReference"
			/>
			<input
				type="hidden"
				id="productType"
				value="CheckoutItem"
				name="productType"
			/>
			<input
				type="hidden"
				id="productDescription"
				value="donation"
				name="productDescription"
			/>
			<input
				type="hidden"
				id="customerFirstName"
				value={donationFormDetails?.firstName}
				name="customerFirstName"
			/>
			<input
				type="hidden"
				id="customerLastName"
				value={donationFormDetails?.lastName}
				name="customerLastName"
			/>
			<input
				type="hidden"
				id="customerPostalCodeZip"
				value="000"
				name="customerPostalCodeZip "
			/>
			<input
				type="hidden"
				id="customerAddress"
				value={donationFormDetails?.address}
				name=" customerAddress "
			/>
			<input
				type="hidden"
				id="customerEmail"
				value={donationFormDetails?.email}
				name="customerEmail"
			/>
			<input
				type="hidden"
				id="customerPhone"
				value={donationFormDetails?.phoneNumber}
			/>
			<input type="hidden" id="extraData" value="1mxrr1ilh4" name="extraData" />
			<input
				type="hidden"
				id="callbackUrl"
				value={callbackUrl}
				name="callbackUrl"
			/>
			<input
				type="hidden"
				id="redirectUrl"
				value={`http://196.43.239.57/status?id=${referenceId}`}
				name="redirectUrl"
			/>
			<input type="hidden" id="countryCode" value="KE" name="countryCode" />
			<input className="hidden" type="submit" id="button" />
		</form>
	);
};

export default InvisibleForm;
