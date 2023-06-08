"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ModalContent from "../../components/ModalContent";
import getDonation from "../../api/getDonation";

type Props = {};

const page = (props: Props) => {
	const router = useRouter();
	const donationId = useSearchParams().get("id");

	useEffect(() => {
		getDonation({ donationId });
	}, [donationId]);

	return (
		<div className="flex justify-center">
			<ModalContent />
		</div>
	);
};

export default page;
