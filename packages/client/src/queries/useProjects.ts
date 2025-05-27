import { useQuery } from "@tanstack/react-query"
import { get } from "./utils"
import type { Project } from "@carbon-app/common"

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      return get<Project[]>('/projects')
    },
  })
}