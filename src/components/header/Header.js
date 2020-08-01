import React, { Component } from 'react';
import './Header.Styles.css';
import '../../components/PostList/PostList.js';


export default class Header extends Component {
    render () {
        return (
        
            <div className="headerContainer">
                <div className="headerContainerFlex">
                <div className="headerLogo">
                    <img src={`../images/edenlogo.svg`} alt="eden logo"/>
                </div>
                <div className="searchContainer">
                    <form className="headerSearch">
                        <input type="text" placeholder="SEARCH..." name="search"/>
                        <button type="submit">GO</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
};