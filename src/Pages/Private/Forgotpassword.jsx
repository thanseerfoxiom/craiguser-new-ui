import React from 'react'

export default function Forgotpassword() {
  return (
    <div>
         <div className="container">
        <div className="user-data-form modal-content d-flex flex-column justify-content-center align-items-center h-100">
         
          <div className="text-center">
            <h2 className='mb-4'>Forgot Your Password!</h2>
            <p>Send Reset Link to your email</p>
          </div>
          <div className="form-wrapper m-auto ">
            <form action="#" className="mt-10">
              <div className="row">
                <div className="col-12">
                 
                </div>
                <div className={`col-12  `} >
                  <div className="input-group-meta position-relative mb-20">
                    <label>Email*</label>
                    <input type="test" placeholder="Enter email"  />
                    <span className="placeholder_icon"></span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                    {/* <div>
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Keep me logged in</label>
                    </div> */}
  
                  </div> {/* /.agreement-checkbox */}
                </div>
                <div className="col-12">
                  <button type='button' className={`btn-eleven fw-500 tran3s d-block mt-20`}>Send</button>
                  
                </div>
              </div>
            </form>
            <div className="d-flex align-items-center mt-30 mb-10">
              <div className="line" />
              {/* <span className="pe-3 ps-3">OR</span> */}
              <div className="line" />
            </div>
            <div className="row">
              
              
            </div>
            <p className="text-center mt-10">Remember your passwod? <a href="signup.html" className="fw-500">Sign in</a></p>
          </div>
          {/* /.form-wrapper */}
        </div>
        {/* /.user-data-form */}
      </div>
    </div>
  )
}
