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

	//fetch all data from database
	useEffect(() => {
		try {
			const getData = async (URL: string) => {
				const responseRaw = await fetch(URL);
				const { ok, data } = await responseRaw.json();

                // maybe should separate these calls so all wont fail if one fails
				if (ok) {                   
					setCustomers(data.customers);
					setProducts(data.products);
					setOrders(data.orders);
				}

			};
			getData(URL);
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
