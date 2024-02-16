"use client";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import {
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	Twitter as TwitterIcon,
	YouTube as YouTubeIcon,
	LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DropDownMenuScaffold from "./DropDownMenuScaffold";
import GetInvolvedMenu from "./GetInvolvedMenu";
import WhatWeDoMenu from "./WhatWeDoMenu";
import WhoWeAre from "./WhoWeAre";
import WhatsNew from "./WhatsNew";

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
			<nav className="relative z-50 w-full">
				<div className="bg-[#1c2539] px-[20px] text-white flex">
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

					<div className="bg-[#ed1c24] text-white p-[20px] items-center">
						<Link href="/">El Nino</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
