import React from 'react'
import { Helmet } from 'react-helmet'

export default function Profile() {
  return (
    <div>
       <div className="main-page-wrapper">
 
  
  {/* 
		=============================================
			Inner Banner
		============================================== 
		*/}
  <div className="inner-banner-one position-relative">
    <div className="container">
      <div className="candidate-profile-card list-layout">
        <div className="d-flex align-items-start align-items-xl-center">
          <div className="cadidate-avatar position-relative d-block me-auto ms-auto"><a href="#" className="rounded-circle"><img src="images/lazy.svg" data-src="images/candidates/img_01.jpg" alt className="lazy-img rounded-circle" /></a></div>
          <div className="right-side">
            <div className="row gx-1 align-items-center">
              <div className="col-xl-2 order-xl-0">
                <div className="position-relative">
                  <h4 className="candidate-name text-white mb-0">Rashed Kabir</h4>
                  <div className="candidate-post">UI Designer</div>
                </div>
              </div>
              <div className="col-xl-3 order-xl-3">
                <ul className="cadidate-skills style-none d-flex flex-wrap align-items-center">
                  <li>Design</li>
                  <li>UI</li>
                  <li>Digital</li>
                  <li className="more">2+</li>
                </ul>
                {/* /.cadidate-skills */}
              </div>
              <div className="col-xl-2 col-md-4 order-xl-1">
                <div className="candidate-info">
                  <span>Location</span>
                  <div>New York, US</div>
                </div>
                {/* /.candidate-info */}
              </div>
              <div className="col-xl-2 col-md-4 order-xl-2">
                <div className="candidate-info">
                  <span>Salary</span>
                  <div>$30k-$50k/yr</div>
                </div>
                {/* /.candidate-info */}
              </div>
              {/* <div className="col-xl-3 col-md-4 order-xl-4">
                <div className="d-flex justify-content-md-end">
                  <a href="#" className="save-btn text-center rounded-circle tran3s"><i className="bi bi-heart" /></a>
                  <a href="#" className="cv-download-btn fw-500 tran3s ms-md-3 sm-mt-20"></a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div> 
    </div>
    <img src="images/lazy.svg" data-src="images/shape/shape_02.svg" alt className="lazy-img shapes shape_01" />
    <img src="images/lazy.svg" data-src="images/shape/shape_03.svg" alt className="lazy-img shapes shape_02" />
  </div> {/* /.inner-banner-one */}
  {/* 
		=============================================
			Candidates Profile Details
		============================================== 
		*/}
  <section className="candidates-profile bg-color pt-100 lg-pt-70 pb-150 lg-pb-80">
    <div className="container">
      <div className="row">
        <div className="col-xxl-9 col-lg-8">
          <div className="candidates-profile-details me-xxl-5 pe-xxl-4">
            {/* <div className="inner-card mb-65 lg-mb-40">
              <h3 className="title">Overview</h3>
              <p>Hello my name is Ariana Gande Connor and I’m a Financial Supervisor from Netherlands, Rotterdam. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. </p> <br />
              <p>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec.</p>
            </div> */}
            {/* /.inner-card */}
            <h3 className="title">Intro</h3>
            <div className="video-post d-flex align-items-center justify-content-center mt-25 lg-mt-20 mb-75 lg-mb-50">
              <a className="fancybox rounded-circle video-icon tran3s text-center" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
                <i className="bi bi-play" />
              </a>
            </div>
            <div className="inner-card mb-75 lg-mb-50">
              <h3 className="title">Education</h3>
              <div className="time-line-data position-relative pt-15">
                <div className="info position-relative">
                  <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">1</div>
                  <div className="text_1 fw-500">University of Boston</div>
                  <h4>Bachelor Degree of Design</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum primis</p>
                </div>
                {/* ./info */}
                <div className="info position-relative">
                  <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">2</div>
                  <div className="text_1 fw-500">Design Collage</div>
                  <h4>UI/UX Design Course</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                {/* ./info */}
              </div>
              {/* /.time-line-data */}
            </div>
            {/* /.inner-card */}
            <div className="inner-card mb-75 lg-mb-50">
              <h3 className="title">Skills</h3>
              <ul className="style-none skill-tags d-flex flex-wrap pb-25">
                <li>Figma</li>
                <li>HTML5</li>
                <li>Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>WordPress</li>
                <li>jQuery</li>
                <li>Web Design</li>
                <li>Adobe XD</li>
                <li>CSS</li>
                <li className="more">3+</li>
              </ul>
            </div>
            {/* /.inner-card */}
            <div className="inner-card mb-60 lg-mb-50">
              <h3 className="title">Work Experience</h3>
              <div className="time-line-data position-relative pt-15">
                <div className="info position-relative">
                  <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">1</div>
                  <div className="text_1 fw-500">02/03/18 - 13/05/20</div>
                  <h4>Product Designer (Google)</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                {/* ./info */}
                <div className="info position-relative">
                  <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">2</div>
                  <div className="text_1 fw-500">02/07/20 - 13/09/22</div>
                  <h4>UI/UX Engineer (Adobe)</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum primis</p>
                </div>
                {/* ./info */}
              </div>
              {/* /.time-line-data */}
            </div>
            {/* /.inner-card */}
            {/* <div className="inner-card">
              <h3 className="title">Portfolio</h3>
              <div className="candidate-portfolio-slider">
                <div className="item">
                  <a href="#" className="w-100 d-blok"><img src="images/candidates/CP_01.jpg" alt className="w-100" /></a>
                </div>
                <div className="item">
                  <a href="#" className="w-100 d-blok"><img src="images/candidates/CP_02.jpg" alt className="w-100" /></a>
                </div>
                <div className="item">
                  <a href="#" className="w-100 d-blok"><img src="images/candidates/CP_03.jpg" alt className="w-100" /></a>
                </div>
                <div className="item">
                  <a href="#" className="w-100 d-blok"><img src="images/candidates/CP_02.jpg" alt className="w-100" /></a>
                </div>
              </div>
            </div> */}
            {/* /.inner-card */}
          </div>
          {/* /.candidates-profile-details */}
        </div>
        <div className="col-xxl-3 col-lg-4">
          <div className="cadidate-profile-sidebar ms-xl-5 ms-xxl-0 md-mt-60">
            <div className="cadidate-bio bg-wrapper mb-60 md-mb-40">
              <ul className="style-none">
                <li className="border-0">
                  <span>Location: </span>
                  <div>Spain, Barcelona </div>
                </li>
                <li>
                  <span>Age: </span>
                  <div>28</div>
                </li>
                <li>
                  <span>Email: </span>
                  <div><a href="mailto:me@support.com">me@support.com</a></div>
                </li>
                <li>
                  <span>Qualification: </span>
                  <div>Master Degree</div>
                </li>
                <li>
                  <span>Gender: </span>
                  <div>Male</div>
                </li>
                <li>
                  <span>Expected Salary: </span>
                  <div>$3k-$4k/month</div>
                </li>
                <li>
                  <span>Social:</span>
                  <div>
                    <a href="#" className="me-3"><i className="bi bi-facebook" /></a>
                    <a href="#" className="me-3"><i className="bi bi-instagram" /></a>
                    <a href="#" className="me-3"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </li>
              </ul>
              <a href="#" className="btn-ten fw-500 text-white w-100 text-center tran3s mt-15">Download CV</a>
            </div>
            {/* /.cadidate-bio */}
            <h4 className="sidebar-title">Location</h4>
            <div className="map-area mb-60 md-mb-40">
              <div className="gmap_canvas h-100 w-100">
                <iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka%20collage&t=&z=12&ie=UTF8&iwloc=B&output=embed" />
              </div>
            </div>
            <h4 className="sidebar-title">Email Rashed Kabir.</h4>
            <div className="email-form bg-wrapper">
              <p>Your email address &amp; profile will be shown to the recipient.</p>
              <form action="#">
                <div className="d-sm-flex mb-25">
                  <label htmlFor>Name</label>
                  <input type="text" />
                </div>
                <div className="d-sm-flex mb-25">
                  <label htmlFor>Email</label>
                  <input type="email" />
                </div>
                <div className="d-sm-flex mb-25 xs-mb-10">
                  <label htmlFor>Message</label>
                  <textarea defaultValue={""} />
                </div>
                <div className="d-sm-flex">
                  <label htmlFor />
                  <button className="btn-ten fw-500 text-white flex-fill text-center tran3s">Send </button>
                </div>
              </form>
            </div>
          </div> 
          {/* /.cadidate-profile-sidebar */}
        </div>
      </div>
      {/* /.row */}
    </div>
  </section>
  {/* /.candidates-profile */}
  {/*
		=====================================================
			Job Portal Intro
		=====================================================
		*/}
  <section className="job-portal-intro">
    <div className="container">
      <div className="wrapper bottom-border pt-65 md-pt-50 pb-65 md-pb-50">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="text-center text-lg-start">
              <h2>Most complete job portal.</h2>
              <p className="text-md m0 md-pb-20">Signup and start find your job or talents.</p>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="btn-group style-none d-flex flex-wrap justify-content-center justify-content-lg-end">
              <li className="me-2"><a href="job-list-v1.html" className="btn-three">Looking for job?</a></li>
              <li className="ms-2"><a href="signup.html" className="btn-four">Post a job</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /.job-portal-intro */}
  {/*
		=====================================================
			Footer One
		=====================================================
		*/}
 
  <button className="scroll-top">
    <i className="bi bi-arrow-up-short" />
  </button>
  
</div>
<Helmet>
       
        <script src="/assets/vendor/jquery.min.js"></script>
      <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/vendor/wow/wow.min.js"></script>
      <script src="/assets/vendor/slick/slick.min.js"></script>
      <script src="/assets/vendor/fancybox/dist/jquery.fancybox.min.js"></script>
      <script src="/assets/vendor/jquery.lazy.min.js"></script>
      <script src="/assets/vendor/jquery.counterup.min.js"></script>
      <script src="/assets/vendor/jquery.waypoints.min.js"></script>
      <script src="/assets/vendor/nice-select/jquery.nice-select.min.js"></script>
      <script src="/assets/vendor/validator.js"></script>
      <script src="/assets/js/theme.js"></script>
</Helmet>
    </div>
  )
}
