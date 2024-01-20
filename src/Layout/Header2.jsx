import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BasePath, JobvaccancyPath, ProfilePath, WalletPath } from '../utils/Constants'

export default function Header2() {
  const navigate = useNavigate();
  return (
    <div>
       <header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
  <div className="inner-content position-relative">
    <div className="top-header ">
      <div className="d-flex align-items-center">
        <div className="logo order-lg-0">
          <a href="#" className="d-flex align-items-center">
            <img src="/assets/images/logo/logo_craig-10.png" alt="" width={150}  />
          </a>
        </div>
        {/* logo */}
        <div className="right-widget ms-auto order-lg-3">
        

          <ul className="d-flex align-items-center style-none">
          
           <li className='dashboard-header'>
            <div className="profile-notification ms-2 ms-md-5 me-4">
  <button className="noti-btn dropdown-toggle btn-not" type="button" id="notification-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    <img src="/assets/images/icon/icon_11.svg" alt className="lazy-img " />
    <div className="badge-pill" />
  </button>
  <ul className="dropdown-menu" aria-labelledby="notification-dropdown">
    <li>
      <h4>Notification</h4>
      <ul className="style-none notify-list">
        <li className="d-flex align-items-center unread">
          <img src="/assets/images/icon/icon_36.svg" alt className="lazy-img icon" />
          <div className="flex-fill ps-2">
            <h6>You have 3 new mails</h6>
            <span className="time">3 hours ago</span>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <img src="/assets/images/icon/icon_36.svg" alt className="lazy-img icon" />
          <div className="flex-fill ps-2">
            <h6>Your job post has been approved</h6>
            <span className="time">1 day ago</span>
          </div>
        </li>
        <li className="d-flex align-items-center unread">
          <img src="/assets/images/icon/icon_36.svg" alt className="lazy-img icon" />
          <div className="flex-fill ps-2">
            <h6>Your meeting is cancelled</h6>
            <span className="time">3 days ago</span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</div></li>
     
            <li className="d-none d-md-block ms-4"><button className="job-post-btn tran3s text-danger login-btn-one " onClick={()=>navigate(BasePath)}>Logout</button></li>
            
          </ul>
        </div> 
        {/*/.right-widget*/}
        <nav className="navbar navbar-expand-lg p0 ms-lg-5 ms-3 order-lg-2">
          <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center">
              <li className="d-block d-lg-none"><div className="logo"><a href="index.html" className="d-block"><img src="/assets/images/logo/logo_craig-10.png" alt width={100} /></a></div></li>
              <li className="nav-item dropdown category-btn mega-dropdown-sm">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-grid-fill" /> Services</a>
                <ul className="dropdown-menu category-dropdown">
                  <li className="row gx-0 mb-2">
                    <div className="col-lg-6 ">
                      <Link to={JobvaccancyPath} className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/assets/images/icon/icon_68.svg" alt className="lazy-img" /></div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">Job Vaccancy</div>
                          <div className="job-count">12k+ Jobs</div>
                        </div>
                      </Link>
                      {/* /.item */}
             
                      
                     
                    </div>
                    <div className="col-lg-6">
                      <Link to={WalletPath} className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
                          {/* <img src="/assets/images/icon/icon_68.svg" alt className="lazy-img" /> */}
                          $
                          </div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">Wallet</div>
                          <div className="job-count">500 Rupees</div>
                        </div>
                      </Link>
       
                     

                    </div>
                  </li>
                  
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link" to={ProfilePath}>Home
                </Link>
                {/* <ul className="dropdown-menu">
                  <li><a href="index.html" className="dropdown-item"><span>Home 01</span></a></li>
                  <li><a href="index-2.html" className="dropdown-item"><span>Home 02</span></a></li>
                  <li><a href="index-3.html" className="dropdown-item"><span>Home 03</span></a></li>
                  <li><a href="index-4.html" className="dropdown-item"><span>Home 04</span></a></li>
                  <li><a href="index-5.html" className="dropdown-item"><span>Home 05</span></a></li>
                  <li><a href="index-6.html" className="dropdown-item"><span>Home 06</span></a></li>
                  <li><a href="index-7.html" className="dropdown-item"><span>Home 07</span></a></li>
                </ul> */}
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Blog
                </a>
                {/* <ul className="dropdown-menu">
                  <li><a href="blog-v1.html" className="dropdown-item"><span>Blog Standard</span></a></li>
                  <li><a href="blog-v2.html" className="dropdown-item"><span>Blog Grid</span></a></li>
                  <li><a href="blog-v3.html" className="dropdown-item"><span>Blog Full width</span></a></li>
                  <li><a href="blog-details.html" className="dropdown-item"><span>Blog Details</span></a></li>
                </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html" role="button">Contact</a>
              </li>
              {/* <li className=""><a href="dashboard/employer-dashboard-submit-job.html" className="job-post-btn tran3s">Post Job</a></li> */}
              {/* <li className="d-none d-md-block d-xl-block ml-auto"><a href="candidates-v1.html" className="btn-one w-100">Hire Top Talents</a></li> */}
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
