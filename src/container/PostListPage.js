import React from 'react';
import '../components/PostList/PostList.css'

const PostListPage = (props) => {
  return (
    <>
      {props.loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {props.data.map((d) => (
            <div key={d.data.author_fullname} style={{padding: "0 40px"}}>
              <h3 className="postcontainerTitle">SubReddit Title: {d.data.subreddit}</h3>
              <div className="card">
                    <img src={d.data.thumbnail} alt="thumbail" style={{height: "200px"}}/>
                    <div className="card-text">
                        <h3>{d.data.title}</h3>
                        <h4>{new Date((d.data.created_utc)*1000).toUTCString()}</h4>
                        <span><img src={'/images/love.svg'} alt=""/>{d.data.ups} votes</span>
                        <button onClick={(e) => {
                          e.preventDefault();
                          window.open(d.data.url, "_blank");
                          }}
                        >Click To View Post </button>
                    </div>
                </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostListPage;
