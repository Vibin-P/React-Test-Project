import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";

//pages
import PageElement from './scenes/components/PageElement';
import RegisterPageElement from './scenes/components/RegisterPageElement';
import StatsBlock from './scenes/components/StatsBlock';
import TestPage from './scenes/components/TestPage';

class App extends React.Component {

  render() {
    return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={TestPage} />
              <Route exact path="/PageElement" component={PageElement} />
              <Route exact path="/RegisterPageElement" component={RegisterPageElement} />
              {/* <Route exact path="/StatsBlock" component={StatsBlock} /> */}
            </Switch>
          </Router>
        </div>
    );
  }
}
export default App;

