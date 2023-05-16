import React from 'react'
import { BrowserRouter as Router , Link } from 'react-router-dom'
function Navbar() {
  return (
    <><div class="scroll-up-btn">
          <i class="fas fa-angle-up"></i>
      </div><nav class="navbar">
              <div class="max-width">
                  <div class="logo"><a href="/">Portfo<span>lio.</span></a></div>
                  <ul class="menu">
                      <li><a href="#about" class="menu-btn">About</a></li>
                      <li><a href="#services" class="menu-btn">Services</a></li>
                      <li><a href="#skills" class="menu-btn">Skills</a></li>
                      <li><a href="#teams" class="menu-btn">Teams</a></li>
                      <li><a href="#projects" class="menu-btn">Projects</a></li>
                      <li><a href="#contact" class="menu-btn">Contact</a></li>
                  </ul>
                  <div class="menu-btn">
                      <i class="fas fa-bars"></i>
                  </div>
              </div>
            </nav></>
  )
}

export default Navbar