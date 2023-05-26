"use client";
import React from "react";

type Props = {};

const FormStepOne = (props: Props) => {
	const donationType = [
		{
			label: "Individual",
			value: "individual",
		},
		{
			label: "Company",
			value: "company",
		},
	];

	return (
		<div>
			<div>
				<h3 className="mb-5 text-xl">Select donate as</h3>
				<div className="flex">
					{donationType.map(({ label, value }) => (
						<div key={value} className="mr-10">
							<label>
								<input type="radio" name={value} value={value} />
								<span className="pl-5">{label}</span>
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FormStepOne;
