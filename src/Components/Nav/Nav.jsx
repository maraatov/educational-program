import React from "react";
import LogoContainer from "./LogoContainer";
import { NavLink } from "react-router-dom";

const Nav = ({ level }) => {
	return (
		<nav className="nav">
			<LogoContainer level={level} />
			<div className="nav-container">
				<NavLink to="/library">Library</NavLink>
				<NavLink to="/training">Training</NavLink>
				<NavLink to="/learn">Learn</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
