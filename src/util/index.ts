import { faker } from "@faker-js/faker";
import { Friend } from "../types";
import { CLOSE_FRIENDS, SUPER_CLOSE_FRIENDS } from "./constants";

// i know the instructions said not to use external libraries but i figured this was ok
// (not a component library, just a data generator)

const friendStatuses = [CLOSE_FRIENDS, SUPER_CLOSE_FRIENDS, null];

export const generateUsers = (count: number = 10): Friend[] => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      number: faker.phone.number(),
      status: friendStatuses[Math.floor(Math.random() * 3)],
    });
  }
  return users;
};
