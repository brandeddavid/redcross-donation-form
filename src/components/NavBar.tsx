"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	Twitter as TwitterIcon,
	YouTube as YouTubeIcon,
	LinkedIn as LinkedInIcon,
	Mail as MailIcon,
	Phone as PhoneIcon,
	ExpandMore as ExpandMoreIcon,
	Menu as MenuIcon,
} from "@mui/icons-material";
import DropDownMenuScaffold from "./DropDownMenuScaffold";
import GetInvolvedMenu from "./GetInvolvedMenu";
import WhatWeDoMenu from "./WhatWeDoMenu";
import WhoWeAre from "./WhoWeAre";
import WhatsNew from "./WhatsNew";
import { Box } from "@mui/material";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState("");
	const [inNavBar, setInNavBar] = useState(true);

	const imageLoader = () => {
		return "https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png";
	};

	useEffect(() => {
		if (!inNavBar && !activeDropdown) setShowMenu(false);
	}, [inNavBar, activeDropdown]);

	const handleShowMenu = (menuItem: string) => {
		console.log("show menu");
		setInNavBar(true);
		setShowMenu(true);
		setActiveDropdown(menuItem);
	};

	return (
		<>
			<nav className="relative z-50 flex flex-col w-full">
				<div className="bg-[#1c2539] px-[50px] text-white flex">
					<div className="flex-1 py-[20px]">
						<ul className="hidden md:flex">
							<li className="mr-[8px]">
								<Link href="/form">
									<FacebookIcon
										fontSize="small"
										sx={{
											fill: "#ffffff",
											"&:hover": { fill: "#ed1c24" },
										}}
									/>
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<TwitterIcon
										fontSize="small"
										sx={{
											fill: "#ffffff",
											"&:hover": { fill: "#ed1c24" },
										}}
									/>
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<InstagramIcon
										fontSize="small"
										sx={{
											fill: "#ffffff",
											"&:hover": { fill: "#ed1c24" },
										}}
									/>
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<LinkedInIcon
										fontSize="small"
										sx={{
											fill: "#ffffff",
											"&:hover": { fill: "#ed1c24" },
										}}
									/>
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<YouTubeIcon
										fontSize="small"
										sx={{
											fill: "#ffffff",
											"&:hover": { fill: "#ed1c24" },
										}}
									/>
								</Link>
							</li>
						</ul>
					</div>

					<div className="items-center flex space-x-[20px]">
						<Link href="/">
							<MailIcon
								sx={{
									fill: "#ed1c24",
									mr: "10px",
								}}
							/>
							<span>info@redcross.or.ke</span>
						</Link>
						<Link href="/">
							<PhoneIcon
								sx={{
									fill: "#ed1c24",
									mr: "10px",
								}}
							/>
							<span>+254 703-037-000</span>
						</Link>
					</div>

					<div className="bg-[#ed1c24] ml-[40px] text-white p-[20px] items-center">
						<Link href="/">El Nino</Link>
					</div>
				</div>

				<div className="px-[50px] py-[20px] flex justify-center items-center">
					<Link href="https://www.redcross.or.ke/">
						<Image
							src="https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png"
							height={150}
							width={150}
							alt="redcross-logo"
							loader={imageLoader}
							style={{
								marginRight: "16px",
								paddingTop: "5px",
								paddingBottom: "5px",
							}}
						/>
					</Link>

					<div className="hidden text-xl text-[#1c2539] md:flex px-[60px]">
						<ul className="flex justify-between w-full text-center space-x-[20px] lg:justify-center">
							<li className="pl-0 hover:text-[#ed1c24]">
								<Link className="p-2" href="https://www.redcross.or.ke/">
									Home
								</Link>
							</li>
							<li className="hover:text-[#ed1c24]">
								<Link
									className="p-2"
									onClick={() => handleShowMenu("get-involved")}
									href="/"
								>
									Get Involved
									<ExpandMoreIcon
										sx={{
											fill: "gray",
											opacity: 0.5,
											"&:hover": {
												fill: "#ed1c24",
											},
										}}
									/>
								</Link>
							</li>
							<li className="hover:text-[#ed1c24]">
								<Link
									className="p-2"
									onClick={() => handleShowMenu("who-we-are")}
									href="/"
								>
									Who We Are
									<ExpandMoreIcon
										sx={{
											fill: "gray",
											opacity: 0.5,
											"&:hover": {
												fill: "#ed1c24",
											},
										}}
									/>
								</Link>
							</li>
							<li className="hover:text-[#ed1c24]">
								<Link className="p-2" href="https://www.redcross.or.ke/">
									Reach Out Blog
								</Link>
							</li>
							<li className="hover:text-[#ed1c24]">
								<Link
									className="p-2"
									onClick={() => handleShowMenu("who-we-are")}
									href="/"
								>
									What We Do
									<ExpandMoreIcon
										sx={{
											fill: "gray",
											opacity: 0.5,
											"&:hover": {
												fill: "#ed1c24",
											},
										}}
									/>
								</Link>
							</li>
							<li className="hover:text-[#ed1c24]">
								<Link className="p-2" href="https://www.redcross.or.ke/">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<Box
						sx={{
							p: "10px",
							backgroundColor: "#ed1c24",
							borderRadius: "15px",
							cursor: "pointer",
						}}
					>
						<MenuIcon
							fontSize="large"
							sx={{
								fill: "#ffffff",
							}}
						/>
					</Box>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
