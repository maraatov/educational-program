import React from "react";
import logo from "../../image/logo.png";
import { NavLink } from "react-router-dom";

const LogoContainer = props => {
	return (
		<div className="logo-container">
			<NavLink to="/">
				<img src={logo} alt="logo" />
			</NavLink>
			<span className="level-title">Level {props.level}</span>
		</div>
	);
};

export default LogoContainer;
