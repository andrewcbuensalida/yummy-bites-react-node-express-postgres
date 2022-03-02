import React from "react";
import { format } from "date-fns";

import "./OrdersContent.css";
import { IItemWithProduct, IOrderWithProductsAndCustomer } from "../interfaces/Interfaces";

function OrdersContent({ oneContent }: {oneContent:IOrderWithProductsAndCustomer}) {    
	return (
		<div className="OrdersContent_container">
			<div>Pending? {oneContent.isPending ? "Yes" : "No"}</div>
			<div>Paid? {oneContent.isPaid ? "Yes" : "No"}</div>
			<div>
				Date Ordered:{" "}
				{format(oneContent.dateOrdered, "MMM dd, ''yy h:mm aa")}
			</div>
			<div>
				Delivery Time:{" "}
				{format(oneContent.deliveryTime, "MMM dd, ''yy h:mm aa")}
			</div>
			<div>Delivery Address: {oneContent.deliveryAddress}</div>
			<ul>
				Items:
				{oneContent.items.map((item: IItemWithProduct) => (
					<li key={item.productId} className="OrdersContent_item">
						{item.quantity + " "}
						{item.product.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default OrdersContent;
