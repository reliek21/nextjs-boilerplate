import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/binary';

import { CONFIG_ENVIRONMENTS } from './enviroments.config';

function prismaClientSingleton(): PrismaClient<
	Prisma.PrismaClientOptions,
	never,
	DefaultArgs
> {
	return new PrismaClient();
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma: { prisma: PrismaClientSingleton | undefined } =
	// eslint-disable-next-line no-undef
	globalThis as unknown as {
		prisma: PrismaClientSingleton | undefined;
	};

const prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> =
	globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (CONFIG_ENVIRONMENTS.NODE_ENV !== 'production')
	globalForPrisma.prisma = prisma;
