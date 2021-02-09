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
import RunningReport from './scenes/components/RunningReport';
import TestPage from './scenes/components/TestPage';
import PostForm from './scenes/components/PostForm';

class App extends React.Component {

  render() {
    return (
        <div>
          {/* <Router>
            <Switch>
              <Route exact path="/" component={TestPage} />
              <Route exact path="/PageElement" component={PageElement} />
              <Route exact path="/RegisterPageElement" component={RegisterPageElement} />
              <Route exact path="/RunningReport" component={RunningReport} />
            </Switch>
          </Router> */}
          <TestPage />
        </div>
    );
  }
}
export default App;

