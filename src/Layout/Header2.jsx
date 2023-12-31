import React from 'react'

export default function Header2() {
  return (
    <div>
       <header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
  <div className="inner-content position-relative">
    <div className="top-header">
      <div className="d-flex align-items-center">
        <div className="logo order-lg-0">
          <a href="#" className="d-flex align-items-center">
            <img src="/assets/images/logo/logo_craig-10.png" alt="" width={150}  />
          </a>
        </div>
        {/* logo */}
        <div className="right-widget ms-auto order-lg-3">
          {/* <ul className="d-flex align-items-center style-none">
          {/* <ul className="d-flex align-items-center style-none">
            <li className="d-none d-md-block"><a href="dashboard/employer-dashboard-submit-job.html" className="job-post-btn tran3s">Post Job</a></li>
            <li><a href="#" className="login-btn-one" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></li>
            <li className="d-none d-md-block ms-4"><a href="candidates-v1.html" className="btn-one">Hire Top Talents</a></li>
          </ul> */}
        </div> 
        {/*/.right-widget*/}
          </ul> */}
        </div> 
        {/*/.right-widget*/}
        <nav className="navbar navbar-expand-lg p0 ms-lg-5 ms-3 order-lg-2">
        <button className="navbar-toggler d-block d-lg-none text-end ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center">
              <li className="d-block d-lg-none"><div className="logo"><a href="index.html" className="d-block"><img src="/assets/images/logo/logo_craig-10.png" alt="utfuyu" width={100} /></a></div></li>
              <li className="nav-item dropdown category-btn mega-dropdown-sm">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-grid-fill" /> Services</a>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-grid-fill" /> Services</a>
                <ul className="dropdown-menu category-dropdown">
                  <li className="row gx-0">
                    <div className="col-lg-6">
                      <a href="job-list-v1.html" className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_63.svg" alt className="lazy-img" /></div>
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_63.svg" alt className="lazy-img" /></div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">UI/UX Design</div>
                          <div className="job-count">12k+ Jobs</div>
                        </div>
                      </a>
                      {/* /.item */}
                      <a href="job-list-v2.html" className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_64.svg" alt className="lazy-img" /></div>
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_64.svg" alt className="lazy-img" /></div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">Development</div>
                          <div className="job-count">7k+ Jobs</div>
                        </div>
                      </a>
                      {/* /.item */}
                      <a href="job-list-v3.html" className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_65.svg" alt className="lazy-img" /></div>
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_65.svg" alt className="lazy-img" /></div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">Telemarketing</div>
                          <div className="job-count">310+ Jobs</div>
                        </div>
                      </a>
                      {/* /.item */}
                    </div>
                    <div className="col-lg-6">
                      <a href="job-grid-v1.html" className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_68.svg" alt className="lazy-img" /></div>
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_68.svg" alt className="lazy-img" /></div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">Marketing</div>
                          <div className="job-count">420+ Jobs</div>
                        </div>
                      </a>
                      {/* /.item */}
                      <a href="job-grid-v2.html" className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_66.svg" alt className="lazy-img" /></div>
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_66.svg" alt className="lazy-img" /></div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">Editing</div>
                          <div className="job-count">3k+ Jobs</div>
                        </div>
                      </a>
                      {/* /.item */}
                      <a href="job-grid-v3.html" className="item d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_67.svg" alt className="lazy-img" /></div>
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="images/icon/icon_67.svg" alt className="lazy-img" /></div>
                        <div className="ps-3 flex-fill">
                          <div className="fw-500 text-dark">Finance Accounting</div>
                          <div className="job-count">150+ Jobs</div>
                        </div>
                      </a>
                      {/* /.item */}
                    </div>
                  </li>
                  <li>
                    <a href="job-list-v1.html" className="explore-all-btn d-flex align-items-center justify-content-between tran3s">
                      <span className="fw-500">Explore all fields</span>
                      <span className="icon"><i className="bi bi-chevron-right" /></span>
                    </a>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home
                </a>
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
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Job
                </a>
                {/* <ul className="dropdown-menu">
                  <li><a href="job-list-v1.html" className="dropdown-item"><span>Job List style -1</span></a></li>
                  <li><a href="job-list-v2.html" className="dropdown-item"><span>Job List style -2</span></a></li>
                  <li><a href="job-list-v3.html" className="dropdown-item"><span>Job List style -3</span></a></li>
                  <li><a href="job-grid-v1.html" className="dropdown-item"><span>Job Grid style -1</span></a></li>
                  <li><a href="job-grid-v2.html" className="dropdown-item"><span>Job Grid style -2</span></a></li>
                  <li><a href="job-grid-v3.html" className="dropdown-item"><span>Job Grid style -3</span></a></li>
                  <li><a href="job-details-v1.html" className="dropdown-item"><span>Job Details v-1</span></a></li>
                  <li><a href="job-details-v2.html" className="dropdown-item"><span>Job Details v-2</span></a></li>
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
              <li className="d-md-none"><a href="dashboard/employer-dashboard-submit-job.html" className="job-post-btn tran3s">Post Job</a></li>
              <li className="d-md-none"><a href="candidates-v1.html" className="btn-one w-100">Hire Top Talents</a></li>
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
