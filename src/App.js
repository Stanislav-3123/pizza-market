import './App.scss'
import React from 'react';
import Header from './components/header/Header';
import Delivery from './components/delivery/Delivery';
import Promotion from './components/promotion/Promotion';

function App() {
	return (
		<div className='App'>
			<Header />
			<Delivery />
			<Promotion />
		</div>
	);
}

export default App;
