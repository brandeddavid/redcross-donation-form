import React from "react";
import Link from "next/link";

type Props = {};

const WhatWeDoMenu = (props: Props) => {
	return (
		<div className="flex flex-wrap items-center justify-center p-12">
			<div className="flex">
				<nav className="flex justify-between flex-1">
					<ul className="flex flex-col text-[#231F20] text-xs font-bold">
						<li className="dropdownMenuItem text-[#ed1c24]">
							Disaster management
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/livelihood">
								Livelihoods
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/tracing">Tracing</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/refugee">
								Refugee Operations
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/emergency">
								Emergency Health
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/wash">
								Water & Sanitation & Hardware
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/dmops">
								Disaster Preparedness & Response
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/drm">
								Disaster Risk Reduction & Climate Change Adaptation
							</Link>
						</li>
					</ul>
				</nav>

				<nav className="flex justify-between flex-1">
					<ul className="flex flex-col text-[#231F20] text-xs font-bold">
						<li className="dropdownMenuItem text-[#ed1c24]">
							Health Nutrition & Social Services
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/publichealth">
								Public Health in Emergencies
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/Nutrition">Nutrition</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/ncdiseases">
								Non-communicable diseases
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/tropical">
								Neglected Tropical Disease
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/Malaria">
								HIV, TB & Malaria prevention
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/Mental">
								Mental health
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/Drugs">
								Drugs and substance abuse
							</Link>
						</li>
					</ul>
				</nav>

				<nav className="flex justify-between flex-1">
					<ul className="flex flex-col text-[#231F20] text-xs font-bold">
						<li className="dropdownMenuItem text-[#ed1c24]">
							Organizational Development
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/contactus">
								Our Branches
							</Link>
						</li>
						<li className="dropdownMenuItem">
							<Link href="https://www.redcross.or.ke/youth">
								Youth Programmes
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default WhatWeDoMenu;
