import React, { Component } from "react";
import './styles/style.css';
import FooterElement from './footer/FooterElement';
class Loginpage extends Component {
  render() {
    return (
      <div class="background">
        <div class="login-page">
          <div class="container d-flex align-items-center">
            <div class="form-holder has-shadow">
              <div class="row">
                {/* <!-- Logo & Information Panel--> */}
                <div class="col-lg-6">
                  <div class="info d-flex align-items-center">
                    <div class="content">
                      <div class="logo">
                        <h1 style={{color:'white'}}>EnerTek ORC</h1>
                      </div>
                      <p>A product powerd by Vaigunth EnerTek (Pvt.) Ltd.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Form Panel    --> */}
                <div class="col-lg-6">
                  <div class="form d-flex align-items-center">
                    <div class="content">
                      <form method="get" class="form-validate mb-4">
                        <div className="form-group-material">
                          <label  className="label-material">Email</label>
                          <input class="input-material" type="email" placeholder=" " />
                        </div>
                        <div className="form-group-material">
                          <label  className="label-material">Password</label>
                          <input class="input-material" type="password" placeholder=" " />
                        </div>                    
                        <button type="submit" class="btn btn-primary">Login</button>
                      </form><a href="#" class="forgot-pass">Forgot Password?</a><br></br><small>Do not have an account? </small>
                      <a href="#" class="signup">Signup</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterElement />
        </div>
      </div>
    )
  }
}
export default Loginpage;