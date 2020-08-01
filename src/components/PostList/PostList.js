import React from "react";
import './PostList.css'


export default class Postlist extends Component {
    render () {
        return (
            <div className="picture">
                <div className="card">
                    <img src={`/images/lamb.jpg`} alt=""/>
                    <div className="card-text">
                        <h3>Online Experiences</h3>
                        <h4>Unique activities we can do together, led by world of hosts.</h4>
                    </div>
                   
                </div>
                <div className="card">
                    <img src={'/images/eating.jpg'} alt=""/>
                    <div className="card-text">
                        <h3>Monthly Stay</h3>
                        <h4>Make airbnb your home, for stays of a month or longer.</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={'/images/sheep.jpg'} alt=""/>
                    <div className="card-text">
                        <h3>Frontline Stay</h3>
                        <h4>Find or provide accomodations for covid-19 responders.</h4>
                    </div>
                </div>
            </div>
       )
    }
};