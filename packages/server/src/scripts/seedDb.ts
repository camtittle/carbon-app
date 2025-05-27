import { PrismaClient, ProjectStatus } from "../generated/prisma/index.js"
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

const projects = [
  {
    "country": "South Africa",
    "id": "cfafa6a2-6bca-45d1-9ae3-8ed7bc01d99d",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4699"
  },
  {
    "country": "China",
    "id": "b22abb14-9976-4b28-a0fe-51265b104d33",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4639"
  },
  {
    "country": "Myanmar",
    "id": "04d89783-9304-4daf-9130-04aa9f17cd64",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4580"
  },
  {
    "country": "Malawi",
    "id": "d462ef80-122d-44d8-975f-6ebec038e4ac",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4486"
  },
  {
    "country": "Rwanda",
    "id": "05488a5c-268e-498a-90e9-97d87e728040",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4585"
  },
  {
    "country": "China",
    "id": "3a5d4249-fa79-4cfc-8818-da97e4851a3c",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4367"
  },
  {
    "country": null,
    "id": "1f6c85ee-ad77-42f5-822a-407496a77091",
    "status": ProjectStatus.RegistrationRequested,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4247"
  },
  {
    "country": "Nigeria",
    "id": "fbf15281-c747-483c-9a73-f71082939d58",
    "status": ProjectStatus.RegistrationRequested,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4225"
  },
  {
    "country": "India",
    "id": "0a8e2889-abd4-4a64-86a6-ef715ebed2f7",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4607"
  },
  {
    "country": "Italy",
    "id": "9a4e2e16-9665-4396-be09-59a6e5b6e7ea",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4527"
  },
  {
    "country": "South Africa",
    "id": "0ef3046a-3de3-420f-9589-18f1620fcd55",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4319"
  },
  {
    "country": "China",
    "id": "59b60280-0180-43de-9b2b-6ed1dcefb649",
    "status": ProjectStatus.RegistrationRequested,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4341"
  },
  {
    "country": null,
    "id": "58f4baaa-4d98-46bb-a90b-b4a95b45970d",
    "status": ProjectStatus.RegistrationRequested,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4342"
  },
  {
    "country": "India",
    "id": "032a3d63-2cff-4ff3-9cd8-b0d9cfb466d1",
    "status": ProjectStatus.UnderDevelopment,
    "url": "https://registry.verra.org/app/projectDetail/VCS/4368"
  }
]

async function main() {
  await Promise.all(
    projects.map((project) => {
      return prisma.project.upsert({
        where: { id: project.id },
        update: {},
        create: {
          id: project.id,
          country: project.country,
          status: project.status,
          url: project.url,
        },
      })
    })
  )
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })