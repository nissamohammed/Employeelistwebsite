import React from 'react'
import { Col,Row } from 'react-bootstrap'
import img1 from '../assets/img1.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
function Home() {
  return (
    <>
    <div className='container-fluid bg-primary' style={{height:'100vh'}}>
      <Row className='align-items-center p-3 p-md-5'>
        <Col xs={12} md={6} className='px-5'>
        <h1 className='text-light fw-bolder' style={{fontSize:'70px'}}>Employee List</h1>
        <p className='mt-4 text-light'>Discover our talented and committed team.</p>  
        <Link to={'/login'}><button className='btn btn-warning mt-4 rounded-5 fw-bolder fs-5'>Get started<FontAwesomeIcon icon={faArrowRight} beat className='ms-2'/></button></Link>
        </Col >
      <Col xs={12} md={6}>
      <img src={img1} alt="no image"  className='w-75 rounded-5' style={{marginTop:'100px'}}/>
      </Col>
      </Row>
     </div>
    </>
  )
}

export default Home