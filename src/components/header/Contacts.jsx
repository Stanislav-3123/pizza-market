import React from "react";
import phoneImg from "./../../img/Frame 5.svg";
import './../../styles/contacts.scss'

const Contacts = () => {
  return (
    <div className="contacts">
      <img className="contacts__img" alt="phone" src={phoneImg}></img>
      <div className="contacts__info">
        <p className="contacts__info__phone">+7 (918) 432-65-87</p>
        <p className="contacts__info__time">Ежедневно с 9:00 до 23:00</p>
      </div>
    </div>
  );
};

export default Contacts;
