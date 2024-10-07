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
   <div className=' container-fluid d-flex justifycontent-center align-items-center flex-column'
        style={{ height: '100vh' }}>
        <div className="container w-75 p-5" style={{textDecoration:'none'}}>
          <Link to={'/'} className='text-warning ' style={{textDecoration:'none'}}>
            <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back Home</Link>

          <div className=" bg-primary p-3 mt-3 rounded-5">
            <Row>
              <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
                <img src={img2} alt="no image" className='w-100' />
              </Col>
              <Col sm={12} md={6} className='d-flex justify-content-center align-items-center text-light flex-column'>
                <h3><FontAwesomeIcon icon={faStackOverflow} className='fa-2x me-3' />Employee List</h3>
           
              <h5>Sign In to your Account</h5>

              <form  className='mt-4 w-75'>
                <div className='mb-3'>
                      <input type="text" placeholder='Username' className='form-control' required minLength={'3'}
                      onChange={(e)=>setuserdetails({...userdetails,username:e.target.value})}/>
                </div>
                <div className='mb-3'>
                <input type="text" placeholder='Password' className='form-control'
                onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})}/>
                </div>
                <div className='mb-3'>
                
                <div>
                <button type='button' className='btn btn-warning w-100 mt-3' onClick={handleLogin} >Login</button>
                
                </div>
                </div>
              </form>
              </Col>
            </Row>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Auth