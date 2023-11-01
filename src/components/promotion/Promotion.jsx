import React from 'react';
import './../../styles/promotion.scss'

const Promotion = () => {
	return (
		<div className="promotion">
			<div className="promotion__1">
				<div></div>
				<h2>Закажи 2 пиццы – 3-я в подарок</h2>
				<p>При заказе 2-х больших пицц – средняя пицца в подарок</p>
			</div>
			<div className="promotion__2">
			<div></div>
				<h2>Напиток в подарок</h2>
				<p>Скидка на заказ от 3 000 рублей + напиток в подарок</p>
			</div>
			<div className="promotion__3">
			<div></div>
				<h2>25% при первом заказе</h2>
				<p>Скидка новым клиентам!</p>
			</div>
		</div>
	);
};

export default Promotion;