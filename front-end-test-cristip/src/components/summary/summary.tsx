import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import { SchedulerContext } from "../../Context/ScheduleStateProvider";

const Summary = () => {
	const { scheduleGlobal } = useContext(SchedulerContext);

	useEffect(() => {}, [scheduleGlobal]);
	const days = ["Luni", "Marti", "Miercuri", "Joi", "Vineri"] as String[];

	const copyScheduleGlobal = [...scheduleGlobal];

	const sortedByDaySchedule =
		scheduleGlobal[1] &&
		copyScheduleGlobal.sort((a, b) => {
			const dayA = a?.day ?? "Luni";
			const dayB = b?.day ?? "Luni";
			return days.indexOf(dayA) - days.indexOf(dayB);
		});

	return (
		<div>
			{!scheduleGlobal[1] ? (
				<div>
					<p>Inca nu sunt activitati programate</p>
				</div>
			) : (
				sortedByDaySchedule.map((data, index) => (
					<Row key={index}>
						<Col>
							{index > 0 && data.day === sortedByDaySchedule[index - 1].day ? (
								<div>{""}</div>
							) : (
								<h3>{data.day}</h3>
							)}
							<p>{index > 0 && `${data.startTime}-${data.endTime} ${data.activity}`}</p>
						</Col>
					</Row>
				))
			)}
		</div>
	);
};

export default Summary;
