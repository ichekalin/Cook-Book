import {ADD_RECIPE, FETCH_RECIPES, REMOVE_RECIPE, SHOW_LOADER} from "../types";

const handlers = {
	[SHOW_LOADER]: state => ({...state, loading: true}),
	[ADD_RECIPE]: (state, {payload}) => ({
		...state,
		recipes: [...state.recipes, payload]
	}),
	[FETCH_RECIPES]: (state, {payload}) => ({...state, recipes: payload, loading: false}),
	[REMOVE_RECIPE]: (state, {payload}) => ({
		...state,
		recipes: state.recipes.filter(recipe => recipe.id !== payload)
	}),
	DEFAULT: state => state
};

export const firebaseReducer = (state, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT
	return handle(state, action)
};