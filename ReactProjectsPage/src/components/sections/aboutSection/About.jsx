import AboutHero from "./AboutHero";
import AboutTools from "./AboutTools";

const About = () => {
  return (
		<section
			id="about"
			className="min-h-[100vh] bg-quaternary-color grid place-content-center grid-cols-1 sm:grid-cols-2 gap-8 p-4"
		>
			<div className="grid gap-[1rem] ">
				<p>
					With these projects I had the opportunity to reinforce
					several React concepts, and I was also able to learn and
					implement new knowledge related to React. I was also able to
					discover other interactive libraries focused on the Frontend
					area.
				</p>
				<AboutTools />
			</div>
			<AboutHero />
		</section>
  );
}

export default About
