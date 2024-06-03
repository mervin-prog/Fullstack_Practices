import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Resume.css';
import Details from './Details';

function Resume(){

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    profilePhoto: null
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
};

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profilePhoto: file });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="resume-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Education</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Education"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your education details.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom07">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your work experience.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom08">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your skills.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom09">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button variant='outline-success' type="submit">Submit</Button>
      </Form>

      {validated && <Details formData={formData}/>}
    </div>
  );
}

export default Resume;
