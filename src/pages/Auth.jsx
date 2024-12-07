import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import img2 from '../assets/img2.png'
import { loginApi } from '../services/allApi';

function Auth() {
  const navigate = useNavigate()
  const [userdetails, setuserdetails] = useState({
username:"",
password:""
  })
  console.log(userdetails);

/*const handleRegister = async()=>{
  const {username,email,password} = userdetails
  if(!username || !email || !password){
    alert('please fill the form completely')
  }
  else{
    const result =await registerApi(userdetails)
    console.log(result);
    if(result.status==200){
      alert('Registration successfull')
      navigate('/login')
    }
  }
}*/


const handleLogin = async()=>{
  const {username , password} = userdetails
  if(!username || !password){
    alert('please fill the fields completely')
  }
  else{
    const result = await loginApi({username,password})
    console.log(result);

    //200 serires we know that result can be seen in 200 and error can be in 406 as we set,
    // in json we dont know 200 to 300 series is answer.
    if(result.status==200){
      alert('login successfull')

      //section storage methods
      //add data - setItem(),get data-getItem(),remove - removeItem()
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token", result.data.token)
      setuserdetails({
        username: "",
        password: ""
      })

      //navigate('/')-if settime out not used we cannot see toast message 
      setTimeout(()=>{
        navigate('/dashboard')
      },2000)

    }else{
      alert(result.response.data)
      //toast.error(result.response.data) - if toast is used
    }

  }
}
  return (
    <>
  <div
  className="container-fluid d-flex justify-content-center align-items-center flex-column"
  style={{
    height: "100vh",
    background: "linear-gradient(135deg, #1d3557, #457b9d)",
  }}
>
  <div className="container p-5 rounded shadow-lg" style={{ maxWidth: "450px", background: "#f1faee" }}>
    {/* Back Home Link */}
    <Link
      to="/"
      className="text-dark d-flex align-items-center mb-4"
      style={{ textDecoration: "none", fontWeight: "500" }}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
      Back Home
    </Link>

    {/* Logo and Heading */}
    <div className="text-center mb-4">
      <img
        src={img2}
        alt="no image"
        className="rounded-circle"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          border: "4px solid #457b9d",
        }}
      />
      <h3 className="mt-3 text-dark">
        <FontAwesomeIcon icon={faStackOverflow} className="fa-lg me-2 text-warning" />
        Employee List
      </h3>
      <p className="text-muted">Sign in to manage your account</p>
    </div>

    {/* Form */}
    <form className="mt-3">
      <div className="form-floating mb-3">
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Username"
          required
          minLength="3"
          onChange={(e) =>
            setuserdetails({ ...userdetails, username: e.target.value })
          }
          style={{ border: "1px solid #a8dadc" }}
        />
        <label htmlFor="username" style={{ color: "#457b9d" }}>Username</label>
      </div>
      <div className="form-floating mb-4">
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) =>
            setuserdetails({ ...userdetails, password: e.target.value })
          }
          style={{ border: "1px solid #a8dadc" }}
        />
        <label htmlFor="password" style={{ color: "#457b9d" }}>Password</label>
      </div>

      <button
        type="button"
        className="btn btn-warning w-100 py-2"
        style={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, #e63946, #ffaf42)",
          border: "none",
        }}
        onClick={handleLogin}
      >
        Login
      </button>
    </form>

    {/* Footer */}
    <div className="text-center mt-4">
      <small className="text-muted">
        Don’t have an account?{" "}
        <Link to="/register" style={{ color: "#1d3557", textDecoration: "underline" }}>
          Register
        </Link>
      </small>
    </div>
  </div>
</div>
    </>
  )
}

export default Auth