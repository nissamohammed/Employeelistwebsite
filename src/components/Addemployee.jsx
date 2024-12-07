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

      <Modal show={show} onHide={handleClose} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title className="text-center w-100">Add Employee Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form>
      <Row>
        {/* Image Upload Section */}
        <Col sm={12} md={5} className="d-flex flex-column align-items-center">
          <label htmlFor="proimg" className="w-100 text-center mb-3">
            <input
              id="proimg"
              type="file"
              style={{ display: "none" }}
              key={key}
              onChange={handleFile}
            />
            <img
              src={
                preview
                  ? preview
                  : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Image_Icon.png"
              }
              alt="no image"
              width="100%"
              className="rounded shadow-sm"
            />
            <small className="text-muted d-block mt-2">
              Click on the image to upload
            </small>
          </label>
        </Col>

        {/* Form Section */}
        <Col sm={12} md={7}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={employeedetails.name}
              className="form-control"
              onChange={handleChange}
              name="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={employeedetails.email}
              className="form-control"
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile No:
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter Mobile Number"
              value={employeedetails.mobile}
              className="form-control"
              onChange={handleChange}
              name="mobile"
            />
          </div>

          <Row>
            <Col sm={12} md={6}>
              <div className="mb-3">
                <label htmlFor="designation" className="form-label">
                  Designation:
                </label>
                <select
                  id="designation"
                  name="designation"
                  value={employeedetails.designation}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">-- Select Designation --</option>
                  <option value="HR">HR</option>
                  <option value="Manager">Manager</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="mb-3">
                <label className="form-label">Gender:</label>
                <div className="d-flex gap-3">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={employeedetails.gender === "male"}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    Male
                  </label>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={employeedetails.gender === "female"}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    Female
                  </label>
                </div>
              </div>
            </Col>
          </Row>

          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Course:
            </label>
            <input
              type="text"
              id="course"
              placeholder="Enter Course"
              value={employeedetails.course}
              className="form-control"
              onChange={handleChange}
              name="course"
            />
          </div>
        </Col>
      </Row>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose1}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleAdd}>
      Add Employee
    </Button>
  </Modal.Footer>
</Modal>
    </>
  );
}

export default Addemployee;
