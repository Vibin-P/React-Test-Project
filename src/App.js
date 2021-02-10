import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";

//pages
import MainPage from './scenes/components/MainPage';
import RegisterPage from './scenes/components/RegisterPage';
import RunningReport from './scenes/components/RunningReport';
import LoginPage from './scenes/components/LoginPage';

class App extends React.Component {

  render() {
    return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/MainPage" component={MainPage} />
              <Route exact path="/RegisterPage" component={RegisterPage} />
              <Route exact path="/RunningReport" component={RunningReport} />
            </Switch>
          </Router>
          {/* <Router>
          <RegisterPage />
          </Router> */}
        </div>
    );
  }
}
export default App;

