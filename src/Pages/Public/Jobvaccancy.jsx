import React from 'react'
import Headerprofile from '../../Layout/Headerprofile'
import { Link } from 'react-router-dom'
import { JobdetailsPath } from '../../utils/Constants'

export default function Jobvaccancy() {
  return (
    <div>
        <div className="main-page-wrapper">
        <div className="inner-banner-one position-relative">
    <div className="container">
      <div className="candidate-profile-card list-layout">
        <div className="d-flex align-items-start align-items-xl-center">
          <div className="cadidate-avatar position-relative d-block me-auto ms-auto"><a href="#" className="rounded-circle"><img src="/assets/images/candidates/img_01.jpg" alt className="lazy-img rounded-circle" /></a></div>
          <div className="right-side">
            <div className="row gx-1 align-items-center">
              <div className="col-xl-6 col-md-6 order-xl-0">
                <div className="position-relative">
                  <h4 className="candidate-name text-white mb-0">Rashed Kabir</h4>
                  <div className="candidate-post">UI Designer</div>
                </div>
                <div className="col-xl-6 order-xl-6">
                <ul className="cadidate-skills style-none d-flex flex-wrap align-items-center">
                  <li>Design</li>
                  <li>UI</li>
                  <li>Digital</li>
                  <li className="more">2+</li>
                </ul>
                {/* /.cadidate-skills */}
                <div className='col-xl-12 col-md-12 '>
              <div className='row'> 
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
              </div></div>
              </div>

              </div>
              
              </div>
              
              
    
            
           
              
             
              </div>
          </div>
        </div>
      </div> 
    </div>
    <img src="/assets/images/shape/shape_02.svg" alt className="lazy-img shapes shape_01" />
    <img src="/assets/images/shape/shape_03.svg" alt className="lazy-img shapes shape_02" />
  </div> 
       <section className="job-listing-three pt-110 lg-pt-80 pb-160 xl-pb-150 lg-pb-80">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="filter-area-tab">
                <div className="light-bg border-20 ps-4 pe-4">
                    <a className="filter-header border-20 d-block collapsed" data-bs-toggle="collapse" href="#collapseFilterHeader" role="button" aria-expanded="false"><span className="main-title fw-500 text-dark">Filter By</span></a>
                    <div className="collapse border-top" id="collapseFilterHeader">
                    <div className="pt-25 pb-30">
                        <div className="row">
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="filter-block pb-50 lg-pb-20">
                            <div className="filter-title fw-500 text-dark">Category</div>
                            <select className="nice-select bg-white">
                                <option value={0}>Web Design</option>
                                <option value={1}>Design &amp; Creative </option>
                                <option value={2}>It &amp; Development</option>
                                <option value={3}>Web &amp; Mobile Dev</option>
                                <option value={4}>Writing</option>
                                <option value={5}>Sales &amp; Marketing</option>
                            </select>
                            </div>
                            {/* /.filter-block */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="filter-block pb-50 lg-pb-20">
                            <div className="filter-title fw-500 text-dark">Location</div>
                            <select className="nice-select bg-white">
                                <option value={0}>Washington DC</option>
                                <option value={1}>California, CA</option>
                                <option value={2}>New York</option>
                                <option value={3}>Miami</option>
                            </select>
                            </div>
                            {/* /.filter-block */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="filter-block d-xl-flex pb-25">
                            <div className="filter-title fw-500 text-dark mt-1">Experience Level :</div>
                            <div className="main-body ps-xl-4 flex-fill">
                                <ul className="style-none filter-input">
                                <li>
                                    <input type="checkbox" name="Experience" />
                                    <label>Beginner (1-3 yrs) </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="Experience"  />
                                    <label>Intermediate (1-5 yrs) </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="Experience" />
                                    <label>Expert (1-10 yrs)</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="Experience"  />
                                    <label>Internship</label>
                                </li>
                                </ul>
                            </div>
                            </div>
                            {/* /.filter-block */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="filter-block d-xl-flex pb-25">
                            <div className="filter-title fw-500 text-dark mt-1">Salary Range :</div>
                            <div className="main-body ps-xl-4 flex-fill">
                                <div className="salary-slider">
                                <div className="price-input d-flex align-items-center pt-5">
                                    <div className="field d-flex align-items-center">
                                    <input type="number" className="input-min"  />
                                    </div>
                                    <div className="pe-1 ps-1">-</div>
                                    <div className="field d-flex align-items-center">
                                    <input type="number" className="input-max"  />
                                    </div>
                                    <div className="currency ps-1">USD</div>
                                </div>
                                
                               
                                </div>
                            </div>
                            </div>
                            {/* /.filter-block */}
                        </div>
                        </div>
                        
                        <div className="row">
                        <div className="col-xl-2 m-auto">
                            <a href="#" className="btn-ten fw-500 text-white w-100 text-center tran3s mt-30 md-mt-10">Apply Filter</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.filter header */}
                </div>
                </div>
                {/* /.filter-area-tab */}
            </div>
            <div className="col-12">
                <div className="job-post-item-wrapper">
                <div className="upper-filter d-flex justify-content-between align-items-center mb-25 mt-70 lg-mt-40">
                    <div className="total-job-found">All <span className="text-dark">7,096</span> jobs found</div>
                    {/* <div className="d-flex align-items-center">
                    <div className="short-filter d-flex align-items-center">
                        <div className="text-dark fw-500 me-2">Short:</div>
                        <select className="nice-select">
                        <option value={0}>Latest</option>
                        <option value={1}>Category</option>
                        <option value={2}>Job Type</option>
                        </select>
                    </div>
                    <button className="style-changer-btn text-center rounded-circle tran3s ms-2 list-btn" title="Active List"><i className="bi bi-list" /></button>
                    <button className="style-changer-btn text-center rounded-circle tran3s ms-2 grid-btn active" title="Active Grid"><i className="bi bi-grid" /></button>
                    </div> */}
                </div>
                {/* /.upper-filter */}
                <div className="accordion-box list-style show">
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_22.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Developer &amp; expert in java c++</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$22k-$30k</span> / year . Expert</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">Spain, Bercelona</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Developer,</a>
                            <a href="job-details-v2.html">Coder,</a>
                            <a href="job-details-v2.html">Design</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>/assets/images/
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_23.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Animator &amp; Expert in maya 3D </a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$300-$500</span> / week . Expert</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">USA, New York</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Artist,</a>
                            <a href="job-details-v2.html">Animation,</a>
                            <a href="job-details-v2.html">Design</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                            <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_24.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Marketing Specialist in SEO &amp; SMM</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$1k-$1.5k</span> / month . Beginner</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">USA, Alaska</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Design,</a>
                            <a href="job-details-v2.html">Artist</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */} 
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_25.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Developer &amp; expert in java c++</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$250-$300</span> / week . Expert</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">USA, California</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Application,</a>
                            <a href="job-details-v2.html">Dev</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_26.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Lead &amp; Product Designers.</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$35k-$40k</span> / year . Beginner</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">UK, London</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Design,</a>
                            <a href="job-details-v2.html">Product</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_33.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Email Marketing &amp; App Integrations</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$10-$15</span> / hour . Intermediate</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">USA, California</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Application,</a>
                            <a href="job-details-v2.html">Developer,</a>
                            <a href="job-details-v2.html">Email</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_34.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Outbound Call Service Web shop </a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$3k-$4k</span> / month . Expert</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">UK, London</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Finance,</a>
                            <a href="job-details-v2.html">Business,</a>
                            <a href="job-details-v2.html">Account</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_22.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Build Responsive Website From Scratch</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$20-$25</span> / hour . Intermediate</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">USA, California</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Application,</a>
                            <a href="job-details-v2.html">Web Design,</a>
                            <a href="job-details-v2.html">Code</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_23.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">Document typing (easy typing)</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$200-$250</span> / week . Beginner</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">Germany, Hamburg</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Article,</a>
                            <a href="job-details-v2.html">Data Entry,</a>
                            <a href="job-details-v2.html">Design</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                    <div className="job-list-one style-two position-relative border-style mb-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                            <a href="job-details-v2.html" className="logo md-mb-20"><img src="/assets/images/logo/media_24.png" alt className="lazy-img m-auto" /></a>
                            <a href="job-details-v2.html" className="title fw-500 tran3s ps-3 ps-lg-0">General Ledger &amp; Marketing Specialist</a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a>
                        <div className="job-salary"><span className="fw-500 text-dark">$60k-$70k</span> / year . Expert</div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                        <div className="job-location xs-mt-10">
                            <a href="job-details-v2.html">UK, London</a>
                        </div>
                        <div className="job-category">
                            <a href="job-details-v2.html">Finance,</a>
                            <a href="job-details-v2.html">Business,</a>
                            <a href="job-details-v2.html">Account</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                        <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                            {/* <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s me-3" title="Save Job"><i className="bi bi-bookmark-dash" /></a> */}
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.job-list-one */}
                </div>
                <div className="accordion-box grid-style">
                    <div className="row">
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_22.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Lead designer &amp; expert in maya 3D</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$300-$450</span> / Week</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">USA, California</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_23.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500 part-time">Part-time</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Developer &amp; expert in c++ &amp; java.</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$10-$15</span> / Hour</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">USA, Alaska</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_24.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500 part-time">Part-time</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Marketing specialist in SEO &amp; Affiliate. </a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$40k</span> / Yearly</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">AUS, Sydney</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_25.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Lead &amp; Product &amp; Web Designer.</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$2k-3k</span> / Month</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">UAE, Dubai</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_26.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Hotel Manager with PHD in Hms.</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$40k-$60k</span> / Year</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">UK, London</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_33.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500 part-time">Part-time</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Interactive Designer.</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$30-$35</span> / Hour</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">Milan, Italy</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_34.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500 part-time">Part-time</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Accountant Bookkeeper Financial Reporting</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$300-$450</span> / Week</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">US, Alaska</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_35.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Personal assistants/ ARC readers needed</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$2000</span> / Month</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">Rome, Italy</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_36.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500">Fulltime</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Hotel Manager with PHD in Hms.</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$40k-$60k</span> / Year</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">US, New York</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_37.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500 part-time">Part-time</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Amazon Product Research</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$15-$20</span> / Hour</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">Germany, Hamburg</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_23.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500 part-time">Part-time</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Developer &amp; expert in c++ &amp; java.</a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$10-$15</span> / Hour</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">USA, Alaska</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    <div className="col-lg-4 mb-30">
                        <div className="job-list-two style-two position-relative">
                        <a href="job-details-v2.html" className="logo"><img src="/assets/images/logo/media_24.png" alt className="lazy-img m-auto" /></a>
                        <a href="job-details-v2.html" className="save-btn text-center rounded-circle tran3s" title="Save Job"><i className="bi bi-bookmark-dash" /></a>
                        <div><a href="job-details-v2.html" className="job-duration fw-500 part-time">Part-time</a></div>
                        <div><a href="job-details-v2.html" className="title fw-500 tran3s">Marketing specialist in SEO &amp; Affiliate. </a></div>
                        <div className="job-salary"><span className="fw-500 text-dark">$40k</span> / Yearly</div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="job-location"><a href="job-details-v2.html">AUS, Sydney</a></div>
                             <Link to= {JobdetailsPath} className="apply-btn text-center tran3s">APPLY</Link>
                        </div>
                        </div> {/* /.job-list-two */}
                    </div>
                    </div>
                </div>
                {/* /.accordion-box */}
                <div className="pt-30 lg-pt-20 d-sm-flex align-items-center justify-content-between">
                    <p className="m0 order-sm-last text-center text-sm-start xs-pb-20">Showing <span className="text-dark fw-500">1 to 20</span> of <span className="text-dark fw-500">7,096</span></p>
                    <ul className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none">
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li>....</li>
                    <li className="ms-2"><a href="#" className="d-flex align-items-center">Last <img src="/assets/images/icon/icon_50.svg" alt className="ms-2" /></a></li>
                    </ul>
                </div>
                </div>
                {/* /.job-post-item-wrapper */}
            </div>
            {/* /.col- */}
            </div>
        </div>
</section>
</div>
    </div>
  )
}
