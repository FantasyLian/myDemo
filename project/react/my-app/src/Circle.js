import React, { Component } from 'react';
import './Circle.css';

class Circle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	handleRange(event) {
		this.setState({
			value: event.target.value
		});
		let circle = document.querySelectorAll('circle')[1];
		if (circle) {
			let percent = event.target.value / 100,
				perimeter = Math.PI * 2 * 170;
			circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent));
		}
	}

	render() {
		return (
			<div className="Circle-wrap">
				<svg width="440" height="440" viewBox="0 0 440 440">
					<circle cx="220" cy="220" r="170" strokeWidth="30" stroke="#D1D3D7" fill="none"></circle>
					<circle cx="220" cy="220" r="170" strokeWidth="50" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,440)" strokeDasharray="0 1069"></circle>
				</svg>
				<div className="progress">{ this.state.value }%</div>
				<p className="bar-wrap"><input id="range" type="range" min="0" max="100" value={ this.state.value } onChange={ this.handleRange.bind(this) } /></p>
			</div>
		);
	}
}

export default Circle;
