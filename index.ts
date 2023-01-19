import { PrismaClient } from "@prisma/client";

(async () => {
	const client = new PrismaClient();
	
	const customers = await client.customer.findMany({});

	console.log(customers.map(user => user.name));
})();
