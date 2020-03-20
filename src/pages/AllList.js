import React, {Fragment, useContext, useEffect} from "react";
import {ListRecipes} from "../ui/components/list-recipes/RecipesComponent";
import {FirebaseContext} from "../context/firebase/firebaseCotext";
import {LoaderComponent} from "../ui/components/loader/LoaderComponent";

export const AllList = () => {
	const {loading, recipes, fetchRecipes, removeRecipe} = useContext(FirebaseContext);
	useEffect(() => {
			fetchRecipes()
			// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<h1 className='mt-4'>Список рецептов</h1>
			<hr/>
			{loading
				? <LoaderComponent/>
				: <ListRecipes recipes={recipes} onRemove={removeRecipe}/>
			}
		</Fragment>
	)
};