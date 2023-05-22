"use client";
import React from "react";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

type Props = {
	formLabel: string;
	radioOptions: Array<{ label: string; value: string }>;
	onChange: (value: string) => void;
	selectedOption: string;
};

function RadioButton({
	formLabel,
	radioOptions,
	onChange,
	selectedOption,
}: Props) {
	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">{formLabel}</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
				className="md:space-x-[40px]"
			>
				{radioOptions.map(({ label, value }) => (
					<FormControlLabel
						value={value}
						control={
							<Radio
								sx={{
									"&.Mui-checked": {
										color: "#dc1a22",
									},
								}}
								onChange={() => onChange(value)}
								checked={selectedOption === value}
							/>
						}
						label={label}
						key={value}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
}

export default RadioButton;
