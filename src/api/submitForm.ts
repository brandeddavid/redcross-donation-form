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
		paymentOption,
		totalDonationAmount,
		handleProcessingFee,
		donateAnonymously,
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
			amount: handleProcessingFee ? totalDonationAmount : donationAmount,
			paymentMethod: paymentOption === "Mpesa" ? 1 : 2,
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

			let bodyContent = JSON.stringify({
				reference_id: donationId.toString(),
				amount: handleProcessingFee ? totalDonationAmount : donationAmount,
				currency: "KES",
				callback_url: "http://196.43.239.57/api/process-payment",
				redirect_url: "http://196.43.239.57/form",
				express_mpesa:
					donationFormDetails?.paymentOption === "Mpesa" ? true : false,
				msisdn: donationFormDetails?.phoneNumber,
				first_name: donationFormDetails?.firstName,
				last_name: donationFormDetails?.lastName,
				address: donationFormDetails?.address,
				state: donationFormDetails?.county,
				country: donationFormDetails?.country,
			});

			let reqOptions = {
				url: "http://sandbox.finsprint.io/api/v1/request-checkout",
				method: "POST",
				headers: headersList,
				data: bodyContent,
			};

			try {
				const response = await axios.request(reqOptions);
				const {
					status,
					data: { url, trace_id, reference_id, token, merchantCode, extraData },
				} = response;

				if (status === 200) {
					return {
						url,
						traceId: trace_id,
						referenceId: reference_id,
						token,
						merchantCode,
						extraData,
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
