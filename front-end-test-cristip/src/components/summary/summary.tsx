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
		<div className="summary-container">
			{!scheduleGlobal[1] ? (
				<div>
					<p>Inca nu sunt activitati programate</p>
				</div>
			) : (
				<div>
					<h2>Activitatile pe saptamana curenta sunt:</h2>
					{sortedByDaySchedule.map((data, index) =>
						index === 0 ? (
							<span>{""}</span>
						) : (
							<Row key={index}>
								<Col>
									<div className="summary-container__day-schedule">
										{index > 0 && data.day === sortedByDaySchedule[index - 1].day ? (
											<span>{""}</span>
										) : (
											<h3>{data.day}</h3>
										)}
										<p className="summary-container__scheduled-activity">
											{index > 0 && `${data.startTime}-${data.endTime} ${data.activity}`}
										</p>
									</div>
								</Col>
							</Row>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default Summary;
