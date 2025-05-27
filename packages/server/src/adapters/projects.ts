import { Project, ProjectStatus } from "../generated/prisma/index.js"
import { Project as ApiProject, ProjectStatus as ApiProjectStatus } from "@carbon-app/common"

const projectStatusMap: Record<ProjectStatus, ApiProjectStatus> = {
  [ProjectStatus.RegistrationRequested]: ApiProjectStatus.RegistrationRequested,
  [ProjectStatus.UnderDevelopment]: ApiProjectStatus.UnderDevelopment,
  [ProjectStatus.UnderValidation]: ApiProjectStatus.UnderValidation,
}

export const mapProjectStatusToResponse = (status: ProjectStatus): ApiProjectStatus => {
  const mappedStatus = projectStatusMap[status]
  if (!mappedStatus) {
    throw new Error(`Unknown project status: ${status}`)
  }
  return mappedStatus
}

export const mapProjectToResponse = (project: Project): ApiProject => ({
  id: project.id,
  url: project.url,
  country: project.country ?? undefined,
  status: mapProjectStatusToResponse(project.status),
})
