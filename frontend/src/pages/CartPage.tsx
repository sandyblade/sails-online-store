import { Fragment, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Telegram, Facebook, Twitter, Google, Instagram, Star, CurrencyExchange, Heart, Eye, StarFill, CartPlus, BagDash, BagPlus } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import { Rating } from '@smastrom/react-rating'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { NumericFormat } from 'react-number-format';
import Slider from "react-slick";
import RelatedProduct from "../components/RelatedProduct"

const CartPage = () => {

  const [rating, setRating] = useState(0);
  const [tabActive, setTabActive] = useState<string | null>('link-3');
  const price: number = 980.00
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(980);
  const images = [
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product04.png"
  ]
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear"
  }

  const renderTooltip = (word: string, id: string) => {
    return (
      <Tooltip id={id}>
        {word}
      </Tooltip>
    )
  }

  const handleQty = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) => {
    e.preventDefault()
    if (type === 'plus') {
      const _qty: number = qty + 1
      const _total: number = price * _qty
      setQty(_qty)
      setTotal(_total)
    } else {
      if (qty > 0) {
        const _qty: number = qty - 1
        const _total: number = price * _qty
        setQty(_qty)
        setTotal(_total)
      }
    }
  }

  const handleSelect = (e: string | null) => {
    setTabActive(e)
  }

  const handleRating = (e: number) => {
    setRating(e)
  }

  return (
    <Fragment>
      <main className="flex-shrink-0 p-3 border-bottom bg-gray text-uppercase mb-5" id="breadcrumb">
        <Container>
          <Row>
            <Col md={12}>
              <Breadcrumb className='mt-2'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">All Categorie</Breadcrumb.Item>
                <Breadcrumb.Item active>Product name goes here</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </main>
      <main className='flex-shrink-0'>
        <Container>
          <Row>
            <Col md={6}>
              <div className="slider-container text-center">
                <Slider {...setting}>
                  {images.map((image, index) => {
                    return (
                      <img key={index} src={image} className='card-img-top' alt='' />
                    )
                  })}
                </Slider>
              </div>
            </Col>
            <Col md={6} className='p-4'>
              <h3 className="fw-bolder text-uppercase">Product Name Goes Here</h3>
              <div className='clearfix mt-3 mb-1'>
                <div className="small text-warning mb-2">
                  <StarFill size={17} />
                  <StarFill size={17} />
                  <StarFill size={17} />
                  <StarFill size={17} />
                  <StarFill size={17} />
                </div>
                <a href='#' className='text-decoration-none'><small>10 Review(s) | Add your review</small></a>
              </div>
              <strong className='text-danger me-2'>$980.00</strong><del><strong className='text-muted'>$990.00</strong></del><strong className='text-danger ms-2'>IN STOCK</strong>
              <p className='mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='clearfix mt-2'>
                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Add To Wishlist', 'tooltip1')}>
                  <Button variant="btn btn-light border me-1"><Heart className='mb-1' /></Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Add To Compare', 'tooltip2')}>
                  <Button variant="btn btn-light border me-1"><CurrencyExchange className='mb-1' /></Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Quick View', 'tooltip3')}>
                  <Button variant="btn btn-light border me-1"><Eye className='mb-1' /></Button>
                </OverlayTrigger>
              </div>
              <div className='mt-4 text-uppercase'>
                <span className='text-muted d-inline'>Category :</span>
                <a className='d-inline ms-1 text-decoration-none' href="#">Headphones </a>
                <a className='d-inline ms-1 text-decoration-none' href="#">Accessories </a>
              </div>
              <div className='text-uppercase mt-2'>
                <small className='text-muted d-inline'>Share :</small>
                <a className='d-inline ms-1 text-decoration-none' href="#"><Facebook className='mb-1 ms-1' /></a>
                <a className='d-inline ms-1 text-decoration-none' href="#"><Twitter className='mb-1 ms-1' /></a>
                <a className='d-inline ms-1 text-decoration-none' href="#"><Google className='mb-1 ms-1' /></a>
                <a className='d-inline ms-1 text-decoration-none' href="#"><Instagram className='mb-1 ms-1' /></a>
              </div>
              <Form className='mt-3'>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formSize">
                      <Form.Label className='fw-bold'>Size <span className='text-danger'>*</span></Form.Label>
                      <Form.Select defaultValue={0}>
                        <option value={0} disabled>Please Select Size</option>
                        <option>11 to 12 inches</option>
                        <option>13 to 14 inches</option>
                        <option>15 to 16 inches</option>
                        <option>17 to 18 inches</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formQty">
                      <Form.Label className='fw-bold'>Qty <span className='text-danger'>*</span></Form.Label>
                      <InputGroup className="mb-3">
                        <Button variant="bg-danger btn-danger" id="button-addon2" onClick={(e) => handleQty(e, 'minus')}>
                          <BagDash />
                        </Button>
                        <Form.Control
                          readOnly={true}
                          type='text'
                          className='text-center'
                          value={qty}
                        />
                        <Button variant="bg-success btn-success" id="button-addon1" onClick={(e) => handleQty(e, 'plus')}>
                          <BagPlus />
                        </Button>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formColor">
                      <Form.Label className='fw-bold'>Color <span className='text-danger'>*</span></Form.Label>
                      <Form.Select defaultValue={0}>
                        <option value={0} disabled>Please Select Color</option>
                        <option>Blue</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Yellow</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formColor">
                      <Form.Label className='fw-bold text-danger'>$ Total</Form.Label>
                      <NumericFormat value={total} decimalScale={2} readOnly={true} className='form-control text-end fw-bold' thousandSeparator="," />
                    </Form.Group>
                  </Col>
                </Row>
                <a className="btn btn-primary text-white w-100 mt-4" href="#"><CartPlus className='mb-1 me-1' />Add To Cart</a>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
      <main className='flex-shrink-0 mt-5 mb-5'>
        <Container>
          <Row className='mb-2'>
            <Col md={12}>
              <Nav variant="underline" activeKey={tabActive === null ? 'link-3' : tabActive} onSelect={(e) => handleSelect(e)}>
                <Nav.Item className='me-4'>
                  <Nav.Link eventKey="link-1">Description</Nav.Link>
                </Nav.Item>
                <Nav.Item className='me-4'>
                  <Nav.Link eventKey="link-2">Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Reviews (3)</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className='tab-content'>
                <div className={tabActive === 'link-1' ? 'tab-pane container active p-0' : 'tab-pane container'}>
                  <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className={tabActive === 'link-2' ? 'tab-pane container active p-0' : 'tab-pane container'}>
                  <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className={tabActive === 'link-3' ? 'tab-pane container active p-0' : 'tab-pane container'}>
                  <Row className='mt-3'>
                    <Col md={3}>
                      <div className='clearfix'>
                        <h4 className='d-inline me-3'>4.5</h4>
                        <div className="d-inline text-warning">
                          <StarFill size={25} className='mb-3' />
                          <StarFill size={25} className='mb-3' />
                          <StarFill size={25} className='mb-3' />
                          <StarFill size={25} className='mb-3' />
                          <Star size={25} className='mb-3' />
                        </div>
                      </div>
                      <div className='clearfix mt-2'>
                        <Row>
                          <Col xs={6}>
                            <div className='text-warning mb-3'>
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                            </div>
                          </Col>
                          <Col xs={6}>
                            <ProgressBar variant="warning" label={'70 %'} now={70} />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                            <div className='text-warning mb-3'>
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                            </div>
                          </Col>
                          <Col xs={6}>
                            <ProgressBar variant="warning" label={'80 %'} now={80} />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                            <div className='text-warning mb-3'>
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                            </div>
                          </Col>
                          <Col xs={6}>
                            <ProgressBar variant="warning" label={'0 %'} now={0} />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                            <div className='text-warning mb-3'>
                              <StarFill size={15} className='mb-3' />
                              <StarFill size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                            </div>
                          </Col>
                          <Col xs={6}>
                            <ProgressBar variant="warning" label={'0 %'} now={0} />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                            <div className='text-warning mb-3'>
                              <StarFill size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                              <Star size={15} className='mb-3' />
                            </div>
                          </Col>
                          <Col xs={6}>
                            <ProgressBar variant="warning" label={'0 %'} now={0} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col xs={4}>
                          <strong className='d-block'>John Doe</strong>
                          <small className='small'>27 DEC 2018, 8:0 PM</small>
                          <div className='text-warning mt-2'>
                            <StarFill size={15} className='mb-3' />
                            <StarFill size={15} className='mb-3' />
                            <StarFill size={15} className='mb-3' />
                            <Star size={15} className='mb-3' />
                            <Star size={15} className='mb-3' />
                          </div>
                        </Col>
                        <Col xs={8}>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={4}>
                          <strong className='d-block'>John Doe</strong>
                          <small className='small'>27 DEC 2018, 8:0 PM</small>
                          <div className='text-warning mt-2'>
                            <StarFill size={15} className='mb-3' />
                            <StarFill size={15} className='mb-3' />
                            <StarFill size={15} className='mb-3' />
                            <Star size={15} className='mb-3' />
                            <Star size={15} className='mb-3' />
                          </div>
                        </Col>
                        <Col xs={8}>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={4}>
                          <strong className='d-block'>John Doe</strong>
                          <small className='small'>27 DEC 2018, 8:0 PM</small>
                          <div className='text-warning mt-2'>
                            <StarFill size={15} className='mb-3' />
                            <StarFill size={15} className='mb-3' />
                            <StarFill size={15} className='mb-3' />
                            <Star size={15} className='mb-3' />
                            <Star size={15} className='mb-3' />
                          </div>
                        </Col>
                        <Col xs={8}>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Form>
                        <Form.Control type='text' className='mb-2' placeholder='Your Name' defaultValue={''} />
                        <Form.Control type='email' className='mb-2' placeholder='Your E-Mail Address' defaultValue={''} />
                        <Form.Control as="textarea" className='mb-2' placeholder='Your Review' defaultValue={''} rows={3} />
                        <label className='mt-1'>Your Rating : </label>
                        <Rating style={{ maxWidth: 120 }} value={rating} onChange={handleRating} />
                        <a className="btn btn-primary text-white w-100 mt-2" href="#"><Telegram className='mb-1 me-1' />Submit</a>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col md={12}>
              <div className="section-title text-center">
                <h3 className="title">Related Products</h3>
              </div>
              <div className="slider-container text-center">
                <RelatedProduct />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  )
}

export default CartPage