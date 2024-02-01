"use client";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
				<div className="flex items-center w-full p-4 md:px-[60px] md:justify-between border-b-1 align-center flex-nowrap lg:justify-evenly">
					<div className="flex justify-center text-center flex-nowrap">
						<Link href="/form">
							<Image
								src="https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png"
								height={100}
								width={100}
								alt="redcross-logo"
								loader={imageLoader}
								style={{
									marginRight: "16px",
									paddingTop: "5px",
									paddingBottom: "5px",
								}}
							/>
						</Link>
						<div className="hidden md:flex-col md:justify-center md:flex">
							<ul className="hidden text-lg md:flex">
								<li className="mx-[8px]">
									<Link
										className="p-[8px]"
										href="tel:+254703037000"
										target="_blank"
									>
										TEL: <strong>0703 037 000</strong>
									</Link>
								</li>
								<li className="mx-[8px]">
									<Link href="tel:+2541999" target="_blank">
										TOLL FREE HOTLINE: <strong>1199</strong>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="absolute right-[30px] md:hidden">
						<MenuIcon fontSize="large" sx={{ fill: "gray" }} />
					</div>

					<div className="flex flex-col justify-center">
						<ul className="hidden md:flex">
							<li className="mx-[8px]">
								<Link href="/form">
									<MailIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<FacebookIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<InstagramIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<TwitterIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
								</Link>
							</li>
							<li className="mx-[8px]">
								<Link href="/form">
									<YouTubeIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="hidden pt-4 text-xs font-bold text-[rgba(0,0,0,0.5)] uppercase md:flex px-[60px]">
					<ul className="flex justify-between w-full text-center lg:justify-center">
						<li className="pl-0 navigationBorder">
							<Link className="p-2" href="https://www.redcross.or.ke/">
								Home
							</Link>
						</li>
						<li className="navigationBorder">
							<a className="p-2" onClick={() => handleShowMenu("get-involved")}>
								Get Involved
								<ExpandMoreIcon
									fontSize="small"
									sx={{ fill: "gray", opacity: 0.5 }}
								/>
							</a>
						</li>
						<li className="navigationBorder">
							<a onClick={() => handleShowMenu("what-we-do")} className="p-2">
								What we do
								<ExpandMoreIcon
									fontSize="small"
									sx={{ fill: "gray", opacity: 0.5 }}
								/>
							</a>
						</li>
						<li className="navigationBorder">
							<a onClick={() => handleShowMenu("who-we-are")} className="p-2">
								Who we are
								<ExpandMoreIcon
									fontSize="small"
									sx={{ fill: "gray", opacity: 0.5 }}
								/>
							</a>
						</li>
						<li className="navigationBorder">
							<a onClick={() => handleShowMenu("whats-new")} className="p-2">
								What's new
								<ExpandMoreIcon
									fontSize="small"
									sx={{ fill: "gray", opacity: 0.5 }}
								/>
							</a>
						</li>
						<li className="navigationBorder">
							<Link className="p-2" href="https://www.redcross.or.ke/ReachOuut">
								Reach out blog
							</Link>
						</li>
						<li className="navigationBorder">
							<Link
								className="p-2"
								href="https://www.redcross.or.ke/globalfund"
							>
								Global fund
							</Link>
						</li>
						{/* <li className="navigationBorder">
						<Link href="/form">
							<span className="p-2 bg-[#ed1c24] text-white">Donate now</span>
						</Link>
					</li> */}
						<li className="navigationBorder">
							<Link className="p-2" href="https://www.redcross.or.ke/covid">
								Covid 19
							</Link>
						</li>
						<li className="flex p-2">
							<Link className="p-2" href="/form">
								<span className="p-2 bg-[#ed1c24] text-white">Drought</span>
							</Link>
						</li>
					</ul>
				</div>
				{showMenu && (
					<DropDownMenuScaffold
						onClickAway={() => {
							console.log("Clicked");
							setActiveDropdown("");
							setInNavBar(false);
						}}
					>
						<>
							{activeDropdown === "get-involved" && <GetInvolvedMenu />}
							{activeDropdown === "what-we-do" && <WhatWeDoMenu />}
							{activeDropdown === "who-we-are" && <WhoWeAre />}{" "}
							{activeDropdown === "whats-new" && <WhatsNew />}
						</>
					</DropDownMenuScaffold>
				)}
			</nav>
		</>
	);
};

export default NavBar;
