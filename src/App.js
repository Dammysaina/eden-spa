import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subRedditActions from './redux/actions/';
import './components/header/Header.Styles.css';
import PostListPage from './container/PostListPage';

function App(props) {
  const { getSubReddits, data } = props;
  const [searchState, setSearchState] = useState('');

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchState(e.target.value);
  };
  const searchedData = data.filter((d) => {
    return d.data.subreddit.indexOf(searchState) !== -1;
  });
  useEffect(() => {
    getSubReddits();
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        <div className="headerContainer">
          <div className="headerContainerFlex">
            <div className="headerLogo">
              <img src={`../images/edenlogo.svg`} alt="eden logo" />
            </div>
            <div className="searchContainer">
              <form
                className="headerSearch"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  onChange={onSearchChange}
                  type="text"
                  placeholder="SEARCH..."
                  name="search"
                />
                <button type="submit">GO</button>
              </form>
            </div>
          </div>
        </div>
        <PostListPage loading={props.loading} data={searchedData} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSubReddits: bindActionCreators(
      subRedditActions.getSubRedditsThunk,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
