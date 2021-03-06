import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class RegisterElement extends Component {
  render() {
    return (
      <Router>
      <div class="login-page">
        <div class="container d-flex align-items-center">
          <div class="form-holder has-shadow">
            <div class="row">
              {/* <!-- Logo & Information Panel--> */}
              <div class="col-lg-6">
                <div class="info d-flex align-items-center">
                  <div class="content">
                    <div class="logo">
                      <h1>EnerTek ORC</h1>
                    </div>
                    <p>A product powerd by Vaigunth EnerTek (Pvt.) Ltd.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Form Panel    --> */}
              <div class="col-lg-6 bg-white">
                <div class="form d-flex align-items-center">
                  <div class="content">
                    <form class="text-left form-validate">
                      {/* <div class="form-group-material">
                        <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" class="input-material" />
                        <label for="register-username" class="label-material">Username</label>
                      </div> */}
                      <div className="form-group-material">
                          <label   class="label-material">User Name</label>
                          <input class="input-material" type="text" placeholder=" " />
                        </div>
                     
                      <div className="form-group-material">
                          <label  className="label-material">Email Address</label>
                          <input class="input-material" type="email" placeholder=" " />
                        </div>
                    
                      <div className="form-group-material">
                          <label  className="label-material">Password</label>
                          <input  class="input-material" type="Password" placeholder=" " />
                        </div>
                      <div class="form-group terms-conditions text-center">
                        <input id="register-agree" name="registerAgree" type="checkbox" required value="1" data-msg="Your agreement is required" class="checkbox-template" />
                        <label for="register-agree">I agree with the terms and policy</label>
                      </div>
                      <div class="form-group text-center">
                        <input id="register" type="submit" value="Register" class="btn btn-primary" />
                      </div>
                    </form><small>Already have an account? </small>
                    {/* <a href="LoginElement.jsx" class="signup">Login</a> */}
                    {/* <NavLink exact activeClassName="active" to="/">Signup</NavLink>
                    <Switch>
                      <Route exact path="/LoginElement" component={LoginElement} />
                      {/* <Route path="/RegisterElement" component={RegisterElement} /> */}
                    {/* </Switch> */} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyrights text-center">
          <p>Design by <a href="https://bootstrapious.com" class="external">Bootstrapious</a></p>
          {/* <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)--> */}
        </div>
      </div>
      </Router>
    )
  }
}
export default RegisterElement;