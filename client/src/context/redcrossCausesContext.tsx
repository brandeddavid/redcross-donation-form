"use client";
import React, { createContext, useEffect, useState } from "react";

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

const initialCauses = [
	{
		id: 1,
		label: "Red Cross 1",
		value: "red-cross-1",
		description: `Donate today to support Redcross 1. In times of crisis, we meet the urgent needs of women, men, young and the old. Help enable a rapid response to disasters. Your contribution can make a difference.`,
		startDate: "7/11/2023",
		endDate: "17/10/2024",
	},
	{
		id: 2,
		label: "Red Cross 2",
		value: "red-cross-2",
		description: `Donate today to support Redcross 2. In times of crisis, we meet the urgent needs of women, men, young and the old. Help enable a rapid response to disasters. Your contribution can make a difference.`,
		startDate: "7/11/2022",
		endDate: "1/12/2023",
	},
];

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
		setRedCrossCauses([...initialCauses]);
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
