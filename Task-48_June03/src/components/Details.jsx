import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PdfDocument from './PdfDocument';

function Details(props) {

    const [pdfValidation , setPdfValidation] = useState(false);

    function handlePDF(){
        setPdfValidation(true);
    }

    return (
        <div className="preview-section">
            <h3 className='details-head'>Details Preview</h3>

            {props.formData.profilePhoto && (
                <div className="profile-photo">
                    <img src={URL.createObjectURL(props.formData.profilePhoto)} alt="Profile" width="200" className="round-image"/>
                </div>
            )}

            <div className='profile-details'>

            <p>Full Name: {props.formData.fullName}</p>
            <p>Job Title: {props.formData.jobTitle}</p>
            <p>Email: {props.formData.email}</p>
            <p>Phone: {props.formData.phone}</p>
            <p>Address: {props.formData.address}</p>
            <p>Education: {props.formData.education}</p>
            <p>Experience: {props.formData.experience}</p>
            <p>Skills: {props.formData.skills}</p>

            </div>
            <Button variant='outline-primary' type='button' className='details-btn' onClick={handlePDF}>Save as PDF</Button>

            {pdfValidation && <PdfDocument formData={props.formData} />}
        </div>
    );
}

export default Details;
