import React from "react";
import './Checkbox.css'

function Checkbox({
	setIsToggled,
	isToggled,
}: {
	// not sure if i should use (isToggled: boolean) => void; or this, both work
	setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
	isToggled: boolean;
}) {
	return (
		<label className="switch">
			<input
				type="checkbox"
				id="isPendingCheckbox"
				onClick={() => setIsToggled(!isToggled)}
			/>
			<span className="slider round"></span>
		</label>
	);
}

export default Checkbox;
