import React, {useState, useContext} from "react";
import {AlertContext} from "../../../context/alert/alertContext";
import {FirebaseContext} from "../../../context/firebase/firebaseCotext";

export const Form = () => {
	const [value, setValue] = useState('')
	const alert = useContext(AlertContext)
	const firebase = useContext(FirebaseContext)
	const submitHandler = event => {
		event.preventDefault()

		if (value.trim()) {
			firebase.addRecipe(value.trim())
				.then(() => {
					alert.show('Рецепт добавлен, хозяин', 'success')
				}).catch(() => {
				alert.show('Откройте свои секреты', 'error')
			});

			setValue('');

		} else {
			alert.show('Введите название рецепта')
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<input type="text"
					   className="form-control"
					   placeholder='Введите название рецепта'
					   value={value}
					   onChange={e => setValue(e.target.value)}
				/>
				<textarea className="form-control mt-4"
						  aria-label="With textarea"
						  placeholder='Введите описание рецепта'
				></textarea>
				<button className="btn btn-outline-primary mt-4 float-right" type="submit">Сохранить</button>
			</div>
		</form>
	)
}