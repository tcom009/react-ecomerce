import React from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products" component={ProductPage} />
						<Route exact path="/categories" component={Categories} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/product" component={ProductPage} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
