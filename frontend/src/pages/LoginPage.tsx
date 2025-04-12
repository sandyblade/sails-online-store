import { Fragment, useState } from "react";
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from "react-router-dom"

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(Boolean);
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
                <Breadcrumb.Item active>Login</Breadcrumb.Item>
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
                  <h5 className="text-white"><i className="bi-person-lock me-2"></i>Login to your account</h5>
                </CardHeader>
                <CardBody className='mb-2 p-4'>
                  <div className="text-center">
                    <img alt="logo" width="85" className="img img-responsive" src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/app.png"} />
                    <p className="mt-2">
                      <small>Please sign in with your e-mail address and correct password.</small>
                    </p>
                  </div>
                  <form>
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
                    <div className="clearfix mb-3">
                      <div className="form-check float-start">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" name="remember" /> Remember Me
                        </label>
                      </div>
                      <div className="float-end">
                        <NavLink to="/auth/email/forgot">
                          <small className="fw-bold">Forgot Password ?</small>
                        </NavLink>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary border w-100 mt-2" title="Click here to sign in">
                      <i className="bi-box-arrow-right me-2"></i>Sign In Now
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <small>Don't have an account ? <NavLink to="/auth/register">Sign Up Now</NavLink></small>
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

export default LoginPage