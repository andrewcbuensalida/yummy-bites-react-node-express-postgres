import React, { useEffect, useState } from "react";
import { IOrderWithProductsAndCustomer } from "../interfaces/Interfaces";
import Checkbox from "./Checkbox";
import "./FilterOrders.css";

interface Props {
	ordersWithProductsAndCustomers: IOrderWithProductsAndCustomer[];
	setFilteredOrders: React.Dispatch<React.SetStateAction<IOrderWithProductsAndCustomer[]>>;
}

function FilterOrders({
	ordersWithProductsAndCustomers,
	setFilteredOrders,
}: Props) {
	const [isPending, setIsPending] = useState(false);

	useEffect(() => {
		if (isPending) {
			const newOrders = ordersWithProductsAndCustomers.filter(
				(order: IOrderWithProductsAndCustomer) =>
					order.isPending === isPending
			);
			setFilteredOrders(newOrders);
		} else {
			setFilteredOrders(ordersWithProductsAndCustomers);
		}
	}, [isPending, ordersWithProductsAndCustomers]);

	return (
		<div className="FilterOrders_container">
			<div className="FilterOrders_paid_delivered">
				<label>Show all</label>
				<Checkbox isToggled={isPending} setIsToggled={setIsPending} />
				<label>Pending</label>
			</div>
			<div id="FilterOrders_nameDiv">
				<label htmlFor="FilterOrders_name">Name:</label>
				<input
					name="FilterOrders_name"
					id="FilterOrders_name"
					type="text"
				/>
			</div>
		</div>
	);
}

export default FilterOrders;
