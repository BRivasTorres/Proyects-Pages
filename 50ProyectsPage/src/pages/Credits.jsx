import PrintAuthors from "../components/creadits/PrintAuthors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Credits = () => {
  return (
		<div className="flex flex-col-reverse items-center gap-x-[3rem] text-quatenary-color min-h-[100vh] w-[70%] mx-auto max-w-[1600px] sm:grid sm:grid-cols-[_65%_35%] ">
			<PrintAuthors />
			<section className="text-[2rem] font-semibold flex flex-col mt-[1rem]">
				<a
					href="https://50projects50days.com/index.html"
					target="blank"
					className="link-styles"
				>
					Web
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
				<a
					href="https://github.com/bradtraversy/50projects50days"
					target="blank"
					className="link-styles"
				>
					Repository
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
			</section>
		</div>
  );
}

export default Credits
