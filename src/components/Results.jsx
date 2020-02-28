import React, {Component} from 'react';
import "./App.css";
import 'isomorphic-fetch'
import People from './People';
import Films from './Films';

class Results extends Component{
    constructor(props){
super(props);
this.state={
    hasLoaded: false,
    filmsLoaded: false,
    peopleLoaded: false
}

}
toggleFilmsLoaded(e){
    this.setState ({
        hasLoaded: true, filsmLoaded: true, peopleLoaded: false});
     
}
toggleFilmsOff(e){
    this.setState ({hasLoaded: false, filsmLoaded: false, peopleLoaded: false})
    
}
togglePeopleLoaded(e){
    this.setState ({
        hasLoaded: true, filsmLoaded: false, peopleLoaded: true })
    
}
togglePeopleOff(e){
    this.setState ({hasLoaded: false, filsmLoaded: false, peopleLoaded: false})   
}
render(){
if (this.state.hasLoaded===false){
    return(
        <React.Fragment>
            <div className = 'button-container'>
               <button
               type='button'
               onClick={(e) => {this.toggleFilmsLoaded(e)}}
               className= 'btn people-btn'>Click to Load People</button>  
            </div>
            
        </React.Fragment>
    )
}
}
}
