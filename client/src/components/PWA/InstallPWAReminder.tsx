import React, { Component } from 'react'
import '@khmyznikov/pwa-install'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'pwa-install': any // eslint-disable-line
    }

    // interface MyElementAttributes {
    //   name: string;
    // }
  }
}

class InstallPWAReminder extends Component {
  render() {
    return (
      <div>
        <pwa-install></pwa-install>
      </div>
    )
  }
}

export default InstallPWAReminder
