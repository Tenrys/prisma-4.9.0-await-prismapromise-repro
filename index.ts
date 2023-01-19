import { PrismaClient } from "@prisma/client";

async () => {
	const client = new PrismaClient();

	const users = await client.user.findMany({});

	console.log(users.map(user => user.name));
};
