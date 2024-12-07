import React from 'react'
import '../pages/footer.css'
import { Col,Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { Link } from 'react-router-dom'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <footer className="footer-section text-light py-4">
    <div class="custom-shape-divider-top-1733499056">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
    </svg>
</div>
  <div className="container">
    <Row className="gy-4 mt-2">
      {/* About Us */}
      <Col xs={12} md={4}>
        <h5 className="fw-bold text-dark">About Us</h5>
        <p className="text-muted mt-2">
          We are a dynamic team committed to innovation and excellence. Join us to make a difference!
        </p>
      </Col>

      {/* Quick Links */}
      <Col xs={12} md={4}>
        <h5 className="fw-bold text-dark">Quick Links</h5>
        <ul className="list-unstyled mt-3">
          <li>
            <Link to="/" className="text-muted text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-muted text-decoration-none">About</Link>
          </li>
          <li>
            <Link to="/careers" className="text-muted text-decoration-none">Careers</Link>
          </li>
          <li>
            <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
          </li>
        </ul>
      </Col>

      {/* Contact Us */}
      <Col xs={12} md={4}>
        <h5 className="fw-bold text-dark">Contact Us</h5>
        <ul className="list-unstyled mt-3">
          <li className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-muted" />
            <a href="mailto:info@example.com" className="text-muted text-decoration-none">info@example.com</a>
          </li>
          <li className="d-flex align-items-center mt-2">
            <FontAwesomeIcon icon={faPhone} className="me-2 text-muted" />
            <span className='text-muted'>+123 456 7890</span>
          </li>
          <li className="d-flex align-items-center mt-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-muted" />
            <span className='text-muted'>123 Street, City, Country</span>
          </li>
        </ul>
      </Col>
    </Row>
    <div className="social-icons text-center mt-4">
      <a href="https://facebook.com" className="text-muted me-3">
        <FontAwesomeIcon icon={faFacebook} size="lg" className='text-muted' />
      </a>
      <a href="https://twitter.com" className="text-muted me-3">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href="https://linkedin.com" className="text-muted">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    </div>
    <p className="text-center text-muted mt-3">
      © {new Date().getFullYear()} Your Company Name. All rights reserved.
    </p>
  </div>
</footer>
    </>
  )
}

export default Footer