import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

type Props = {};

const GetInvolvedMenu = (props: Props) => {
	const [hoveredMenuItem, setHoveredMenuItem] = useState("");
	const menuItems = [
		{
			name: "Become a Volunteer",
			linkTo: "https://www.redcross.or.ke/volunteer/",
		},
		{
			name: "Become a Member",
			linkTo: "https://www.redcross.or.ke/membership/",
		},
		{
			name: "Regions and Branches",
			linkTo: "https://www.redcross.or.ke/regions-and-branches/",
		},
		{
			name: "WEMA | Volunteer Opportunities",
			linkTo: "https://wema.redcross.or.ke/",
		},
		{
			name: "Careers",
			linkTo: "https://www.redcross.or.ke/careers/",
		},
		{
			name: "Publications",
			linkTo: "https://www.redcross.or.ke/publications/",
		},
		{
			name: "Tenders",
			linkTo: "https://www.redcross.or.ke/tenders/",
		},
		{
			name: "Donate",
			linkTo: "/",
		},
	];

	return (
		<nav className="py-[40px] px-[20px]">
			<List className="flex flex-col justify-between">
				{menuItems.map(({ name, linkTo }) => (
					<ListItem
						sx={{
							display: "flex",
							color: "#231F20",
							py: "15px",
							borderBottom: "1px solid #cdcdcd",
							"&:hover": {
								color: "#ed1c24",
							},
						}}
						key={name}
						onMouseEnter={() => setHoveredMenuItem(name)}
						onMouseLeave={() => setHoveredMenuItem("")}
					>
						{name === hoveredMenuItem && (
							<RemoveIcon
								sx={{
									mr: "5px",
									fill: "#ed1c24",
								}}
							/>
						)}
						<Link href={linkTo}>
							<Typography>{name}</Typography>
						</Link>
					</ListItem>
				))}
			</List>
		</nav>
	);
};

export default GetInvolvedMenu;
