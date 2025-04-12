import { Fragment } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Row, Col, Container } from 'react-bootstrap';
import TimelineComponent from "../components/TimelineComponent"

const ProfilePage = () => {
  return (
    <Fragment>
      <main className="flex-shrink-0 p-3 border-bottom bg-gray text-uppercase mb-5" id="breadcrumb">
        <Container>
          <Row>
            <Col md={12}>
              <Breadcrumb className='mt-2'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Profile</Breadcrumb.Item>
                <Breadcrumb.Item active>Change Profile</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </main>
      <main className="flex-shrink-0 mb-5">
        <Container>
          <Row>
            <Col md={6} >
              <form>
                <h3 className='text-uppercase mb-3 text-center'>Account Profile</h3>
                <div className="mb-3">
                  <i className="bi-person-circle d-block mb-3 image-user-font"></i>
                  <label className="form-label">Image Profile </label>
                  <input type="file" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">First Name <span className="text-danger">*</span></label>
                  <input placeholder="Enter Your First Name" type="text" className="form-control" value="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name <span className="text-danger">*</span></label>
                  <input placeholder="Enter Your Last Name" type="text" className="form-control" value="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">E-Mail Address <span className="text-danger">*</span></label>
                  <input placeholder="Enter Your E-Mail Address" type="email" className="form-control" value="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                  <input placeholder="Enter Your Phone Number" type="tel" className="form-control" value="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">City <span className="text-danger">*</span></label>
                  <input placeholder="Enter Your City" type="text" className="form-control" value="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Country <span className="text-danger">*</span></label>
                  <input placeholder="Enter Your Country" type="text" className="form-control" value="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Zip Code <span className="text-danger">*</span></label>
                  <input placeholder="Enter Your Zip Code" type="text" className="form-control" value="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Street Address <span className="text-danger">*</span></label>
                  <textarea rows={3} placeholder='Enter Your Street Address' className="form-control"></textarea>
                </div>
                <button type='submit' className="btn btn-lg btn-primary me-2">
                  Update Profile
                </button>
                <button type='reset' className="btn btn-lg btn-danger">
                  Reset Form
                </button>
              </form>
            </Col>
            <Col md={6} >
              <h3 className='text-uppercase mb-3 text-center'>Your Activity</h3>
              <div className="p-1">
                <TimelineComponent />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  )
}

export default ProfilePage