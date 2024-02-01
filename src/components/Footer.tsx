"use client";
import React from "react";
import { DateTime } from "luxon";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	const month = DateTime.now().toFormat("MMMM yyyy");

	return (
		<footer className="flex flex-col pr-[15px] mx-[25px] py-[48px] md:px-[60px]">
			<div className="flex">
				<div className="flex justify-between w-full lg:justify-evenly">
					<div className="pr-[15px] mb-[24px] max-w-[80px]">
						<Image
							src="https://www.redcross.or.ke/assets/img/redcross-emblem.svg"
							alt=""
							width={55}
							height={70}
							style={{
								marginBottom: "16px",
								objectFit: "cover",
							}}
						/>
					</div>
					<div className="flex flex-col">
						<div className="mb-2">About us</div>
						<ul className="text-[#6c757d]">
							<li className="hover:underline">
								<Link href="https://www.redcross.or.ke/aboutus">
									About KRCS
								</Link>
							</li>
							<li className="hover:underline">
								<Link href="https://www.redcross.or.ke/careers">Careers</Link>
							</li>
							<li className="hover:underline">
								<Link href="https://www.redcross.or.ke/contactus">
									Contact us
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<div className="mb-2">General</div>
						<ul className="text-[#6c757d]">
							<li className="hover:underline">
								<Link href="">Tenders</Link>
							</li>
							<li className="hover:underline">
								<Link href="">Publications</Link>
							</li>
							<li className="hover:underline">
								<Link href="">Staff Mail</Link>
							</li>
							<li className="hover:underline">
								<Link href="">Employee Portal</Link>
							</li>
						</ul>
					</div>
					<div>
						<div className="mb-2">Affiliates</div>
						<ul className="text-[#6c757d]">
							<li className="underline decoration-dotted hover:underline hover:decoration-solid">
								<Link href="">ICHA</Link>
							</li>
							<li className="underline decoration-dotted hover:underline hover:decoration-solid">
								<Link href="">Boma Panafrican</Link>
							</li>
						</ul>
					</div>
					<div>
						<div className="mb-2">Newsletter</div>
						<div className="text-[#6c757d]">
							Sign up for our latest news and updates
						</div>
						<div></div>
					</div>
				</div>
			</div>
			<hr className="my-10" />
			<div className="flex justify-between lg:justify-evenly">
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
		</footer>
	);
};

export default Footer;
