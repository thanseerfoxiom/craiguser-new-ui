import React, { useEffect, useState } from 'react'

export default function Scorehistory() {

    const [ userdetail,setuserdetail]=useState([])
    const [ history,sethistory]=useState([])
    const [ newhistory,setnewhistory]=useState([])
    const [year,setyear]=useState(String(new Date().getFullYear()))

    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    useEffect(()=>{
        window.scrollTo(0,0)
        getHistory()
    },[userdetail]);
    useEffect(()=>{
      historySortHandler()
    },[year,history])
    const getHistory=async()=>{
        try {
            // let data =await Axioscall("get",`${tempscoreapi}/${userdetail._id}`)
            console.log("data",data.data.data)
            if(data.status===200){
                sethistory(data.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const historySortHandler = () => {
      let data = history.filter(t => {
        // console.log("yeaaar ", year);
        // console.log("new Date(t.updatedAt).getFullYear()", new Date(t.updatedAt).getFullYear().toString());
        return new Date(t.updatedAt).getFullYear().toString() === year;
      });
      setnewhistory(data)
    };
    const attendanceHandler=(value)=>{
        let data = ""
      if(value==="platinum"){
        data = "platinum(95% - 100%)"
      }else if(value==="gold"){
        data = "gold(90% - 95%)"
      }else if(value==="silver"){
        data = "silver(80% - 90%)"
      }else if(value==="bronze"){
        data = "bronze(Below 80%)"
      }else{
        data =""
      }
      return data
    }
    const ratingHandler=(value)=>{
        let data = 0
        if(value==="platinum"){
          data = "Platinum(10 Rating)"
        }else if(value==="gold"){
          data = "Gold(7-9 Rating)"
        }else if(value==="silver"){
          data = "Silver(4-6 Rating)"
        }else if(value==="bronze"){
          data = "Bronze(1-3 Rating)"
        }else{
          data =""
        }
        // console.log("attandance dara",data)
        return data
      }
  const startYear = 2020;
  const endYear = new Date().getFullYear();
  const years = Array.from({ length: endYear - startYear }, (_, index) => endYear - index);
  const colorHandler=(value)=>{
    let color = 0
    if(value==="platinum"){
      color = "#BEBEBE"
    }else if(value==="gold"){
      color = "gold"
    }else if(value==="silver"){
      color = "#808080 "
    }else if(value==="bronze"){
      color = "#b08d57"
    }else{
      color =""
    }
    // console.log("attandance dara",color)
    return color
  }
  // console.log("historyu",history)
  // console.log("newhistoryu",newhistory)
  const scorevalue =(itm,value)=>{
    if(history.length){
      let data=""
      if(value==="attendance"){
        data = newhistory.filter((t)=>moment(t.updatedAt).format('MMM').includes(itm))
        if(data.length){
          data= data[0].attendance
        }
      }else if(value==="perfomance"){
        data = newhistory.filter((t)=>moment(t.updatedAt).format('MMM').includes(itm))
        if(data.length){
          data= data[0].perfomance
        }
      }
      const month = moment(data.updatedAt).format('MMM');
      // console.log("monthhhhhh",month)
      if(month.includes(itm)){
        return data?.value??""
      }else{
        return ""
      } 
    }  
  }
  // console.log("yerrrr",year)
  const workHandler=(itm,value)=>{
    if(history.length){
      let data=""
      if(value==="managerPost"){
        data = newhistory.filter((t)=>moment(t.updatedAt).format('MMM').includes(itm))
        if(data.length){
          if(data[0].managerPost.value){
            data= "rgb(91, 252, 94)"
          }
          
        }

      }else if(value==="extraWork"){
        data = newhistory.filter((t)=>moment(t.updatedAt).format('MMM').includes(itm))
        if(data.length){
          if(data[0].extraWork.value ==="normally"){
            data= "rgb(91, 252, 94)"
          }else if(data[0].extraWork.value ==="highlyCommitted"){
            data= "rgb(255 149 74)"
          }
          
        }
      }

      return data
    }
  }
    
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
        <main className="main notification-container">
  <div className="carousel-inner">
  </div>
  <div className="container mb-40  ">
    <div className="row  mt-40">
      <div className="col-lg-12 right margin-top notification-content">
        {/* <h4 className="m-b-50 heading-line mb-40">Score History</h4> */}
        {/* <button onClick={()=>{ return navigate(-1)}} type="button" className="btn btn-primary btn-sm shadow-none"  style={{ marginRight:"10px"}}>
                                                <i className="bx bx-arrow-back font-size-16 align-middle me-2"></i> Back
                                            </button> */}
        <div className="box shadow-sm rounded bg-white mb-3">
          <div className="box-title border-bottom p-3">
            <h6 className="m-0">Score History</h6>
          </div>
           <div className="box-body p-3">
           <div  className="p-3  bg-light border-bottom osahan-post-header ">
            <div className='d-flex'>
            <label htmlFor="yearpicker " className='yearpicker'>Select a Year :</label>
            <div className="year-picker-container ">
            {/* <label htmlFor="yearpicker">Select a Year:</label> */}
            <select id="yearpicker" onChange={(e)=>setyear(e.target.value)} value={year} className="year-picker-select">
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
            </div>
            <h6>Attendance</h6>
                <div className='row  mt-2'>
                  <div className='col-12 col-md-8' >             
                  <div className='calender'>
                  <div className='mt-2 '>
                    <span className='justify-content-center align-items-center d-flex pt-1 date_calender'>{year}</span>
                  </div>
                 <div className='p-2'>
                <ul>
                {months.map((itm,k)=>(
                  <li  style={{backgroundColor:`${colorHandler(scorevalue(itm,"attendance"))}`}} className='justify-content-center align-items-center'>{itm}</li>
                      ))}
                </ul>
              </div>
                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#BEBEBE"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; 95% to 100%</span></div>
                    
                  </div>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor: "gold"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; 90% to 95%</span></div>
                    
                  </div>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#808080 "}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; 80% to 90%</span></div>
                    
                  </div>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#b08d57"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; Below 80%</span></div>
                    
                  </div>
                  </div>
                </div>
            <h6 className='mt-3'>Performance</h6>
                <div className='row  mt-2'>
                  <div className='col-12 col-md-8' >             
                  <div className='calender'>
                  <div className='mt-2 '>
                    <span className='justify-content-center align-items-center d-flex pt-1 date_calender'>{year}</span>
                  </div>
                 <div className='p-2'>
                <ul>
                {months.map((itm,k)=>(
                  <li  style={{backgroundColor:`${colorHandler(scorevalue(itm,"perfomance"))}`}} className='justify-content-center align-items-center'>{itm}</li>
                      ))}
                </ul>
              </div>
                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#BEBEBE"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; 10 Rating</span></div>
                    
                  </div>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor: "gold"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; 7 to 9 Rating</span></div>
                    
                  </div>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#808080 "}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; 4 to 6 Rating</span></div>
                    
                  </div>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#b08d57"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; 1 to 3 Rating</span></div>
                    
                  </div>
                  </div>
                </div>
            <h6 className='mt-3'>Extra Work</h6>
                <div className='row  mt-2'>
                  <div className='col-12 col-md-8' >             
                  <div className='calender'>
                  <div className='mt-2 '>
                    <span className='justify-content-center align-items-center d-flex pt-1 date_calender'>{year}</span>
                  </div>
                 <div className='p-2'>
                <ul>
                {months.map((itm,k)=>(
                  <li  style={{backgroundColor:workHandler(itm,"extraWork")}} className='justify-content-center align-items-center'>{itm}</li>
                      ))}
                </ul>
              </div>
                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#5BFC5E"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; Committed</span></div>
                    
                  </div>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor: "rgb(255 149 74)"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; Highly Committed</span></div>
                    
                  </div>
                
                  </div>
                </div>
            <h6 className='mt-3'>Manager Post</h6>
                <div className='row  mt-2'>
                  <div className='col-12 col-md-8' >             
                  <div className='calender'>
                  <div className='mt-2 '>
                    <span className='justify-content-center align-items-center d-flex pt-1 date_calender'>{year}</span>
                  </div>
                 <div className='p-2'>
                <ul>
                {months.map((itm,k)=>(
                  <li  style={{backgroundColor:workHandler(itm,"managerPost")}} className='justify-content-center align-items-center'>{itm}</li>
                      ))}
                </ul>
              </div>
                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor:"#5BFC5E"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; Taken</span></div>
                    
                  </div>
                  {/* <div className='d-flex m-2'>
                    <div className='radious mt-1' style={{backgroundColor: "#FE3939"}}></div>
                    <div><span className='font-bold'>&nbsp; - &nbsp; Not Taken</span></div>
                    
                  </div> */}
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
