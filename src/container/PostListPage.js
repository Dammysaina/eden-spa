import React from 'react';

const PostListPage = (props) => {
  return (
    <>
      {props.loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {props.data.map((d) => (
            <div key={d.data.author_fullname}>
              <h3 className="postcontainerTitle">Sub Redit Title: {d.data.subreddit}</h3>
              <img src={d.data.thumbnail} alt="thumbail" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostListPage;
