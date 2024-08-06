import projectsData from "../../mocks/projectsData";
import ProjectCard from "./ProjectCard";

const AboutProjects = () => {
	
	const featuredProjects = projectsData.filter(item => item.featured)
	
  return (
		<div className="min-h-[75vh] max-w-[1200px] mx-auto ">
			<p className="font-secondary-font text-tertiary-color text-[2rem] font-medium leading-[35px]">
				Small projects in which I reinforced and learned concepts
				related to frontend programming, using HTML, JS and CSS, as well
				as other tools for both design and optimization. An entertaining
				and didactic way in which I learned a lot.
			</p>
			<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 ">
				{featuredProjects.map((project) => {
					return (
						<ProjectCard
							key={project.id}
							name={project.nameProject}
							img={project.urlImg}
							url={project.urlProject}
							repo={project.repoProject}
						/>
					);
				})}
			</div>
		</div>
  );
}

export default AboutProjects
