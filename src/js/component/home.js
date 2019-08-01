import React from "react";

//include images into your bundle
import { Trafficlight } from "./trafficlight";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Trafficlight />
			</div>
		);
	}
}
