import { Fragment, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import { CartCheck } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

const CheckoutPage = () => {

  const [payment, setPayment] = useState(0);
  const [agreement, setAgreement] = useState(false);

  return (
    <Fragment>
      <main className="flex-shrink-0 p-3 border-bottom bg-gray text-uppercase mb-5" id="breadcrumb">
        <Container>
          <Row>
            <Col md={12}>
              <Breadcrumb className='mt-2'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Order</Breadcrumb.Item>
                <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </main>
      <main className="flex-shrink-0 mb-4">
        <Container>
          <Row>
            <Col md={5}>
              <Form>
                <h3 className='text-uppercase mb-3'>Billing address</h3>

                <Form.Group className='mb-3'>
                  <Form.Label>First Name <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='text' placeholder='Enter Your First Name' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Last Name <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='text' placeholder='Enter Your Last Name' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>E-Mail Address <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='email' placeholder='Enter Your E-Mail Address' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Phone Number <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='text' placeholder='Enter Your Phone Number' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>City <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='text' placeholder='Enter Your City' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Country <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='text' placeholder='Enter Your Country' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Zip Code <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='text' placeholder='Enter Your Zip Code' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Street Address <span className='text-danger'>*</span></Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder='Enter Your Street Address' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Notes </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder='Enter Your Notes' />
                </Form.Group>

              </Form>
            </Col>
            <Col md={7}>
              <h3 className='text-uppercase mb-3'>details order</h3>
              <div className='card'>
                <div className='card-body'>
                  <Row className='mb-2'>
                    <Col md={3} className='text-center'>
                      <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png"} className='img-responsive' width={120} alt="" />
                    </Col>
                    <Col md={7} className='text-start p-3'>
                      <a href='#' className='text-decoration-none text-uppercase text-muted d-block mt-3'>
                        <strong>product name goes here</strong>
                      </a>
                      <span className='d-block mb-2 text-danger fw-bold'>
                        1 x <strong>$980.00</strong>
                      </span>
                    </Col>
                    <Col md={2} className='text-end p-3'>
                      <h6 className='text-danger fw-bold mt-4'>$980.00</h6>
                    </Col>
                  </Row>
                  <Row className='mb-2'>
                    <Col md={3} className='text-center'>
                      <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png"} className='img-responsive' width={120} alt="" />
                    </Col>
                    <Col md={7} className='text-start p-3'>
                      <a href='#' className='text-decoration-none text-uppercase text-muted d-block mt-3'>
                        <strong>product name goes here</strong>
                      </a>
                      <span className='d-block mb-2 text-danger fw-bold'>
                        2 x <strong>$980.00</strong>
                      </span>
                    </Col>
                    <Col md={2} className='text-end p-3'>
                      <h6 className='text-danger fw-bold mt-4'>$1960.00</h6>
                    </Col>
                  </Row>
                  <Row className='mb-2'>
                    <Col md={3} className='text-center'>
                      <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png"} className='img-responsive' width={120} alt="" />
                    </Col>
                    <Col md={7} className='text-start p-3'>
                      <a href='#' className='text-decoration-none text-uppercase text-muted d-block mt-3'>
                        <strong>product name goes here</strong>
                      </a>
                      <span className='d-block mb-2 text-danger fw-bold'>
                        3 x <strong>$980.00</strong>
                      </span>
                    </Col>
                    <Col md={2} className='text-end p-3'>
                      <h6 className='text-danger fw-bold mt-4'>$2940.00</h6>
                    </Col>
                  </Row>
                  <div className='border-top'></div>
                  <Row className='mb-1 p-2 mt-2'>
                    <Col md={3}>
                      <h6 className='text-start text-muted fw-bold text-uppercase'>subtotal</h6>
                    </Col>
                    <Col className='text-end'>
                      <h6 className='text-danger fw-bold'>$5,880.00</h6>
                    </Col>
                  </Row>
                  <Row className='mb-1 p-2'>
                    <Col md={3}>
                      <h6 className='text-start text-muted fw-bold text-uppercase'>Shiping</h6>
                    </Col>
                    <Col className='text-end'>
                      <h6 className='text-danger fw-bold'>$100.00</h6>
                    </Col>
                  </Row>
                  <Row className='mb-1 p-2'>
                    <Col md={3}>
                      <h6 className='text-start text-muted fw-bold text-uppercase'>Taxes (5%)</h6>
                    </Col>
                    <Col className='text-end'>
                      <h6 className='text-danger fw-bold'>$294.00</h6>
                    </Col>
                  </Row>
                  <Row className='mb-1 p-2'>
                    <Col md={3}>
                      <h3 className='text-start text-muted fw-bold text-uppercase'>TOTAL</h3>
                    </Col>
                    <Col className='text-end'>
                      <h3 className='text-danger fw-bold'>$6,274.00</h3>
                    </Col>
                  </Row>
                  <Row className='mb-1 p-2'>
                    <Col md={12}>
                      <Form.Check className='mb-1' name='payment' id='payment1' value={1} type={'radio'} onChange={(e) => setPayment(e.target.checked ? 1 : 0)} label={'Direct Bank Transfer'} />
                      <p className={payment === 1 ? 'd-block p-1' : 'd-none'}>
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </small>
                      </p>
                      <Form.Check className='mb-1' name='payment' id='payment2' value={2} type={'radio'} onChange={(e) => setPayment(e.target.checked ? 2 : 0)} label={'Cheque Payment'} />
                      <p className={payment === 2 ? 'd-block p-1' : 'd-none'}>
                        <small>
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                          making it over 2000 years old. Richard McClintoc, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                        </small>
                      </p>
                      <Form.Check className='mb-1' name='payment' id='payment3' value={3} type={'radio'} onChange={(e) => setPayment(e.target.checked ? 3 : 0)} label={'Paypal System'} />
                      <p className={payment === 3 ? 'd-block p-1' : 'd-none'}>
                        <small>
                          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </small>
                      </p>
                      <Form.Check className='mt-3' type={'checkbox'} onChange={(e) => { setAgreement(e.target.checked) }} label={"I've read and accept the terms & conditions"} />
                      <Button variant="bg-dark btn-primary btn-lg w-100 mt-4" disabled={!agreement || payment === 0}>
                        <CartCheck className='mb-1 me-1' />Place order
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  )
}

export default CheckoutPage