"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function Home() {
	const [step, setStep] = useState(1);

	return (
		<main className="flex w-full min-h-screen">
			<div className="flex-1 hidden md:flex">
				<div className="relative w-full h-full">
					<Image
						src="https://brandeddavid.s3.eu-west-1.amazonaws.com/public/maasai.jpg"
						alt=""
						fill
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center flex-1 text-center bg-white space-y-50">
				<div className="space-y-5">
					<h1 className="text-5xl text-[#dc1a22]">Support our Cause</h1>
					<h3 className="text-2xl">
						Donate today to support humanitarian work around Kenya.
					</h3>
					<FormControl className="justify-start">
						<FormLabel id="demo-row-radio-buttons-group-label">
							Select donate as
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="row-radio-buttons-group"
						>
							<FormControlLabel
								value="Individual"
								control={
									<Radio
										sx={{
											"&.Mui-checked": {
												color: "#dc1a22",
											},
										}}
									/>
								}
								label="Individual"
							/>
							<FormControlLabel
								value="Company"
								control={
									<Radio
										sx={{
											"&.Mui-checked": {
												color: "#dc1a22",
											},
										}}
									/>
								}
								label="Company"
							/>
						</RadioGroup>
					</FormControl>
					<div>
						<FormControl className="w-[400px] outline-[#dc1a22]">
							<InputLabel id="demo-simple-select-label">
								Select a cause
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value=""
								label="Select a cause"
								onChange={() => {}}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div>
						<Button className="" variant="outlined">
							Donate
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
