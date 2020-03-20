import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
	<nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
		<div className="navbar-brand">
			CookBook
		</div>
		<ul className="navbar-nav">
			<li className="nav-item">
				<NavLink className="nav-link" to="/" exact>Список рецептов <span className="sr-only">(current)</span></NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/add-new-recipe">Добавить новый рецепт</NavLink>
			</li>
		</ul>
	</nav>
);