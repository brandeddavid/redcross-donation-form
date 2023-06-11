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
			<div className="flex justify-between w-full py-5 border border-b-1 md:justify-evenly">
				<div>
					<Link href="/">
						<Image
							src="https://www.redcross.or.ke/assets/img/redcross-logo.svg"
							height={100}
							width={100}
							alt="redcross-logo"
							loader={imageLoader}
						/>
					</Link>
				</div>
				<div className="absolute right-[30px] md:hidden">
					<MenuIcon fontSize="large" sx={{ fill: "gray" }} />
				</div>
				<div className="hidden md:flex-col md:justify-center md:flex">
					<ul className="hidden text-lg md:flex">
						<li className="mx-[8px]">
							<Link href="/">
								TEL: <strong>0703 037 000</strong>
							</Link>
						</li>
						<li className="mx-[8px]">
							<Link href="/">
								TOLL FREE HOTLINE: <strong>1199</strong>
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col justify-center">
					<ul className="hidden md:flex">
						<li className="mx-[8px]">
							<Link href="/">
								<MailIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
							</Link>
						</li>
						<li className="mx-[8px]">
							<Link href="/">
								<FacebookIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
							</Link>
						</li>
						<li className="mx-[8px]">
							<Link href="/">
								<InstagramIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
							</Link>
						</li>
						<li className="mx-[8px]">
							<Link href="/">
								<TwitterIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
							</Link>
						</li>
						<li className="mx-[8px]">
							<Link href="/">
								<YouTubeIcon fontSize="small" sx={{ fill: "#ed1c24" }} />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="hidden py-5 text-sm font-bold text-gray-500 uppercase md:flex">
				<ul className="flex justify-between w-full text-left md:justify-evenly">
					<li className="navigationBorder">
						<Link href="/">Home</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/">Get Involved</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/">What we do</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/">Who we are</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/">What's new</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/">Reach out blog</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/">Global fund</Link>
					</li>
					<li>
						<Link href="/">
							<span className="p-2 bg-[#ed1c24] text-white">Donate now</span>
						</Link>
					</li>
					<li className="navigationBorder">
						<Link href="/">Covid 19</Link>
					</li>
					<li>
						<Link href="/">
							<span className="p-2 bg-[#ed1c24] text-white">Drought</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
