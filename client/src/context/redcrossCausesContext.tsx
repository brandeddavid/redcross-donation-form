"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

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
};

export const RedcrossCausesContext = createContext<RedcrossCausesContext>({
	redCrossCauses: [],
	selectedCause: null,
	onRedCrossCauseSelect: () => {},
});

const RedcrossCausesProvider = ({ children }: Props) => {
	const [redCrossCauses, setRedCrossCauses] = useState<RedCrossCauses>([]);
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
				const res = await axios.get("http://localhost:8800/campaigns");
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

				console.log(formattedData.length);

				return setRedCrossCauses(formattedData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchCampaigns();
	}, []);

	return (
		<RedcrossCausesContext.Provider
			value={{ redCrossCauses, selectedCause, onRedCrossCauseSelect }}
		>
			{children}
		</RedcrossCausesContext.Provider>
	);
};

export default RedcrossCausesProvider;
