import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [];

  for (let i = 0; i < 1000000; i++) {
    users.push({
      name: faker.person.firstName(),
      email: faker.internet.email(),
    });
  }

  await prisma.user.createMany({
    data: users,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
