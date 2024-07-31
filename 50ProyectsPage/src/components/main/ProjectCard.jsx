import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInternetExplorer, faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({id, name, img, url, repo}) => {
  return (
		<div
			id={id}
			className="bg-green-900 text-primary-color font-bold text-[1.5rem] p-[1rem] rounded-[5px] flex flex-col items-center justify-between gap-y-[1rem] "
		>
			<section>
				<img
					src={img}
					alt={name}
					className="min-h-[200px] rounded-[5px]"
				/>
			</section>

			<section>
				<h3>{name}</h3>
				<div className="text-center">
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
		</div>
  );
}

export default ProjectCard
