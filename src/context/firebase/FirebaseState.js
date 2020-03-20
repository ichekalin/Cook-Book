import React, {useReducer} from "react";
import axios from 'axios';
import {FirebaseContext} from "./firebaseCotext";
import {firebaseReducer} from "./firebaseReducer";
import {ADD_RECIPE, FETCH_RECIPES, REMOVE_RECIPE, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({children}) => {
	const initialState = {
		recipes: [],
		loading: false
	};

	const [state, dispatch] = useReducer(firebaseReducer, initialState);

	const showLoader = () => dispatch({type: SHOW_LOADER})

	const fetchRecipes = async () => {
		showLoader()
		const res = await axios.get(`${url}/recipes.json`)
		const payload = Object.keys(res.data).map(key => {
			return {
				...res.data[key],
				id: key
			}
		})
		dispatch({type: FETCH_RECIPES, payload})
	};

	const addRecipe = async (title) => {
		const recipe = {
			title, date: new Date().toJSON()
		}

		try {
			const res = await axios.post(`${url}/recipes.json`, recipe)
			console.log('addRecipe', res.data)
			const payload = {
				...recipe,
				id: res.data.name
			}
			dispatch({type: ADD_RECIPE,	payload})

		} catch (e) {
			throw new Error(e.message)
		}
	}

	const removeRecipe = async id => {
		await axios.delete(`${url}/recipes/${id}.json`)

		dispatch({
			type: REMOVE_RECIPE,
			payload: id
		})
	}

	return (
		<FirebaseContext.Provider value={{
			showLoader, addRecipe, removeRecipe, fetchRecipes,
			loading: state.loading,
			recipes: state.recipes
		}}>
			{children}
		</FirebaseContext.Provider>
	)
}