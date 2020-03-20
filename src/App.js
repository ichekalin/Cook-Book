import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AllList} from "./pages/AllList";
import {AddNewRecipe} from "./pages/AddNewRecipe";
import {Navbar} from "./ui/components/navbar/NavbarComponent";
import {AlertComponent} from "./ui/components/alert/AlertComponent";
import {AlertState} from "./context/alert/alertState";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
  return (
  	<FirebaseState>
		<AlertState>
			<BrowserRouter>
				<Navbar/>
				<div className="container pt-4">
					<AlertComponent/>
					<Switch>
						<Route path='/' exact component={AllList} />
						<Route path='/add-new-recipe' component={AddNewRecipe} />
					</Switch>
				</div>
			</BrowserRouter>
		</AlertState>
	</FirebaseState>
  );
}

export default App;
