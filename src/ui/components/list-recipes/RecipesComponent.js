import React, {Fragment} from "react";

export const ListRecipes = ({recipes, onRemove}) => (
	<Fragment>
		<ul className="list-group" role="tablist">
			{recipes.map(recipe =>(
				<div className='list-group-item recipe  mt-4'
					key={recipe.id}>
					<div>
						<a className="list-group-item list-group-item-action bg-light text-dark" id="list-home-list"
						   href="#" role="tab" aria-controls="home">{recipe.title}</a>
						<small>{recipe.date}</small>
					</div>
					<div className="recipe-btn mt-1">
						<button type="button" className="btn btn-outline-success btn-sm mr-1">Изменить</button>
						<button type="button"
								className="btn btn-outline-danger btn-sm"
								onClick={() => onRemove(recipe.id)}
						>Удалить</button>
					</div>
					<div className="mt-1">
						<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus eos facere, incidunt nulla quibusdam ratione rem totam ut voluptates. Animi eius expedita veniam! Animi delectus dicta maxime nesciunt repudiandae?</span>
					</div>
				</div>
			))}
		</ul>
	</Fragment>
);