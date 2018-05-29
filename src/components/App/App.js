import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Header from "../Header/Header";

//routes
import Matches from "../Matches/Matches";
import Standings from "../Standings/Standings";
import GroupStageMatches from "../GroupStageMatches/GroupStageMatches";
import NotFound from "../NotFound/NotFound";

//styles
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    
    fetch(
      "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ ...data, isLoading: false }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>

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
            
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
