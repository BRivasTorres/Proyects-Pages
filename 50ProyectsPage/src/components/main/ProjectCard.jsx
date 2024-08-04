import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInternetExplorer, faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({id, name, img, url, repo}) => {
  return (
		<div
			id={id}
			className="bg-[#00124B] text-light  project-cart"
		>
			<section className="relative ">
				<img
					src={img}
					alt={name}
					className="min-h-[200px] rounded-[5px] w-[100%]"
				/>
				<div className="project-cart--placeholder">
					<a href={url} target="blank">
						<FontAwesomeIcon
							icon={faInternetExplorer}
							className="mr-[2rem] hover:opacity-[.6] transition-all duration-300 ease-linear"
						/>
					</a>
					<a href={repo} target="blank">
						<FontAwesomeIcon
							icon={faGithub}
							className="hover:opacity-[.6] transition-all duration-300 ease-linear"
						/>
					</a>
				</div>
			</section>

			<section>
				<h3 className="leading-snug my-6 text-center">{name}</h3>
			</section>
		</div>
  );
}

export default ProjectCard
