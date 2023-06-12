"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

type Props = {};

const NavBar = (props: Props) => {
	const imageLoader = () => {
		return "https://www.redcross.or.ke/assets/img/redcross-logo.svg";
	};

	return (
		<nav className="relative z-50 w-full">
			<div className="flex justify-center w-full py-4 border md:justify-between border-b-1 px-[60px] align-center flex-nowrap">
				<div className="flex">
					<Link href="/form">
						<Image
							src="https://www.redcross.or.ke/assets/img/redcross-logo.svg"
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
			<div className="hidden py-5 text-sm font-bold text-gray-500 uppercase md:flex">
				<ul className="flex justify-between w-full text-center md:justify-evenly">
					<li className="navigationBorder">
						<Link className="p-2" href="/form">
							Home
						</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">Get Involved</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">What we do</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">Who we are</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">What's new</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">Reach out blog</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">Global fund</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">
							<span className="p-2 bg-[#ed1c24] text-white">Donate now</span>
						</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">Covid 19</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/form">
							<span className="p-2 bg-[#ed1c24] text-white">Drought</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
