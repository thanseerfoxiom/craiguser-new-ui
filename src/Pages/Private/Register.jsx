import React, { useState ,useRef} from 'react'
import Header1 from '../../Layout/Header1'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from "react-select";
import { Form } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { ProfilePath } from '../../utils/Constants';
const animatedComponents = makeAnimated();
export default function Register() {
    const [selectedskills, setselectedskills] = useState("");
  const [employeedata, setemployeedata] = useState([]);
  const [employeedata2, setemployeedata2] = useState([]);
  const [employeedata3, setemployeedata3] = useState([]);
  const [carddata, setcarddata] = useState([]);
  const [addressproof, setaddressproof] = useState("");
  const [addressdata, setaddressdata] = useState([]);
  const [currentaddressdata, setcurrentaddressdata] = useState([]);
  const [siblingdata, setsiblingdata] = useState("");
  const [siblingsarray, setsiblingsarray] = useState([]);
  const [childdata, setchilddata] = useState("");
  const [childsarray, setchildsarray] = useState([]);
  const [spousedata, setspousedata] = useState("");
  const [tenthdata, settenthdata] = useState([]);
  const [twelthdata, settwelthdata] = useState([]);
  const [bachlerdata, setbachlerdata] = useState([]);
  const [masterDegreedata, setmasterDegreedata] = useState([]);
  const [additionaldata, setadditionaldata] = useState("");
  const [additionalarray, setadditionalarray] = useState([]);
  const [precompanydata, setprecompanydata] = useState("");
  const [precompanyarray, setprecompanyarray] = useState([]);
  const [companydata, setcompanydata] = useState("");
  const [companyarray, setcompanyarray] = useState([]);
  const [validated, setValidated] = useState(false);
  const [validated2, setValidated2] = useState(false);
  const [validated3, setValidated3] = useState(false);
  const [validated4, setValidated4] = useState(false);
  const [wizard, setWizard] = useState(1);
  const [load, setload] = useState(false);
  const [windowcompany, setwindowcompany] = useState(true);
  const [presentcompany, setpresentcompany] = useState(false);
  const [othercompany, setothercompany] = useState(false);
  const [companyvalues, setcompanyvalues] = useState([]);
  const [selectedwritelanguage, setselectedwritelanguage] = useState([]);
  const [selectedreadlanguage, setselectedreadlanguage] = useState([]);
  const debounceDelay = 500;
  const abortControllerRef = useRef(null); // Reference to the AbortController
  const [languagevalid, setlanguagevalid] = useState({
    read: true,
    write: true,
  });
  const companys = companyvalues.map((itm) => ({
    value: itm.name,
    label: itm.name,
  }));
  const location = useLocation();
  const obj = location.state || {};
  const navigte = useNavigate();
  const inputemail = useRef(false);
  const [emailverify, setemailverify] = useState({
    otp: "",
    valid: false,
    modal: false,
  });
  const [phoneverify, setphoneverify] = useState({
    otp: "",
    valid: false,
    modal: false,
  });
  const presentcompanylist =
    precompanyarray.filter((t) => t.to === "Present") ?? [];


    // for error fixing/...........................
    const [boardoptions,setboardoptions]=useState([])
  return (
    <div class="dashboard-body m-0  pt-4" >
        <h4 className="dash-title-three  ">Register Your Profile </h4>
        <div className='text-center'>
        <ul id="progressbar">
                          <li
                            className="active"
                            onClick={() =>
                              window.location.pathname != "/employeeregister"
                                ? setWizard(1)
                                : ""
                            }
                            id="account"
                          >
                            <strong className="wizardtext">Personal</strong>
                          </li>
                          <li
                            id="personal"
                            onClick={() =>
                              window.location.pathname != "/employeeregister"
                                ? setWizard(2)
                                : ""
                            }
                            className={wizard === 1 ? "" : "active"}
                          >
                            <strong className="wizardtext">Address</strong>
                          </li>
                          <li
                            id="payment"
                            onClick={() =>
                              window.location.pathname != "/employeeregister"
                                ? setWizard(3)
                                : ""
                            }
                            className={
                              wizard === 2 || wizard === 1 ? "" : "active"
                            }
                          >
                            <strong className="wizardtext">Education</strong>
                          </li>
                          <li
                            id="career"
                            onClick={() =>
                              window.location.pathname != "/employeeregister"
                                ? setWizard(4)
                                : ""
                            }
                            className={
                              wizard === 2 || wizard === 1 || wizard === 3
                                ? ""
                                : "active"
                            }
                          >
                            <strong className="wizardtext">Experience</strong>
                          </li>
                          <li
                            id="confirm"
                            className={wizard === 5 ? "active" : ""}
                          >
                            <strong className="wizardtext">Finish</strong>
                          </li>
                        </ul>
        </div>
                               
        
			<div class="position-relative">
        
			<div className="bg-white card-box border-20">
            {wizard === 1 ? (
  <Form action="#">
  
                           
                   
                            <fieldset>
                              <div className="form-card row">
                                <div className="row">
                                  <div className="col-12">
                                  <h4 className="dash-title-three">Personal Information</h4>
                                  </div>
                                </div>
                                <div className="dash-input-wrapper mb-20 col-md-4 ">
                                  <label
                                    className="form-label"
                                    htmlFor="input-1"
                                  />
                                  <input
                                    // onChange={(e) =>
                                    //   setemployeedata({
                                    //     ...employeedata,
                                    //     firstName: e.target.value,
                                    //   })
                                    // }
                                    // value={employeedata.firstName ?? ""}
                                    className="form-control"
                                    id="input-1"
                                    type="text"
                                    required
                                    name="Full Name "
                                    placeholder="First Name "
                                  />
                                  {/* <Form.Control.Feedback type="invalid">
                                    Please provide FirstName
                                  </Form.Control.Feedback> */}
                                </div>

                                <div className="dash-input-wrapper mb-20 col-md-4 ">
                                  <label
                                    className="form-label"
                                    htmlFor="input-1"
                                  />
                                  <input
                                    // onChange={(e) =>
                                    //   setemployeedata({
                                    //     ...employeedata,
                                    //     middleName: e.target.value,
                                    //   })
                                    // }
                                    // value={employeedata.middleName ?? ""}
                                    className="form-control"
                                    id="input-1"
                                    type="text"
                                    name="fullname"
                                    placeholder="Middile Name"
                                  />
                                </div>
                                <div className="dash-input-wrapper mb-20 col-md-4 ">
                                  <label
                                    className="form-label"
                                    htmlFor="input-1"
                                  />
                                  <input
                                    className="form-control"
                                    id="input-1"
                                    type="text"
                                    required
                                    // onChange={(e) =>
                                    //   setemployeedata({
                                    //     ...employeedata,
                                    //     lastName: e.target.value,
                                    //   })
                                    // }
                                    // value={employeedata.lastName ?? ""}
                                    name="fullname"
                                    placeholder="Last Name"
                                  />
                                  {/* <Form.Control.Feedback type="invalid">
                                    Please provide Last Name
                                  </Form.Control.Feedback> */}
                                </div>

                                <div className="dash-input-wrapper mb-20 mt-4 col-md-4 ">
                                  <label className="fieldlabels font-sm color-text-mutted">
                                    dob
                                  </label>
                                  <input
                                    className="dob"
                                    required
                                    // onChange={(e) =>
                                    //   calculateAge(e.target.value)
                                    // }
                                    // value={employeedata.dob ?? ""}
                                    placeholder="Date of Birth"
                                    type="date"
                                    id="date"
                                  />
                                  {/* <Form.Control.Feedback type="invalid">
                                    Please provide dob
                                  </Form.Control.Feedback> */}
                                </div>
                                <div className="dash-input-wrapper mb-20 mt-4 col-md-4">
                                  <label
                                    className="form-label "
                                    htmlFor="input-2"
                                  />
                                  <input
                                    // className={`form-control mt-1 ${
                                    //   employeedata.email
                                    //     ? emailverify.valid
                                    //       ? ""
                                    //       : "is-invalid"
                                    //     : ""
                                    // }`}
                                    ref={inputemail}
                                    id="input-2"
                                    type="email"
                                    // onBlur={() => emailVerification()}
                                    // onChange={(e) =>
                                    //   setemployeedata({
                                    //     ...employeedata,
                                    //     email: e.target.value,
                                    //   })
                                    // }
                                    // value={employeedata.email ?? ""}
                                    required
                                    name="emailaddress"
                                    placeholder="stevenjob@gmail.com"
                                  />
                                  {/* <Form.Control.Feedback type="invalid">
                                    Please Verify Your email
                                  </Form.Control.Feedback> */}
                                </div>
                                <div className="dash-input-wrapper mb-20 mt-4 col-md-4 ">
                                  <label
                                    className="form-label"
                                    htmlFor="input-2"
                                  />
                                  <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="IN"
                                    // disabled={phoneverify.valid}
                                    // value={employeedata.phone}
                                    // onChange={handlePhoneChange}
                                    // onBlur={() => phonenumberCheck()}
                                    style={{
                                      display: "flex",
                                      padding: "0px 0px 0px 6px",
                                    }}
                                    // className={`form-control ${
                                    //   employeedata.phone
                                    //     ? phoneverify.valid
                                    //       ? ""
                                    //       : "is-invalid"
                                    //     : ""
                                    // }`}
                                  />
                                  {/* <Form.Control.Feedback type="invalid">
                                    Please Verify Your Number
                                  </Form.Control.Feedback> */}
                                </div>

                                <h6 className="permenent-address education col-12 mb-2 ">
                                  Language Known
                                </h6>
                                <div className=" col-lg-6 ">
                                  <label className="fieldlabels font-sm color-text-mutted">
                                    Read*
                                  </label>
                                  {/* <input type="text" required  onChange={(e)=>setemployeedata({...employeedata,lngRead:e.target.value})} value={employeedata.lngRead??""}  className="form-control" placeholder=" English,hindi..." id="" /> */}
                                  <Select
                                    closeMenuOnSelect={false}
                                    // components={animatedComponents}
                                    isMulti
                                    // options={Languageoption}
                                    placeholder={<div>Select Read....</div>}
                                    // value={selectedreadlanguage}
                                    // value={Languageoption.filter(function(option) {
                                    //   return selectedreadlanguage;
                                    // })}
                                    className=""
                                    // onChange={(newcontent) => {
                                    //   setselectedreadlanguage(newcontent);
                                    // }}
                                    // onInputChange={(value)=>skillapicall(value)}
                                    // styles={
                                    //   selectedreadlanguage.length
                                    //     ? ""
                                    //     : languagevalid.read
                                    //     ? ""
                                    //     : borderStyles
                                    // }
                                  />
                                  {/* {selectedreadlanguage.length ? (
                                    ""
                                  ) : languagevalid.read ? (
                                    ""
                                  ) : (
                                    <span
                                      className="text-danger"
                                      style={{ fontSize: "13px" }}
                                    >
                                      Please provide Languages
                                    </span>
                                  )}
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Languages{" "}
                                  </Form.Control.Feedback> */}
                                </div>
                                <div className=" col-lg-6 ">
                                  <label className=" fieldlabels font-sm color-text-mutted">
                                    Write*
                                  </label>
                                  {/* <input type="text" required onChange={(e)=>setemployeedata({...employeedata,lngWrite:e.target.value})} value={employeedata.lngWrite??""}  className="form-control" placeholder="  English,hindi..." id="" /> */}
                                  <Select
                                    closeMenuOnSelect={false}
                                    // components={animatedComponents}
                                    isMulti
                                    // options={Languageoption}
                                    placeholder={<div>Select write....</div>}
                                    // value={selectedwritelanguage}
                                    className="border-danger"
                                    // onChange={(newcontent) => {
                                    //   setselectedwritelanguage(newcontent);
                                    // }}
                                    // onInputChange={(value)=>skillapicall(value)}
                                    // styles={
                                    //   selectedwritelanguage.length
                                    //     ? ""
                                    //     : languagevalid.write
                                    //     ? ""
                                    //     : borderStyles
                                    // }
                                  />
                                  {/* {selectedwritelanguage.length ? (
                                    ""
                                  ) : languagevalid.write ? (
                                    ""
                                  ) : (
                                    <span
                                      className="text-danger"
                                      style={{ fontSize: "13px" }}
                                    >
                                      Please provide Valid Languages
                                    </span>
                                  )}
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Valid Languages
                                  </Form.Control.Feedback> */}
                                </div>
                                <div className="col-md-12 mt-3 mb-3">
                                  <label className="col-sm-12 font-sm color-text-mutted">
                                    Upload Your Photo*
                                  </label>
                                  <div>
                                    {employeedata.profilePhoto ? (
                                      <span
                                        onClick={() =>
                                          Filestackhandler(
                                            "square",
                                            setemployeedata,
                                            employeedata,
                                            "profilePhoto"
                                          )
                                        }
                                      >
                                        <img
                                          src={employeedata.profilePhoto}
                                          alt="upload photo"
                                          className="profileimage_holder"
                                        />
                                      </span>
                                    ) : (
                                      <span
                                        onClick={() =>
                                          Filestackhandler(
                                            "square",
                                            setemployeedata,
                                            employeedata,
                                            "profilePhoto"
                                          )
                                        }
                                      >
                                        <img
                                          src="/assets/images/assets/image_Placeholder.jpg"
                                          alt="upload photo"
                                          className="profileimage_holder"
                                        />
                                      </span>
                                    )}
                                  </div>
                         
                                <div className="col-12 row mt-3 mb-10">
                                  <label className="col-lg-4 col-sm-6">
                                    Marital status
                                  </label>
                                  <p className="col-lg-2 col-sm-2 mari">
                                    <input
                                    //   onChange={() =>
                                    //     setemployeedata({
                                    //       ...employeedata,
                                    //       maritalStatus: "single",
                                    //     })
                                    //   }
                                    //   checked={
                                    //     employeedata.maritalStatus === "single"
                                    //       ? true
                                    //       : false
                                    //   }
                                      type="radio"
                                      id="test1"
                                      name="radio-group"
                                    />
                                    <label htmlFor="test1">Single</label>
                                  </p>
                                  <p className="col-lg-2 col-sm-2 mari">
                                    <input
                                      onChange={() =>
                                        setemployeedata({
                                          ...employeedata,
                                          maritalStatus: "married",
                                        })
                                      }
                                      checked={
                                        employeedata.maritalStatus === "married"
                                          ? true
                                          : false
                                      }
                                      type="radio"
                                      id="test2"
                                      name="radio-group"
                                    />
                                    <label htmlFor="test2">Married</label>
                                  </p>
                                  <p className="col-lg-2 col-sm-2 mari">
                                    <input
                                      onChange={() =>
                                        setemployeedata({
                                          ...employeedata,
                                          maritalStatus: "others",
                                        })
                                      }
                                      checked={
                                        employeedata.maritalStatus === "others"
                                          ? true
                                          : false
                                      }
                                      type="radio"
                                      id="test3"
                                      name="radio-group"
                                    />
                                    <label htmlFor="test3">Others</label>
                                  </p>
                                </div>
                                <h6 className="permenent-address mb-3 col-12 form-t">
                                  Family Background
                                </h6>
                                <div className='row'>
                                <div className="dash-input-wrapper mb-20 col-lg-6">
                                  <input
                                    required
                                    onChange={(e) =>
                                      setemployeedata({
                                        ...employeedata,
                                        fatherName: e.target.value,
                                      })
                                    }
                                    value={employeedata.fatherName ?? ""}
                                    type="text"
                                    className="form-control"
                                    placeholder="Father's Name"
                                    id=""
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Father Name{" "}
                                  </Form.Control.Feedback>
                                </div>
                                <div className="dash-input-wrapper mb-20 col-lg-6">
                                  <input
                                    required
                                    onChange={(e) =>
                                      setemployeedata({
                                        ...employeedata,
                                        fatherOccupation: e.target.value,
                                      })
                                    }
                                    value={employeedata.fatherOccupation ?? ""}
                                    type="text"
                                    className="form-control"
                                    placeholder="Father's Occupation"
                                    id=""
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Father Occupation{" "}
                                  </Form.Control.Feedback>
                                </div>
                                <div className="dash-input-wrapper mb-20 col-lg-6 mt-20">
                                  <input
                                    required
                                    onChange={(e) =>
                                      setemployeedata({
                                        ...employeedata,
                                        motherName: e.target.value,
                                      })
                                    }
                                    value={employeedata.motherName ?? ""}
                                    type="text"
                                    className="form-control"
                                    placeholder="Mother's Name"
                                    id=""
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Mother Name{" "}
                                  </Form.Control.Feedback>
                                </div>
                                <div className="dash-input-wrapper mb-20 col-lg-6 mt-20">
                                  <input
                                    required
                                    onChange={(e) =>
                                      setemployeedata({
                                        ...employeedata,
                                        motherOccupation: e.target.value,
                                      })
                                    }
                                    value={employeedata.motherOccupation ?? ""}
                                    type="text"
                                    className="form-control"
                                    placeholder="Mother's Occupation"
                                    id=""
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Mother Occupation{" "}
                                  </Form.Control.Feedback>
                                </div>
                                </div>
                                <h6 className="permenent-address mb-3 col-12 form-t">
                                  Sibling’s details
                                </h6>
                                {siblingsarray.length ? (
                                  <>
                                    {siblingsarray.map((itm, k) => (
                                      <React.Fragment key={k}>
                                        <div
                                          key={k}
                                          className="dash-input-wrapper mb-20 col-lg-3"
                                        >
                                          <div className="text__center">
                                            <input
                                              type="text"
                                              disabled
                                              value={itm.type}
                                              className=""
                                              placeholder="Name"
                                              id=" "
                                            />
                                          </div>
                                        </div>
                                        <div className="dash-input-wrapper mb-20 col-lg-3">
                                          <input
                                            type="text"
                                            disabled
                                            value={itm.name}
                                            className=""
                                            placeholder="Name"
                                            id=" "
                                          />
                                        </div>
                                        <div className="dash-input-wrapper mb-20 col-lg-3">
                                          <input
                                            value={itm.qualification}
                                            disabled
                                            type="text"
                                            className=""
                                            placeholder="Qualification"
                                            id=" "
                                          />
                                        </div>
                                        <div className="dash-input-wrapper mb-20 col-lg-3">
                                          <input
                                            value={itm.occupation}
                                            disabled
                                            type="text"
                                            className=""
                                            placeholder="Occupation"
                                            id=" "
                                          />
                                        </div>
                                      </React.Fragment>
                                    ))}
                                  </>
                                ) : null}
                                <div className='row'>
                                <div className="dash-input-wrapper mb-20 col-lg-3">
                                  <div className="text__center">
                                    <select
                                      onChange={(e) =>
                                        setsiblingdata({
                                          ...siblingdata,
                                          type: e.target.value,
                                        })
                                      }
                                      value={siblingdata.type ?? ""}
                                      className="nice-select"
                                    >
                                      <option value="" defaultValue="">
                                        Select
                                      </option>
                                      <option value="brother">Brother</option>
                                      <option value="sister">Sister</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="dash-input-wrapper mb-20 col-lg-3">
                                  <input
                                    type="text"
                                    required={siblingdata.type}
                                    onChange={(e) =>
                                      setsiblingdata({
                                        ...siblingdata,
                                        name: e.target.value,
                                      })
                                    }
                                    value={siblingdata.name ?? ""}
                                    className="form-control"
                                    placeholder="Name"
                                    id=" "
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Sibling name{" "}
                                  </Form.Control.Feedback>
                                </div>
                                <div className="dash-input-wrapper mb-20 col-lg-3">
                                  <input
                                    required={siblingdata.type}
                                    onChange={(e) =>
                                      setsiblingdata({
                                        ...siblingdata,
                                        qualification: e.target.value,
                                      })
                                    }
                                    value={siblingdata.qualification ?? ""}
                                    type="text"
                                    className="form-control"
                                    placeholder="Qualification"
                                    id=" "
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Sibling Qualification{" "}
                                  </Form.Control.Feedback>
                                </div>
                                <div className="dash-input-wrapper mb-20 col-lg-3">
                                  <input
                                    required={siblingdata.type}
                                    onChange={(e) =>
                                      setsiblingdata({
                                        ...siblingdata,
                                        occupation: e.target.value,
                                      })
                                    }
                                    value={siblingdata.occupation ?? ""}
                                    type="text"
                                    className="form-control"
                                    placeholder="Occupation"
                                    id=" "
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Sibling Occupation{" "}
                                  </Form.Control.Feedback>
                                </div>
                                </div>
                                <div className="line-item-property__actions col-12 row mt-3 mb-3">
                                  <button
                                    onClick={() =>
                                      pushhandler(
                                        siblingdata,
                                        setsiblingdata,
                                        siblingsarray,
                                        setsiblingsarray
                                      )
                                    }
                                    className="col-lg-2 button-form1"
                                    type="button"
                                    id="btnAdd"
                                    value="+"
                                  >
                                    Add
                                  </button>
                                  <button
                                    onClick={() =>
                                      removeHandler(
                                        siblingsarray,
                                        setsiblingsarray
                                      )
                                    }
                                    className="col-lg-2 button-form2"
                                    type="button"
                                    value="-"
                                  >
                                    Remove
                                  </button>
                                </div>
                                {employeedata.maritalStatus === "married" ? (
                                  <>
                                    <h6 className="permenent-address mb-3 col-12 form-t">
                                      Spouse details
                                    </h6>
                                 <div className='row'>


                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <div className="text__center dash-input-wrapper">
                                        <select
                                          onChange={(e) =>
                                            setspousedata({
                                              ...spousedata,
                                              type: e.target.value,
                                            })
                                          }
                                          value={spousedata.type ?? ""}
                                          className="nice-select"
                                        >
                                          <option value="" defaultValue="">
                                            Select
                                          </option>
                                          <option value="wife">Wife</option>
                                          <option value="husband">
                                            Husband
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <input
                                        type="text"
                                        required={spousedata.type}
                                        onChange={(e) =>
                                          setspousedata({
                                            ...spousedata,
                                            name: e.target.value,
                                          })
                                        }
                                        value={spousedata.name ?? ""}
                                        className="form-control"
                                        placeholder="Name"
                                        id=" "
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide Spouse name{" "}
                                      </Form.Control.Feedback>
                                    </div>
                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <input
                                        type="text"
                                        required={spousedata.type}
                                        onChange={(e) =>
                                          setspousedata({
                                            ...spousedata,
                                            qualification: e.target.value,
                                          })
                                        }
                                        value={spousedata.qualification ?? ""}
                                        className="form-control"
                                        placeholder="Qualification"
                                        id=" "
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide Spouse Qualification{" "}
                                      </Form.Control.Feedback>
                                    </div>
                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <input
                                        type="text"
                                        required={spousedata.type}
                                        onChange={(e) =>
                                          setspousedata({
                                            ...spousedata,
                                            occupation: e.target.value,
                                          })
                                        }
                                        value={spousedata.occupation ?? ""}
                                        className="form-control"
                                        placeholder="Occupation"
                                        id=" "
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide Spouse Occupation{" "}
                                      </Form.Control.Feedback>
                                    </div>
                                    </div>
                                    <h6 className="permenent-address mb-3 col-12 form-t">
                                      Child’s details
                                    </h6>
                                    {childsarray.length ? (
                                      <>
                                        {childsarray.map((itm, ck) => (
                                          <React.Fragment key={ck}>
                                            <div>
                                            <div className="dash-input-wrapper mb-20 col-lg-3">
                                              <div className="text__center">
                                                <input
                                                  type="text"
                                                  disabled
                                                  value={itm.type}
                                                  className=""
                                                  placeholder="Name"
                                                  id=" "
                                                />
                                              </div>
                                            </div>
                                            <div className="dash-input-wrapper mb-20 col-lg-3">
                                              <input
                                                type="text"
                                                disabled
                                                value={itm.name}
                                                className=""
                                                placeholder="Name"
                                                id=" "
                                              />
                                            </div>
                                            <div className="dash-input-wrapper mb-20 col-lg-3">
                                              <input
                                                value={itm.qualification}
                                                disabled
                                                type="text"
                                                className=""
                                                placeholder="Qualification"
                                                id=" "
                                              />
                                            </div>
                                            <div className="dash-input-wrapper mb-20 col-lg-3">
                                              <input
                                                value={itm.occupation}
                                                disabled
                                                type="text"
                                                className=""
                                                placeholder="Occupation"
                                                id=" "
                                              />
                                            </div>
                                            </div>
                                          </React.Fragment>
                                        ))}
                                      </>
                                    ) : null}
                                    <div className='row'>
                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <div className="text__center">
                                        <select
                                          onChange={(e) =>
                                            setchilddata({
                                              ...childdata,
                                              type: e.target.value,
                                            })
                                          }
                                          value={childdata.type ?? ""}
                                          className="nice-select "
                                        >
                                          <option value="" defaultValue="">
                                            Select
                                          </option>
                                          <option value="daughter">
                                            Daughter
                                          </option>
                                          <option value="son">Son</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <input
                                        type="text"
                                        required={childdata.type}
                                        onChange={(e) =>
                                          setchilddata({
                                            ...childdata,
                                            name: e.target.value,
                                          })
                                        }
                                        value={childdata.name ?? ""}
                                        className="form-control"
                                        placeholder="Name"
                                        id=" "
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide Child Name{" "}
                                      </Form.Control.Feedback>
                                    </div>
                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <input
                                        type="text"
                                        required={childdata.type}
                                        onChange={(e) =>
                                          setchilddata({
                                            ...childdata,
                                            qualification: e.target.value,
                                          })
                                        }
                                        value={childdata.qualification ?? ""}
                                        className="form-control"
                                        placeholder="Qualification"
                                        id=" "
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide Child Qualification{" "}
                                      </Form.Control.Feedback>
                                    </div>
                                    <div className="dash-input-wrapper mb-20 col-lg-3">
                                      <input
                                        type="text"
                                        required={childdata.type}
                                        onChange={(e) =>
                                          setchilddata({
                                            ...childdata,
                                            occupation: e.target.value,
                                          })
                                        }
                                        value={childdata.occupation ?? ""}
                                        className="form-control"
                                        placeholder="Occupation"
                                        id=" "
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide Child Occupation{" "}
                                      </Form.Control.Feedback>
                                    </div>
                                    </div>
                                    <div className="line-item-property__actions col-12 row mt-3 mb-3">
                                      <button
                                        onClick={() =>
                                          pushhandler(
                                            childdata,
                                            setchilddata,
                                            childsarray,
                                            setchildsarray
                                          )
                                        }
                                        className="col-lg-2 button-form1"
                                        type="button"
                                        id="btnAdd"
                                        value="+"
                                      >
                                        Add
                                      </button>
                                      <button
                                        onClick={() =>
                                          removeHandler(
                                            childsarray,
                                            setchildsarray
                                          )
                                        }
                                        className="col-lg-2 button-form2"
                                        type="button"
                                        value="-"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>

                              {/* <input
                                type="submit"
                                name="next"
                                onClick={() => tophandler(0, 500)}
                                className="pr-button  action-button"
                                defaultValue="Next"
                              /> */}
                              </div>
                            </fieldset>
                        
    {/* <div className="row">
      <div className="col-lg-6">
        <div className="dash-input-wrapper mb-20">
          <label htmlFor>First Name</label>
          <input type="text" placeholder="Rashed" />
        </div>

      </div>
      <div className="col-lg-6">
        <div className="dash-input-wrapper mb-20">
          <label htmlFor>Last Name</label>
          <input type="text" placeholder="Kabir" />
        </div>
       
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper mb-20">
          <label htmlFor>Email</label>
          <input type="email" placeholder="rshakbair365@gmal.com" />
        </div>
        
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper mb-20">
          <label htmlFor>Phone Number</label>
          <input type="tel" placeholder="+810 321 889 021" />
        </div>
     
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper mb-20">
          <label htmlFor>Password</label>
          <input type="password" />
          <div className="info-text d-sm-flex align-items-center justify-content-between mt-5">
            <p className="m0">Want to change the password? <a href="candidate-dashboard-settings(pass-change).html" className="fw-500">Click here</a></p>
            <a href="candidate-dashboard-settings(pass-change).html" className="fw-500 chng-pass">Change Password</a>
          </div>
        </div>
        
      </div>
    </div> */}
    <div className="button-group d-inline-flex align-items-center mt-30">
      <a href="#" className="dash-btn-two tran3s me-3 rounded-3">Save</a>
      <a href="#" className="dash-cancel-btn tran3s">Cancel</a>
    </div>	
  </Form>
   ) : null}
   {wizard === 2 ? (
                          <Form
                            noValidate
                            validated={validated2}
                            onSubmit={(e) =>
                              Check_Validation(
                                e,
                                RegsterSecondform,
                                setValidated2
                              )
                            }
                            className="reg-form contact10 "
                          >
                            <fieldset>
                              <div className="form-card">
                                <div className="row">
                                  <div className="col-12">
                                  <h4 className="dash-title-three">Address</h4>
                                  </div>
                                </div>
                                <div className="row">
                                  <h6 className="permenent-address">
                                    Permanent Address
                                  </h6>
                                  <div className="dash-input-wrapper mt-4">
                                    <input
                                      required
                                      onChange={(e) =>
                                        setaddressdata({
                                          ...addressdata,
                                          line1: e.target.value,
                                        })
                                      }
                                      value={addressdata.line1 ?? ""}
                                      type="text"
                                      className="form-control"
                                      placeholder="Address Line 1"
                                      id="pAddressLine1"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide Address{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setaddressdata({
                                          ...addressdata,
                                          line2: e.target.value,
                                        })
                                      }
                                      value={addressdata.line2 ?? ""}
                                      className="form-control"
                                      placeholder="Address Line 2"
                                      id="pAddressLine2"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide Address{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-6 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setaddressdata({
                                          ...addressdata,
                                          landmark: e.target.value,
                                        })
                                      }
                                      value={addressdata.landmark ?? ""}
                                      className="form-control"
                                      placeholder="Landmark"
                                      id="pLandmark"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide landmark{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-6 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onBlur={(e) =>
                                        zipcodeHandler(e, addressdata.zip)
                                      }
                                      onChange={(e) =>
                                        setaddressdata({
                                          ...addressdata,
                                          zip: e.target.value,
                                        })
                                      }
                                      value={addressdata.zip ?? ""}
                                      className="form-control"
                                      placeholder="Zip Code"
                                      id="pZipcode"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide valid pincode{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-4 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setaddressdata({
                                          ...addressdata,
                                          city: e.target.value,
                                        })
                                      }
                                      value={addressdata.city ?? ""}
                                      className="form-control"
                                      placeholder="City"
                                      id="pCity"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide City{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-4 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setaddressdata({
                                          ...addressdata,
                                          state: e.target.value,
                                        })
                                      }
                                      value={addressdata.state ?? ""}
                                      className="form-control"
                                      placeholder="State"
                                      id="pState"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide State{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-4 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setaddressdata({
                                          ...addressdata,
                                          country: e.target.value,
                                        })
                                      }
                                      value={addressdata.country ?? ""}
                                      className="form-control"
                                      placeholder="country"
                                      id="pCountry"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide Country{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <h6 className="mt-20">Current Address</h6>
                                  <div className="dash-input-wrapper col-lg-1 col-md-1 col-xl-1 col-sm-2 ">
                                    <input
                                      className="check "
                                      checked={
                                        employeedata2?.isCurrentsame ?? false
                                      }
                                      onChange={(e) => addressHandler(e)}
                                      type="checkbox"
                                    />
                                  </div>
                                  <div className="dash-input-wrapper col-lg-11 col-md-11 col-xl-11 col-sm-8 p-address ">
                                    <p className="p-address">
                                      Same as permanent address
                                    </p>
                                  </div>
                                  <div className="dash-input-wrapper ">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setcurrentaddressdata({
                                          ...currentaddressdata,
                                          line1: e.target.value,
                                        })
                                      }
                                      value={currentaddressdata.line1 ?? ""}
                                      className="form-control"
                                      placeholder="Address Line 1"
                                      id="curAddressLine1"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide Address{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setcurrentaddressdata({
                                          ...currentaddressdata,
                                          line2: e.target.value,
                                        })
                                      }
                                      value={currentaddressdata.line2 ?? ""}
                                      className="form-control"
                                      placeholder="Address Line 2"
                                      id="curAddressLine2"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide Address{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-6 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setcurrentaddressdata({
                                          ...currentaddressdata,
                                          landmark: e.target.value,
                                        })
                                      }
                                      value={currentaddressdata.landmark ?? ""}
                                      className="form-control"
                                      placeholder="Landmark"
                                      id="curLandmark"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide landmark{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-6 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onBlur={(e) =>
                                        zipcodeHandler(e, addressdata.zip)
                                      }
                                      onChange={(e) =>
                                        setcurrentaddressdata({
                                          ...currentaddressdata,
                                          zip: e.target.value,
                                        })
                                      }
                                      value={currentaddressdata.zip ?? ""}
                                      className="form-control"
                                      placeholder="Zip Code"
                                      id="curZipcode"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide valid Pincode{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-4 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setcurrentaddressdata({
                                          ...currentaddressdata,
                                          city: e.target.value,
                                        })
                                      }
                                      value={currentaddressdata.city ?? ""}
                                      className="form-control"
                                      placeholder="City"
                                      id="curCity"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide city{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-4 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setcurrentaddressdata({
                                          ...currentaddressdata,
                                          state: e.target.value,
                                        })
                                      }
                                      value={currentaddressdata.state ?? ""}
                                      className="form-control"
                                      placeholder="State"
                                      id="curState"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide State{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                  <div className="dash-input-wrapper col-lg-4 mt-20">
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        setcurrentaddressdata({
                                          ...currentaddressdata,
                                          country: e.target.value,
                                        })
                                      }
                                      value={currentaddressdata.country ?? ""}
                                      className="form-control"
                                      placeholder="country"
                                      id="curCountry"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide country{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                </div>
                              </div>
                              {/* <input
                                type="submit"
                                name="next"
                                onClick={() => tophandler(0, 500)}
                                className="pr-button  action-button"
                                defaultValue="Next"
                              />
                              <input
                                type="button"
                                name="previous"
                                onClick={() => setWizard(1) & getPersonal()}
                                className="pr-button  action-button-prev"
                                defaultValue="Previous"
                              /> */}
                               <div className="button-group d-inline-flex align-items-center mt-30">
      <a href="#" className="dash-btn-two tran3s me-3 rounded-3" onClick={()=>setWizard(2)}>Save</a>
      <a href="#" className="dash-cancel-btn tran3s" onClick={()=>setWizard(1)}>Back</a>
    </div>	
                            </fieldset>
                          </Form>
                        ) : null}
                        {wizard === 3 ? (
                          <Form
                            noValidate
                            validated={validated3}
                            onSubmit={(e) =>
                              Check_Validation(
                                e,
                                RegsterThirdform,
                                setValidated3
                              )
                            }
                            className="reg-form contact10 "
                          >
                            <fieldset>
                              <div className="form-card">
                                <div className="row">
                                  <div className="col-12">
                                  <h4 className="dash-title-three">Education</h4>
                                  </div>
                                </div>
                                <div className="row">
                                  <h6 className="permenent-address mb-3 col-12">
                                    Education Qualification
                                  </h6>
                                  <div className=" ">
                                    <div
                                      id=" "
                                      className="property-fields__row row"
                                    >
                                      <h6 className="permenent-address mb-3 col-12 form-t">
                                        10th Board
                                      </h6>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <div className="text__center">
                                          <select
                                            required
                                            onChange={(e) =>
                                              settenthdata({
                                                ...tenthdata,
                                                board: e.target.value,
                                              })
                                            }
                                            value={tenthdata.board ?? ""}
                                            className="cs-select form-control cs-skin-elastic cs-skin-elastic1"
                                          >
                                            <option
                                              value=""
                                              defaultValue=""
                                              disabled
                                            >
                                              Board
                                            </option>
                                            {boardoptions?.tenth
                                              ? boardoptions?.tenth?.map(
                                                  (itm, k) => (
                                                    <option
                                                      key={k}
                                                      value={itm.value}
                                                    >
                                                      {itm.label}
                                                    </option>
                                                  )
                                                )
                                              : ""}
                                          </select>
                                          <Form.Control.Feedback type="invalid">
                                            Please provide Board{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3  ">
                                        <input
                                          type="text"
                                          required
                                          onChange={(e) =>
                                            settenthdata({
                                              ...tenthdata,
                                              "school/university":
                                                e.target.value,
                                            })
                                          }
                                          value={
                                            tenthdata["school/university"] ?? ""
                                          }
                                          className="form-control"
                                          placeholder=" School/University"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide school{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          type="text"
                                          required
                                          onChange={(e) =>
                                            settenthdata({
                                              ...tenthdata,
                                              "garde/score": e.target.value,
                                            })
                                          }
                                          value={tenthdata["garde/score"] ?? ""}
                                          className="form-control"
                                          placeholder=" Grade/Score"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide grade/score{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          type="text"
                                          required
                                          onChange={(e) =>
                                            settenthdata({
                                              ...tenthdata,
                                              year: e.target.value,
                                            })
                                          }
                                          value={tenthdata.year ?? ""}
                                          className="form-control"
                                          placeholder=" Year"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide year{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className=" ">
                                    <div id=" " className=" row">
                                      <h6 className="permenent-address mb-3 col-12 form-t">
                                        12th Board
                                      </h6>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <div className="text__center">
                                          <select
                                            required
                                            onChange={(e) =>
                                              settwelthdata({
                                                ...twelthdata,
                                                board: e.target.value,
                                              })
                                            }
                                            value={twelthdata.board ?? ""}
                                            className=" form-control cs-select cs-skin-elastic cs-skin-elastic1"
                                          >
                                            <option
                                              value=""
                                              defaultValue=""
                                              disabled
                                            >
                                              Board
                                            </option>
                                            {boardoptions.twelth
                                              ? boardoptions.twelth.map(
                                                  (itm, k) => (
                                                    <option
                                                      key={k}
                                                      value={itm.value}
                                                    >
                                                      {itm.label}
                                                    </option>
                                                  )
                                                )
                                              : ""}
                                          </select>
                                          <Form.Control.Feedback type="invalid">
                                            Please provide Board{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3  ">
                                        <input
                                          type="text"
                                          required
                                          onChange={(e) =>
                                            settwelthdata({
                                              ...twelthdata,
                                              "school/university":
                                                e.target.value,
                                            })
                                          }
                                          value={
                                            twelthdata["school/university"] ??
                                            ""
                                          }
                                          className="form-control"
                                          placeholder=" School/University"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide school{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          type="text"
                                          required
                                          onChange={(e) =>
                                            settwelthdata({
                                              ...twelthdata,
                                              "garde/score": e.target.value,
                                            })
                                          }
                                          value={
                                            twelthdata["garde/score"] ?? ""
                                          }
                                          className="form-control"
                                          placeholder=" Grade/Score"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide grade{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          type="text"
                                          required
                                          onChange={(e) =>
                                            settwelthdata({
                                              ...twelthdata,
                                              year: e.target.value,
                                            })
                                          }
                                          value={twelthdata.year ?? ""}
                                          className="form-control"
                                          placeholder=" Year"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide year{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className=" ">
                                    <div id=" " className=" row">
                                      <h6 className="permenent-address mb-3 col-12 form-t">
                                        Bachelor’s Degree
                                      </h6>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <div className="text__center">
                                          <select
                                            onChange={(e) =>
                                              setbachlerdata({
                                                ...bachlerdata,
                                                course: e.target.value,
                                              })
                                            }
                                            value={bachlerdata.course ?? ""}
                                            className="form-control cs-select cs-skin-elastic cs-skin-elastic1"
                                          >
                                            <option
                                              value=""
                                              defaultValue=""
                                              disabled
                                            >
                                              Course
                                            </option>
                                            {boardoptions.bachlor
                                              ? boardoptions.bachlor.map(
                                                  (itm, k) => (
                                                    <option
                                                      key={k}
                                                      value={itm.value}
                                                    >
                                                      {itm.label}
                                                    </option>
                                                  )
                                                )
                                              : ""}
                                          </select>
                                          <Form.Control.Feedback type="invalid">
                                            Please provide Course{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3  ">
                                        <input
                                          type="text"
                                          required={bachlerdata.course}
                                          onChange={(e) =>
                                            setbachlerdata({
                                              ...bachlerdata,
                                              collage: e.target.value,
                                            })
                                          }
                                          value={bachlerdata.collage ?? ""}
                                          className="form-control"
                                          placeholder=" College"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide College{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          type="text"
                                          required={bachlerdata.course}
                                          onChange={(e) =>
                                            setbachlerdata({
                                              ...bachlerdata,
                                              "garde/score": e.target.value,
                                            })
                                          }
                                          value={
                                            bachlerdata["garde/score"] ?? ""
                                          }
                                          className="form-control"
                                          placeholder=" Grade/Score"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide grade{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          required={bachlerdata.course}
                                          onChange={(e) =>
                                            setbachlerdata({
                                              ...bachlerdata,
                                              year: e.target.value,
                                            })
                                          }
                                          value={bachlerdata.year ?? ""}
                                          type="text"
                                          className="form-control"
                                          placeholder=" Year"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide Year{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className=" ">
                                    <div id=" " className=" row">
                                      <h6 className="permenent-address mb-3 col-12 form-t">
                                        Master’s Degree{" "}
                                      </h6>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <div className="text__center">
                                          <select
                                            onChange={(e) =>
                                              setmasterDegreedata({
                                                ...masterDegreedata,
                                                course: e.target.value,
                                              })
                                            }
                                            value={
                                              masterDegreedata.course ?? ""
                                            }
                                            className="form-control cs-select cs-skin-elastic cs-skin-elastic1"
                                          >
                                            <option value="" defaultValue="">
                                              Course
                                            </option>
                                            {boardoptions?.master
                                              ? boardoptions.master.map(
                                                  (itm, k) => (
                                                    <option
                                                      key={k}
                                                      value={itm.value}
                                                    >
                                                      {itm.label}
                                                    </option>
                                                  )
                                                )
                                              : ""}
                                          </select>
                                          <Form.Control.Feedback type="invalid">
                                            Please provide Course{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3  ">
                                        <input
                                          type="text"
                                          required={masterDegreedata.course}
                                          onChange={(e) =>
                                            setmasterDegreedata({
                                              ...masterDegreedata,
                                              collage: e.target.value,
                                            })
                                          }
                                          value={masterDegreedata.collage ?? ""}
                                          className="form-control"
                                          placeholder=" College"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide College{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          type="text"
                                          required={masterDegreedata.course}
                                          onChange={(e) =>
                                            setmasterDegreedata({
                                              ...masterDegreedata,
                                              "garde/score": e.target.value,
                                            })
                                          }
                                          value={
                                            masterDegreedata["garde/score"] ??
                                            ""
                                          }
                                          className="form-control"
                                          placeholder=" Grade/Score"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide grade{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 ">
                                        <input
                                          type="text"
                                          required={masterDegreedata.course}
                                          onChange={(e) =>
                                            setmasterDegreedata({
                                              ...masterDegreedata,
                                              year: e.target.value,
                                            })
                                          }
                                          value={masterDegreedata.year ?? ""}
                                          className="form-control"
                                          placeholder=" Year"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide year{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="property-fields__roww ">
                                    <div
                                      id="property-fields__row-1"
                                      className="property-fields__row row"
                                    >
                                      <h6 className="permenent-address mb-3 col-12 form-t">
                                        Additional Qualification
                                      </h6>
                                      {additionalarray.length
                                        ? additionalarray.map((aitm, ak) => (
                                            <React.Fragment key={ak}>
                                              <div className="dash-input-wrapper col-lg-3 mt-10">
                                                <div className="text__center">
                                                  <input
                                                    disabled
                                                    value={aitm.course ?? ""}
                                                    type="text"
                                                    className=""
                                                    placeholder="course"
                                                    id=" "
                                                  />
                                                </div>
                                              </div>
                                              <div className="dash-input-wrapper col-lg-3  mt-10">
                                                <div className="text__center">
                                                  <input
                                                    disabled
                                                    value={aitm.collage ?? ""}
                                                    type="text"
                                                    className=""
                                                    placeholder=" collage"
                                                    id=" "
                                                  />
                                                </div>
                                              </div>
                                              <div className="dash-input-wrapper col-lg-3 mt-10">
                                                <input
                                                  type="text"
                                                  disabled
                                                  value={
                                                    aitm["garde/score"] ?? ""
                                                  }
                                                  className=""
                                                  placeholder=" Grade/Score"
                                                  id=" "
                                                />
                                              </div>
                                              <div className="dash-input-wrapper col-lg-3 ">
                                                <input
                                                  disabled
                                                  value={aitm.year ?? ""}
                                                  type="text"
                                                  className=""
                                                  placeholder=" Year"
                                                  id=" "
                                                />
                                              </div>
                                            </React.Fragment>
                                          ))
                                        : null}
                                      <div className="dash-input-wrapper col-lg-3 mt-10">
                                        <div className="text__center">
                                          <input
                                            type="text"
                                            onChange={(e) =>
                                              setadditionaldata({
                                                ...additionaldata,
                                                course: e.target.value,
                                              })
                                            }
                                            value={additionaldata.course ?? ""}
                                            className="form-control"
                                            placeholder=" course"
                                            id=" "
                                          />

                                          <Form.Control.Feedback type="invalid">
                                            Please provide Course{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 mt-10 ">
                                        <input
                                          type="text"
                                          required={additionaldata.course}
                                          onChange={(e) =>
                                            setadditionaldata({
                                              ...additionaldata,
                                              collage: e.target.value,
                                            })
                                          }
                                          value={additionaldata.collage ?? ""}
                                          className="form-control"
                                          placeholder=" college"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide college{" "}
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 mt-10">
                                        <input
                                          type="text"
                                          required={additionaldata.course}
                                          onChange={(e) =>
                                            setadditionaldata({
                                              ...additionaldata,
                                              "garde/score": e.target.value,
                                            })
                                          }
                                          value={
                                            additionaldata["garde/score"] ?? ""
                                          }
                                          className="form-control"
                                          placeholder=" Grade/Score"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide grade
                                        </Form.Control.Feedback>
                                      </div>
                                      <div className="dash-input-wrapper col-lg-3 mt-10">
                                        <input
                                          required={additionaldata.course}
                                          onChange={(e) =>
                                            setadditionaldata({
                                              ...additionaldata,
                                              year: e.target.value,
                                            })
                                          }
                                          value={additionaldata.year ?? ""}
                                          type="text"
                                          className="form-control"
                                          placeholder=" Year"
                                          id=" "
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide year
                                        </Form.Control.Feedback>
                                      </div>
                                    </div>
                                    <div className="line-item-property__actions col-12 row mt-3 mb-3">
                                      <button
                                        onClick={() =>
                                          pushhandler(
                                            additionaldata,
                                            setadditionaldata,
                                            additionalarray,
                                            setadditionalarray
                                          )
                                        }
                                        className="col-lg-2 button-form1"
                                        type="button"
                                        
                                      >
                                        Add
                                      </button>
                                      <button
                                        onClick={() =>
                                          removeHandler(
                                            additionalarray,
                                            setadditionalarray
                                          )
                                        }
                                        className="col-lg-2 button-form2"
                                        type="button"
                                        value="-"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <input
                                type="submit"
                                name="next"
                                onClick={() => tophandler(0, 500)}
                                className="pr-button next action-button"
                                defaultValue="Submit"
                              /> */}
                              {/* <input
                                type="button"
                                name="previous"
                                onClick={() => setWizard(2) & getaddress()}
                                className="pr-button  action-button-prev"
                                defaultValue="Previous"
                              /> */}
                              <div className="button-group d-inline-flex align-items-center mt-30">
      <a href="#" className="dash-btn-two tran3s me-3 rounded-3" onClick={()=>setWizard(3)}>Save</a>
      <a href="#" className="dash-cancel-btn tran3s" onClick={()=>setWizard(2)}>Back</a>
    </div>	
                            </fieldset>
                          </Form>
                        ) : null}
                        {wizard === 4 ? (
                          <Form
                            // noValidate
                            // validated={validated4}
                            // onSubmit={(e) =>
                            //   Check_Validation(
                            //     e,
                            //     RegsterFourthform,
                            //     setValidated4
                            //   )
                            // }
                            className="reg-form contact10 "
                          >
                            <fieldset>
                              <div className="form-card">
                                <div className="row">
                                  <div className="col-12">
                                  <h4 className="dash-title-three">Experience</h4>
                                  </div>
                                </div>

                                <h6 className="mt-3 color-brand-1">
                                  Designation
                                </h6>
                                <div className="col-lg-12 col-md-12">
                                  <select
                                    value={employeedata3?.designation ?? ""}
                                    disabled={window.location.pathname.includes(
                                      "employee-profile"
                                    )}
                                    required
                                    onChange={(e) =>
                                      setemployeedata3({
                                        ...employeedata3,
                                        designation: e.target.value,
                                      })
                                    }
                                    className="form-control cs-select cs-skin-elastic cs-skin-elastic1"
                                  >
                                    <option value="" defaultValue="" disabled>
                                      Select Designation
                                    </option>
                                    <option value="Chief Executive Officer (CEO)">
                                      Chief Executive Officer (CEO)
                                    </option>
                                    <option value="Chief Technology Officer (CTO)">
                                      Chief Technology Officer (CTO)
                                    </option>
                                    <option value="Chief Financial Officer (CFO)">
                                      Chief Financial Officer (CFO)
                                    </option>
                                    <option value="Chief Operating Officer (COO)">
                                      Chief Operating Officer (COO)
                                    </option>
                                    <option value="Chief Marketing Officer (CMO)">
                                      Chief Marketing Officer (CMO)
                                    </option>
                                    <option value="HR">
                                      Human Resources (HR) Manager
                                    </option>
                                    <option value="Administrator">
                                      Administrator
                                    </option>
                                    <option value="Accountant">
                                      Accountant
                                    </option>
                                    <option value="Manager">Manager</option>
                                    <option value="Supervisor">
                                      Supervisor
                                    </option>
                                    <option value="Engineer">Engineer</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Analyst">Analyst</option>
                                    <option value="Programmer">
                                      Programmer
                                    </option>
                                    <option value="Full Stack Developer">
                                      Full Stack Developer
                                    </option>
                                    <option value="Backend Developer">
                                      Backend Developer
                                    </option>
                                    <option value="Frontend Developer">
                                      Frontend Developer
                                    </option>
                                    <option value="Technician">
                                      Technician
                                    </option>
                                    <option value="Specialist">
                                      Specialist
                                    </option>
                                    <option value="Consultant">
                                      Consultant
                                    </option>
                                    <option value="Intern">Intern</option>
                                    <option value="Trainee">Trainee</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Designation
                                  </Form.Control.Feedback>
                                </div>
                                <h6 className="mt-3 ">Skills</h6>
                                <div className="col-lg-12 col-md-12">
                                  <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    // options={skillsoption}
                                    placeholder={<div>Select Skills....</div>}
                                    value={selectedskills}
                                    className=""
                                    onChange={(newcontent) => {
                                      setselectedskills(newcontent);
                                    }}
                                    // onInputChange={(value)=>skillapicall(value)}
                                    // styles={customStyles}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide Skills{" "}
                                  </Form.Control.Feedback>
                                </div>
                                <h6 className="permenent-address mb-3">
                                  Career Experience
                                </h6>
                                <div className="property-fields__ro ">
                                  <div
                                    id="property-fields__row-2"
                                    className="property-fields__ro row"
                                  >
                                    <h6 className="permenent-address form-t mb-3 col-12">
                                      Company
                                    </h6>

                                    <div
                                      className={`${
                                        precompanyarray.length
                                          ? "sidebar-list-job88"
                                          : ""
                                      } text-imp`}
                                    >
                                      <ul
                                        className={`list-unstyled timeline-sm`}
                                      >
                                        {precompanyarray.length
                                          ? precompanyarray.map((citm, ck) => (
                                              <React.Fragment key={ck}>
                                                <div className="row timeline-sm-item ">
                                                  <div className="col-12">
                                                    <div className="row">
                                                      <div className="col-10">
                                                        <span className="experiancetag">
                                                          {citm?.from
                                                            ? moment(
                                                                citm.from
                                                              ).format(
                                                                "DD-MM-YYYY"
                                                              )
                                                            : "" ?? ""}
                                                          &nbsp; to &nbsp;{" "}
                                                          {citm?.to !==
                                                          "Present"
                                                            ? moment(
                                                                citm.to
                                                              ).format(
                                                                "DD-MM-YYYY"
                                                              )
                                                            : citm.to ?? ""}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <br />
                                                    <div className="row ">
                                                      <div className="col-2 mobhide">
                                                        <span className="experianceheading mobhide">
                                                          Company
                                                        </span>
                                                      </div>
                                                      <div className="col-1 mobhide">
                                                        <span className="mobhide">
                                                          <strong>:</strong>
                                                        </span>
                                                      </div>
                                                      <div className="col-6">
                                                        <span className="experiencetext">
                                                          {citm?.name ?? ""}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="row">
                                                      <div className="col-2 mobhide">
                                                        <span className="experianceheading mobhide">
                                                          Position
                                                        </span>
                                                      </div>
                                                      <div className="col-1 mobhide">
                                                        <span className="mobhide">
                                                          <strong>:</strong>
                                                        </span>
                                                      </div>
                                                      <div className="col-6">
                                                        <span className="experiencetext">
                                                          {citm?.position ?? ""}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="row">
                                                      <div className="col-2 mobhide">
                                                        <span className="experianceheading mobhide">
                                                          Phone
                                                        </span>
                                                      </div>
                                                      <div className="col-1 mobhide">
                                                        <span className="mobhide">
                                                          <strong>:</strong>
                                                        </span>
                                                      </div>
                                                      <div className="col-6">
                                                        <span className="experiencetext">
                                                          {citm?.phone ?? ""}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="row">
                                                      <div className="col-2 mobhide">
                                                        <span className="experianceheading mobhide">
                                                          email
                                                        </span>
                                                      </div>
                                                      <div className="col-1 mobhide">
                                                        <span className="mobhide">
                                                          <strong>:</strong>
                                                        </span>
                                                      </div>
                                                      <div className="col-6">
                                                        <span className="experiencetext">
                                                          {citm?.email ?? ""}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="row">
                                                      <div className="col-2 mobhide">
                                                        <span className="experianceheading mobhide">
                                                          Address
                                                        </span>
                                                      </div>
                                                      <div className="col-1 mobhide">
                                                        <span className="mobhide">
                                                          <strong>:</strong>
                                                        </span>
                                                      </div>
                                                      <div className="col-6">
                                                        <span className="experiencetext ">
                                                          {citm?.address ?? ""}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="row">
                                                      <div className="col-2 mobhide">
                                                        <span className="experianceheading mobhide">
                                                          Description
                                                        </span>
                                                      </div>
                                                      <div className="col-1 mobhide">
                                                        <span className="mobhide">
                                                          <strong>:</strong>
                                                        </span>
                                                      </div>
                                                      <div className="col-6">
                                                        <span className="experiencetext">
                                                          {citm?.jobDescription ??
                                                            ""}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                {/* <div className="dash-input-wrapper col-lg-6 mt-20">
                               <div className="text__center">
                               <input type="text"  value={citm?.name??""} className="" disabled placeholder=" Position" id=" " />
                                 
                               </div>
                             </div>
                             <div className="dash-input-wrapper col-lg-6 mt-20 ">
                               <input type="text"  value={citm.position} className="" disabled placeholder=" Position" id=" " />
                             </div>
                             <div className="dash-input-wrapper col-lg-6 mt-20">
                               <input type="tel"  value={citm.phone} className="" disabled placeholder=" Company Phone" id=" " />
                             </div>
                             <div className="dash-input-wrapper col-lg-6  mt-20">
                               <input type="email"  value={citm.email} className="" disabled placeholder="Company email" id=" " />
                             </div>
                             <div className="dash-input-wrapper col-lg-12  mt-20">
                               <input type="text" value={citm.address} disabled className="" placeholder="Company Address" id=" " />
                             </div>
                             <div className="dash-input-wrapper col-lg-12 mt-20 ">
                               <textarea type="text" value={citm.jobDescription} disabled className=" text-area11" placeholder="Job Description" id=" "  />
                             </div>
                             <div className="dash-input-wrapper col-lg-6 mt-20">
                               <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                               <input type="date" disabled value={citm.from} className="" placeholder=" From" id=" " />
                             </div>
                             <div className="dash-input-wrapper col-lg-6 mt-20">
                               <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                               {citm.to==="Present"?
                               <input type="text"  disabled value={citm.to} className="" placeholder=" To" id=" " />
                               :
                               <input type="date"  disabled value={citm.to} className="" placeholder=" To" id=" " />
                                }
                             </div> */}
                                                {!citm.is_verified ? (
                                                  <div className="line-item-property__actions col-12 row mt-3 mb-3">
                                                    <button
                                                      onClick={() =>
                                                        Removeprecompany(ck)
                                                      }
                                                      className="col-lg-2 button-form2"
                                                      type="button"
                                                      value="-"
                                                    >
                                                      Remove
                                                    </button>
                                                  </div>
                                                ) : (
                                                  ""
                                                )}
                                              </React.Fragment>
                                            ))
                                          : null}
                                      </ul>
                                    </div>
                                    {windowcompany ? (
                                      <>
                                        <div
                                          className={`dash-input-wrapper col-lg-12 mt-20 d-flex ${
                                            precompanyarray.length
                                              ? "sidebar-list-job88"
                                              : ""
                                          }`}
                                        >
                                          {/* <input className="check " onChange={(e)=>companyHandler(e)}  type="checkbox"  />
                              <label className='mt-15 pl-10 '  >Other Company</label>  */}
                                        </div>
                                        <div className="dash-input-wrapper col-lg-6  ">
                                          <CreatableSelect
                                            className="basic-single "
                                            classNamePrefix="select"
                                            placeholder={
                                              <div>Select Company....</div>
                                            }
                                            name="color"
                                            options={companys}
                                            // styles={customStyles}
                                            onChange={(newcontent) => {
                                              CompanydataHandler(newcontent);
                                            }}
                                          />
                                          {/* {othercompany?
                                <input type="text"  onChange={(e)=>setprecompanydata({...precompanydata,name:e.target.value,is_craigcompany:false})} value={precompanydata.name??""} className="form-control" placeholder=" Company Name" id=" " />
                                :
                                <select onChange={(e)=>CompanydataHandler(e.target.value)} value={precompanydata?.name??""} className="form-control  cs-skin-elastic cs-skin-elastic1">
                                  <option value="" defaultValue="" disabled  >Select Company</option>
                                  {companyvalues.map((company,k)=>(
                                    <option key={k} value={company.name}>{company.name}</option>  
                                  ))} 
                                </select>
                                } */}
                                          <Form.Control.Feedback type="invalid">
                                            Please provide company name{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                        <div className="dash-input-wrapper col-lg-6 ">
                                          <input
                                            type="text"
                                            required={precompanydata.name}
                                            onChange={(e) =>
                                              setprecompanydata({
                                                ...precompanydata,
                                                position: e.target.value,
                                                isnew: true,
                                              })
                                            }
                                            value={
                                              precompanydata.position ?? ""
                                            }
                                            className="form-control"
                                            placeholder=" Position"
                                            id=" "
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please provide position{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                        <div className="dash-input-wrapper col-lg-6 mt-20">
                                          <input
                                            type="tel"
                                            required={precompanydata.name}
                                            onChange={(e) =>
                                              setprecompanydata({
                                                ...precompanydata,
                                                phone: e.target.value,
                                              })
                                            }
                                            value={precompanydata.phone ?? ""}
                                            className="form-control"
                                            placeholder=" Company Phone"
                                            id=" "
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please provide phone{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                        <div className="dash-input-wrapper col-lg-6  mt-20">
                                          <input
                                            type="email"
                                            required={precompanydata.name}
                                            onChange={(e) =>
                                              setprecompanydata({
                                                ...precompanydata,
                                                email: e.target.value,
                                              })
                                            }
                                            value={precompanydata.email ?? ""}
                                            className="form-control"
                                            placeholder="Company email"
                                            id=" "
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please provide valid email{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                        <div className="dash-input-wrapper col-lg-12  mt-20">
                                          <input
                                            type="text"
                                            required={precompanydata.name}
                                            onChange={(e) =>
                                              setprecompanydata({
                                                ...precompanydata,
                                                address: e.target.value,
                                              })
                                            }
                                            value={precompanydata.address ?? ""}
                                            className="form-control"
                                            placeholder="Company Address"
                                            id=" "
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please provide address{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                        <div className="dash-input-wrapper col-lg-12  mt-20">
                                          <textarea
                                            required={precompanydata.name}
                                            type="text"
                                            onChange={(e) =>
                                              setprecompanydata({
                                                ...precompanydata,
                                                jobDescription: e.target.value,
                                              })
                                            }
                                            value={
                                              precompanydata.jobDescription ??
                                              ""
                                            }
                                            className="form-control text-area11"
                                            placeholder="Job Description"
                                            id=" "
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please provide Job Description{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                        <div className="dash-input-wrapper col-lg-12 mt-10 d-flex">
                                          {/* <input
                                            className="check "
                                            checked={presentcompany}
                                            onChange={(e) =>
                                              PresentcompanyHandler(e)
                                            }
                                            type="checkbox"
                                          /> */}
                                          <label className="mt-15 pl-10 ">
                                            Present Company
                                          </label>
                                        </div>
                                        <div className="dash-input-wrapper col-lg-6 mt- ">
                                          <label className="col-sm-12 font-sm color-text-mutted">
                                            From*
                                          </label>
                                          <input
                                            required={precompanydata.name}
                                            type="date"
                                            onChange={(e) =>
                                              checkDateBetween(
                                                e.target.value,
                                                precompanydata.to
                                              )
                                                ? handleDateChange(
                                                    "from",
                                                    e.target.value
                                                  )
                                                : ""
                                            }
                                            value={precompanydata.from ?? ""}
                                            className={`form-control `}
                                            placeholder=" From"
                                            id=" "
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please provide valid Join date{" "}
                                          </Form.Control.Feedback>
                                        </div>
                                        {presentcompany ? (
                                          ""
                                        ) : (
                                          <div className="dash-input-wrapper col-lg-6 mt-">
                                            <label className="col-sm-12 font-sm color-text-mutted">
                                              To*
                                            </label>
                                            <input
                                              type="date"
                                              required={precompanydata.name}
                                              onChange={(e) =>
                                                checkDateBetween(
                                                  precompanydata.from,
                                                  e.target.value
                                                )
                                                  ? handleDateChange(
                                                      "to",
                                                      e.target.value
                                                    )
                                                  : ""
                                              }
                                              value={precompanydata.to ?? ""}
                                              className={`form-control ${
                                                precompanydata.from
                                                  ? dateCheck(
                                                      precompanydata.from ?? ""
                                                    )
                                                    ? ""
                                                    : "is-invalid"
                                                  : ""
                                              }`}
                                              placeholder=" To"
                                              id=" "
                                            />
                                            <Form.Control.Feedback type="invalid">
                                              Please provide valid To* date{" "}
                                            </Form.Control.Feedback>
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="line-item-property__actions col-12 row mt-3 mb-3">
                                    <button
                                      onClick={() =>
                                        windowcompany
                                          ? pushhandler(
                                              precompanydata,
                                              setprecompanydata,
                                              precompanyarray,
                                              setprecompanyarray
                                            )
                                          : setwindowcompany(true)
                                      }
                                      className="col-lg-2 button-form1"
                                      type="button"
                                      value="+"
                                    >
                                      Add
                                    </button>
                                    {windowcompany ? (
                                      <button
                                        onClick={() =>
                                          setprecompanydata("") &
                                          setwindowcompany(false)
                                        }
                                        className="col-lg-2 button-form2"
                                        type="button"
                                        value="-"
                                      >
                                        Remove
                                      </button>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="row">
                                  <h6 className=" form-t mb-3 mt-3 col-12">
                                    Expected LPA
                                  </h6>
                                  <div className="dash-input-wrapper   col-lg-12 ">
                                    <input
                                      onChange={(e) =>
                                        setemployeedata3({
                                          ...employeedata3,
                                          expectedsalary: e.target.value,
                                        })
                                      }
                                      value={employeedata3.expectedsalary ?? ""}
                                      type="number"
                                      className={`form-control text-area11 ${
                                        employeedata3.expectedsalary
                                          ? numberHandler(
                                              employeedata3.expectedsalary
                                            )
                                            ? ""
                                            : "is-invalid"
                                          : ""
                                      }`}
                                      placeholder="Expected LPA"
                                      id=" "
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide Valid Expected salary{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                </div>
                                <div className="row">
                                  <h6 className=" form-t mb-3 mt-3 col-12">
                                    Any other Proficiancy
                                  </h6>
                                  <div className="dash-input-wrapper col-lg-12 ">
                                    <textarea
                                      onChange={(e) =>
                                        setemployeedata3({
                                          ...employeedata3,
                                          otherproficency: e.target.value,
                                        })
                                      }
                                      value={
                                        employeedata3.otherproficency ?? ""
                                      }
                                      type="text"
                                      className="form-control text-area11"
                                      placeholder="Message"
                                      id=" "
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please provide otherproficency{" "}
                                    </Form.Control.Feedback>
                                  </div>
                                </div>
                              </div>
                              {/* <input
                                type="submit"
                                name="next"
                                onClick={() => tophandler(0, 500)}
                                className="pr-button next action-button"
                                defaultValue="Submit"
                              /> */}
                              {/* <input
                                type="button"
                                name="previous"
                                onClick={() => setWizard(3) & getaddress()}
                                className="pr-button  action-button-prev"
                                defaultValue="Previous"
                              /> */}
                              <div className="button-group d-inline-flex align-items-center mt-30">
      <button  className="dash-btn-two tran3s me-3 rounded-3" onClick={()=>navigte(ProfilePath)}>Save</button>
      <a href="#" className="dash-cancel-btn tran3s" onClick={()=>setWizard(3)}>Cancel</a>
    </div>	
                            </fieldset>
                          </Form>
                        ) : null}
                        {wizard === 5 ? (
                          <fieldset>
                            <div className="form-card reg-form">
                              <div className="row">
                                <div className="col-7"></div>
                                <div className="col-5"></div>
                              </div>{" "}
                              <br />
                              <br />
                              <h2 className="purple-text text-center mb-20">
                                <strong>SUCCESS </strong>
                              </h2>{" "}
                              <br />
                              <div className="row justify-content-center">
                                <div
                                  className="content-wrapper11"
                                  id="htmlContent"
                                >
                                  <div className="tilt">
                                    <div className="credit-card">
                                      <div
                                        className="credit-card__front"
                                        style={{
                                          backgroundImage:
                                            "url(assets/imgs/template/visa-bg.jpg)",
                                        }}
                                      >
                                        <div className="circle circle-1" />
                                        <div className="circle circle-2" />
                                        <div className="logo">
                                          <img src="\assets\imgs\logo\logo_craig-10.png" />
                                        </div>
                                        <div className="VISA">
                                          <QRCode
                                            style={{
                                              height: "100px",
                                              width: "100px",
                                              backgroundColor: "white",
                                              padding: "6px",
                                            }}
                                            value={`${
                                              window.location.origin
                                            }/candidatedetails/${
                                              userdetail?._id ?? ""
                                            }`}
                                          />
                                        </div>
                                        <div className="card-expiry-group">
                                          <label htmlFor="card-expiry">
                                            Unique ID
                                          </label>
                                          <h5 className="card-number">
                                            {formatNumber(
                                              userdetail?.uniqueid ?? ""
                                            )}
                                          </h5>
                                        </div>
                                        <div className="card-name-group">
                                          <label htmlFor="card-name">
                                            NAME
                                          </label>
                                          <h6 className="card-number">
                                            {userdetail?.firstName ?? ""}{" "}
                                            {userdetail?.middleName ?? ""}{" "}
                                            {userdetail?.lastName ?? ""}{" "}
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* tilt */}
                                </div>
                                <div className="profile-pils mt-20">
                                  <span className="pils">
                                    <a href="/employee-profile">
                                      <i className="fa fa-eye" />
                                      View Profile
                                    </a>
                                  </span>
                                  <span className="pils">
                                    <a
                                      href
                                      onClick={() =>
                                        downloadHtmlAsImage("htmlContent")
                                      }
                                      target="_blank"
                                    >
                                      <i className="fa fa-paper-plane-o" />{" "}
                                      Share Profile
                                    </a>
                                  </span>
                                </div>
                              </div>{" "}
                              <br />
                              <br />
                              <div className="row justify-content-center mt-130">
                                <div className="col-7 text-center"></div>
                              </div>
                            </div>
                          </fieldset>
                        ) : null}
</div>

    </div>
    </div>
  )
}
