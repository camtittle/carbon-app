import { Request, Response } from "express"
import * as projectsService from "../../services/projectsService.js"
import { mapProjectToResponse } from "../../adapters/projects.js"

export const getProjectsController = async (req: Request, res: Response) => {
  const projects = await projectsService.listProjects()
  const response = projects.map(project => mapProjectToResponse(project))
  res.status(200).send(response)
}