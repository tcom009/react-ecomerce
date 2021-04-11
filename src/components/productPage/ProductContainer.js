import React from "react";
import ButtonsContainer from "./ButtonsContainer";
function ProductContainer(props) {
	return (
		<div className="column">
			<div className="columns is-size-2">ProductName</div>
			<div className="columns">
				<div
					className="column  is-one-fifth-mobile
							is-one-fifth 
"
				>
					<p classname="has-text-weight-light">
						Price:
						<p className="has-text-danger-dark has-text-weight-bold is-size-3">
							{props.price}
						</p>
					</p>
				</div>
			</div>
			<div className="columns">
				<div className="column has-text-justified">
					<p>{props.description}</p>
				</div>
			</div>
			<ButtonsContainer />
		</div>
	);
}

export default ProductContainer;
