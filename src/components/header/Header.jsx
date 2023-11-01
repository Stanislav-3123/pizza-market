import React from 'react';
import Logo from './Logo';
import Navigate from './Navigate';
import Contacts from './Contacts';
import Order from './Order';
import Language from './Language';
import './../../styles/header.scss'

const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<Navigate />
			<Contacts />
			<Order />
			<Language />
		</div>
	);
};

export default Header;