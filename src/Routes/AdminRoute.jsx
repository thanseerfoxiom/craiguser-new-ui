import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header1 from '../Layout/Header1'
import Footer1 from '../Layout/Footer1'
import { BasePath } from '../utils/Constants'
import Header2 from '../Layout/Header2'

export default function AdminRoute() {
  const [mainloading,setMainloading]=useState(true)
  const location = useLocation();
  const [headpath,setheadpath]=useState(location.pathname)
  useEffect(() => {
    
    setMainloading(true)
    return () => clearTimeout(timeoutId);
  }, [])
  const timeoutId = setTimeout(() => {
    setMainloading(false)
  }, 1000);
  
  useEffect(() => {
      setheadpath(location.pathname);
  }, [location.pathname]);

  return (
    <div>
        
      	<div className="main-page-wrapper">
          {/* Loadin theme starts */}
         {mainloading? <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="icon"><img src="/assets/images/logo/C.png" alt className="m-auto d-block" width={100} /></div>
            <div className="txt-loading">
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="R" className="letters-loading">
                R
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="G" className="letters-loading">
                G
              </span>
             
            </div>
          </div>
        </div>:""}
        {/* Loading theme end */}
        {headpath===BasePath?
        <Header1/>:
        <Header2/>
        }
        
        <Outlet/>
        <Footer1/>
        <button className="scroll-top">
          <i className="bi bi-arrow-up-short" />
        </button>
        </div>
    </div>
  )
}
