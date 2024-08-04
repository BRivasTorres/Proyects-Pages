import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const AuthorsCard = ({ img, name, bio, gitUrl }) => {
	return (
		<div className="authors-card gap-[1rem] p-[1.5rem] bg-secondary-color text-tertiary-color rounded-[10px] font-semibold ">
			<img
				src={img}
				alt="avatar"
				className="w-[150px] rounded-[100%]"
			/>
			<section className="flex flex-col gap-[1rem]">
				<h2>{name}</h2>
				<p>{bio}</p>
				<a href={gitUrl} target="blank">
					<FontAwesomeIcon icon={faGithub} className="text-light text-[2rem] w-fit hover:opacity-50 transition-all duration-300 " />
				</a>
			</section>
		</div>
	);
};

export default AuthorsCard;
