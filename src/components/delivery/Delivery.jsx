import React from "react";
import "./../../styles/delivery.scss";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__order">
        <p className="delivery__header">Пицца на заказ</p>
        <p className="delivery__info">
          Бесплатная и быстрая доставка за час
          <br />в любое удобное для вас время
        </p>
        <button className="delivery__button">
          Выбрать пиццу
        </button>
      </div>
      <div className="delivery__img"></div>
    </div>
  );
};

export default Delivery;
