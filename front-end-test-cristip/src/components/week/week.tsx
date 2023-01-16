import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import DaySchedule from "../daySchedule";
import Summary from "../summary";
import { SchedulerContext } from "../../Context/ScheduleStateProvider";

const Week: React.FC = () => {
	const { setCurrentDayLabel } = useContext(SchedulerContext);

	const getCurrentDayFromCalendar = () => {
		const today = new Date();
		const currentDay = today.getDay();

		return currentDay === 0 || currentDay === 6 ? "0" : String(currentDay);
	};
	const [currentDay, setCurrentDay] = useState(getCurrentDayFromCalendar());

	const getNameOfCurrentDay = (currentDay: string) => {
		switch (currentDay) {
			case "0":
				return "Luni";
			case "1":
				return "Marti";
			case "2":
				return "Miercuri";
			case "3":
				return "Joi";
			case "4":
				return "Vineri";
			default:
				return "";
		}
	};

	const items: TabsProps["items"] = [
		{
			key: "0",
			label: `Luni`,
			children: <DaySchedule /* dayLabel={currentDay} */ dayLabel="Luni" />,
		},
		{
			key: "1",
			label: `Marti`,
			children: <DaySchedule dayLabel="Marti" />,
		},
		{
			key: "2",
			label: `Miercuri`,
			children: <DaySchedule dayLabel="Miercuri" />,
		},
		{
			key: "3",
			label: `Joi`,
			children: <DaySchedule dayLabel="Joi" />,
		},
		{
			key: "4",
			label: `Vineri`,
			children: <DaySchedule dayLabel="Vineri" />,
		},
		{
			key: "5",
			label: `Rezumat`,
			children: <Summary />,
		},
	];

	useEffect(() => {
		getCurrentDayFromCalendar();
		const day = getNameOfCurrentDay(currentDay);
		setCurrentDayLabel(day);
	}, [currentDay]);

	const handleTabChange = (key: string) => {
		setCurrentDay(key);
	};

	const goToPreviousDay = () => {
		setCurrentDay(currentDay === "0" ? String(items.length - 1) : String(+currentDay - 1));
	};
	const goToNextDay = () => {
		setCurrentDay(currentDay === String(items.length - 1) ? "0" : String(+currentDay + 1));
	};

	// const showPreviousDayTitle = (currentDay: string) => {
	// 	return currentDay === "0" ? items[items.length - 1].label : items[Number(currentDay) - 1].label;
	// };

	// const showNextDayTitle = (currentDay: string) => {
	// 	return currentDay === String(items.length - 1) ? items[0].label : items[Number(currentDay) + 1].label;
	// };

	return (
		<div className="week-container">
			<Row>
				<Col xxl={{ span: 7, offset: 8 }}>
					<Tabs activeKey={currentDay} items={items} type="card" onChange={handleTabChange}>
						{items.map((day: any) => (
							<TabPane tab={day.label} key={day.key}>
								{day.children}
								{/* {<DaySchedule dayLabel={day.label} />} */}
							</TabPane>
						))}
					</Tabs>
				</Col>
			</Row>
			<Row>
				<Col xxl={{ span: 7, offset: 8 }} className="navigation-btns-container">
					<Button type="primary" onClick={() => goToPreviousDay()}>
						{/* {showPreviousDayTitle(currentDay)} */}
						Ziua anterioara
					</Button>
					<Button type="primary" onClick={() => goToNextDay()}>
						{/* {showNextDayTitle(currentDay)} */}
						{`${currentDay === "4" ? "Rezumat" : "Ziua urmatoare"}`}
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Week;
