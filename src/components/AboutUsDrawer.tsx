import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Close as CloseIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Socials from "./Socials";

type Props = {
	onClose: () => void;
};

const AboutUsDrawer = ({ onClose }: Props) => {
	const imageLoader = () => {
		return "https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png";
	};

	return (
		<div className="w-full md:w-[500px] px-[40px] py-[20px]">
			<div className="flex justify-end cursor-pointer">
				<CloseIcon fontSize="small" onClick={onClose} />
			</div>
			<div className="flex justify-center mb-[40px]">
				<Link href="https://www.redcross.or.ke/">
					<Image
						src="https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png"
						height={200}
						width={200}
						alt="redcross-logo"
						loader={imageLoader}
						style={{
							marginRight: "16px",
							paddingTop: "5px",
							paddingBottom: "5px",
						}}
					/>
				</Link>
			</div>

			<div className="flex flex-col items-center justify-center mb-[40px]">
				<Typography
					variant="h5"
					sx={{
						fontWeight: "bold",
						mb: "20px",
					}}
					component="div"
				>
					About Us
				</Typography>

				<Typography
					sx={{
						fontSize: 18,
						fontWeight: "light",
						mb: "10px",
					}}
					component="div"
					variant="caption"
				>
					Kenya Red Cross Society is a humanitarian relief organization, created
					through an act of parliament CAP256 of the laws of Kenya
				</Typography>

				<Typography
					sx={{
						fontSize: 18,
						fontWeight: "light",
					}}
					component="div"
					variant="caption"
				>
					We are auxiliary to the National and County Governments and work to
					alleviate human suffering and preserve life and human dignity.
				</Typography>
			</div>

			<div className="flex flex-col items-center justify-center mb-[40px]">
				<Typography
					variant="h5"
					sx={{
						fontWeight: "bold",
						mb: "20px",
					}}
					component="div"
				>
					Contact Us
				</Typography>

				<Typography
					sx={{
						fontSize: 18,
						fontWeight: "light",
						mb: "10px",
					}}
					component="div"
					variant="caption"
				>
					info@redcross.or.ke
				</Typography>

				<Typography
					sx={{
						fontSize: 18,
						fontWeight: "light",
						mb: "10px",
					}}
					component="div"
					variant="caption"
				>
					(+254) 073 037 000
				</Typography>

				<Typography
					sx={{
						fontSize: 18,
						fontWeight: "light",
					}}
					component="div"
					variant="caption"
				>
					South C (Bellevue), Red Cross Road, off Popo Road
				</Typography>
			</div>

			<div className="flex justify-center">
				<Socials variant="secondary" />
			</div>
		</div>
	);
};

export default AboutUsDrawer;
