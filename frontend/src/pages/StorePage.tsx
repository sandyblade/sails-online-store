import { Fragment, useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-range-slider-input';
import { NumericFormat } from 'react-number-format';
import { StarFill, Star, Search, CartPlus } from 'react-bootstrap-icons';
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const StorePage = () => {


  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const defaultValue: [number, number] = [19.999, 70.99]
  const images = [
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product04.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product05.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product06.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product07.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product08.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product09.png",
  ]

  const handlePrice = (input: [number, number]) => {
    setMinPrice(input[0])
    setMaxPrice(input[1])
  }

  useEffect(() => {
    setMinPrice(defaultValue[0])
    setMaxPrice(defaultValue[1])
  }, [])


  return (
    <Fragment>
      <main className="flex-shrink-0 p-3 border-bottom bg-gray text-uppercase mb-5" id="breadcrumb">
        <Container>
          <Row>
            <Col md={12}>
              <Breadcrumb className='mt-2'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">All Categorie</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Accessories </Breadcrumb.Item>
                <Breadcrumb.Item active>Headphones (227,490 Results)</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </main>
      <main className="flex-shrink-0 mb-4">
        <Container>
          <Row>
            <Col md={3}>
              <h4 className='text-uppercase mb-4'>Categories</h4>
              <Form.Check className='mb-3' type={'checkbox'} label={'Laptops (120)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'Smartphones (740)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'Cameras (1450)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'Accessories (578)'} />
              <Form.Check className='mb-5' type={'checkbox'} label={'Smartphones (740)'} />

              <h4 className='text-uppercase mb-4'>Price</h4>
              <RangeSlider defaultValue={defaultValue} onInput={(e) => handlePrice(e)} />
              <Form.Group className="mb-3 mt-4">
                <Form.Label className='fw-bold text-success'>Minimum Price ($)</Form.Label>
                <NumericFormat value={minPrice} decimalScale={2} readOnly={true} className='form-control text-end fw-bold' thousandSeparator="," />
              </Form.Group>
              <Form.Group className="mb-3 mt-4">
                <Form.Label className='fw-bold text-danger'>Maximum Price ($)</Form.Label>
                <NumericFormat value={maxPrice} decimalScale={2} readOnly={true} className='form-control text-end fw-bold' thousandSeparator="," />
              </Form.Group>

              <h4 className='text-uppercase mt-4 mb-4'>Brands</h4>
              <Form.Check className='mb-3' type={'checkbox'} label={'SAMSUNG (578)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'LG (125)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'SONY (755)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'ASUS (578)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'APPLE (125)'} />
              <Form.Check className='mb-3' type={'checkbox'} label={'MICROSOFT (755)'} />

              <h4 className='text-uppercase mt-4 mb-4'>Top Selling</h4>

              {images.slice(0, 3).map((image, index) => {
                return (
                  <div className='card border-0 mb-2' key={index}>
                    <div className='card-body clearfix'>
                      <div className='float-start'>
                        <img src={image} className='img img-responsive text-center' width={80} alt='' />
                      </div>
                      <div className='float-end'>
                        <small className='text-primary d-block'>CATEGORY</small>
                        <small className="fw-bolder d-block">Product Name Goes Here</small>
                        <small className='text-danger me-2'>$980.00</small><del><small className='text-muted'>$990.00</small></del>
                        <div className='clearfix text-warning'>
                          <StarFill size={17} />
                          <StarFill size={17} />
                          <StarFill size={17} />
                          <StarFill size={17} />
                          <Star size={17} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

            </Col>
            <Col md={9}>
              <Row>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label className='fw-bold'>Sort By</Form.Label>
                    <Form.Select defaultValue={0}>
                      <option value={0}>Released Date</option>
                      <option value={1}>Rating</option>
                      <option value={2}>Lowest Price</option>
                      <option value={3}>Highest Price</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label className='fw-bold'>Show</Form.Label>
                    <Form.Select defaultValue={10}>
                      <option value={10}>10 Products</option>
                      <option value={25}>25 Products</option>
                      <option value={50}>50 Products</option>
                      <option value={100}>100 Products</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className='fw-bold'>Search</Form.Label>
                    <InputGroup>
                      <Form.Control placeholder='Search here..' />
                      <Button variant="bg-dark btn-primary">
                        <Search className='mb-1 me-1' />Search
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Row className='mt-4'>
                {images.map((image, index) => {
                  return (
                    <Col md={4} xs={6} key={index} className='mb-3'>
                      <div className='card'>
                        <img src={image} className='card-img-top' alt='' />
                        <div className='card-body p-4'>
                          <h5 className='text-primary'>CATEGORY</h5>
                          <h6 className="fw-bolder">Product Name Goes Here</h6>
                          <strong className='text-danger me-2'>$980.00</strong><del><strong className='text-muted'>$990.00</strong></del>
                          <div className="d-flex small text-warning">
                            <StarFill size={17} />
                            <StarFill size={17} />
                            <Star size={17} />
                            <Star size={17} />
                            <Star size={17} />
                          </div>
                        </div>
                        <div className="card-footer bg-transparent text-center border-top-0">
                          <a className="btn btn-primary text-white w-100" href="#"><CartPlus className='mb-1 me-1' />Add To Cart</a>
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
              <Row className='mt-5'>
                <Col md={6}>
                  <Pagination>
                    <Pagination.Item active={false}>First</Pagination.Item>
                    <Pagination.Item active={false}>Previous</Pagination.Item>
                    <Pagination.Item key={1} active={false}>1</Pagination.Item>
                    <Pagination.Item key={2} active={false}>2</Pagination.Item>
                    <Pagination.Item key={3} active={true}>3</Pagination.Item>
                    <Pagination.Item key={4} active={false}>4</Pagination.Item>
                    <Pagination.Item key={5} active={false}>5</Pagination.Item>
                    <Pagination.Item active={false}>Next</Pagination.Item>
                    <Pagination.Item active={false}>Last</Pagination.Item>
                  </Pagination>
                </Col>
                <Col md={6} className='text-end'>
                  <small className='text-muted mt-2'>Showing 20-100 products</small>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  )
}

export default StorePage