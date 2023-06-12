import Link from "next/link";
import React from "react";

type Props = {};

const GetInvolvedMenu = (props: Props) => {
	return (
		<nav className="p-12">
			<ul className="flex flex-col justify-between text-[#231F20] text-xs font-bold">
				<li className="px-6 py-1 hover:bg-[#f8f9fa]">
					<Link href="">Donate</Link>
				</li>
				<li className="px-6 py-1 hover:bg-[#f8f9fa]">
					<Link href="https://www.redcross.or.ke/volunteer">
						Become a Volunteer
					</Link>
				</li>
				<li className="px-6 py-1 hover:bg-[#f8f9fa]">
					<Link href="https://www.redcross.or.ke/individualmember">
						Become an Individual Member
					</Link>
				</li>
				<li className="px-6 py-1 hover:bg-[#f8f9fa]">
					<Link href="https://www.redcross.or.ke/corporatemember">
						Become a Corporate Member
					</Link>
				</li>
				<li className="px-6 py-1 hover:bg-[#f8f9fa]">
					<Link href="https://www.redcross.or.ke/careers">Careers</Link>
				</li>
			</ul>
		</nav>
	);
};

export default GetInvolvedMenu;
