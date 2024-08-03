import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
		<div className="font-semibold font-secondary-font text-[2.5rem]">
			<ul className="flex flex-col justify-center items-center gap-[2rem] p-[.8rem] sm:flex-row hover:animation pause-animation bg-secondary-color ">
				<li>
					<NavLink to={"/"} className="link-styles text-light">
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to={"/about"} className="link-styles text-light">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to={"/credits"} className="link-styles text-light">
						Credits
					</NavLink>
				</li>
			</ul>
		</div>
  );
}

export default Nav
