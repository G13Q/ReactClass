import React from "react";
export default class Presentation extends React.Component {
	constructor(props){
		super(props);
		const {nom, prenom} = props;
		this.nom = nom;
		this.prenom = prenom;

	}
	render(){
		return(
			<div>
				<h2>Salut {this.prenom} {this.nom} </h2>
			</div>
		)
	};
}
