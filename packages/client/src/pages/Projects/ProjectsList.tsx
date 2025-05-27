import type { Project } from "@carbon-app/common"
import { Card } from "../../components/Card"
import styled from "styled-components"

type ProjectsListProps = {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <ProjectsContainer>
      {
        projects.map(project =>
          <Card key={project.id} label={project.id}>
            <h3>{project.id}</h3>
            <p>Status: {project.status}</p>
            <p>Country: {project.country ?? "N/A"}</p>
            <a href={project.url}>View project</a>
          </Card>
        )
      }
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 16px;
`