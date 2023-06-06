import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DonationFormContext } from "../context/donationFormContext";

type Props = {};

const InvisibleForm = (props: Props) => {
	const { donationFormDetails } = useContext(DonationFormContext);

	useEffect(() => {
		console.log({ donationFormDetails });
		// document.getElementById("button")?.click();
	}, []);

	return (
		<form
			id="submitCheckout"
			action="https://v3-uat.jengapgw.io/processPayment"
			method="POST"
		>
			<input
				type="hidden"
				id="token"
				value="eyJhbGciOiJSUzUxMiJ9.eyJ0b2tlblR5cGUiOiJNRVJDSEFOVCIsImVudiI6IlVBVCIsImV4cCI6MTY4NjAzODIwNywiaWF0IjoxNjg2MDM3MzA3LCJhY2NvdW50IjoiNjBGMzI0NTUyNjkyRjMyNEJGN0Y4QzNCNUZEMThENkRGNUZEN0Q1NDNCQ0E5RjAxOTYzRTYxRTFDQ0ZEODY5NTM3MTYzQjgyNzMxMUFDNEY2NTdCMjAzMDg0MjRGRDJGQ3J3RHFrV2g5VmhKdmpkRklVbHVjOTRLSUFtdTZ2eE9xZ3FJMWdPbjYwbStuR1BwL0M1d0VLSmVQMmZlcjJxRkpJdjVRdFVBWDNoT1R6VEhPL3VuVkk3dlpIR1ErNndVMTZudUlJbk1lN1IvcE8wczF6TFNFNGVCczRDNXZIMjBJcTVnZENCbEViYmZKMzdGWnBtTld5NkRqZENOY3loVjROOVVNaDNOL201K1VHYmtaSi95MkhRLzZGL0ZFNlhVc21QSVlXbTlDdys0SjAyVE42WjNNNEJZWE9TRFBNUGZQb0dteWM4WUNXSG0xQjZvZndwaU9vZkpVY3VEaER0SEVxZ2JJdUZybTVWOUd2YkZHOXl5RWlvNStKcXNNdy9mWGgveTMzT0hMTmJoNDFJOUNPeGVCQm5FNTd2Q3hYRTMwVU1TbnVNMmZENlpwN2xUbjBzR3hlcXczNXFZM05jRTJYblovYWF1MW5xa0ZKUG1WM29uNEQ1Z2thQTB6MHgvNE1WR2FNTUY0Ukt0Q1lWNFBpamg0clh1cXZsRUUzU1FwcXo2NzMwSmkvd21yVXFFSjVjcW5HRTd2OUZVWXdlZCJ9.HmIVBRxrAnOCb_bvWfZ-JqQZ7Y4DqUGvbXIbiraFNYG4EG_k2v8Q3Ws3YMuOgve2Zagh8onOqwtnNzJZqkWFQuFcDpKntN3etxqo7J5VAJPiJaiy8tJShyvXa6H6zZFyICpwr0XwYaZtcN7kHAJs3sog5IiT_su1AB0_LcEGDjHnF10zZonFhMK7bR0zWa6FdKqn3uxK7vsgH2qAR1JwE6Z2U---ifPuHwCTbjwq9_XX1E1y02Ow1sWn7tfmpy8hUiyRezvtPkiZGPGGrmR_hSLJUGVvS5v3YLkhxn0aHOBjpkOTg3Ku3qV9uUZMrS7BRlnfPKIw4KZqRtks4kxboQ"
				v-model="token"
				name="token"
			/>
			<input
				type="hidden"
				id="merchantCode"
				v-model="5462493591"
				name="merchantCode"
				value="5462493591"
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
				value={185}
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
				value="http://196.43.239.57/api/process-payment"
				name="callbackUrl"
			/>
			<input type="hidden" id="countryCode" value="KE" name="countryCode" />
			<input className="hidden" type="submit" id="button" />
		</form>
	);
};

export default InvisibleForm;
