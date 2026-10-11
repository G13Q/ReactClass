import React from "react";
import Header from "./Header";
import Presentation from "./Presentation";

export class App extends React.Component {
	render(){
		return(
			<div>
				<Header/>
				<br/>
				<Presentation nom="AQEJTAOUI" prenom="Ghita"/>
			</div>
		);
	}
}


