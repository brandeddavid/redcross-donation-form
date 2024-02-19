import React from "react";
import {
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	Twitter as TwitterIcon,
	YouTube as YouTubeIcon,
	LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import Link from "next/link";

type Props = {
	variant?: "primary" | "secondary";
};

const Socials = ({ variant = "primary" }: Props) => {
	return (
		<ul className="flex">
			<li className="mr-[8px]">
				<Link href="/form">
					<FacebookIcon
						fontSize={variant === "secondary" ? "large" : "small"}
						sx={{
							fill: "#ffffff",
							"&:hover": { fill: "#ed1c24" },
							...(variant === "secondary" && {
								fill: "#1c2539",
								height: "40px",
								width: "40px",
							}),
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
							...(variant === "secondary" && {
								fill: "#1c2539",
								height: "40px",
								width: "40px",
							}),
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
							...(variant === "secondary" && {
								fill: "#1c2539",
								height: "40px",
								width: "40px",
							}),
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
							...(variant === "secondary" && {
								fill: "#1c2539",
								height: "40px",
								width: "40px",
							}),
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
							...(variant === "secondary" && {
								fill: "#1c2539",
								height: "40px",
								width: "40px",
							}),
						}}
					/>
				</Link>
			</li>
		</ul>
	);
};

export default Socials;
