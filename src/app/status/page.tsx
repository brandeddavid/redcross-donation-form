"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ModalContent from "../../components/ModalContent";
import getDonation from "../../api/getDonation";

type Props = {};

const page = (props: Props) => {
	const donationId = useSearchParams().get("id");
	const [donation, setDonation] = useState<any>({});
	const fetchDonation = () =>
		getDonation({ donationId }).then((res) => setDonation(res[0]));

	useEffect(() => {
		try {
			fetchDonation();
		} catch (error) {
			console.error(error);
		}
	}, [donationId]);

	return (
		<div className="flex justify-center">
			<ModalContent
				status={donation?.payment_status}
				fetchDonation={fetchDonation}
				paymentBody={donation?.payment_body}
				paymentOption={donation.payment_method === 1 ? "Mpesa" : "Card"}
			/>
		</div>
	);
};

export default page;
