import { mapProjectStatusToResponse } from "../../adapters/projects.js"
import { ProjectStatus } from "../../generated/prisma/index.js"
import { app } from "../../index.js"
import { ROUTES } from "../../routes.js"
import { fakeProject } from "../../testHelpers/fakes/index.js"
import request from 'supertest'

describe('getProjectsController', () => {
  it('lists all projects', async () => {
    const projects = await Promise.all([
      fakeProject({ url: "project1.com", country: "GB", status: ProjectStatus.UnderDevelopment }),
      fakeProject({ url: "project2.com", country: "US", status: ProjectStatus.UnderValidation }),
      fakeProject({ url: "project3.com", country: "FR", status: ProjectStatus.RegistrationRequested }),
    ])

    const response = await sendRequest()
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(3)
    expect(response.body).toEqual(
      expect.arrayContaining(
        projects.map(project => expect.objectContaining({
          id: project.id,
          url: project.url,
          country: project.country,
          status: mapProjectStatusToResponse(project.status)
        }))
      )
    )
  })

  it('returns an empty array if there are no projects', async () => {
    const response = await sendRequest()
    expect(response.status).toBe(200)
    expect(response.body).toEqual([])
  })
})

const sendRequest = () =>
  request(app)
    .get(ROUTES.PROJECTS)