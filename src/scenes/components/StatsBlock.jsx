import React, { Component } from "react";
import CardContainer from './CardContainer';
import axios from 'axios';

class StatsBlock extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://192.168.0.167/orc/index.php')
      .then(res => {
        const persons = res.data;
        console.log(res);
        this.setState({ persons });
      })
  }
    render() {
        return( 
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="statistic-block block">
                  <div class="progress-details d-flex align-items-end justify-content-between">
                    {/* <div class="title">
                      <div class="icon"><i class="icon-user-1"></i></div><strong>RPM</strong>
                    </div> */}
                    <img src="./images/up-arrow-1.gif" alt="Arrow" style={{width: '30px', height: '35px', marginTop: '8px', marginLeft: '30px'}} />
                    <div class="number dashtext-1">{ this.state.persons.map(person => 
      <li>{person.data_id}</li>
      )}</div>
                  </div>
                  <div class="progress progress-template">
                    <div role="progressbar" style={{width:'30%', ariavaluenow:'30', ariavaluemin:'0', ariavaluemax:'100'}} class="progress-bar progress-bar-template dashbg-1"></div>
                  </div>
                  <div class="title">
                    <div class="icon"><i class="icon-user-1"></i></div><strong>RPM</strong>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="statistic-block block">
                  <div class="progress-details d-flex align-items-end justify-content-between">
                  <img src="./images/down-arrow-1.gif" alt="Arrow" style={{width: '30px', height: '35px', marginTop: '8px', marginLeft: '15px'}} />
                    <div class="number dashtext-2">1.124</div>
                  </div>
                  <div class="progress progress-template">
                    <div role="progressbar" style={{width: '70%', ariavaluenow:'70', ariavaluemin:'0', ariavaluemax:'100'}} class="progress-bar progress-bar-template dashbg-2"></div>
                  </div>
                  <div class="title">
                      <div class="icon"><i class="icon-contract"></i></div><strong>Turbine Temp</strong>
                    </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="statistic-block block">
                  <div class="progress-details d-flex align-items-end justify-content-between">
                    <img src="./images/down-arrow-1.gif" alt="Arrow" style={{width: '30px', height: '35px', marginTop: '8px', marginLeft: '15px'}} />
                    <div class="number dashtext-3">140</div>
                  </div>
                  <div class="progress progress-template">
                    <div role="progressbar" style={{width: '55%', ariavaluenow:'55', ariavaluemin:'0', ariavaluemax:'100'}} class="progress-bar progress-bar-template dashbg-3"></div>
                  </div>
                  <div class="title">
                      <div class="icon"><i class="icon-paper-and-pencil"></i></div><strong>Oil Temp</strong>
                    </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="statistic-block block">
                  <div class="progress-details d-flex align-items-end justify-content-between">
                  <img src="./images/up-arrow-1.gif" alt="Arrow" style={{width: '30px', height: '35px', marginTop: '8px', marginLeft: '15px'}} />
                    <div class="number dashtext-4">41</div>
                  </div>
                  <div class="progress progress-template">
                    <div role="progressbar" style={{width: '35%', ariavaluenow:'35', ariavaluemin:'0', ariavaluemax:'100'}} class="progress-bar progress-bar-template dashbg-4"></div>
                  </div>
                  <div class="title">
                      <div class="icon"><i class="icon-writing-whiteboard"></i></div><strong>Status</strong>
                    </div>
                </div>
              </div>
            </div>
          <CardContainer />
          <CardContainer />
          </div>
        )
    }
}
export default StatsBlock;