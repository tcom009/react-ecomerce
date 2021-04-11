import React from "react";

function ImageContainer() {
	return (
		<div className="column is-two-fifths">
			<div className="column"></div>
			<div className="column is-four-fifths ml-5">
				<figure className="image is-square">
					<img src="https://i.picsum.photos/id/157/300/300.jpg?hmac=WCLyLviVSg1S7sWPaRxhiV05RJccIop20A-iU8ptyTU" />
				</figure>
			</div>
		</div>
	);
}

export default ImageContainer;
