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
	MenuItem,
} from "@mui/material";
import { DonationFormContext } from "../context/donationFormContext";

type Props = {};
type CountryOption = {
	label: string;
	value: string;
};

const DonationFormPersonalDetails = ({}: Props) => {
	const {
		donationFormDetails,
		setDonateAnonymously,
		setFirstName,
		setLastName,
		setCompanyName,
		setAddress,
		setCountry,
		setCounty,
		setEmail,
		setPhoneNumber,
	} = useContext(DonationFormContext);

	const countryList: CountryOption[] = [
		{
			value: "KE",
			label: "Kenya",
		},
		{
			value: "US",
			label: "United States",
		},
		{
			value: "CA",
			label: "Canada",
		},
		{
			value: "AU",
			label: "Australia",
		},
		{
			value: "BR",
			label: "Brazil",
		},
		{
			value: "IN",
			label: "India",
		},
		{
			value: "GB",
			label: "United Kingdom",
		},
		{
			value: "NZ",
			label: "New Zealand",
		},
		{
			value: "SG",
			label: "Singapore",
		},
		{
			value: "JP",
			label: "Japan",
		},
	];

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
								value={donationFormDetails?.companyName}
								onChange={(event) => {
									setCompanyName(event.target.value);
								}}
							/>
						</div>
					)}
					<div className="flex justify-between space-x-5">
						<TextField
							label="First name"
							placeholder="Enter first name"
							variant="standard"
							className="flex-1"
							value={donationFormDetails?.firstName}
							onChange={(event) => {
								setFirstName(event.target.value);
							}}
						/>
						<TextField
							label="Last name"
							placeholder="Enter last name"
							variant="standard"
							className="flex-1"
							value={donationFormDetails?.lastName}
							onChange={(event) => {
								setLastName(event.target.value);
							}}
						/>
					</div>
					<div className="flex">
						<TextField
							label="Email"
							placeholder="Enter email"
							variant="standard"
							fullWidth
							type="email"
							value={donationFormDetails?.email}
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
					</div>
					<div className="flex">
						<TextField
							label="Phone"
							placeholder="Enter phone"
							variant="standard"
							fullWidth
							value={donationFormDetails?.phoneNumber}
							onChange={(event) => {
								setPhoneNumber(event.target.value);
							}}
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
								fullWidth
								value={donationFormDetails?.country}
								onChange={(event) => {
									setCountry(event.target.value);
								}}
							>
								{countryList.map(({ label, value }: CountryOption) => {
									return (
										<MenuItem key={value} value={value}>
											{label}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
						{donationFormDetails?.country === "KE" && (
							<FormControl variant="standard" className="flex-1">
								<InputLabel id="demo-simple-select-standard-label">
									County/Region/State
								</InputLabel>
								<Select
									label="County/Region/State"
									placeholder="Enter County/Region/State"
									variant="standard"
									value={donationFormDetails?.county}
									onChange={(event) => {
										setCounty(event.target.value);
									}}
									fullWidth
								/>
							</FormControl>
						)}
					</div>
					<div className="flex mb-[40px]">
						<TextField
							label="Physical address"
							placeholder="Enter physical address"
							variant="standard"
							fullWidth
							value={donationFormDetails?.address}
							onChange={(event) => {
								setAddress(event.target.value);
							}}
						/>
					</div>
				</FormGroup>
			)}
		</div>
	);
};

export default DonationFormPersonalDetails;
