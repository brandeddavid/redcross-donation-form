"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "dotenv/config";

type Props = {
	children: JSX.Element;
};
type RedCrossCause = {
	id: number;
	label: string;
	value: string;
	description: string;
	startDate: string;
	endDate: string;
};
type RedCrossCauses = RedCrossCause[];
type RedcrossCausesContext = {
	redCrossCauses: RedCrossCauses;
	selectedCause: RedCrossCause | null;
	onRedCrossCauseSelect: (option: string) => void;
	countries: Array<{
		label: string;
		value: string;
	}>;
	counties: Array<{
		label: string;
		value: string;
	}>;
	setSelectedCause: (option: RedCrossCause | null) => void;
};

export const RedcrossCausesContext = createContext<RedcrossCausesContext>({
	redCrossCauses: [],
	selectedCause: null,
	onRedCrossCauseSelect: () => {},
	countries: [],
	counties: [],
	setSelectedCause: () => {},
});

const RedcrossCausesProvider = ({ children }: Props) => {
	const [redCrossCauses, setRedCrossCauses] = useState<RedCrossCauses>([]);
	const [countries, setCountries] = useState([]);
	const [counties, setCounties] = useState([]);

	const [selectedCause, setSelectedCause] = useState<RedCrossCause | null>(
		null
	);

	const onRedCrossCauseSelect = (cause: string) => {
		const selectedCause = redCrossCauses.find((item) => item.value === cause);

		if (selectedCause !== undefined) return setSelectedCause(selectedCause);

		return setSelectedCause(null);
	};

	useEffect(() => {
		const fetchCampaigns = async () => {
			try {
				const res = await axios.get(
					`http://${process.env.API_HOST}/api/campaigns`
				);
				const { data } = res;

				const formattedData = data.map(
					({ id, name, description, start_date, end_date }: any) => {
						return {
							id,
							label: name,
							value: name,
							description,
							startDate: start_date,
							endDate: end_date,
						};
					}
				);

				const initialSelectedCause = formattedData.find(
					(cause: any) => cause.label === "Where it matters"
				);

				setSelectedCause(initialSelectedCause);

				return setRedCrossCauses(formattedData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchCampaigns();
	}, []);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const res = await axios.get(
					`http://${process.env.API_HOST}/api/countries`
				);
				const { data } = res;

				const formattedCountries = data.map(
					({ nicename, iso3, id, phonecode }: any) => ({
						id,
						value: iso3,
						label: nicename,
						phoneCode: phonecode,
					})
				);

				return setCountries(formattedCountries);
			} catch (error) {
				console.error(error);
			}
		};

		fetchCountries();
	}, []);

	useEffect(() => {
		const fetchCounties = async () => {
			try {
				const res = await axios.get(
					`http://${process.env.API_HOST}/api/counties`
				);
				const { data } = res;

				const formattedCounties = data.map(({ name }: any) => ({
					value: name,
					label: name,
				}));

				return setCounties(formattedCounties);
			} catch (error) {
				console.error(error);
			}
		};

		fetchCounties();
	}, []);

	return (
		<RedcrossCausesContext.Provider
			value={{
				redCrossCauses,
				selectedCause,
				onRedCrossCauseSelect,
				countries,
				counties,
				setSelectedCause,
			}}
		>
			{children}
		</RedcrossCausesContext.Provider>
	);
};

export default RedcrossCausesProvider;
