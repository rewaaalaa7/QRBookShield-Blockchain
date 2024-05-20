import React from 'react'

function nav() {
    return (
    <nav className="nav">
        <div className="nav-logo">
    <p>QRbookShield</p>
    </div>
  <div className="nav-menu" id="navMenu">
    <ul>
      <li>
        <a href="/" className="link active">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="link">
          About
        </a>
      </li>
      <li>
        <a href="/" className="link">
          Authors
        </a>
      </li>
      <li>
        <a href="/" className="link">
          Services
        </a>
      </li>
    </ul>
  </div>
  <div className="nav-button">
    <button className="btn white-btn" id="loginBtn" onclick="login()">
      Sign In
    </button>
    <button className="btn" id="logoutBtn">
      Log out
    </button>
  </div>
  <div className="nav-menu-btn">
    <i className="bx bx-menu" onclick="myMenuFunction()" />
  </div>
</nav>

  )
}

export default nav