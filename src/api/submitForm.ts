import axios from "axios";

const onSubmit = async ({
	setIsSubmitting,
	donationFormDetails,
	selectedCauseId,
}: any) => {
	setIsSubmitting(true);

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
	}: any = donationFormDetails;

	try {
		const res = await axios.post(`http://${process.env.API_HOST}/api/donate`, {
			currency: selectedCurrency === "KES" ? 1 : 2,
			donorType: donateAs === "private" ? 1 : 2,
			campaignId: selectedCauseId,
			firstName: donateAnonymously ? "Anonymous" : firstName,
			lastName: donateAnonymously ? "Anonymous" : lastName,
			companyName: donateAnonymously ? "Anonymous" : companyName,
			phoneNumber: donateAnonymously ? "Anonymous" : phoneNumber,
			address: donateAnonymously ? "Anonymous" : address,
			county: donateAnonymously ? "Anonymous" : county,
			country: donateAnonymously ? "Anonymous" : country,
			email: donateAnonymously ? "Anonymous" : email,
			amount: handleProcessingFee ? totalDonationAmount : donationAmount,
			paymentMethod: donationOption === "donate-now" ? 1 : 2,
		});
		const {
			data: { donationId },
		} = res;

		if (donationId) {
			let headersList = {
				Accept: "*/*",
				"Content-Type": "application/json",
				Authorization: "Bearer 2|xCkinFbNY92kH2dwZ2fHW6b0W2fVFfxouIatC5xG",
			};
			let bodyContentShared = {
				reference_id: donationId.toString(),
				amount: handleProcessingFee ? totalDonationAmount : donationAmount,
				currency: donationFormDetails?.selectedCurrency,
				callback_url: "http://196.43.239.57/api/process-payment",
				redirect_url: `http://196.43.239.57/status?id=${donationId}`,
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
						? "https://sandbox.finsprint.io/api/v1/request-checkout"
						: "https://sandbox.finsprint.io/api/v1/invoices/create",
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
						token,
						merchantCode,
						extraData,
						callbackUrl,
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
