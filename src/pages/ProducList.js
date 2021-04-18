import React from "react";
import ProductBox from "../components/productList/ProductBox";
function ProductList() {
	const img1 =
		"https://i.picsum.photos/id/228/200/200.jpg?hmac=o6k6dSrgAeHp1V6rxIjRR2cwEeu4DUs9Z1-sLxrQ878";
	const img2 =
		"https://i.picsum.photos/id/354/200/200.jpg?hmac=ykMwenrB5tcaT_UHlYwh2ZzAZ4Km48YOmwJTFCiodJ4";
	const img3 =
		"https://i.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8";
	return (
		<div className="container">
			<div className="columns">
				<div className="column is-one-third is-one-third">
					<ProductBox img={img1} product={"Viaje Cancun"} price={"1999.99"} />
				</div>
				<div className="column is-one-third">
					<ProductBox img={img3} product={"Viaje Antillas"} price={"1999.99"} />
				</div>
				<div className="column is-one-third">
					<ProductBox img={img2} product={"Viaje Tolum"} price={"1999.99"} />
				</div>
			</div>
		</div>
	);
}
export default ProductList;
