import React, { useState } from 'react';
import styled from 'styled-components';

// Make sure to include this in your index.html or layout:
// <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #2C2478;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const InputGroup = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
  color: #2C2478;
`;

const Input = styled.input`
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Montserrat', sans-serif;
`;

const Select = styled.select`
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Montserrat', sans-serif;
`;

const FileUploadBox = styled.div`
  padding: 1.5rem;
  border: 2px dashed #ccc;
  text-align: center;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #666;
`;

const SubmitButton = styled.button`
  padding: 0.9rem 2rem;
  background-color: rgb(76, 69, 138);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  align-self: flex-start;

  &:hover {
    background-color: #2C2478;
  }
`;

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    residentState: '',
    phone: '',
    altPhone: '',
    position: '',
    positionOther: '',
    workMode: '',
    workedBefore: '',
    workedBeforeDate: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
    console.log(formData);
  };

  return (
    <Container>
      <Title>Job Seekers Application</Title>
      <Form onSubmit={handleSubmit}>
        <Row>
          <InputGroup>
            <Label>First Name</Label>
            <Input name="firstName" onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Last Name</Label>
            <Input name="lastName" onChange={handleChange} required />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label>Street Address</Label>
          <Input name="address1" onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <Label>Street Address Line 2</Label>
          <Input name="address2" onChange={handleChange} />
        </InputGroup>

        <Row>
          <InputGroup>
            <Label>City</Label>
            <Input name="city" onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>State / Province</Label>
            <Input name="state" onChange={handleChange} required />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label>Postal / Zip Code</Label>
          <Input name="zip" onChange={handleChange} required />
        </InputGroup>

        <InputGroup>
          <Label>State of Resident</Label>
          <Select name="residentState" onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </Select>
        </InputGroup>

        <Row>
          <InputGroup>
            <Label>Phone Number</Label>
            <Input name="phone" type="tel" placeholder="(000) 000-0000" onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Alternate Number</Label>
            <Input name="altPhone" type="tel" placeholder="(000) 000-0000" onChange={handleChange} />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label>Position for which you are applying for</Label>
          <Select name="position" onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Engineer">Engineer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Other">Other</option>
          </Select>
        </InputGroup>

        {formData.position === 'Other' && (
          <InputGroup>
            <Label>If other, kindly specify</Label>
            <Input name="positionOther" onChange={handleChange} />
          </InputGroup>
        )}

        <InputGroup>
          <Label>Preferred working mode</Label>
          <Select name="workMode" onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Label>Have you previously worked with us?</Label>
          <Select name="workedBefore" onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </InputGroup>

        {formData.workedBefore === 'Yes' && (
          <InputGroup>
            <Label>If so, when?</Label>
            <Input name="workedBeforeDate" type="date" onChange={handleChange} />
          </InputGroup>
        )}

        <InputGroup>
          <Label>Upload Your CV</Label>
          <FileUploadBox>
            <Input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              style={{ border: 'none' }}
            />
            <p>Drag and drop files here</p>
          </FileUploadBox>
        </InputGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
}

export default JobApplicationForm;
