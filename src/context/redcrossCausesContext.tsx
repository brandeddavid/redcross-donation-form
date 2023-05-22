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
		description: `Red Cross 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.`,
		startDate: "7/11/2023",
		endDate: "17/10/2024",
	},
	{
		id: 2,
		label: "Red Cross 2",
		value: "red-cross-2",
		description: `Red Cross 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.`,
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
