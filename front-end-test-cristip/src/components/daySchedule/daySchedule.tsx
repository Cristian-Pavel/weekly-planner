import React, { useEffect, useRef } from "react";
import AddActivity from "../addActivity";

interface DayProps {
	dayLabel: string;
}

const DaySchedule: React.FC<DayProps> = ({ dayLabel }) => {
	return (
		<div>
			<label>
				<p>{`${dayLabel} dimineata`}</p>
				<AddActivity />
			</label>

			<label>
				<p>{`${dayLabel} seara`}</p>
				<AddActivity />
			</label>
		</div>
	);
};

export default DaySchedule;
