import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-inner">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <nav className="footer-nav">
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </footer>
  )
}

export default Footer