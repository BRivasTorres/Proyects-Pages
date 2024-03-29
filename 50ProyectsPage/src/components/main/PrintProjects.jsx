import projectsData from "../../mocks/projectsData"
import ProjectCard from "./ProjectCard"

const PrintProjects = () => {
  return (
    <div className="">
      {projectsData.map(project => {
        return (
          <ProjectCard 
            key={project.id} 
            name={project.nameProject} 
            img={project.urlImg} 
            url={project.urlProject} 
            repo={project.repoProject}
          />
        )
      })}
    </div>
  )
}

export default PrintProjects
