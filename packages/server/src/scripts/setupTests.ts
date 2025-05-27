import { prisma } from "../db/prisma.js"

const tablesToClear = [
  'project'
] as const

beforeEach(async () => {
  // Reset the database
  await Promise.all(
    tablesToClear.map(table => prisma[table].deleteMany())
  )
})