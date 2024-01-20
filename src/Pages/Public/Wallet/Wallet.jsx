import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Wallet() {
    const [walletpointdata,setwalletpointdata]=useState([])
    const [creditdata,SetCreditdata]=useState([])
    const [debitdata,SetDebitdata]=useState([])
    const [pages, setpages] = useState({
        page : 1 ,
        limit : 10 ,
    })
    const [pagination, setpagination] = useState({
        isNext : false ,
        isPrev : false 
    })
  return (
    <div>
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
         <main className="main notification-container  mt-2">
    <div className="carousel-inner ">
    </div>
    <div className="wallet-container mb-80  ">
      <div className="row  ">
      <div className="row wallet-container">
  <div className="col-12">
    <div className="card1">
      
    <div className="card1-body border-top ">
    <h4 className="card1-title my-1">Wallet Balance </h4>
        <div className="row">
          <div className="col-sm-8">
            <div>
              <p className="fw-medium mb-2">Coins :</p>
              <div className="d-flex">
              <i className="mdi mdi-currency-usd-circle coinclr" />
               <span className="align-self-center " style={{fontWeight:"500",fontSize:"20px"}}>&nbsp;{walletpointdata?.amount??""}500</span>
              </div>
              {/* <h4><i class="mdi mdi-currency-usd-circle coinclr"></i>&nbsp;{walletdata?.amount??""}</h4> */}
            </div>
          </div>
          <div className='col-sm-4'>
          <div className="text-center">
          <Link  to="/" className="btn btn-warning me-2 w-md">Recharge</Link>
        </div>
          </div>        
        </div>
      </div>
      <div className="card1-body mt-4">
     <div className="col-12">
  <div className="card1">
    <div className="card1-body">      
      <ul className="nav nav-pills bg-light rounded" role="tablist">
        <li className="nav-item">
          <a className="nav-link-recharge btn-one active " data-bs-toggle="tab" href="#transactions-credit-tab" onClick={()=> setpagination({isNext:false,isPrev:false})} role="tab">Credit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link-recharge btn-one " data-bs-toggle="tab" href="#transactions-debit-tab" onClick={()=> setpagination({isNext:false,isPrev:false})} role="tab">Debit</a>
        </li>
      </ul>
      <div className="tab-content mt-4">
        <div className="tab-pane active" id="transactions-credit-tab" role="tabpanel">
          <div className="table-responsive" data-simplebar style={{maxHeight: 330}}>
            <table className="table align-middle table-nowrap">
              <tbody>
                {creditdata.length?creditdata.map((credititem,k)=>(
                   <tr>
                   <td style={{width: 50,verticalAlign:"middle"}} >
                     <div className="font-size-22 text-primary " style={{fontSize: "25px"}}>
                       {/* <i className="bx bx-down-arrow-circle  " /> */}
                       <img src="/assets/images/icon/icon_68.svg" alt className="lazy-img" />
                     </div>
                   </td>
                   <td>
                     <div>
                       <h5 className="font-size-18 mb-1 ">Credited </h5>
                       <p className="text-muted font-size-18 mb-0">{moment(credititem?.updatedAt??'').format("DD MMM, YYYY")}</p>
                     </div>
                   </td>
                   <td style={{verticalAlign: "middle"}} >
                     <div className="text-start " >
                       <h5 className="font-size-18 mb-0  ">{(credititem?.payment_amount??0)*(credititem?.one_rupee_coin??"")}&nbsp;Coins</h5>
                     </div>
                   </td>
                   <td style={{verticalAlign: "middle"}}>
                     <div className="text-center">
                       <h5 className="font-size-18 mb-0">₹ {credititem?.payment_amount??0}</h5>
                     </div>
                   </td>
                 </tr>
                ))
                :
                // <tr>
                //   <td>
                //   <div className="text-center">
                //        <h5 className="font-size-18 text-muted mb-0">No Credits Found</h5>
                //      </div>
                //   </td>
                //   </tr>
                <tr>
                   <td style={{width: 50,verticalAlign:"middle"}} >
                     <div className="font-size-22 text-primary " style={{fontSize: "20px"}}>
                     <img src="/assets/images/icon/crediticon.png" style={{width:"75%"}} alt className="lazy-img" />
                     </div>
                   </td>
                   <td>
                     <div>
                       <h5 className="font-size-18 mb-1">Credited </h5>
                       <p className="text-muted font-size-14 mb-0">12 DEC, 2023</p>
                     </div>
                   </td>
                   <td style={{verticalAlign: "middle"}} >
                     <div className="text-start " >
                       <h5 className="font-size-18 mb-0  ">500&nbsp;Coins</h5>
                     </div>
                   </td>
                   <td style={{verticalAlign: "middle"}}>
                     <div className="text-center">
                       <h5 className="font-size-18 mb-0">₹ 500</h5>
                     </div>
                   </td>
                 </tr>
                  }
               
              </tbody>
            </table>
          </div>
          {
            !pagination.isNext && !pagination.isPrev ? '' :
            <div className="row mt-4" style={{ float:"right"}}>
            <nav aria-label="Page navigation example" >
                <ul className="pagination">

                {/* <li className="page-item"><a className="page-link" href="#" >Previous</a></li> */}
                {
                  pagination.isPrev ? 
                  <li className="page-item"><a className="page-link" href="#" onClick={(e)=>{e.preventDefault();setpages({...pages , page : pages.page - 1 })}}>Prev</a></li> : <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                }

                {
                  pagination.isNext ? 
                  <li className="page-item shadow-none"><a className="page-link shadow-none" href="#" onClick={(e)=>{e.preventDefault();setpages({...pages , page : pages.page + 1 })}}>Next</a></li> : <li className="page-item"><a className="page-link" href="#">Next</a></li>
                }
        
                    
                </ul>
            </nav>
            </div>

          }
        </div>
        <div className="tab-pane" id="transactions-debit-tab" role="tabpanel">
          <div className="table-responsive" data-simplebar style={{maxHeight: 330}}>
            <table className="table align-middle table-nowrap">
              <tbody>
                {debitdata.length?debitdata.map((debititem,k)=>(
                   <tr key={k}>
                   <td style={{width: 50,verticalAlign:"middle"}}>
                     <div className="font-size-22 text-danger" style={{fontSize: "25px"}}>
                       <i className="bx bx-up-arrow-circle" />
                     </div>
                   </td>
                   <td>
                     <div>
                       <h5 className="font-size-18 mb-1">Debited</h5>
                       <p className="text-muted mb-0">{moment(debititem?.updatedAt??'').format("DD MMM, YYYY")}</p>
                     </div>
                   </td>
                   <td style={{verticalAlign: "middle"}}>
                     <div className="text-center">
                       <h5 className="font-size-18 mb-0">{debititem?.service_data?.name}</h5>
                     </div>
                   </td>
                   <td style={{verticalAlign: "middle"}}>
                     <div className="text-center">
                       <h5 className="font-size-18  mb-0">{debititem?.purchased_bonus_price??0}&nbsp; Coins</h5>
                     </div>
                   </td>
                 </tr>
                ))
                
                :
                // <tr>
                // <td>
                // <div className="text-center">
                //      <h5 className="font-size-18 text-muted mb-0">No Debits Found</h5>
                //    </div>
                // </td>
                // </tr>
                <tr>
                <td style={{width: 50,verticalAlign:"middle"}} >
                  <div className="font-size-22 text-primary " style={{fontSize: "20px"}}>
                  <img src="/assets/images/icon/debiticon.png" style={{width:"75%"}} alt className="lazy-img" />
                  </div>
                </td>
                <td>
                  <div>
                    <h5 className="font-size-18 mb-1">Debited </h5>
                    <p className="text-muted font-size-14 mb-0">12 DEC, 2023</p>
                  </div>
                </td>
                <td style={{verticalAlign: "middle"}} >
                  <div className="text-start " >
                    <h5 className="font-size-18 mb-0  ">500&nbsp;Coins</h5>
                  </div>
                </td>
                <td style={{verticalAlign: "middle"}}>
                  <div className="text-center">
                    <h5 className="font-size-18 mb-0">₹ 500</h5>
                  </div>
                </td>
              </tr>
                }
               
              </tbody>
            </table>
          </div>
          {
            !pagination.isNext && !pagination.isPrev ? '' :
            <div className="row mt-4" style={{ float:"right"}}>
            <nav aria-label="Page navigation example" >
                <ul className="pagination">

                {/* <li className="page-item"><a className="page-link" href="#" >Previous</a></li> */}
                {
                  pagination.isPrev ? 
                  <li className="page-item"><a className="page-link" href="#" onClick={(e)=>{e.preventDefault();setpages({...pages , page : pages.page - 1 })}}>Prev</a></li> : <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                }

                {
                  pagination.isNext ? 
                  <li className="page-item shadow-none"><a className="page-link shadow-none" href="#" onClick={(e)=>{e.preventDefault();setpages({...pages , page : pages.page + 1 })}}>Next</a></li> : <li className="page-item"><a className="page-link" href="#">Next</a></li>
                }
        
                    
                </ul>
            </nav>
            </div>

          }
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
 
</div>
      </div>
    </div>
  
  </main>
    </div>
  )
}
