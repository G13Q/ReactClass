import { Component } from "react"
import "../styles/Compteur.css"

export default class Compteur extends Component{
    constructor(){
        super();
        this.state = {compteur: 0};
    }
    ajouterStagiaire(){
        this.setState((state)=>({compteur : state.compteur + 1}));

    }

    reinitialiser(){
        this.setState({compteur :0});
    }

    render(){
        return (
          <div className="compteur">
            <div className="compteur-display">
              <span className="compteur-number">{this.state.compteur}</span>
              <span className="compteur-label">Stagiaire(s)</span>
            </div>

            <div className="compteur-actions">
              <button
                className="compteur-btn compteur-btn-add"
                onClick={() => this.ajouterStagiaire()}
              >
                Ajouter Stagiaire
              </button>

              <button
                className="compteur-btn compteur-btn-reset"
                onClick={() => this.reinitialiser()}
              >
                Réinitialiser
              </button>
            </div>
          </div>
        );
    }
}