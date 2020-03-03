import React, { Component } from 'react';
import "./App.css";
import 'isomorphic-fetch'
import 'es6-promise';
import People from './People';
import Films from './Films';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            filmsLoaded: false,
            peopleLoaded: false
        }

    }
    toggleFilmsLoaded(e) {
        this.setState({
            hasLoaded: true, filsmLoaded: true, peopleLoaded: false
        });

    }
    toggleFilmsOff(e) {
        this.setState({ hasLoaded: false, filsmLoaded: false, peopleLoaded: false })

    }
    togglePeopleLoaded(e) {
        this.setState({
            hasLoaded: true, filsmLoaded: false, peopleLoaded: true
        })

    }
    togglePeopleOff(e) {
        this.setState({ hasLoaded: false, filsmLoaded: false, peopleLoaded: false })
    }
    render() {
        if (this.state.hasLoaded === false) {
            return (
                <React.Fragment>
                    <div className='button-container'>
                        <button
                            type='button'
                            onClick={(e) => { this.toggleFilmsLoaded(e) }}
                            className='btn people-btn'>Click to Load People</button>
                    </div>

                </React.Fragment>
            )
        } else if (this.state.filmsLoaded === true) {
            return (
                <React.Fragment>
                    < div className='button-container'>
                        <button
                            type='button'
                            onClick={(e) => { this.toggleFilmsOff(e) }}
                            className='btn films-btn active'>Remove Films</button>
                        <button
                            type='button'
                            onClick={(e) => { this.toggleFilmsOff(e) }}
                            className=' btn ppl-btn'> Load People</button>
                    </div>
                    <Films />
                </React.Fragment>
            )
        } else if (this.state.peopleLoaded === true) {
            return (
                <React.Fragment>
                    <div className='button-container'>
                        <button
                            type=' button'
                            onClick={(e) => { this.toggleFilmsLoaded(e) }}
                            className='btn films-btn'>Load Films</button>
                        <button
                            type="button"
                            onClick={(e) => { this.togglePeopleOff(e) }}
                            className='btn ppl-btn active'>Remove People</button>
                    </div>
                    <People />
                </React.Fragment>
            )
        }
    }
}
