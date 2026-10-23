import { Component } from "react";

export default class Message extends Component{
    constructor(props){
        super(props);
        this.state={message:"Bienvenue visiteur", btnMessage:"inscription",};
        this.isClicked = false;
    }

    inscription(){
        this.setState({message:"votre inscription est effectuee", btnMessage:"merci"});
        this.isClicked = true;
    }

    logout(){
        this.setState({message:"Bienvenue visiteur", btnMessage:"inscription"});
        this.isClicked = false;
    }

    render(){
    
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>{!this.isClicked ? this.inscription() : this.logout();}}>{this.state.btnMessage}</button> 
            </div>
        )
    }
    }
