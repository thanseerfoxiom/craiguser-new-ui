import React from 'react'

export default function Footer1() {
  return (
    <div>{/* =====================================================
    Footer One
=====================================================
 */}
<div className="footer-one">
<div className="container">
<div className="inner-wrapper">
<div className="row justify-content-between">
  <div className="col-xl-4 col-lg-3 footer-intro mb-15">
    <div className="logo mb-25">
      <a href="index.html" className="d-flex align-items-center">
        <img src="/assets/images/logo/logo_craig-11.png" width={150} alt="" />
      </a>
    </div>
    {/* logo */}
    <a href="#" className="email fw-500">Craigsupport@new.com</a>
    <img src="/assets/images/shape/shape_28.svg" alt className="lazy-img mt-50 sm-mt-30 sm-mb-20" />
  </div>
  <div className="col-lg-2 col-sm-4 mb-20">
    <h5 className="footer-title">Services​</h5>
    <ul className="footer-nav-link style-none">
      <li><a href="job-grid-v2.html">Browse Jobs</a></li>
      <li><a href="company-v1.html">Companies</a></li>
      <li><a href="candidates-v1.html">Candidates</a></li>
      <li><a href="pricing.html">Pricing</a></li>
    </ul>
  </div>
  <div className="col-lg-2 col-sm-4 mb-20">
    <h5 className="footer-title">Company</h5>
    <ul className="footer-nav-link style-none">
      <li><a href="about-us.html">About us</a></li>
      <li><a href="blog-v2.html">Blogs</a></li>
      <li><a href="faq.html">FAQ’s</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>
  <div className="col-xl-2 col-lg-3 col-sm-4 mb-20">
    <h5 className="footer-title">Support</h5>
    <ul className="footer-nav-link style-none">
      <li><a href="contact.html">Terms of use</a></li>
      <li><a href="contact.html">Terms &amp; conditions</a></li>
      <li><a href="contact.html">Privacy</a></li>
      <li><a href="contact.html">Cookie policy</a></li>
    </ul>
  </div>
</div>
</div> {/* /.inner-wrapper */}
</div>
<div className="bottom-footer">
<div className="container">
<div className="row align-items-center">
  <div className="col-lg-4 order-lg-3 mb-15">
    <ul className="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon">
      <li><a href="#"><i className="bi bi-whatsapp" /></a></li>
      <li><a href="#"><i className="bi bi-dribbble" /></a></li>
      <li><a href="#"><i className="bi bi-google" /></a></li>
      <li><a href="#"><i className="bi bi-instagram" /></a></li>
    </ul>
  </div>
  <div className="col-lg-4 order-lg-1 mb-15">
    <ul className="d-flex style-none bottom-nav justify-content-center justify-content-lg-start">
      <li><a href="contact.html">Privacy &amp; Terms.</a></li>
      <li><a href="contact.html"> Contact Us</a></li>
    </ul>
  </div>
  <div className="col-lg-4 order-lg-2">
    <p className="text-center mb-15">Copyright @2023 Craig inc.</p>
  </div>
</div>
</div>
</div>
</div> {/* /.footer-one */}
</div>
  )
}
