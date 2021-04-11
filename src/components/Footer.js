import React from "react";
import logo from "../logo.svg";
function Footer() {
	return (
		<nav className="navbar is-dark">
			<div className="navbar-end">
				<div className="navbar-item has-text-weight-bold has-text-primary navbar-item">
					<img src={logo} />
					REACT E-COMMERCE
				</div>
			</div>
		</nav>
	);
}
export default Footer;
