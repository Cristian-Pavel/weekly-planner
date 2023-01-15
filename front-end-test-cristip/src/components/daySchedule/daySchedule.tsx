import React, { useEffect, useRef } from "react";
import AddActivity from "../addActivity";

interface DayProps {
	dayLabel: string;
}

const DaySchedule: React.FC<DayProps> = ({ dayLabel }) => {
	return (
		<div>
			<label>
				<p>{`${dayLabel} Dimineata`}</p>

				<AddActivity />
			</label>

			<label>
				<p>{`${dayLabel} Seara`}</p>
				<AddActivity />
			</label>
		</div>
	);
};

export default DaySchedule;
