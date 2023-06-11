"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ModalContent from "../../components/ModalContent";
import getDonation from "../../api/getDonation";

type Props = {};

const page = (props: Props) => {
	const donationId = useSearchParams().get("id");
	const [donation, setDonation] = useState<any>({});

	useEffect(() => {
		try {
			getDonation({ donationId }).then((res) => setDonation(res[0]));
		} catch (error) {
			console.error(error);
		}
	}, [donationId]);

	console.log({ donation, donationId });

	return (
		<div className="flex justify-center">
			<ModalContent status={donation?.payment_status} />
		</div>
	);
};

export default page;
