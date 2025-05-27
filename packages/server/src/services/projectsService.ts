import { prisma } from "../db/prisma.js"

export const listProjects = async () => {
  return await prisma.project.findMany()
}