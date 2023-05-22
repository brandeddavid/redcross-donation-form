"use client";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

type Option = { label: string; value: string };
type Options = Array<Option>;
type Props = {
	dropDownOptions: Options;
	selectedOption: string;
	onChange: (value: SelectChangeEvent) => void;
};

function SelectDropdown({ dropDownOptions, selectedOption, onChange }: Props) {
	return (
		<FormControl className="w-[300px] outline-[#ed1c24]">
			<InputLabel id="demo-simple-select-label">Select a cause</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={selectedOption}
				label="Select a cause"
				onChange={(option) => onChange(option)}
			>
				{dropDownOptions.map(({ label, value }) => (
					<MenuItem key={value} value={value}>
						{label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default SelectDropdown;
