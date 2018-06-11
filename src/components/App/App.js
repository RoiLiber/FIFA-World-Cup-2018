import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//components
import Header from "../Header/Header";

//routes
import Matches from "../../containers/Matches/Matches";
import Standings from "../../containers/Standings/Standings";
import GroupStageMatches from "../../containers/GroupStageMatches/GroupStageMatches";
import NotFound from "../NotFound/NotFound";

//styles
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // isLoading: true,
    };
  }

  componentDidMount() {
    // this.setState({ isLoading: true });
  }

  render() {
    return (
        <Router>
          <React.Fragment>
            <div className="App">
              <Header />

              <main className="Main">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Matches {...this.state} />}
                  />
                  <Route
                    path="/Standings"
                    render={() => <Standings {...this.state} />}
                  />
                  <Route
                    path = "/GroupStageMatches"
                    render={() => <GroupStageMatches {...this.state} />}
                  />
                  <Route path="/*" component={NotFound} />
                </Switch>
              </main>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    stadiums: state.stadiums,
    teams: state.teams,
    groups: state.groups,
    knockout: state.knockout
  };
}

export default connect(mapStateToProps)(App);

/*
fetch(
    "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
  )
  .then(response => response.json())
  .then(data => this.setState({ ...data,
    isLoading: false
  }))
  .catch(error => console.error(error));
*/
