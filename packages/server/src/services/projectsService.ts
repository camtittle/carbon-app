import { prisma } from "./prisma.js"

export const listProjects = async () => {
  return await prisma.project.findMany()
}