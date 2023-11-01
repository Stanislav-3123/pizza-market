import React from "react";
import cart from './../../img/Cart.svg'
import './../../styles/order.scss'

const Order = () => {
  return (
    <div className="order">
      <img className="order__img" alt="cart" src={cart}></img>
		<p className="order__quantity">3</p>
      <div className="order__info">
        <p className="order__owner">ВАШ ЗАКАЗ</p>
        <p className="order__basket">Итальянская и ещё 2 пиццы</p>
      </div>
    </div>
  );
};

export default Order;
