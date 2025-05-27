import { prisma } from "../../db/prisma.js";
import { Project, ProjectStatus } from "../../generated/prisma/index.js";
import { faker } from '@faker-js/faker';

export const fakeProject = async (overrides: Partial<Project>) => {
  return await prisma.project.create({
    data: {
      id: faker.string.uuid(),
      url: "https://fake-project.example.com",
      country: "US",
      status: ProjectStatus.RegistrationRequested,
      ...overrides,
    },
  });
}