import React from "react";
import { useOutletContext } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ICustomer } from "../interfaces/Interfaces";

function CustomersList() {
	const {
		customers,
		setCustomers,
	}: {
		customers: ICustomer[];
		// not sure if it should be setCustomers:  (customers: ICustomer[]) => void or this, both work actually
		setCustomers: React.Dispatch<React.SetStateAction<ICustomer[]>>;
	} = useOutletContext();

	return (
		<div>
			<table id="CustomersList_table">
				<tr>
					<th>Customers List</th>
				</tr>
				{customers.map((customer) => (
					<tr className="CustomersList_customer_tr">
						<div className="CustomersList_customer_tr_div">
							<div>
								<strong>
									{customer.firstName} {customer.lastName}
								</strong>
							</div>
							<div className="CustomersList_customer_tr_div_edit_delete">
								<button>Edit</button>
								<button>Delete</button>
							</div>
						</div>
						<div className="CustomersList_customer_tr_div">
							{customer.cellPhone}
							<LocalPhoneIcon />
						</div>
						<div className="CustomersList_customer_tr_div">
							{customer.homeAddress}
							<NavigationIcon />
						</div>
					</tr>
				))}
			</table>
		</div>
	);
}

export default CustomersList;
