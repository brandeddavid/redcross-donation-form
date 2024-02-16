import React from "react";
import {
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	Twitter as TwitterIcon,
	YouTube as YouTubeIcon,
	LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import Link from "next/link";

type Props = {};

const Socials = (props: Props) => {
	return (
		<ul className="flex">
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
	);
};

export default Socials;
