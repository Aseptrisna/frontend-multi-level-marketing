import React, { Component } from 'react'
import Logo from '../component/assets/icon.png'
import "../component/css/page.css"

export default class StartView extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <br/>
        <p>
          Asep Trisna Setiawan
        </p>
        <a
          className="App-link"
          href="/login"
        //   target="_blank"
        //   rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
    )
  }
}
