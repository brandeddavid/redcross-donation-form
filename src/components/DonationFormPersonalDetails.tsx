"use client";
import React, { useContext } from "react";
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
import { motion } from "framer-motion";
import { DonationFormContext } from "../context/donationFormContext";
import { RedcrossCausesContext } from "@/context/redcrossCausesContext";

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

	const { countries, counties } = useContext(RedcrossCausesContext);
	const showDonateAnonymously =
		donationFormDetails?.donateAs === "private" &&
		donationFormDetails?.donationOption === "donate-now";

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			transition={{ duration: 0.5 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="p-[30px] flex flex-col space-y-[40px]"
		>
			{showDonateAnonymously && (
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
			)}

			{!donationFormDetails?.donateAnonymously && (
				<FormGroup className="space-y-[40px]">
					{donationFormDetails?.donateAs === "organisation" && (
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
							type="number"
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
								{countries.map(({ label, value }: CountryOption) => {
									return (
										<MenuItem key={value} value={label}>
											{label}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
						{donationFormDetails?.country === "Kenya" && (
							<FormControl variant="standard" className="flex-1">
								<InputLabel id="demo-simple-select-standard-label">
									County
								</InputLabel>
								<Select
									label="County"
									placeholder="Enter County"
									variant="standard"
									value={donationFormDetails?.county}
									onChange={(event) => {
										setCounty(event.target.value);
									}}
									fullWidth
								>
									{counties.map(({ label, value }: CountryOption) => {
										return (
											<MenuItem key={value} value={label}>
												{label}
											</MenuItem>
										);
									})}
								</Select>
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
		</motion.div>
	);
};

export default DonationFormPersonalDetails;
