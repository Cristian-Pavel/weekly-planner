import React, { useEffect, useRef } from "react";
import AddActivity from "../addActivity";

interface DayProps {
	dayLabel: string;
}

const DaySchedule: React.FC<DayProps> = ({ dayLabel }) => {
	// const dayTitleRef = useRef("");
	// useEffect(() => {
	// 	dayTitleRef.current = getTheDayTitle(dayLabel);
	// }, [dayLabel]);

	// const getTheDayTitle = (dayLabel: string) => {
	// 	switch (dayLabel) {
	// 		case "0":
	// 			return "Luni";
	// 		case "1":
	// 			return "Marti";
	// 		case "2":
	// 			return "Miercuri";
	// 		case "3":
	// 			return "Joi";
	// 		case "4":
	// 			return "Vineri";
	// 		default:
	// 			return "";
	// 	}
	// };

	return (
		<div>
			<label>
				{/* <p>{`${dayTitleRef?.current} Dimineata`}</p> */}
				<p>{`${dayLabel} Dimineata`}</p>

				<AddActivity />
			</label>

			<label>
				{/* <p>{`${dayTitleRef?.current} Seara`}</p> */}
				<p>{`${dayLabel} Seara`}</p>
				<AddActivity />
			</label>
		</div>
	);
};

export default DaySchedule;
