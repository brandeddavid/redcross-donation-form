import axios from "axios";

const onSubmit = async ({
	setIsSubmitting,
	donationFormDetails,
	selectedCauseId,
}: any) => {
	setIsSubmitting(true);

	console.log({ donationFormDetails });

	const {
		selectedCurrency,
		donateAs,
		firstName,
		lastName,
		companyName,
		phoneNumber,
		address,
		county,
		country,
		donationAmount,
		totalDonationAmount,
		handleProcessingFee,
		donateAnonymously,
		email,
		donationOption,
		pledgeFrequency,
		processingFee,
	}: any = donationFormDetails;

	try {
		const res = await axios.post(`https://${process.env.API_HOST}/api/donate`, {
			currency: selectedCurrency === "KES" ? 1 : 2,
			donorType: donateAs === "private" ? 1 : 2,
			campaignId: selectedCauseId,
			firstName: donateAnonymously ? "Anonymous" : firstName,
			lastName: donateAnonymously ? "Anonymous" : lastName,
			companyName: donateAnonymously ? "Anonymous" : companyName,
			phoneNumber: donateAnonymously ? 0 : phoneNumber,
			address: donateAnonymously ? "Anonymous" : address,
			county: donateAnonymously ? "Anonymous" : county,
			country: donateAnonymously ? "Anonymous" : country,
			email: donateAnonymously ? "Anonymous" : email,
			amount: handleProcessingFee ? totalDonationAmount : donationAmount,
			paymentMethod: donationOption === "donate-now" ? 1 : 2,
			pledgeFrequency,
			processingFee: handleProcessingFee ? processingFee : null,
		});
		const {
			data: { donationId },
		} = res;

		if (donationId) {
			let headersList = {
				Accept: "*/*",
				"Content-Type": "application/json",
				Authorization: "Bearer 8|z3ENPPlGqifZ09GfnHQhfpKWMvvm6tDwZ1k5IW1v",
			};
			let bodyContentShared = {
				reference_id: donationId.toString(),
				amount: handleProcessingFee ? totalDonationAmount : donationAmount,
				currency: donationFormDetails?.selectedCurrency,
				callback_url: `https://${process.env.API_HOST}/api/process-payment`,
				redirect_url: `https://${process.env.API_HOST}/status?id=${donationId}`,
				msisdn: donationFormDetails?.phoneNumber,
				email: donationFormDetails?.email,
				address: donationFormDetails?.address,
				state: donationFormDetails?.county,
				country: donationFormDetails?.country,
			};
			let bodyContentDonateNow = JSON.stringify({
				...bodyContentShared,
				first_name: donationFormDetails?.firstName,
				last_name: donationFormDetails?.lastName,
				express_mpesa:
					donationFormDetails?.paymentOption === "Mpesa" ? true : false,
			});
			let bodyContentPledge = JSON.stringify({
				...bodyContentShared,
				notification_channels: "email",
				name: `${donationFormDetails?.firstName} ${donationFormDetails?.lastName}`,
			});
			let reqOptions = {
				url:
					donationOption === "donate-now"
						? "https://ke.finsprint.io/api/v1/request-checkout"
						: "https://ke.finsprint.io/api/v1/invoices/create",
				method: "POST",
				headers: headersList,
				data:
					donationOption === "donate-now"
						? bodyContentDonateNow
						: bodyContentPledge,
			};

			try {
				const response = await axios.request(reqOptions);
				const {
					status,
					data: {
						url,
						trace_id,
						reference_id,
						extra_data: {
							jenga: { token, merchantCode, extraData, callbackUrl },
						},
					},
				} = response;

				if (status === 200) {
					return {
						url,
						traceId: trace_id,
						referenceId: reference_id,
						token,
						merchantCode,
						extraData,
						callbackUrl,
					};
				}
				setIsSubmitting(false);
			} catch (error) {
				console.error(error);
				setIsSubmitting(false);
			} finally {
				setIsSubmitting(false);
			}
		}
	} catch (error) {
		console.log(error);
		setIsSubmitting(false);
	} finally {
		setIsSubmitting(false);
	}
};

export default onSubmit;
