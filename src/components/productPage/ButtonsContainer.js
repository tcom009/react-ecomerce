import React from "react";

function ButtonsContainer() {
	return (
		<>
			<div className="columns">
				<div className="column"></div>
				<div className="column is-two-thirds">
					<span> Cantidad: </span>
					<div class="select has-icons-left is-primary">
						<select>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
				</div>
				<div className="column"></div>
			</div>
			<div className="columns ">
				<div className="column"></div>
				<div className="column pb-2 is-two-thirds">
					<button className="button is-rounded is-fullwidth is-primary">
						Agregar al carrito
					</button>
				</div>
				<div className="column"></div>
			</div>
			<div className="columns ">
				<div className="column"></div>
				<div className="column pt-0 is-two-thirds">
					<button className="button is-rounded is-fullwidth is-warning">
						Comprar Ahora
					</button>
				</div>
				<div className="column"></div>
			</div>
		</>
	);
}

export default ButtonsContainer;
