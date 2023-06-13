import React from "react";
import Link from "next/link";
type Props = {};

const WhatsNew = (props: Props) => {
	return (
		<div className="flex flex-wrap items-center justify-center p-12">
			<div className="flex">
				<nav className="flex justify-between flex-1">
					<ul className="flex flex-col text-[#231F20] text-xs font-bold w-[150px]">
						<li className="dropdownMenuItem ">
							<Link href="https://www.redcross.or.ke/News">News</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/Eventss">Events</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/Presser">
								Press Release
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/publications">
								Publications
							</Link>
						</li>
					</ul>
				</nav>

				<nav className="flex justify-between flex-1">
					<ul className="flex flex-col text-[#231F20] text-xs font-bold w-[150px]">
						<li className="dropdownMenuItem">
							<Link href="https://www.youtube.com/user/KenyaRedCross">
								Videos
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.flickr.com/photos/154940827@N06/">
								Photos
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/tenders">Tenders</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default WhatsNew;
