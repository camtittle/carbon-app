export enum ProjectStatus {
  UnderDevelopment = "Under development",
  UnderValidation = "Under validation",
  RegistrationRequested = "Registration requested",
}

export type Project = {
  id: string
  url: string
  country?: string
  status: ProjectStatus
}