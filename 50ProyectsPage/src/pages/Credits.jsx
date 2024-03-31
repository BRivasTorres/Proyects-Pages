import PrintAuthors from "../components/creadits/PrintAuthors";

const Credits = () => {
  return (
		<div className="flex text-quatenary-color min-h-[100vh] relative min-w-[300px] ">
			<PrintAuthors />
			<section className="absolute right-[10%] top-[40%] border ">
				<a
					href="https://50projects50days.com/index.html"
					target="blank"
				>
					Web
				</a>
				<a
					href="https://github.com/bradtraversy/50projects50days"
					target="blank"
				>
					Repo
				</a>
			</section>
		</div>
  );
}

export default Credits
