const orders = [
	{
		id: 1,
		customerId: 1,
		items: [
			{ productId: 1, quantity: 3 },
			{ productId: 2, quantity: 2 },
		],
		deliveryAddress: "pick-up",
		deliveryTime: new Date("1995-12-17T03:24:00"),
		dateOrdered: new Date("1995-10-17T13:24:00"),
		isPending: false,
		isPaid: false,
	},
	{
		id: 2,
		customerId: 2,
		items: [
			{ productId: 2, quantity: 5 },
			{ productId: 1, quantity: 6 },
		],
		deliveryAddress: "124 Acacia Ave",
		deliveryTime: new Date("1996-12-17T03:24:00"),
		dateOrdered: new Date("1996-10-17T03:24:00"),
		isPending: true,
		isPaid: true,
	},
];

const customers = [
	{
		id: 1,
		firstName: "John",
		lastName: "Lennon Yoko Ono and the gang",
		homeAddress: "214 Bougainvilla",
		cellPhone: "0917-423-2523",
	},
	{
		id: 2,
		firstName: "Lily",
		lastName: "Aldrin",
		homeAddress: "5132 Madrigal Avenue, Ayala Alabang",
		cellPhone: "0929-521-4151",
	},
];

const products = [
	{
		id: 1,
		name: "dozen Chicken Empanada",
		price: 150,
		imageUrl:
			"https://www.curiouscuisiniere.com/wp-content/uploads/2018/09/Fried-Bolivian-Chicken-Empanadas.jpg.webp",
	},
	{
		id: 2,
		name: "box Kutsinta",
		price: 150,
		imageUrl:
			"https://4.bp.blogspot.com/-sgxcgr2z5vo/WMbQCoYNPoI/AAAAAAAADvI/QALCKMlkfd4t_0hWAGchen_A0g4h3LGnQCLcB/s1600/Snapshot%25281264%2529.bmp",
	},
];

export default { products, customers, orders };
