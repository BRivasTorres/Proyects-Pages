import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInternetExplorer, faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({id, name, img, url, repo}) => {
  return (
		<div id={id}>
			<section>
				<img src={img} alt={name} />
			</section>
			<section>
				<h3>{name}</h3>
				<a href={url}>
					<FontAwesomeIcon icon={faInternetExplorer} />
				</a>
				<a href={repo}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</section>
		</div>
  );
}

export default ProjectCard
