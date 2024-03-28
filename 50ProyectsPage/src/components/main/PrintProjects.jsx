import projectsData from "../../mocks/projectsData"
import ProjectCard from "./ProjectCard"

const PrintProjects = () => {
  return (
    <div>
      {projectsData.map(project => {
        <ProjectCard key={project.id} />
      })}
    </div>
  )
}

export default PrintProjects
