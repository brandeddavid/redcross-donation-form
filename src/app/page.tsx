"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@mui/material/Button";
import SelectDropdown from "@/components/SelectDropdown";
import { SelectChangeEvent } from "@mui/material/Select";

export default function Home() {
	const causeOptions = [
		{
			label: "Red Cross 1",
			value: "red-cross-1",
		},
		{
			label: "Red Cross 2",
			value: "red-cross-2",
		},
	];

	const [step, setStep] = useState(0);
	const [selectedCause, setSelectedCause] = useState("");

	const onCauseSelect = (event: SelectChangeEvent) => {
		setSelectedCause(event.target.value);
	};

	return (
		<main className="flex w-full min-h-screen">
			<div className="flex-1 hidden md:flex">
				<div className="relative w-full h-full">
					<Image
						src={`https://brandeddavid.s3.eu-west-1.amazonaws.com/public/${
							selectedCause || "maasai"
						}.jpg`}
						alt=""
						fill
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center flex-1 text-center bg-white space-y-[50px] md:px-5">
				<div>
					<h1 className="text-5xl text-[#dc1a22]">Support our Cause</h1>
					<h3 className="text-2xl">
						Donate today to support humanitarian work around Kenya.
					</h3>
				</div>

				<div>
					<SelectDropdown
						dropDownOptions={causeOptions}
						selectedOption={selectedCause}
						onChange={onCauseSelect}
					/>
				</div>
				<div>
					<Button className="" variant="outlined">
						Continue
					</Button>
				</div>
			</div>
		</main>
	);
}
