import { Fragment, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter } from 'react-bootstrap';
import { NavLink } from "react-router-dom"


const RegisterPage = () => {

  const [showPassword, setShowPassword] = useState(Boolean);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(Boolean);
  const nowYear: number = new Date().getFullYear()

  return (
    <Fragment>
      <main className="flex-shrink-0 p-3 border-bottom bg-gray text-uppercase mb-5" id="breadcrumb">
        <Container>
          <Row>
            <Col md={12}>
              <Breadcrumb className='mt-2'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Authentication</Breadcrumb.Item>
                <Breadcrumb.Item active>Register</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </main>
      <main className="flex-shrink-0 mb-5">
        <Container>
          <Row>
            <Col md={4} className='mx-auto'>
              <Card>
                <CardHeader className='text-center bg-primary p-2'>
                  <h5 className="text-white"><i className="bi-person-plus me-2"></i>Sign Up New Account</h5>
                </CardHeader>
                <CardBody className='mb-2 p-4'>
                  <div className="text-center">
                    <img alt="logo" width="85" className="img img-responsive" src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/app.png"} />
                    <p className="mt-2">
                      <small>Please fill in form to create new account.</small>
                    </p>
                  </div>
                  <form>
                    <div className="mb-3 mt-2">
                      <div className="input-group mb-3">
                        <span className="input-group-text">
                          <i className="bi-person-circle"></i>
                        </span>
                        <input type="text" id="name" name="name" className="form-control" placeholder="Full Name" required />
                      </div>
                    </div>
                    <div className="mb-3 mt-2">
                      <div className="input-group mb-3">
                        <span className="input-group-text">
                          <i className="bi-envelope"></i>
                        </span>
                        <input type="email" id="email" name="email" className="form-control" placeholder="Email Address" required />
                      </div>
                    </div>
                    <div className="mb-3 mt-2">
                      <div className="input-group mb-3">
                        <span className="input-group-text">
                          <i className="bi-lock"></i>
                        </span>
                        <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="form-control" placeholder="Credential Password" required />
                        <span className="input-group-text input-group-password" onClick={() => setShowPassword(!showPassword)} >
                          <i className={showPassword ? 'bi-eye' : 'bi-eye-slash'}></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 mt-2">
                      <div className="input-group mb-3">
                        <span className="input-group-text">
                          <i className="bi-lock"></i>
                        </span>
                        <input type={showPasswordConfirm ? 'text' : 'password'} id="password_confirm" name="password_confirm" className="form-control" placeholder="Confirm Credential Password" required />
                        <span className="input-group-text input-group-password" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} >
                          <i className={showPasswordConfirm ? 'bi-eye' : 'bi-eye-slash'}></i>
                        </span>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary border w-100 mt-2">
                      <i className="bi-box-arrow-right me-2"></i>Sign Up Now
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <small>Already have an account ? <NavLink to="/auth/login">Back To Sign In</NavLink></small>
                  </div>
                </CardBody>
                <CardFooter className='p-3 text-center bg-primary'>
                  <span className="text-white">
                    <small>Copyright {nowYear} - Elector Store</small>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  )
}

export default RegisterPage