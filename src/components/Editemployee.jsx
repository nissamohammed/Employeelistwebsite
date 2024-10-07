import React, { useEffect, useState } from 'react'

import { serverUrl } from '../services/serverUrl';
import { editEmployeeApi } from '../services/allApi';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';

function Editemployee({employeelist}) {
  const [show, setShow] = useState(false);
  const [employeedetails,setemployeedetails] = useState({
    id:employeelist?._id,
    name: employeelist?.name,
    email: employeelist?.email,
    mobile: employeelist?.mobile,
    designation: employeelist?.designation,
    gender: employeelist?.gender,
    course:employeelist?.course,
    empimage: ""
  })

  const [preview,setpreview] = useState("")
  const [key,setkey]= useState(0)
  const handleClose = () => {setShow(false);
    handleClose1()
  }
  const handleShow = () => setShow(true);
  console.log(employeedetails);

const handleFileUpload = (e)=>{
  //we done this in addproject same code
  e.preventDefault()
  setemployeedetails({...employeedetails,empimage:e.target.files[0]});
}
console.log(employeedetails);

useEffect(()=>{
  if(employeedetails.empimage){
//createObjectUrl  - method is used to convert files into urls 

    setpreview(URL.createObjectURL(employeedetails.empimage))
  }
},[employeedetails.empimage])


const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  
  if (type === "checkbox") {
    setemployeedetails((prevState) => ({
      ...prevState,
      course: {
        ...prevState.course,
        [name]: checked
      }
    }));
  } else {
    setemployeedetails({ ...employeedetails, [name]: value });
  }
};
const handleClose1 =()=>{
  setemployeedetails({
    name: employeelist.name,
    email: employeelist.email,
    mobile: employeelist.mobile,
    designation: employeelist.designation,
    gender: employeelist.gender,
    course: employeelist.course,
    empimage: ""
  })
  setpreview("")
  if(key==0){
    setkey(1)
  }else{
    setkey(0)
  }
}

const handleupdate=async(e)=>{
  e.preventDefault()
  const {id, name, email, mobile, designation, gender,course ,empimage } = employeedetails
  if (!name || !email || !mobile || !designation || !course || !gender) {
    alert('please fill the form completely')
  } else {
    const reqBody= new FormData()
    reqBody.append("name",name)
    reqBody.append("email",email)
    reqBody.append("mobile",mobile)
    reqBody.append("designation",designation)
    reqBody.append("course",course)
    reqBody.append("gender",gender)
    //project image maybe change or not,so, conditional rendering
    preview?reqBody.append("empimage",empimage):reqBody.append("empimage",employeelist?.empimage)
   
    const token = sessionStorage.getItem("token")
    if(preview){/* if there is new image upload */
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`//for token authentication 
           }
           const result = await editEmployeeApi(id,reqBody,reqHeader)
           console.log(result);
           if(result.status==200){
            alert('Employee list updated successfully')
            //setEditResponse(result.data)
           }else{
            alert('somthing went wrong')
           }
    }else{/*no new image upload */
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`//for token authentication 
      }
      const result = await editEmployeeApi(id,reqBody,reqHeader)
           console.log(result);
           if(result.status==200){
            alert('Employee list updated successfully')
            //setEditResponse(result.data)
           }else{
            alert('somthing went wrong')
           }
//go to back end
    }
  
  
  }
}


  return (
    <>
    <button className='btn text-light' onClick={handleShow}>
    <FontAwesomeIcon icon={faPenToSquare} /> 
    </button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="empimg">
              <input id='empimg' type="file" style={{display:'none'}} key={key} onChange={(e)=>handleFileUpload(e)}/>
              <img src={preview?preview:`${serverUrl}/uploads/${employeelist?.empimage}`} alt="no image" width={'100%'} />
            </label>
            </Col>
            <Col sm={12} md={6}>
              <form className='p-3'>
                <div className="mb-3">
                  <input type="text" placeholder='Name' value={employeedetails?.name} className='form-control' onChange={handleChange} name="name" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Email' value={employeedetails?.email} className='form-control' onChange={handleChange} name="email" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Mobile No' value={employeedetails?.mobile} className='form-control' onChange={handleChange} name="mobile" />
                </div>

                <div className="mb-3">
                 <label>Designation :</label>
                  <select name="designation" value={employeedetails?.designation} onChange={handleChange} className='ms-3'>
                    <option value="">-- Designation --</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Gender :</label>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="gender" value="male" checked={employeedetails?.gender === 'male'} onChange={handleChange} />
                      Male
                    </label>
                    <label>
                      <input type="radio" name="gender" value="female" checked={employeedetails?.gender === 'female'} onChange={handleChange} />
                      Female
                    </label>
                  </div>
                </div>

                <div className='mb-3'>
                  <label>Course:</label>
                  <div>
                  <input type="text" placeholder='course' value={employeedetails?.course} className='form-control' onChange={handleChange} name="course" />
                  </div>
                 {/* <div>
                    <input type="checkbox" id="mca" name="mca" checked={employeedetails.course.mca} onChange={handleChange} />
                    <label htmlFor="mca">MCA</label>
                  </div>

                  <div>
                    <input type="checkbox" id="bca" name="bca" checked={employeedetails.course.bca} onChange={handleChange} />
                    <label htmlFor="bca">BCA</label>
                  </div>

                  <div>
                    <input type="checkbox" id="bsc" name="bsc" checked={employeedetails.course.bsc} onChange={handleChange} />
                    <label htmlFor="bsc">BSc</label>
                  </div>*/}
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleupdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editemployee
