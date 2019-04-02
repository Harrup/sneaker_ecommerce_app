import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartBtn extends Component {
	constructor() {
		super();
		this.state = {};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<a className="cart-link">
				cart<span>5</span>
			</a>
		);
	}
}

const CartBtnRoot = document.getElementById('CartBtnRoot');

ReactDOM.render(<CartBtn />, CartBtnRoot);
