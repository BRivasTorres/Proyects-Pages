
const links = [["home", "#home"], ["about", "#about"], ["projects", "#projects"]]

const Nav = () => {
  return (
		<nav className="max-w-[1000px] mx-auto text-[2rem] font-[300] p-4 rounded-[100px] bg-tertiary-color text-secondary-color">
			<ul className="flex justify-center">
				{links.map(([title, url], id) => {
					return (
						<li key={id}>
							<a
								href={url}
								className="px-6 py-3 capitalize transition-all duration-500 rounded-[100px] hover:bg-primary-color"
							>
								{title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
  );
}

export default Nav