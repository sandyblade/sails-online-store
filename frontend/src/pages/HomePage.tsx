import { Fragment } from "react/jsx-runtime"
import { Row, Col, Container } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import SliderComponent from "../components/SliderComponent"
import BestSellerComponent from "../components/BestSellerComponent"


const HomePage = () => {

    return (
        <Fragment>
            <main className="flex-shrink-0">
                <Container>
                    <Row className='mt-5'>
                        <Col md={4}>
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/shop01.png"} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3 className='d-block'>Laptop</h3>
                                    <h3 className='d-block'> Collection</h3>
                                    <a href="#" className="cta-btn">Shop now <ArrowRightCircle className='me-1 mb-1' size={17} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/shop02.png"} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3 className='d-block'>Accessories</h3>
                                    <h3 className='d-block'> Collection</h3>
                                    <a href="#" className="cta-btn">Shop now <ArrowRightCircle className='me-1 mb-1' size={17} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/shop03.png"} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3 className='d-block'>Cameras</h3>
                                    <h3 className='d-block'> Collection</h3>
                                    <a href="#" className="cta-btn">Shop now <ArrowRightCircle className='me-1 mb-1' size={17} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            <main className="flex-shrink-0" id="products">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <div className="section-title">
                                <h3 className="title">New Products</h3>
                                <div className="section-nav">
                                    <ul className="section-tab-nav tab-nav">
                                        <li><a data-toggle="tab" href="#tab2" className='text-decoration-none'>Laptops</a></li>
                                        <li className="active"><a data-toggle="tab" href="#" className='text-decoration-none'>Smartphones</a></li>
                                        <li><a data-toggle="tab" href="#" className='text-decoration-none'>Cameras</a></li>
                                        <li><a data-toggle="tab" href="#" className='text-decoration-none'>Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <SliderComponent />
                        </div>
                    </div>
                </div>
            </main>
            <main className="flex-shrink-0 border" id="hot-deal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hot-deal">
                                <ul className="hot-deal-countdown">
                                    <li>
                                        <div>
                                            <h3>02</h3>
                                            <span>Days</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>10</h3>
                                            <span>Hours</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>34</h3>
                                            <span>Mins</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>60</h3>
                                            <span>Secs</span>
                                        </div>
                                    </li>
                                </ul>
                                <h2 className="text-uppercase">hot deal this week</h2>
                                <p>New Collection Up to 50% OFF</p>
                                <a className="bg-primary btn w-25 mt-1 text-white" href="#"><i className="bi bi-cart 'mb-1 me-1"></i>Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className="flex-shrink-0" id="top-selling">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <div className="section-title">
                                <h3 className="title">Top Selling</h3>
                                <div className="section-nav">
                                    <ul className="section-tab-nav tab-nav">
                                        <li><a data-toggle="tab" href="#tab2" className='text-decoration-none'>Laptops</a></li>
                                        <li className="active"><a data-toggle="tab" href="#" className='text-decoration-none'>Smartphones</a></li>
                                        <li><a data-toggle="tab" href="#" className='text-decoration-none'>Cameras</a></li>
                                        <li><a data-toggle="tab" href="#" className='text-decoration-none'>Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <SliderComponent />
                        </div>
                    </div>
                </div>
            </main>
            <main className="flex-shrink-0 mt-5 mb-4" id="best-seller">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="section-title text-center">
                                <h5 className="title">Best Seller</h5>
                            </div>
                            <div className="slider-container">
                                <BestSellerComponent />
                                <BestSellerComponent />
                                <BestSellerComponent />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="section-title text-center">
                                <h5 className="title">Best Seller</h5>
                            </div>
                            <div className="slider-container">
                                <BestSellerComponent />
                                <BestSellerComponent />
                                <BestSellerComponent />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="section-title text-center">
                                <h5 className="title">Best Seller</h5>
                            </div>
                            <div className="slider-container">
                                <BestSellerComponent />
                                <BestSellerComponent />
                                <BestSellerComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default HomePage