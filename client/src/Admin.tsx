import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import mockData from "./mockData";
import AdminNavbar from "./components/AdminNavbar";
import { ICustomer, IProduct, IOrder } from "./interfaces/Interfaces";

function Admin() {
	const [customers, setCustomers] = useState<ICustomer[]>([]);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [orders, setOrders] = useState<IOrder[]>([]);

	useEffect(() => {
		setCustomers(mockData.customers);
		setProducts(mockData.products);
		setOrders(mockData.orders);
	}, [customers, products, orders]);

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
