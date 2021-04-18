import React from "react";

function ProductBox({ img = "", product = "", price = "" }) {
	return (
		<div className="box">
			<div className="colummns">
				<figure>
					<img src={img} />
				</figure>
			</div>
			<div className="colummns">{product}</div>
			<div className="colummns">4stars</div>
			<div className="colummns">{price}</div>
		</div>
	);
}
export default ProductBox;
