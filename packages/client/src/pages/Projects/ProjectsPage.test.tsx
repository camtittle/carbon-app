import { ProjectStatus, type Project } from "@carbon-app/common"
import { server } from "../../scripts/setupTests"
import { http, HttpResponse } from "msw"
import { render, screen, waitFor, within } from "@testing-library/react"
import { ProjectsPage } from "./ProjectsPage"
import { TestComponentWrapper } from "../../testing/TestComponentWrapper"

describe('ProjectsPage', () => {

  beforeEach(() => {
    mockServer()
  })

  it('renders cards containing project details', async () => {
    renderProjectsPage()

    // Wait for the projects to be loaded
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument())

    await screen.findByText(mockProjects[0].id)

    mockProjects.forEach(project => {
      const card = screen.getByRole('article', { name: project.id })

      expect(within(card).getByText(project.id)).toBeInTheDocument()
      expect(within(card).getByText(`Status: ${project.status}`)).toBeInTheDocument()
      expect(within(card).getByText(`Country: ${project.country}`)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: /view project/i })).toHaveAttribute('href', project.url)
    })
  })
})

const renderProjectsPage = () => {
  render(
    <TestComponentWrapper>
      <ProjectsPage />
    </TestComponentWrapper>
  )
}

const statuses = Object.values(ProjectStatus)

const mockProjects: Project[] = [0, 1, 2].map(index => ({
  id: `project-${index}`,
  url: `https://project-${index}.example.com`,
  country: `Country ${index}`,
  status: statuses[index]
}))

const mockServer = () => {
  server.use(
    http.get('*/projects', () => {
      return HttpResponse.json(mockProjects)
    })
  )
}