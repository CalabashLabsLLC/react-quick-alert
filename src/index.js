import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class QuickAlert extends React.Component {
  constructor(props) {
    super(props);
    this.showAlertMessage = this.showAlertMessage.bind(this);
  }
  showAlertMessage() {
    // Get the snackbar div
    const x = document.getElementById(this.props.alertIdentity);
    const time = this.props.time;
    const showStyle = this.props.showStyle;
    // Add the "showAlert" class to div
    x.className = showStyle;

    // After time amount of seconds, remove the showAlert class from div
    setTimeout(function () {
      x.className = x.className.replace(showStyle, '');
    }, time);
  }
  componentDidUpdate() {
    if (this.props.show) {
      this.showAlertMessage();
      this.props.resetAlert();
    }
  }
  render() {
    return (
      <div>
        <div id={this.props.alertIdentity}>{this.props.message}</div>
      </div>
    );
  }
}

QuickAlert.propTypes = {
  time: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  resetAlert: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  showStyle: PropTypes.string.isRequired,
  alertIdentity: PropTypes.string.isRequired
};
