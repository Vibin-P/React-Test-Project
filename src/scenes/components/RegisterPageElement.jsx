import React, { Component } from "react";
import FooterElement from './footer/FooterElement';
import RegisterElement from "./RegisterElement";

class RegisterPageElement extends Component {
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
              <div class="col-lg-6 bg-white">
                <div class="form d-flex align-items-center">
                  <div class="content">
                    <RegisterElement />
                    <small>Already have an account? </small>
                    <a href="#" class="signup">Login</a>
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
export default RegisterPageElement;