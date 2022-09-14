import React, { Component } from 'react'

// declare global {
//     interface Navigator {
//         standalone: (blob: any, defaultName?: string) => boolean
//     }
// }
const getNonInstalledDeviceType = () => {
  // if (window.matchMedia('(display-mode: standalone)').matches) return 'installed'
  return getMobileOperatingSystem()
}
const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor
  console.log(userAgent)
  // Windows Phone must come first because its UA also contains 'Android'
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone'
  }

  if (/android/i.test(userAgent)) {
    return 'Android'
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return 'iOS'
  }

  return 'other'
}
class InstallNotification extends Component {
  render() {
    return <div>{getNonInstalledDeviceType()}</div>
  }
}

export default InstallNotification
