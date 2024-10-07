import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addEmployeeApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

function Addemployee() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  
  const [employeedetails, setEmployeeDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course:'',
    /*course: {
      mca: false,
      bca: false,
      bsc: false,
    },*/
    empimage:"",
    createdAt: ""
  });

  //to upload image to url to store the image and view in the add project
const [preview, setpreview] = useState("") 
const [key,setkey]= useState(0)
console.log(employeedetails);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setEmployeeDetails((prevState) => ({
        ...prevState,
        course: {
          ...prevState.course,
          [name]: checked
        }
      }));
    } else {
      setEmployeeDetails({ ...employeedetails, [name]: value });
    }
  };

  const handleFile = (e) => {
    setEmployeeDetails({ ...employeedetails, empimage: e.target.files[0] });
  };


  const handleClose1 = () => {
    setEmployeeDetails({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
    createdAt: ''
    });
    //to empty image
setpreview("")
if(key==0){
  setkey(1)
}else{
  setkey(0)
}
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { name, email, mobile, designation, gender, course, empimage } = employeedetails;
    
    if (!name || !email || !mobile || !designation || !gender || !course || !empimage) {
      alert('Please fill the form completely');
    } else {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("email", email);
      reqBody.append("mobile", mobile);
      reqBody.append("designation", designation);
      reqBody.append("gender", gender);
      reqBody.append("course", course);
      reqBody.append("empimage", empimage);
      reqBody.append("createdAt", new Date().toISOString()); // Add current date

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        };
        const result = await addEmployeeApi(reqBody, reqHeader);
        if (result.status === 200) {
          alert('Employee list created successfully');
          handleClose();
        }
      } else {
        alert('Please login');
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    handleClose1();
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    if (employeedetails.empimage) {
      setpreview(URL.createObjectURL(employeedetails.empimage));
    }
  }, [employeedetails.empimage]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <button className='btn btn-info' onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} className='me-2' />Create Employee
      </button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <label htmlFor="proimg">
                <input id='proimg' type="file" style={{ display: 'none' }} key={key} onChange={handleFile} />
                <img src={preview ? preview : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Image_Icon.png"} alt="no image" width={'100%'} />
              </label>
            </Col>
            <Col sm={12} md={6}>
              <form className='p-3'>
                <div className="mb-3">
                  <input type="text" placeholder='Name' value={employeedetails.name} className='form-control' onChange={handleChange} name="name" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Email' value={employeedetails.email} className='form-control' onChange={handleChange} name="email" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Mobile No' value={employeedetails.mobile} className='form-control' onChange={handleChange} name="mobile" />
                </div>

                <div className="mb-3">
                 <label>Designation :</label>
                  <select name="designation" value={employeedetails.designation} onChange={handleChange} className='ms-3'>
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
                      <input type="radio" name="gender" value="male" checked={employeedetails.gender === 'male'} onChange={handleChange} />
                      Male
                    </label>
                    <label>
                      <input type="radio" name="gender" value="female" checked={employeedetails.gender === 'female'} onChange={handleChange} />
                      Female
                    </label>
                  </div>
                </div>

                <div className='mb-3'>
                  <label>Course:</label>
                <div >
                  <input type="text" placeholder='course' value={employeedetails.course} className='form-control' onChange={handleChange} name="course" />
                </div>
                  {/*<div>
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
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addemployee;
