import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import mockData from "./mockData";
import AdminNavbar from "./components/AdminNavbar";
import { ICustomer, IProduct, IOrder } from "./interfaces/Interfaces";

const URL = "http://localhost:3500/api/v1";

function Admin() {
	const [customers, setCustomers] = useState<ICustomer[]>([]);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [orders, setOrders] = useState<IOrder[]>([]);
	console.log(`this is customers`);

	console.log(customers);

    //fetch all data from database
	useEffect(() => {
		try {
			const getCustomers = async (URL: string) => {
				const customersRaw = await fetch(URL);
				const customers = await customersRaw.json();
				setCustomers(customers.data);
			};
			getCustomers(URL);
		} catch (error) {}
		setProducts(mockData.products);
		setOrders(mockData.orders);
	}, [products, orders]);

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
