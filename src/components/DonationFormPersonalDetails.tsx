"use client";
import React, { useContext, useState } from "react";
import {
	Checkbox,
	FormGroup,
	FormControlLabel,
	TextField,
	Select,
	InputLabel,
	FormControl,
} from "@mui/material";
import { DonationFormContext } from "../context/donationFormContext";

type Props = {};

const DonationFormPersonalDetails = ({}: Props) => {
	const { donationFormDetails, setDonateAnonymously } =
		useContext(DonationFormContext);

	return (
		<div className="p-[30px] flex flex-col space-y-[40px]">
			<div>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={donationFormDetails?.donateAnonymously}
								onClick={setDonateAnonymously}
							/>
						}
						label="Donate anonymously"
					/>
				</FormGroup>
			</div>
			{!donationFormDetails?.donateAnonymously && (
				<FormGroup className="space-y-[40px]">
					{donationFormDetails?.donateAs === "company" && (
						<div className="flex">
							<TextField
								label="Company name"
								placeholder="Enter company name"
								variant="standard"
								fullWidth
							/>
						</div>
					)}
					<div className="flex justify-between space-x-5">
						<TextField
							label="First name"
							placeholder="Enter first name"
							variant="standard"
							className="flex-1"
						/>
						<TextField
							label="Last name"
							placeholder="Enter last name"
							variant="standard"
							className="flex-1"
						/>
					</div>
					<div className="flex">
						<TextField
							label="Email"
							placeholder="Enter email"
							variant="standard"
							fullWidth
						/>
					</div>
					<div className="flex">
						<TextField
							label="Phone"
							placeholder="Enter phone"
							variant="standard"
							fullWidth
						/>
					</div>
					<div className="flex justify-between space-x-5">
						<FormControl variant="standard" className="flex-1 ">
							<InputLabel id="demo-simple-select-standard-label">
								Country
							</InputLabel>
							<Select
								label="Country"
								placeholder="Enter Country"
								variant="standard"
								value="Kenya"
								fullWidth
							/>
						</FormControl>
						<FormControl variant="standard" className="flex-1">
							<InputLabel id="demo-simple-select-standard-label">
								County/Region/State
							</InputLabel>
							<Select
								label="County/Region/State"
								placeholder="Enter County/Region/State"
								variant="standard"
								value="Nairobi"
								fullWidth
							/>
						</FormControl>
					</div>
					<div className="flex mb-[40px]">
						<TextField
							label="Physical address"
							placeholder="Enter physical address"
							variant="standard"
							fullWidth
						/>
					</div>
				</FormGroup>
			)}
		</div>
	);
};

export default DonationFormPersonalDetails;
