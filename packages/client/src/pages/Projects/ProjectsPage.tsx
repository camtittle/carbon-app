import { useProjects } from "../../queries/useProjects";
import { ProjectsList } from "./ProjectsList";

export const ProjectsPage = () => {
  const { data, isFetching, isError } = useProjects()

  if (isFetching) {
    return <div>Loading projects...</div>;
  }

  if (isError || !data) {
    return <div>Error loading projects.</div>;
  }

  return (
    <div>
      <h1>Projects</h1>
      <ProjectsList projects={data} />
    </div>
  );
}