import Link from "next/link";
import React from "react";

type Props = {};

const WhoWeAre = (props: Props) => {
	return (
		<div className="flex justify-center p-12">
			<nav>
				<ul className="flex flex-col text-[#231F20] text-xs font-bold">
					<li className="dropdownMenuItem w-[300px]">
						<Link href="https://www.redcross.or.ke/aboutus">About us</Link>
					</li>
					<li className="dropdownMenuItem">
						<Link href="https://www.redcross.or.ke/governance">Governance</Link>
					</li>
					<li className="dropdownMenuItem">
						<Link href="https://www.redcross.or.ke/Team">Management Team</Link>
					</li>
					<li className="dropdownMenuItem">
						<Link href="https://www.redcross.or.ke/Partners">Our Partners</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default WhoWeAre;
