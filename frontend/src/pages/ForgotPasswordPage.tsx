import { Fragment } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const ForgotPasswordPage = () => {

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
                <Breadcrumb.Item active>Forgot Password</Breadcrumb.Item>
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
                  <h5 className="text-white"><i className="bi-person-lock me-2"></i>Forgot Password</h5>
                </CardHeader>
                <CardBody className='mb-2 p-4'>
                  <div className="text-center">
                    <img alt="logo" width="85" className="img img-responsive" src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/app.png"} />
                    <p className="mt-2">
                      <small>We'll e-mail you instructions on how to reset your password.</small>
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
                    <button type="submit" className="btn btn-primary border w-100 mt-2" title="Click here to sign in">
                      <i className="bi-send me-2"></i>Request Password Reset
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

export default ForgotPasswordPage