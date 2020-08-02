import React, {Component} from "react";
import './PostList.css'


export default class Postlist extends Component {
    render () {
        return (
            <div className="postContainer">
                <h3 className="postcontainerTitle">Subreddit Title</h3>
                <div className="postListTop">
                    
                <div className="card">
                    <img src={`/images/lamb.jpg`} alt=""/>
                    <div className="card-text">
                        <h3>Image Text Widget</h3>
                        <h4>Date:9th September, 2020.</h4>
                        <span><img src={'/images/love.svg'} alt=""/>100 votes</span>
                        
                    </div>
                    <button>View post ></button>
                   
                </div>
                <div className="card">
                    <img src={'/images/eating.jpg'} alt=""/>
                    <div className="card-text">
                    <h3>Image Text Widget</h3>
                        <h4>Date:9th September, 2020.</h4>
                        <span><img src={'/images/love.svg'} alt=""/>100 votes</span>
                    </div>
                    <button>View post ></button>
                </div>
                <div className="card">
                    <img src={'/images/sheep.jpg'} alt=""/>
                    <div className="card-text">
                    <h3>Image Text Widget</h3>
                        <h4>Date:9th September, 2020.</h4>
                        <span><img src={'/images/love.svg'} alt=""/>100 votes</span>
                        
                    </div>
                    <button>View post ></button>
                </div>
                </div>
                <h3 className="postcontainerTitle">Subreddit Title</h3>
                <div className="postListBottom">
                
                <div className="card">
                    <img src={`/images/lamb.jpg`} alt=""/>
                    <div className="card-text">
                    <h3>Image Text Widget</h3>
                        <h4>Date:9th September, 2020.</h4>
                        <span><img src={'/images/love.svg'} alt=""/>100 votes</span>
                        
                    </div>
                    <button>View post ></button>
                   
                </div>
                <div className="card">
                    <img src={'/images/eating.jpg'} alt=""/>
                    <div className="card-text">
                    <h3>Image Text Widget</h3>
                        <h4>Date:9th September, 2020.</h4>
                        <span><img src={'/images/love.svg'} alt=""/>100 votes</span>
                        
                    </div>
                    <button>View post ></button>
                </div>
                <div className="card">
                    <img src={'/images/sheep.jpg'} alt=""/>
                    <div className="card-text">
                    <h3>Image Text Widget</h3>
                        <h4>Date:9th September, 2020.</h4>
                        <span><img src={'/images/love.svg'} alt=""/>100 votes</span>
                        
                    </div>
                    <button>View post ></button>
                </div>
                </div>
            </div>
       )
    }
};