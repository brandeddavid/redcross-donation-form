import React from "react";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

type Props = {
	formLabel: string;
	radioOptions: Array<{ label: string; value: string }>;
};

function RadioButton({ formLabel, radioOptions }: Props) {
	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">{formLabel}</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
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
