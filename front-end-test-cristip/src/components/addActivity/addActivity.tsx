import { Button, Form, Select, TimePicker } from "antd";
import dayjs from "dayjs";
import React, { useState, useContext, useEffect } from "react";
import { SchedulerContext } from "../../Context/ScheduleStateProvider";
import { options } from "../../static-data/data";
const { Option } = Select;

interface FormData {
	selectedOption: string | undefined;
	selectedStartTime: string;
	selectedEndTime: string;
}

const AddActivity = () => {
	const [form] = Form.useForm();
	const [formData, setFormData] = useState({} as FormData);
	const { scheduleGlobal, setScheduleGlobal, currentDayLabel } = useContext(SchedulerContext);
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		const dataToSend = {
			day: currentDayLabel,
			activity: formData.selectedOption,
			startTime: formData.selectedStartTime,
			endTime: formData.selectedEndTime,
		};
		if (dataToSend.activity !== undefined) setScheduleGlobal([...scheduleGlobal, dataToSend]);
	}, [formData]);

	const onFinish = (values: React.SetStateAction<{}> | any) => {
		const selectedOption = options.find((option) => values.selectedOption === option.key)?.label;
		const selectedStartTime = values.selectedStartTime.format("HH:mm");
		const selectedEndTime = values.selectedEndTime.format("HH:mm");

		console.log("form values:", values);

		setFormData({ selectedOption, selectedStartTime, selectedEndTime });
		setIsDisabled(true);
	};

	return (
		<div className="add-activity-container">
			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item
					label="Activitate"
					name="selectedOption"
					rules={[{ required: true, message: "Va rog alegeti activitatea" }]}
				>
					<Select placeholder="Lista activitati" onChange={() => setIsDisabled(false)}>
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
					validateTrigger={["onChange", "onBlur"]}
					rules={[{ required: true, message: "Va rog alegeti ora de inceput" }]}
				>
					<TimePicker placeholder="Ora, minut" format="HH:mm" onChange={() => setIsDisabled(false)} />
				</Form.Item>
				<Form.Item
					label="Pana la"
					name="selectedEndTime"
					rules={[
						{ required: true, message: "Va rog alegeti ora de final" },
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || !getFieldValue("selectedStartTime")) {
									return Promise.resolve();
								}
								const startTime = getFieldValue("selectedStartTime");
								if (dayjs(value).isBefore(startTime)) {
									return Promise.reject("Ora de final trebuie sa fie mai mare decat ora de inceput");
								}
								return Promise.resolve();
							},
						}),
					]}
				>
					<TimePicker placeholder="Ora, minut" format="HH:mm" onChange={() => setIsDisabled(false)} />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" disabled={isDisabled}>
						Salveaza
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddActivity;
