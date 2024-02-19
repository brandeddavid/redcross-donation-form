"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Mail as MailIcon,
	Phone as PhoneIcon,
	ExpandMore as ExpandMoreIcon,
	Menu as MenuIcon,
	Close as CloseIcon,
} from "@mui/icons-material";
import DropDownMenuScaffold from "./DropDownMenuScaffold";
import GetInvolvedMenu from "./GetInvolvedMenu";
import WhatWeDoMenu from "./WhatWeDoMenu";
import WhoWeAre from "./WhoWeAre";
import WhatsNew from "./WhatsNew";
import { Box, Drawer, Popover, Typography } from "@mui/material";
import Socials from "./Socials";
import AboutUsDrawer from "./AboutUsDrawer";

const NavBar = () => {
	const [activeMenu, setActiveMenu] = useState("");
	const [openDrawer, setOpenDrawer] = useState(false);
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const onCloseDrawer = () => setOpenDrawer(false);

	const imageLoader = () => {
		return "https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png";
	};

	const handleShowMenu = (event: any, menuItem: string) => {
		setAnchorEl(event.currentTarget);
		setActiveMenu(menuItem);
	};

	const handleCloseActiveMenu = () => {
		setAnchorEl(null);
		setActiveMenu("");
	};

	return (
		<>
			<nav className="relative z-50 flex flex-col w-full">
				<div className="bg-[#1c2539] px-[50px] text-white hidden md:flex">
					<div className="flex-1 py-[20px] hidden md:flex">
						<Socials />
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

					<div className="bg-[#ed1c24] ml-[40px] text-white px-[30px] py-[20px] items-center">
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
						<ul className="flex items-center justify-between w-full text-center space-x-[20px] lg:justify-center">
							<li className="pl-0 hover:text-[#ed1c24]">
								<Link className="p-2" href="https://www.redcross.or.ke/">
									<Typography
										sx={{
											fontWeight: "bold",
										}}
									>
										Home
									</Typography>
								</Link>
							</li>
							<li className="hover:text-[#ed1c24]">
								<Link
									className="p-2"
									onMouseEnter={(event) =>
										handleShowMenu(event, "get-involved")
									}
									onClick={(event) => handleShowMenu(event, "get-involved")}
									href="/"
									style={{
										display: "flex",
									}}
								>
									<Typography
										sx={{
											fontWeight: "bold",
										}}
									>
										Get Involved
									</Typography>
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
									onMouseEnter={(event) => handleShowMenu(event, "who-we-are")}
									onClick={(event) => handleShowMenu(event, "who-we-are")}
									href="/"
									style={{
										display: "flex",
									}}
								>
									<Typography
										sx={{
											fontWeight: "bold",
										}}
									>
										Who We Are
									</Typography>
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
									<Typography
										sx={{
											fontWeight: "bold",
										}}
									>
										Reach Out Blog
									</Typography>
								</Link>
							</li>
							<li className="hover:text-[#ed1c24]">
								<Link
									className="p-2"
									onMouseEnter={(event) => handleShowMenu(event, "what-we-do")}
									onClick={(event) => handleShowMenu(event, "what-we-do")}
									href="/"
									style={{
										display: "flex",
									}}
								>
									<Typography
										sx={{
											fontWeight: "bold",
										}}
									>
										What We Do
									</Typography>
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
									<Typography
										sx={{
											fontWeight: "bold",
										}}
									>
										Contact Us
									</Typography>
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
						onClick={() => setOpenDrawer(true)}
					>
						{openDrawer ? (
							<CloseIcon
								fontSize="large"
								sx={{
									fill: "#ffffff",
								}}
							/>
						) : (
							<MenuIcon
								fontSize="large"
								sx={{
									fill: "#ffffff",
								}}
							/>
						)}
					</Box>
				</div>
			</nav>
			<Drawer open={openDrawer} onClose={onCloseDrawer}>
				<AboutUsDrawer onClose={onCloseDrawer} />
			</Drawer>
			{activeMenu && (
				<Popover
					open={activeMenu !== ""}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					onClose={handleCloseActiveMenu}
					// onMouseLeave={handleCloseActiveMenu}
					// onMouseOut={handleCloseActiveMenu}
				>
					{activeMenu === "get-involved" && <GetInvolvedMenu />}
					{activeMenu === "who-we-are" && <WhoWeAre />}
					{activeMenu === "what-we-do" && <WhatWeDoMenu />}
				</Popover>
			)}
		</>
	);
};

export default NavBar;
