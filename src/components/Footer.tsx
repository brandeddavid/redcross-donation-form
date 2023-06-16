import React from "react";
import { DateTime } from "luxon";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
	const month = DateTime.now().toFormat("MMMM yyyy");

	return (
		<div className="flex flex-col px-[15px] mx-[25px] py-[48px]">
			<div>Hello</div>
			<hr className="my-10" />
			<div className="flex justify-between">
				<div className="">
					<div className="text-sm px-[15px]">
						&copy;{`${month} Kenya Red Cross Society.`}
					</div>
				</div>
				<div className="px-[15px]">
					<ul className="flex text-sm">
						<li className="underline decoration-dotted hover:underline hover:decoration-solid px-[8px] border-r-2 border-[#000000]">
							<Link href="">Privacy Policy</Link>
						</li>
						<li className="hover:underline px-[8px] border-r-2 border-[#000000]">
							<Link href="">IFRC</Link>
						</li>
						<li className="hover:underline px-[8px] border-r-2 border-[#000000]">
							<Link href="">ICRC</Link>
						</li>
						<li className="hover:underline px-[8px] border-r-2 border-[#000000]">
							<Link href="">Report a concern</Link>
						</li>
						<li className="hover:underline px-[8px]">
							<Link href="">Conflict of interest</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
