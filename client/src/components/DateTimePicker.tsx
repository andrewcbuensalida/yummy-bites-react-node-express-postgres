import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

// this is a third way of declaring types
interface Props {
	date: Date | null;
	setDate: (date: Date | null) => void;
}
const BasicDateTimePicker: React.FC<Props> = ({ date, setDate }) => {
	const [value, setValue] = React.useState<Date | null>(new Date());

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(props) => <TextField {...props} />}
				// label="DateTimePicker"
				value={date}
				onChange={(newValue) => {
					setDate(newValue);
				}}
			/>
		</LocalizationProvider>
	);
};

export default BasicDateTimePicker;
