import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
		<div className="text-secondary-color font-semibold font-secondary-font text-[2.5rem]">
			<ul className="flex flex-col justify-center items-center gap-[2rem] bg-tertiary-color text-primary-color p-[.8rem] sm:flex-row ">
				<li>
					<NavLink to={"/"} className="link-styles">
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to={"/about"} className="link-styles">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to={"/credits"} className="link-styles">
						Credits
					</NavLink>
				</li>
			</ul>
		</div>
  );
}

export default Nav
