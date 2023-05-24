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
	return (
		<nav className="relative w-full p-5">
			<div className="flex justify-between w-full md:justify-evenly">
				<div>
					<Link href="/">
						<Image
							src="https://www.redcross.or.ke/assets/img/redcross-logo.svg"
							height={100}
							width={100}
							alt=""
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
		</nav>
	);
};

export default NavBar;
