import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartPopup extends Component {
	constructor() {
		super();
		this.state = {};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="cart-popup" className="">
				<div className="cart-title">
					<div className="title">My cart</div>
				</div>
				<div className="cart-items">
					<div className="item">
						<img src="img/products/adidas-yeezy-boost-white.png" />
						<div className="delete-btn">
							<div className="circle">X</div>
						</div>
					</div>
					<div className="item">
						<img src="img/products/adidas-yeezy-boost-white.png" />
						<div className="delete-btn">
							<div className="circle">X</div>
						</div>
					</div>
					<div className="item">
						<img src="img/products/adidas-yeezy-boost-white.png" />
						<div className="delete-btn">
							<div className="circle">X</div>
						</div>
					</div>
					<div className="item">
						<img src="img/products/adidas-yeezy-boost-white.png" />
						<div className="delete-btn">
							<div className="circle">X</div>
						</div>
					</div>
					<div className="item">
						<img src="img/products/adidas-yeezy-boost-white.png" />
						<div className="delete-btn">
							<div className="circle">X</div>
						</div>
					</div>
				</div>
				<div className="cart-total-products">
					<div className="cart-container">
						<div className="total">Total</div>
						<div className="number">X4</div>
					</div>
				</div>
				<div className="cart-total-price">
					<div className="cart-container">
						<div className="total">Total</div>
						<div className="number">$2000</div>
					</div>
				</div>
				<div className="cart-checkout">
					<div className="checkout">checkout</div>
					<i className="fab fa-opencart" />
				</div>
			</section>
		);
	}
}

const CartPopupRoot = document.getElementById('CartPopupRoot');

ReactDOM.render(<CartPopup />, CartPopupRoot);
