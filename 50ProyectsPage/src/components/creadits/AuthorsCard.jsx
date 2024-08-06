import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const AuthorsCard = ({ img, name, bio, gitUrl }) => {
	return (
		<div className="authors-card text-tertiary-color max-w-[500px]">
			<div className="box">
				<div className="front card">
					<img
						src={img}
						alt="avatar"
						className="w-[150px] rounded-[100%]"
					/>
				</div>
				<div className="left card">
					<h2>{name}</h2>
				</div>
				<div className="rigth card">
					<p>{bio}</p>
				</div>
				<div className="back card">
					<a href={gitUrl} target="blank">
						<FontAwesomeIcon
							icon={faGithub}
							className="text-light text-[2rem] w-fit hover:opacity-50 transition-all duration-300 "
						/>
					</a>
				</div>
				<div className="top"></div>
			</div>
		</div>
	);
};

export default AuthorsCard;
