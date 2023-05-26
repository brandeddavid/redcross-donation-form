"use client";
import React from "react";

type Props = {
	step: number;
};

const FormHeader = ({ step }: Props) => {
	const getHeader = (step: number) => {
		switch (step) {
			case 1:
				return "Make a Donation";
		}
	};

	return (
		<div className="border-0 border-b border-blue-900 border-solid">
			<h1 className="text-3xl text-[#ed1c24]">{`Step ${step}`}</h1>
			<h1 className="mt-5 mb-5 text-3xl">{getHeader(step)}</h1>
		</div>
	);
};

export default FormHeader;
