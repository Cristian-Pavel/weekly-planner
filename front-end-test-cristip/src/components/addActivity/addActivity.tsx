import { Button, Form, Select, TimePicker } from "antd";
import React, { useState, useContext, useEffect } from "react";
import dayjs from "dayjs";
import { SchedulerContext } from "../../Context/ScheduleStateProvider";
const { Option } = Select;
// import { SchedulerContext } from "../../Context";

interface FormData {
	selectedOption: string | undefined;
	selectedStartTime: string;
	selectedEndTime: string;
}

const AddActivity = () => {
	const [form] = Form.useForm();
	const [formData, setFormData] = useState({} as FormData); // state to store form data
	const { scheduleGlobal, setScheduleGlobal, currentDayLabel } = useContext(SchedulerContext);

	useEffect(() => {
		const dataToSend = {
			day: currentDayLabel,
			activity: formData.selectedOption,
			startTime: formData.selectedStartTime,
			endTime: formData.selectedEndTime,
		};
		if (dataToSend.activity !== undefined) setScheduleGlobal([...scheduleGlobal, dataToSend]);
	}, [formData]);

	const options = [
		{ key: "option 0", label: "Lista activitati" },
		{ key: "option1", label: "Alergare usoara" },
		{ key: "option2", label: "Karate" },
		{ key: "option3", label: "Tenis" },
		{ key: "option4", label: "Inot" },
		{ key: "option5", label: "Fotbal" },
		{ key: "option6", label: "Handbal" },
		{ key: "option7", label: "Volei" },
	];
	const onFinish = (values: React.SetStateAction<{}> | any) => {
		const selectedOption = options.find((option) => values.selectedOption === option.key)?.label;
		const selectedStartTime = values.selectedStartTime.format("HH:mm");
		const selectedEndTime = values.selectedEndTime.format("HH:mm");

		setFormData({ selectedOption, selectedStartTime, selectedEndTime });
	};

	return (
		<div className="add-activity-container">
			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item
					label="Activitate"
					name="selectedOption"
					rules={[{ required: true, message: "Va rog alegeti activitatea" }]}
				>
					<Select defaultValue={options[0].key}>
						{options.map((option) => (
							<Option key={option.key} value={option.key}>
								{option.label}
							</Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item
					label="De la"
					name="selectedStartTime"
					rules={[{ required: true, message: "Va rog alegeti ora de inceput" }]}
				>
					<TimePicker /* defaultValue={dayjs("09:00", "HH:mm")} */ format="HH:mm" />
				</Form.Item>
				<Form.Item
					label="Pana la"
					name="selectedEndTime"
					rules={[{ required: true, message: "Va rog alegeti ora de final" }]}
				>
					<TimePicker /* defaultValue={dayjs("18:00", "HH:mm")} */ format="HH:mm" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Salveaza
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddActivity;
