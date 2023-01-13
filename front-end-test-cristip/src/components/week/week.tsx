import React, { useState } from "react";
import { Button, Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import TabPane from "antd/es/tabs/TabPane";

const Week: React.FC = () => {
	const items: TabsProps["items"] = [
		{
			key: "0",
			label: `Luni`,
			children: `Content of Tab Pane 1`,
		},
		{
			key: "1",
			label: `Marti`,
			children: `Content of Tab Pane 2`,
		},
		{
			key: "2",
			label: `Miercuri`,
			children: `Content of Tab Pane 3`,
		},
		{
			key: "3",
			label: `Joi`,
			children: `Content of Tab Pane 4`,
		},
		{
			key: "4",
			label: `Vineri`,
			children: `Content of Tab Pane 5`,
		},
		{
			key: "5",
			label: `Rezumat`,
			children: `Content of Tab Pane 6`,
		},
	];
	const [currentDay, setCurrentDay] = useState("1");

	const handleTabChange = (key: string) => {
		setCurrentDay(key);
	};

	const goToPreviousDay = () => {
		setCurrentDay(currentDay === "0" ? String(items.length - 1) : String(+currentDay - 1));
	};
	const goToNextDay = () => {
		setCurrentDay(currentDay === String(items.length - 1) ? "0" : String(+currentDay + 1));
	};

	return (
		<div className="week-container">
			<Row>
				<Col xxl={{ span: 7, offset: 5 }}>
					<Tabs activeKey={currentDay} items={items} type="card" onChange={handleTabChange}>
						{items.map((day: any) => (
							<TabPane tab={day.label} key={day.key}>
								{day.children}
							</TabPane>
						))}
					</Tabs>
				</Col>
			</Row>
			<Row>
				<Col xxl={{ span: 7, offset: 5 }}>
					<Button type="primary" onClick={() => goToPreviousDay()}>
						Ziua anterioara
					</Button>
					<Button type="primary" onClick={() => goToNextDay()}>
						Ziua urmatoare
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Week;
