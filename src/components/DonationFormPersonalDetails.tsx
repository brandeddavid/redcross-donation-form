"use client";
import React, { useState } from "react";
import {
	Checkbox,
	FormGroup,
	FormControlLabel,
	Input,
	TextField,
} from "@mui/material";

type Props = {};

const DonationFormPersonalDetails = (props: Props) => {
	const [donateAnonymously, setDonateAnonymously] = useState(false);
	return (
		<div className="p-[30px] flex flex-col space-y-[40px]">
			<div>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={donateAnonymously}
								onClick={() => setDonateAnonymously(!donateAnonymously)}
							/>
						}
						label="Donate anonymously"
					/>
				</FormGroup>
			</div>
			{!donateAnonymously && (
				<FormGroup>
					<div className="flex justify-between">
						<TextField
							label="First name"
							placeholder="Enter first name"
							variant="standard "
						/>
						<TextField label="Last name" placeholder="Enter last name" />
					</div>
				</FormGroup>
			)}
		</div>
	);
};

export default DonationFormPersonalDetails;
