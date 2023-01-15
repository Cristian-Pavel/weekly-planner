import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import { SchedulerContext } from "../../Context/ScheduleStateProvider";

const Summary = () => {
	const { scheduleGlobal } = useContext(SchedulerContext);

	useEffect(() => {}, [scheduleGlobal]);

	console.log("scheduleGlobal:", scheduleGlobal);
	return (
		<div>
			{scheduleGlobal[0].activity === undefined ? (
				<p>Inca nu sunt activitati programate</p>
			) : (
				scheduleGlobal.map((data) => (
					<Row>
						<Col>
							<h3>{data.day}</h3>
							<p>{`${data.startTime}-${data.endTime} ${data.activity}`}</p>
						</Col>
					</Row>
				))
			)}
		</div>
	);
};

export default Summary;
