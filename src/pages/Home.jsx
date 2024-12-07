import React from 'react'
import { Col,Row } from 'react-bootstrap'
import img1 from '../assets/img1.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import '../pages/home.css'
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie'
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock'
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake'
import Footer from './Footer'
import proimg1 from '../assets/proimg1.jpg'
import proimg2 from '../assets/proimg2.jpg'
import proimg3 from '../assets/proimg3.jpg'
function Home() {
  return (
    <>
    <div className="container-fluid position-relative" style={{ minHeight: '95vh', background: 'linear-gradient(135deg, #0ff8f0cf, #0215e7)' }}>
  <Row className="align-items-center p-3 p-md-5">
    <Col xs={12} md={6} className="px-5">
      <h1
        className="text-light fw-bolder animate-heading"
        style={{ fontSize: 'clamp(40px, 5vw, 70px)', lineHeight: '1.2' }}
      >
       <span className='text-dark'>EMPLOYEE</span> List
      </h1>
      <p className="mt-4 text-light fs-5 animate-text">
        Discover our talented and committed team.
      </p>
      <Link to="/login">
        <button
          className="btn btn-warning mt-4 rounded-5 fw-bolder fs-5 px-4 py-2 animate-button"
          style={{ transition: 'all 0.3s ease-in-out' }}
        >
          Get started
          <FontAwesomeIcon icon={faArrowRight} beat className="ms-2" />
        </button>
      </Link>
    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-center">
      <img
        src={img1}
        alt="Employee"
        className="img-fluid animate-image"
        style={{ maxWidth: '75%', marginTop: '100px' }}
      />
    </Col>
  </Row>
  <div className="custom-shape-divider-bottom-1733494843">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
        className="shape-fill"
      ></path>
    </svg>
  </div>
</div>

{/**projects */}
<div className="projects-section py-5">
  <h2 className="text-center fw-bold text-dark animate-heading" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
    Our Projects
  </h2>
  <p className="text-center text-muted mt-3 fs-5 animate-text">
    Take a look at some of the amazing projects we've worked on.
  </p>
  <Row className="mt-5 px-3 px-md-5 gx-4 gy-4">
    <Col xs={12} sm={6} md={4}>
      <div className="project-card shadow-lg rounded-4 overflow-hidden">
        <img
          src={proimg1}
          alt="Project 1"
          className="w-100 project-img"
        />
        <div className="p-3">
          <h5 className="fw-bold">Project Title 1</h5>
          <p className="text-muted">A brief description of the project. Highlight the main goals or achievements.</p>
          <button className="btn btn-outline-primary btn-sm mt-2">Learn More</button>
        </div>
      </div>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <div className="project-card shadow-lg rounded-4 overflow-hidden">
        <img
          src={proimg2}
          alt="Project 2"
          className="w-100 project-img"
        />
        <div className="p-3">
          <h5 className="fw-bold">Project Title 2</h5>
          <p className="text-muted">A brief description of the project. Highlight the main goals or achievements.</p>
          <button className="btn btn-outline-primary btn-sm mt-2">Learn More</button>
        </div>
      </div>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <div className="project-card shadow-lg rounded-4 overflow-hidden">
        <img
          src={proimg3}
          alt="Project 3"
          className="w-100 project-img"
        />
        <div className="p-3">
          <h5 className="fw-bold">Project Title 3</h5>
          <p className="text-muted">A brief description of the project. Highlight the main goals or achievements.</p>
          <button className="btn btn-outline-primary btn-sm mt-2">Learn More</button>
        </div>
      </div>
    </Col>
  </Row>
</div>





{/**features */}
<div className="features-section py-5">
<div class="custom-shape-divider-top-1733497551">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div>
  <h2 className="text-center fw-bold text-light animate-heading" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
    Why Choose Us?
  </h2>
  <p className="text-center text-light mt-3 fs-5 animate-text">
    Explore the unique features and benefits of being part of our team.
  </p>
  <Row className="mt-5 justify-content-center gx-4 gy-4 px-3">
    <Col xs={12} md={4} className="d-flex justify-content-center">
      <div className="feature-card text-center p-4 rounded-4 shadow-lg animate-feature">
        <FontAwesomeIcon icon={faUserTie} className="text-warning fs-1 mb-3" />
        <h4 className="fw-bold">Professional Team</h4>
        <p className="mt-2 text-muted">
          Work with highly skilled and motivated professionals dedicated to excellence.
        </p>
      </div>
    </Col>
    <Col xs={12} md={4} className="d-flex justify-content-center">
      <div className="feature-card text-center p-4 rounded-4 shadow-lg animate-feature">
        <FontAwesomeIcon icon={faClock} className="text-warning fs-1 mb-3" />
        <h4 className="fw-bold">Time Efficiency</h4>
        <p className="mt-2 text-muted">
          Streamline your workflow with optimized processes and quick turnarounds.
        </p>
      </div>
    </Col>
    <Col xs={12} md={4} className="d-flex justify-content-center">
      <div className="feature-card text-center p-4 rounded-4 shadow-lg animate-feature">
        <FontAwesomeIcon icon={faHandshake} className="text-warning fs-1 mb-3" />
        <h4 className="fw-bold">Collaborative Culture</h4>
        <p className="mt-2 text-muted">
          Experience a supportive and inclusive work environment where ideas thrive.
        </p>
      </div>
    </Col>
  </Row>
</div>

{/**testimonials */}
<div className="testimonials-section py-5">
  <h2 className="text-center fw-bold text-dark animate-heading" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
    What Our Employees Say
  </h2>
  <p className="text-center text-muted mt-3 fs-5 animate-text">
    Hear from our amazing team members about their experiences.
  </p>

  <div id="testimonialCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active text-center">
        <img
          src="https://www.enginess.io/assets/Enginess/Images/insights/2023/Empowering%20Your%20Workforce%20The%20Advantages%20of%20an%20Employee%20Portal.jpg"
          className="rounded-circle shadow-lg mb-4"
          alt="Employee"
          style={{ width: '100px', height: '100px' }}
        />
        <blockquote className="blockquote">
          <p className="mb-4 fs-5 text-muted">
            "Working here has been a transformative experience. The team is incredibly supportive and talented."
          </p>
        </blockquote>
        <footer className="blockquote-footer">Sarah Johnson, Software Developer</footer>
      </div>
      <div className="carousel-item text-center">
        <img
          src="https://images.unsplash.com/photo-1560264357-8d9202250f21?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVtcGxveWVlc3xlbnwwfHwwfHx8MA%3D%3D"
          className="rounded-circle shadow-lg mb-4"
          alt="Employee"
          style={{ width: '100px', height: '100px' }}
        />
        <blockquote className="blockquote">
          <p className="mb-4 fs-5 text-muted">
            "I love the collaborative culture and the opportunities for growth. This place feels like home!"
          </p>
        </blockquote>
        <footer className="blockquote-footer">John Doe, Project Manager</footer>
      </div>
      <div className="carousel-item text-center">
        <img
          src="https://cdn.theportalcompany.com/blobtheportalc1322f48562/wp-content/uploads/2024/05/employee-portal-hr-team.webp"
          className="rounded-circle shadow-lg mb-4"
          alt="Employee"
          style={{ width: '100px', height: '100px' }}
        />
        <blockquote className="blockquote">
          <p className="mb-4 fs-5 text-muted">
            "The company values innovation and empowers employees to bring their best ideas to life."
          </p>
        </blockquote>
        <footer className="blockquote-footer">Emily Carter, UI/UX Designer</footer>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

{/**contact */}
<div className="join-team-section py-5 text-light">
  <Row className="align-items-center px-3 px-md-5">
    <Col xs={12} md={6} className="text-center text-md-start">
      <h2 className="fw-bold animate-heading" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
        Join Our Team!
      </h2>
      <p className="mt-3 fs-5 animate-text">
        Be part of a dynamic and innovative team that values creativity and collaboration. Let's build something amazing together!
      </p>
      <Link to="/careers">
        <button
          className="btn btn-warning mt-4 rounded-5 fw-bold fs-5 px-4 py-2 animate-button"
          style={{ transition: 'all 0.3s ease-in-out' }}
        >
          View Open Positions
        </button>
      </Link>
    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-center mt-4 mt-md-0">
      <form className="p-4 rounded-4 shadow-lg bg-white w-100" style={{ maxWidth: '500px' }}>
        <h4 className="text-dark fw-bold mb-3">Get in Touch</h4>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-muted">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-muted">
            Email
          </label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label text-muted">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100 fw-bold">
          Submit
        </button>
      </form>
    </Col>
  </Row>
</div>

<Footer/>



    </>
  )
}

export default Home