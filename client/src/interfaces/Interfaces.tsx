export interface ICustomer {
	id: number;
	firstName: string;
	lastName: string;
	homeAddress: string;
	cellPhone: string;
}

export interface IProduct {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
}

export interface IOrder {
	id: number;
	customerId: number;
	items: IItem[];
	deliveryAddress: string;
	deliveryTime: Date;
	dateOrdered: Date;
	isPending: boolean;
	isPaid: boolean;
}

export interface IItem {
	productId: number;
	quantity: number;
}

export interface IItemWithProduct extends IItem {
	product: IProduct;
}

export interface IOrderWithProductsAndCustomer extends IOrder {
	customer: ICustomer;
	items: IItemWithProduct[];
}
