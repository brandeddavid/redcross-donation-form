"use client";
import FormFooter from "@/components/FormFooter";
import FormHeader from "@/components/FormHeader";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [step, setStep] = useState(1);

	return (
		<main className="flex w-full min-h-screen">
			<div className="flex-auto">
				<div className="relative w-full h-full">
					<Image
						src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/maasai.jpg"
						alt=""
						fill
					/>
				</div>
			</div>
			<div className="flex-auto bg-white">
				<div className="flex flex-col justify-between h-full p-10">
					<div className="flex-auto">
						<FormHeader step={step} />
					</div>
					<div className="flex-auto">Hello</div>
					<div className="flex-auto">
						<FormFooter />
					</div>
				</div>
			</div>
		</main>
	);
}
