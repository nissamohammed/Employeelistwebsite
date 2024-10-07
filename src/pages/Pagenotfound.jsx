import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <>
    <div className="row w-100">
        <div className="col-md-3"></div>
        <div className="col-md-6">
              <div style={{ width: '100%',textAlign:'center' }} className='d-flex justify-content-center align-item-center flex-column p-5'>
                  <h1 className='text-success ms-5' style={{ fontSize: '50px', fontWeight: '800' }}>404 - Page Not Found</h1>
                  <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="no image" width={'100%'} />
                  <h1>Look's like you're Lost</h1>
                 <Link to={'/'}> <button className='btn btn-success mt-3 w-25 ms-5'><FontAwesomeIcon icon={faArrowLeft}  className='me-2'/>Back to Home</button></Link>
              </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  )
}

export default Pagenotfound