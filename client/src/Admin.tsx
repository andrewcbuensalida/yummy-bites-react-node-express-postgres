import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import mockData from "./mockData";
import AdminNavbar from "./components/AdminNavbar";
import { ICustomer, IProduct, IOrder } from "./interfaces/Interfaces";
import BASE_URL from "./URL";

function Admin() {
	const [customers, setCustomers] = useState<ICustomer[]>([]);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [orders, setOrders] = useState<IOrder[]>([]);

	//fetch all data from database
	useEffect(() => {
		try {
			const getData = async (URL: string) => {
				const responseRaw = await fetch(URL);
				const { ok, data } = await responseRaw.json();

				console.log(`This is data.orders[0]`);
				console.log(data.orders[0].deliveryTime);

				console.log(`This is new Date`);
				console.log(new Date(data.orders[0].deliveryTime));

				const ordersWithDateObject = data.orders.map(
					(order: IOrder) => {
						return {
							...order,
							deliveryTime: new Date(order.deliveryTime),
							dateOrdered: new Date(order.dateOrdered),
						};
					}
				);

				// maybe should separate these calls so all wont fail if one fails
				if (ok) {
					setCustomers(data.customers);
					setProducts(data.products);
					setOrders(ordersWithDateObject);
				}
			};
			getData(BASE_URL);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div>
			Admin
			<AdminNavbar />
			<Outlet
				context={{
					customers,
					setCustomers,
					products,
					setProducts,
					orders,
					setOrders,
				}}
			/>
		</div>
	);
}

export default Admin;
