"use client";
import React from "react";
import { DateTime } from "luxon";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import Socials from "./Socials";

const Footer = () => {
	const month = DateTime.now().toFormat("MMMM yyyy");
	const quickLinks = [
		{
			name: "Careers",
			linkTo: "/",
		},
		{
			name: "Publications",
			linkTo: "/",
		},
		{
			name: "Tenders",
			linkTo: "/",
		},
		{
			name: "Branches and Regions",
			linkTo: "/",
		},
		{
			name: "Staff Portal",
			linkTo: "/",
		},
		{
			name: "Staff Email",
			linkTo: "/",
		},
	];
	const platforms = [
		{
			name: "WEMA Platform",
			linkTo: "/",
		},
		{
			name: "Membership and Volunteerism",
			linkTo: "/",
		},
		{
			name: "Referral Directories",
			linkTo: "/",
		},
		{
			name: "I.O.Me 254",
			linkTo: "/",
		},
		{
			name: "Donations Platform",
			linkTo: "/",
		},
	];
	const affiliates = [
		{
			name: "Boma Panafrican",
			linkTo: "/",
		},
		{
			name: "ICHA",
			linkTo: "/",
		},
		{
			name: "IFRC",
			linkTo: "/",
		},
		{
			name: "ICRC",
			linkTo: "/",
		},
	];

	return (
		<footer className="flex flex-col pr-[15px] bg-[#0e1422] text-white py-[50px] md:px-[60px]">
			<div className="flex"></div>

			<div className="flex flex-wrap justify-between">
				<div className="flex flex-col">
					<Typography
						component="div"
						sx={{
							mb: "20px",
							fontWeight: "bold",
							borderBottom: "5px solid #ed1c24",
							py: "10px",
							borderImage:
								"linear-gradient(to right, #ed1c24 20%, transparent 30%) 100% 1",
						}}
						variant="h5"
					>
						Quick Links
					</Typography>
					<ul className="space-y-[15px]">
						{quickLinks.map(({ name, linkTo }: any) => (
							<li key={name} className="hover:text-[#ed1c24]">
								<Link href={linkTo}>
									<Typography
										sx={
											{
												// fontWeight: "bold",
											}
										}
										variant="h6"
									>
										{name}
									</Typography>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col">
					<Typography
						component="div"
						sx={{
							mb: "20px",
							fontWeight: "bold",
							borderBottom: "5px solid #ed1c24",
							py: "10px",
							borderImage:
								"linear-gradient(to right, #ed1c24 20%, transparent 30%) 100% 1",
						}}
						variant="h5"
					>
						Platforms & Websites
					</Typography>
					<ul className="space-y-[15px]">
						{platforms.map(({ name, linkTo }: any) => (
							<li key={name} className="hover:text-[#ed1c24]">
								<Link href={linkTo}>
									<Typography
										sx={
											{
												// fontWeight: "bold",
											}
										}
										variant="h6"
									>
										{name}
									</Typography>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col">
					<Typography
						component="div"
						sx={{
							mb: "20px",
							fontWeight: "bold",
							borderBottom: "5px solid #ed1c24",
							py: "10px",
							borderImage:
								"linear-gradient(to right, #ed1c24 20%, transparent 30%) 100% 1",
						}}
						variant="h5"
					>
						Our Affiliates & Partners
					</Typography>
					<ul className="space-y-[15px]">
						{affiliates.map(({ name, linkTo }: any) => (
							<li key={name} className="hover:text-[#ed1c24]">
								<Link href={linkTo}>
									<Typography
										sx={
											{
												// fontWeight: "bold",
											}
										}
										variant="h6"
									>
										{name}
									</Typography>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col">
					<Typography
						component="div"
						sx={{
							mb: "20px",
							fontWeight: "bold",
							borderBottom: "5px solid #ed1c24",
							py: "10px",
							borderImage:
								"linear-gradient(to right, #ed1c24 20%, transparent 30%) 100% 1",
						}}
						variant="h5"
					>
						Contact Us
					</Typography>
					<ul className="space-y-[15px]">
						{affiliates.map(({ name, linkTo }: any) => (
							<li key={name} className="hover:text-[#ed1c24]">
								<Link href={linkTo}>
									<Typography
										sx={
											{
												// fontWeight: "bold",
											}
										}
										variant="h6"
									>
										{name}
									</Typography>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="flex justify-between mt-[20px] pt-[50px] border-t-[2px] border-[#000000]">
				<Typography variant="caption">
					2024{" "}
					<Typography
						sx={{
							color: "#ed1c24",
						}}
						variant="caption"
					>
						Kenya Red Cross Society
					</Typography>
					, All Rights
				</Typography>
				<div className="flex">
					<Typography
						sx={{
							borderRight: "1px solid #ffffff",
							px: "10px",
						}}
						variant="caption"
					>
						Accessibility Statement
					</Typography>
					<Typography
						sx={{
							px: "10px",
						}}
						variant="caption"
					>
						Privacy Policy
					</Typography>
				</div>
				<div>
					<Socials />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
