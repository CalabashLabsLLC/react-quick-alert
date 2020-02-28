# react-quick-alert

> Lightweight react snackbar.

[![NPM](https://img.shields.io/npm/v/react-quick-alert.svg)](https://www.npmjs.com/package/react-quick-alert) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-quick-alert
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-quick-alert'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## License

MIT © [calabashlabsllc](https://github.com/calabashlabsllc)

## Thanks for visiting

A react pure css snack bar quick alert. Lightweight and easily reusable.

[Demo](https://calabashlabsllc.github.io/react-quick-alert/)

[![NPM](https://img.shields.io/npm/v/react-quick-alert.svg)](https://www.npmjs.com/package/react-quick-alert) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm install --save react-quick-alert
```

### Usage
See Demo Example [Here](https://github.com/CalabashLabsLLC/react-quick-alert/tree/master/example)
```
  this.state = {
    alertShown: false,
    alertMessage: ''
  };
```
```
  showAlert(msg) {
    this.setState({ alertMessage: msg, alertShown: true });
  }
```
```
  resetAlert() {
    this.setState({ alertShown: false });
  } 
```
Alert's visibility and message is controlled by solely by function and String passed in by the parent so that the event can easily add customization.

For more details, check out the API below.

## Component API

`<QuickAlert>` component:

Property | Type | Default | Required | Description
-------- | ---- | ------- | -------- |-----------
time | `Number` | n/a | yes | Duration alert shows
show | `Boolean` | n/a | yes | Trigger to show alert
message | `String` | n/a | yes | Message on alert
resetAlert | `Function` | n/a | yes | Removes visibility
showStyle | `String` | n/a | yes | Class added on show
alertIdentity | `String` | n/a | yes | Unique id for snackbar


### Support or Contact

Any questions? Check out our [documentation](https://github.com/CalabashLabsLLC/react-quick-alert/blob/master/README.md) or [contact support](https://www.calabashlabs.com/contact) and we’ll help you sort it out.

## License

MIT © [calabashlabsllc](https://github.com/calabashlabsllc)
