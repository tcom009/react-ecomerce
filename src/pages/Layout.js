import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import { BrowserRouter as Router } from "react-router-dom";

function Layout(props) {
	return (
		<React.Fragment>
			<Navbar />
			{props.children}

			<Footer />
		</React.Fragment>
	);
}

export default Layout;
