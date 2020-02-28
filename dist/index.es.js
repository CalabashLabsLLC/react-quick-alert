import React from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "div[id^='snackbar']  {\n  border: 1px solid grey;\n  visibility: hidden;\n  width: 270px;\n  margin-left: -135px;\n  background-color: white;\n  color: black;\n  text-align: center;\n  border-radius: 5px;\n  padding: 16px;\n  position: fixed;\n  z-index: 50000;\n  left: 50%;\n  top: 30px;\n  font-size: 14px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n}\ndiv[id^='snackbar'].showAlert {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 3.5s;\n  animation: fadein 0.5s, fadeout 0.5s 3.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n    opacity: 0;\n  }\n  to {\n    top: 30px;\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    top: 0;\n    opacity: 0;\n  }\n  to {\n    top: 30px;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeout {\n  from {\n    top: 30px;\n    opacity: 1;\n  }\n  to {\n    top: 0;\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  from {\n    top: 30px;\n    opacity: 1;\n  }\n  to {\n    top: 0;\n    opacity: 0;\n  }\n}";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var QuickAlert = function (_React$Component) {
  inherits(QuickAlert, _React$Component);

  function QuickAlert(props) {
    classCallCheck(this, QuickAlert);

    var _this = possibleConstructorReturn(this, (QuickAlert.__proto__ || Object.getPrototypeOf(QuickAlert)).call(this, props));

    _this.showAlertMessage = _this.showAlertMessage.bind(_this);
    return _this;
  }

  createClass(QuickAlert, [{
    key: 'showAlertMessage',
    value: function showAlertMessage() {
      // Get the snackbar div
      var x = document.getElementById(this.props.alertIdentity);
      var time = this.props.time;
      var showStyle = this.props.showStyle;
      // Add the "showAlert" class to div
      x.className = showStyle;

      // After time amount of seconds, remove the showAlert class from div
      setTimeout(function () {
        x.className = x.className.replace(showStyle, '');
      }, time);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.show) {
        this.showAlertMessage();
        this.props.resetAlert();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: this.props.alertIdentity },
          this.props.message
        )
      );
    }
  }]);
  return QuickAlert;
}(React.Component);


QuickAlert.propTypes = {
  time: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  resetAlert: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  showStyle: PropTypes.string.isRequired,
  alertIdentity: PropTypes.string.isRequired
};

export default QuickAlert;
//# sourceMappingURL=index.es.js.map
