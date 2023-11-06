import { PrismaClient } from '@prisma/client';

import type { PageServerLoad } from './$types';

const client = new PrismaClient();

export const load: PageServerLoad = async ({ params }) => {
	const users = await client.user.findMany();
	return {
		users
	};
};
