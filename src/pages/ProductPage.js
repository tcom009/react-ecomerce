import React, { useState } from "react";
import Breadcrumb from "../components/productPage/Breadcrumb";
import ImageContainer from "../components/productPage/ImageContainer";
import ProductContainer from "../components/productPage/ProductContainer";
function ProductPage() {
	const [productQuantity, setProductQuantity] = useState("");
	let superlorem =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nisi facere neque nihil aliquam repellendus, deleniti exercitationem distinctio perferendis, dicta explicabo quo? Maiores rerum, tenetur amet quam ea ab facilis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quisquam rerum, quam soluta fugiat ipsa vero id dolor quia repellendus impedit animi et maiores officia neque. In adipisci repellendus voluptas.";
	let description =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nisi facere neque nihil aliquam repellendus, deleniti exercitationem distinctio perferendis, dicta explicabo quo? Maiores rerum, tenetur amet quam ea ab facilis.";
	let price = "$199.99";
	return (
		<>
			<div className="column pt-5 is-mobile">
				<Breadcrumb />
			</div>

			<div className="container">
				<div className="columns ">
					<ImageContainer />
					<ProductContainer description={description} price={price} />
				</div>
				<div className="columns">
					<div className="column">
						<div className="box has-text-justified">
							<h1 className="has-text-weight-bold is-size-4">
								Long Description
							</h1>
							<p>{superlorem}</p>
							<p>{superlorem}</p>
							<p>{superlorem}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ProductPage;
