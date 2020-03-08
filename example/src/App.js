import React, { Component } from 'react';
import QuickAlert from 'react-quick-alert';
import logo from './cllogo.svg';
import github from './github.png';

const postingAlertStyle = { 
  time: 4000, 
  showStyle: 'showAlert'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertShown: false,
      alertMessage: ''
    };
    this.showAlert = this.showAlert.bind(this);
    this.resetAlert = this.resetAlert.bind(this);
    this.alertTime = postingAlertStyle.time;
    this.showAlertStyle = postingAlertStyle.showStyle;      
  }
  showAlert(msg) {
    this.setState({ alertMessage: msg, alertShown: true });
  }
  resetAlert() {
    this.setState({ alertShown: false });
  } 
  render () {
    const dynamicId = 'demo-page';
    return (
      <div>
        <div className="header-top">
          <div className="cl-logo-wrap"><img src={logo} width="115px" alt="Calabash Labs Logo" /></div>
          <div className="github-logo-wrap"><a href="https://calabashlabsllc.github.io/react-quick-alert/"><img src={github} className="github-logo" alt="Github Logo" /></a></div>
        </div>
        <div className="wrap">
          <h1>Light <span>JS/CSS</span> Quick Alert</h1>
          <div className="trigger"><span onClick={() => this.showAlert("Thanks for visiting!")}>Launch Alert</span></div>
          <QuickAlert
            show={this.state.alertShown}
            resetAlert={this.resetAlert}
            time={this.alertTime}
            message={this.state.alertMessage}
            showStyle={this.showAlertStyle}
            alertIdentity={`snackbar-${dynamicId}`}
          />
        </div>
      </div> 
    )
  }
}
