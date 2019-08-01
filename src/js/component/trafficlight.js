import React from "react";

export class Trafficlight extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: "" };
	}

	render() {
		let newRedClass = "";
		let newYellowClass = "";
		let newGreenClass = "";
		if (this.state.clicked === "red") {
			newRedClass = "blur";
		} else if (this.state.clicked === "yellow") {
			newYellowClass = "blur";
		} else if (this.state.clicked === "green") {
			newGreenClass = "blur";
		}
		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						onClick={() => this.setState({ clicked: "red" })}
						className={"red-light " + newRedClass}
					/>
					<div
						onClick={() => this.setState({ clicked: "yellow" })}
						className={"yellow-light " + newYellowClass}
					/>
					<div
						onClick={() => this.setState({ clicked: "green" })}
						className={"green-light " + newGreenClass}
					/>
				</div>
			</div>
		);
	}
}
