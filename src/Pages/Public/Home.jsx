import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { RegisterPath } from '../../utils/Constants';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [numberVerify,setnumberVerify]=useState(false)
  const navigate  = useNavigate();
  return (
    
      	< >
  <div className="hero-banner-two position-relative">
    <div className="container">
      <div className="position-relative pt-225 xl-pt-200 lg-pt-150 pb-80 lg-pb-60">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <h1>Discover Top Talent with CRAIG.</h1>
            <p className="text-md mt-35 mb-50 lg-mb-30 pe-xxl-5">Connect with elite professionals from over 5 lakh + companies. Begin your journey to career success today!</p>
          </div>
        </div>
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div className="job-search-two position-relative me-xxl-5">
                <form action="#" className="d-flex align-items-center ">
                  
                  <button className="btn-five  h-100">Get Started</button>
                  <button className="btn-seven h-100  " style={{marginLeft:"10px"}}>Login</button>
                </form>
               
              </div>
              {/* /.job-search-two */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="img-box">
      <img src="./assets/images/assets/img_10.png" alt className="" />
      <img src="./assets/images/assets/screen_04.png" alt className="shapes screen_01" />
      <img src="./assets/images/assets/screen_05.png" alt className=" shapes screen_02 wow fadeInLeft" />
    </div>
    {/* /.img-box */}
    <div className="rating-box position-relative">
      <div className="d-sm-flex justify-content-end">
        <div className="me-sm-5 pe-xxl-4">
          <div className="d-flex align-items-center">
            <img src="/assets/images/assets/screen_06.png" alt className="lazy-img me-2 me-lg-4" />
            <div>
              <div className="text-lg fw-500 text-dark">18k+</div>
              <span>Individual Freelancer</span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg fw-500 text-dark mb-10">A+ Rating</div>
          <ul className="d-flex align-items-center style-none rating">
            <li><i className="bi bi-star-fill" /></li>
            <li><i className="bi bi-star-fill" /></li>
            <li><i className="bi bi-star-fill" /></li>
            <li><i className="bi bi-star-fill" /></li>
            <li><i className="bi bi-star-fill" /></li>
            <li>4.78 (300k+) </li>
          </ul>
        </div>
      </div>
    </div>
    {/* /.rating-box */}
    <img src="/assets/images/shape/shape_15.svg" alt className="lazy-img shapes shape_01" />
    <img src="/assets/images/shape/shape_16.svg" alt className="lazy-img shapes shape_02" />
    <img src="/assets/images/shape/shape_17.svg" alt className="lazy-img shapes shape_03" />
    {/* <img src="/assets/images/shape/shape_18.svg" alt className="lazy-img shapes shape_04" /> */}
    <img src="/assets/images/shape/shape_19.svg" alt className="lazy-img shapes shape_05" />
    <img src="/assets/images/shape/shape_20.svg" alt className="lazy-img shapes shape_06" />
  </div> {/* /.hero-banner-two */}
  {/*
		=====================================================
			How It Works Two
		=====================================================
		*/}
  <section className="how-it-works-two position-relative pt-130 xl-pt-110">
    <div className="container">
      <div className="title-one d-flex align-items-center justify-content-between text-center mb-45 lg-mb-20">
        <span className="line" />
        <h2 className="fw-600 ps-3 pe-3">How it’s Work?</h2>
        <span className="line" />
      </div>
      <div className="border-bottom border-md0">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp">
              <div className="numb fw-500 d-flex align-items-center justify-content-center m-auto"><span>01</span></div>
              <div className="title fw-500 text-lg text-dark mt-25 mb-10">Sign Up Easily</div>
              <p>Start your CRAIG journey with a simple account setup.</p>
            </div>
            {/* /.card-style-five */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp" data-wow-delay="0.1s">
              <div className="numb fw-500 d-flex align-items-center justify-content-center m-auto"><span>02</span></div>
              <div className="title fw-500 text-lg text-dark mt-25 mb-10">Build your profile.</div>
              <p>Showcase your skills and aspiratons ti attract the right employers.</p>
            </div>
            {/* /.card-style-five */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp" data-wow-delay="0.19s">
              <div className="numb fw-500 d-flex align-items-center justify-content-center m-auto"><span>03</span></div>
              <div className="title fw-500 text-lg text-dark mt-25 mb-10">Boost with a Score.</div>
              <p>Elevate your profile using CRAIG,s scoring system</p>
            </div>
            {/* /.card-style-five */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /.how-it-works-two */}
  {/* 
		=============================================
			Text Feature One
		============================================== 
		*/}
  <section className="text-feature-one position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 order-lg-last">
          <div className="ps-lg-4 wow fadeInRight">
            <div className="title-one">
              <h2 className="fw-600">Empower<br /> Your Career <br /> with CRAIG</h2>
            </div>
            <p className="mt-40 md-mt-20 mb-40 md-mb-20 text-md">AInciddnt ut labore et dolor magna aliu. enim ad mim venam, quis nostru</p>
            <ul className="list-style-one style-none">
              <li>Access insightful company reviews. </li>
              <li>Deep dlive into your preferred companies.</li>
              <li>Experience the power of score-based evaluations.</li>
              <li>Get industry-standard salary packages.</li>
              <li>Benefit from transparent,data-driven reports.</li>
            </ul>
            <a href="/" className="btn-five border6 mt-70 md-mt-30">Home</a>
          </div>
        </div>
        <div className="col-lg-7 col-md-8 m-auto order-lg-first">
          <div className="img-data position-relative me-xl-5 md-mt-20">
            <div className="row align-items-center gx-xl-5">
              <div className="col-6">
                <img src="/assets/images/assets/img_11.jpg" alt className="lazy-img mt-35 md-mt-20 wow fadeInLeft" />
              </div>
              <div className="col-6">
                <img src="/assets/images/assets/img_12.jpg" alt className="lazy-img mt-35 md-mt-20 wow fadeInDown" />
                <img src="/assets/images/assets/img_13.jpg" alt className="lazy-img mt-35 md-mt-20 wow fadeInUp" />
              </div>
            </div>
            <img src="/assets/images/shape/shape_06.svg" alt className="lazy-img shapes shape_02" />
            <img src="/assets/images/shape/shape_21.svg" alt className="lazy-img shapes shape_03" />
            <a className="fancybox rounded-circle video-icon tran3s text-center" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
              <i className="bi bi-play-fill" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-bottom pb-50 lg-pb-20 mt-90 lg-mt-30">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div className="counter-block-one mt-25 text-center wow fadeInUp">
              <div className="main-count fw-500 text-dark"><span className="counter">50</span>k+</div>
              <p>Successsful Placements</p>
            </div> {/* /.counter-block-one */}
          </div>
          <div className="col-sm-4">
            <div className="counter-block-one mt-25 text-center wow fadeInUp" data-wow-delay="0.2s">
              <div className="main-count fw-500 text-dark"><span className="counter">30</span>k+</div>
              <p>Global Partners</p>
            </div> {/* /.counter-block-one */}
          </div>
          <div className="col-sm-4">
            <div className="counter-block-one mt-25 text-center wow fadeInUp" data-wow-delay="0.35s">
              <div className="main-count fw-500 text-dark">₹<span className="counter">200</span>M</div>
              <p>In Career Earnings</p>
            </div> {/* /.counter-block-one */}
          </div>
        </div>
      </div> {/* /.border-bottom */}
    </div>
  </section>
  {/* /.text-feature-one */}
  {/* 
		=============================================
			Category Section Two
		============================================== 
		*/}
  <section className="category-section-two position-relative pt-150 lg-pt-100 pb-140 lg-pb-80">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12 ">
          <div className="title-one text-center text-sm-start">
            <h2 className="fw-600">Top Career Categories:</h2>
            <h2 className="fw-600">Unlock Your Potential</h2>
          </div>
        </div>
        
      </div>
      <div className="card-wrapper row mt-80 lg-mt-40">
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp">
            <a href="job-grid-v2.html" className="d-block">
              <div className="icon tran3s d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_12.svg" alt="" className="lazy-img" /></div>
              <div className="title tran3s fw-500 text-lg">Informed <br />Decisions</div>
              <div className="total-job">Avoid career pitfalls by reading through extensive company reviews</div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
            <a href="job-grid-v2.html" className="d-block">
              <div className="icon tran3s d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_13.svg" alt className="lazy-img" /></div>
              <div className="title tran3s fw-500 text-lg">Salary<br />Insights</div>
              <div className="total-job">Gain access to salary information from over 500,000 companies</div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
            <a href="job-grid-v2.html" className="d-block">
              <div className="icon tran3s d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_14.svg" alt className="lazy-img" /></div>
              <div className="title tran3s fw-500 text-lg">Interview <br />Prep</div>
              <div className="total-job">Tackie interviews confidently with a comprehensive database of company-specific questions.</div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
            <a href="job-grid-v2.html" className="d-block">
              <div className="icon tran3s d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_15.svg" alt className="lazy-img" /></div>
              <div className="title tran3s fw-500 text-lg">Deep Company<br />Insight</div>
              <div className="total-job">Arm yourself with knowledge about your preferred employers to make informed choices</div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
            <a href="job-grid-v2.html" className="d-block">
              <div className="icon tran3s d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_16.svg" alt className="lazy-img" /></div>
              <div className="title tran3s fw-500 text-lg">Score-Driven <br />Opportunities</div>
              <div className="total-job">Jumpstart your career with CRAIG and leverage our scoring system</div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
            <a href="job-grid-v2.html" className="d-block">
              <div className="icon tran3s d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_17.svg" alt className="lazy-img" /></div>
              <div className="title tran3s fw-500 text-lg">Performance- <br />Based Earnings </div>
              <div className="total-job">Secure salary packages that match industry standards and reward your performance</div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
            <a href="job-grid-v2.html" className="d-block">
              <div className="icon tran3s d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_18.svg" alt className="lazy-img" /></div>
              <div className="title tran3s fw-500 text-lg">Objective  <br />Evaluations.</div>
              <div className="total-job">Make your mark in the job market with transparent, data driven evaluations</div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <div className="card-style-four bg-color tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
            <a href="job-grid-v2.html" className="d-block">
              <div className="title text-white">Home</div>
              <div className="text-lg text-white">Connect with the career you deserve.</div>
              <div className="d-flex align-items-center justify-content-end mt-50">
                <div className="total-job text-white">Signup Now</div><img src="/assets/images/shape/shape_22.svg" alt className="lazy-img" />
                <div className="icon tran3s d-flex align-items-center justify-content-center ms-1"><img src="/assets/images/icon/icon_19.svg" alt className="lazy-img" /></div>
              </div>
            </a>
          </div>
          {/* /.card-style-four */}
        </div>
      </div>
      {/* /.card-wrapper */}
      <div className="text-center d-sm-none mt-50"><a href="job-grid-v1.html" className="btn-six border-0">All Categories <img src="/assets/images/shape/shape_23.svg" alt className="lazy-img shapes" /></a></div>
    </div>
    <img src="/assets/images/shape/shape_24.svg" alt className="lazy-img shapes shape_01" />
  </section>
  {/* ./category-section-two */}
  {/* 
		=============================================
			Text Feature Three
		============================================== 
		*/}
  <section className="text-feature-three position-relative pt-225 lg-pt-150 md-pt-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 order-lg-last ms-auto">
          <div className="wow fadeInRight ms-xxl-5">
            <div className="title-one">
              <div className="sub-title">FIND FREELANCER</div>
              <h2 className="fw-600">Hire top talents</h2>
            </div>
            <div className="accordion accordion-style-one mt-40" id="accordionOne">
              <div className="accordion-item">
                <div className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Seamless Search
                  </button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionOne">
                  <div className="accordion-body">
                    <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand. It only takes 5 minutes.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Hire top talents
                  </button>
                </div>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOne">
                  <div className="accordion-body">
                    <p>Practice what you learned on realistic lorem quis test questions testing.</p>
                  </div>
                </div>
              </div>
            </div> {/* /.accordion-style-one */}
            <a href="candidates-v2.html" className="btn-five border6 mt-70 lg-mt-40">Explorer All</a>
          </div>
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="img-box position-relative d-flex align-items-center justify-content-center wow fadeInLeft">
            <img src="/assets/images/assets/screen_07.png" alt className="lazy-img" />
            <img src="/assets/images/assets/screen_08.png" alt className="lazy-img shapes screen_01" />
            <img src="/assets/images/shape/shape_25.svg" alt className="lazy-img shapes shape_01" />
          </div>
          {/* /.big-circle */}
        </div>
      </div>
    </div>
  </section>
  {/* /.text-feature-three */}
  {/*
		=====================================================
			fancy banner
		=====================================================
		*/}
 <section className="fancy-banner-three mt-150 lg-mt-100">
  <div className="bg-wrapper pt-85 lg-pt-50 pb-80 lg-pb-50 position-relative wow fadeInUp">
    <div className="container">
      <div className="row">
        <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
          <div className="text-wrapper p0 mb-50 md-mb-20 wow fadeInRight">
            <a className="fancybox rounded-circle video-icon tran3s d-flex align-items-center justify-content-center" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
              <i className="bi bi-play-fill" />
            </a>
            <div className="title-one mt-25 mb-25 lg-mb-20">
              <h2 className="text-white main-font">Let’s get started It’s <span style={{color: '#00BF58'}}>simple.</span></h2>
            </div>
            <p className="text-white text-md">Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
          </div>
        </div>
      </div>
      <div className="row gx-xl-5 justify-content-between">
        <div className="col-lg-4 d-flex">
          <div className="card-style-nine w-100 d-flex mt-20 wow fadeInUp">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_37.svg" alt className="lazy-img" /></div>
            <div className="ps-4 text d-flex flex-column">
              <div className="text-lg mb-10">It’s take 2 minutes to open an account.</div>
              <a href="#" className="fw-500 text-uppercase">Open Acount</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex">
          <div className="card-style-nine w-100 d-flex mt-20 wow fadeInUp" data-wow-delay="0.2s">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_38.svg" alt className="lazy-img" /></div>
            <div className="ps-4 text d-flex flex-column">
              <div className="text-lg mb-10">Find talents or search
                your desire work.</div>
              <a href="#" className="fw-500 text-uppercase">Apply job or hire</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex">
          <div className="card-style-nine w-100 d-flex mt-20 wow fadeInUp" data-wow-delay="0.35s">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/assets/images/icon/icon_39.svg" alt className="lazy-img" /></div>
            <div className="ps-4 text d-flex flex-column">
              <div className="text-lg mb-10">Get work done quickly with Craig gatweay.</div>
              <a href="#" className="fw-500 text-uppercase">Payment Method</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.bg-wrapper */}
</section>

		
  {/* Modal */}
  <div className="modal fade" id="loginModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-fullscreen modal-dialog-centered">
      <div className="container">
        <div className="user-data-form modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setnumberVerify(false)} />
          <div className="text-center">
            <h2 className='mb-4'>Hi, Welcome Back!</h2>
            {/* <p>Login to your account</p> */}
          </div>
          <div className="form-wrapper m-auto ">
            <form action="#" className="mt-10">
              <div className="row">
                <div className="col-12">
                  <div className="input-group-meta position-relative mb-25">
                    <label>Mobile*</label>
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="IN"
                      value={""}
                      onChange={phoneNumber=>console.log(phoneNumber)}
                      style={{ width:"100%",fontSize: '14px',display:"flex",border:'1px solid rgb(49 121 90)',borderRadius:"8px",paddingLeft:"6px"}}
                      />
                  </div>
                </div>
                <div className={`col-12 ${numberVerify?'d-block':'d-none'} `} >
                  <div className="input-group-meta position-relative mb-20">
                    <label>OTP*</label>
                    <input type="test" placeholder="Enter OTP"  />
                    <span className="placeholder_icon"></span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                    <div>
                      {/* <input type="checkbox" id="remember" /> */}
                      <p className="text-center mt-10"> <a href="javascript:void(0)" className={`fw-500 ${numberVerify?'d-block':'d-none'}`}>Re-Send OTP</a></p> 
                    </div>
  
                  </div> {/* /.agreement-checkbox */}
                </div>
                <div className="col-12">
                  <button type='button' className={`btn-eleven fw-500 tran3s d-block mt-20 ${!numberVerify?'d-block':'d-none'}`} onClick={()=>setnumberVerify(true) }>Login</button>
                  <button type='button' data-bs-dismiss="modal" className={`btn-eleven fw-500 tran3s d-block mt-20 ${numberVerify?'d-block':'d-none'}`} onClick={()=>setnumberVerify(true) & navigate(RegisterPath)}>Verify OTP</button>
                </div>
              </div>
            </form>
            <div className="d-flex align-items-center mt-30 mb-10">
              <div className="line" />
              <span className="pe-3 ps-3">OR</span>
              <div className="line" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                  <img src="/assets/images/icon/google.png" alt />
                  <span className="ps-2">Login with Google</span>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                  <img src="/assets/images/icon/facebook.png" alt />
                  <span className="ps-2 ">Login with Facebook</span>
                </a>
              </div>
            </div>
            {/* <p className="text-center mt-10">Don't have an account? <a href="signup.html" className="fw-500">Sign up</a></p> */}
          </div>
          {/* /.form-wrapper */}
        </div>
        {/* /.user-data-form */}
      </div>
    </div>
  </div>
  <button className="scroll-top">
    <i className="bi bi-arrow-up-short" />
  </button>

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
    </>
  )
}
