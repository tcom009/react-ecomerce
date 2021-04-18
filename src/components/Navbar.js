import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav className="navbar is-dark">
			<div className="navbar-brand navbar-item has-text-primary has-text-weight-bold">
				<img src={logo} />
				REACT E-COMMERCE
			</div>
			<div className="navbar menu is-dark is-active">
				<div className="navbar-start ">
					<Link to="/" className="navbar-item">
						Inicio
					</Link>
					<Link to="/products" className="navbar-item">
						Productos
					</Link>
					<Link to="/categories" className="navbar-item">
						Categorias
					</Link>
					<Link to="/cart" className="navbar-item">
						Carrito
					</Link>
					<Link to="/productlist" className="navbar-item">
						Lista de productos
					</Link>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
