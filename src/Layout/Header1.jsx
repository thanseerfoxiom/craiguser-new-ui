import React from 'react'
import { BasePath } from '../utils/Constants'
import { Link } from 'react-router-dom'

export default function Header1() {
  return (
    <div>
        <header className="theme-main-menu menu-overlay sticky-menu">
    <div className="inner-content position-relative">
      <div className="top-header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <a href="index.html" className="d-flex align-items-center">
              <img src="/assets/images/logo/logo_craig-11.png" alt="" width={150} />
            </a>
          </div>
          {/* logo */}
          <div className="right-widget ms-auto ms-lg-0 order-lg-3">
            <ul className="d-flex align-items-center style-none">
              <li><a href="#" className="fw-500 text-dark" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></li>
              <li className="d-none d-md-block ms-4"><a href="signup.html" className="btn-five">For Employers</a></li>
            </ul>
          </div> {/*/.right-widget*/}
          <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-2">
            <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="d-block d-lg-none"><div className="logo"><a href="index.html" className="d-block"><img src="/assets/images/logo/logo_craig-11.png" alt width={100} /></a></div></li>
                
                <li className="nav-item active">
                  <Link className="nav-link " to={BasePath} role="button">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html" role="button">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html" role="button">Employers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html" role="button">FAQ<span className=''>s</span></a>
                </li>
                <li className="d-md-none mt-5"><a href="signup.html" className="btn-seven w-100">Login</a></li>
                <li className="d-md-none mt-5"><a href="signup.html" className="btn-five w-100">For Employers</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div> {/*/.top-header*/}
    </div> {/* /.inner-content */}
  </header> 
    </div>
  )
}
