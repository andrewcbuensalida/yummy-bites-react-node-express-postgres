import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ICustomer } from "../interfaces/Interfaces";
import "./CustomerBody.css";

function CustomerBody({ oneContent }: { oneContent: ICustomer }) {
	return (
		<div>
			<div className="CustomerBody_phone">
				{oneContent.cellPhone}
				<LocalPhoneIcon />
			</div>
			<div className="CustomerBody_address">
				{oneContent.homeAddress}
				<NavigationIcon />
			</div>
		</div>
	);
}

export default CustomerBody;
