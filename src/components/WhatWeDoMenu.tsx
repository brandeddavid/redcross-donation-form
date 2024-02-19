import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

type Props = {};

const WhatWeDoMenu = (props: Props) => {
	const [hoveredMenuItem, setHoveredMenuItem] = useState("");
	const menuItems = [
		{
			name: "Disaster Management",
			linkTo: "/",
		},
		{
			name: "Health",
			linkTo: "/",
		},
		{
			name: "Organisational Development",
			linkTo: "/",
		},
		{
			name: "Youth Programmes",
			linkTo: "/",
		},
		{
			name: "Special Programmes",
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

export default WhatWeDoMenu;
