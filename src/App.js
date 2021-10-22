import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Containers/Homepage';
import CredentialsPage from './Containers/CredentialsPage';
import AboutPage from './Containers/AboutPage';
import ProjectsPage from './Containers/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/educ" component={CredentialsPage} />
          <Route exact path="/proj" component={ProjectsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
