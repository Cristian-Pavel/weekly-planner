import React, { useState } from "react";

interface SchedulerStateType {
	day?: String;
	activity?: String;
	startTime?: String;
	endTime?: String;
}

interface SchedulerProviderType extends SchedulerStateType {
	scheduleGlobal: SchedulerStateType[];
	setScheduleGlobal: React.Dispatch<React.SetStateAction<SchedulerStateType[]>>;
	currentDayLabel: String;
	setCurrentDayLabel: React.Dispatch<React.SetStateAction<String>>;
}

interface Props {
	children: React.ReactNode;
}

const SchedulerContext = React.createContext<SchedulerProviderType>({} as SchedulerProviderType);

const SchedulerProvider: React.FC<Props> = ({ children }) => {
	const [scheduleGlobal, setScheduleGlobal] = useState<SchedulerStateType[]>([{ activity: undefined }]);
	const [currentDayLabel, setCurrentDayLabel] = useState<String>("");
	return (
		<SchedulerContext.Provider value={{ scheduleGlobal, setScheduleGlobal, currentDayLabel, setCurrentDayLabel }}>
			{children}
		</SchedulerContext.Provider>
	);
};

export { SchedulerContext, SchedulerProvider };
