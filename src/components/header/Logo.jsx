import React from 'react';
import LogoImg from './../../img/Frame 4.png'
import './../../styles/logo.scss'

const Logo = () => {
	return (
		<div className='logo__img'>
			<img alt='logo' src={LogoImg}></img>
		</div>
	);
};

export default Logo;