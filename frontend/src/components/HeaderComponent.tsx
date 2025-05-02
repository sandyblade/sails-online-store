import { Fragment,  useState } from "react";
import { PersonCircle, PersonFillAdd, Search, Heart, Cart, Grid, PersonPlus, ArrowRightCircle } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { BiLock } from "react-icons/bi";

interface userInterface {
    email:string,
    phone:string,
    city:string,
    country:string
}

const HeaderComponent = () => {

    const filters = ["All Categories", "Laptop", "Accessories", "Camera", "Earphone"]
    const [filter, setFilter] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const navigate = useNavigate();
    const logged:boolean = localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== null
    const user:userInterface | null = (localStorage.getItem('auth_user') !== undefined && localStorage.getItem('auth_user') !== null) ? JSON.parse(String(localStorage.getItem('auth_user'))) : {}
    

    const redirectTo = (event: React.MouseEvent<HTMLElement>, url: string) => {
        const e = event
        e.preventDefault()
        setShowModal(false)
        setTimeout(() => { navigate(url); })
    }

    const logout = (event: React.MouseEvent<HTMLElement>) => {
        const e = event
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();

        if (localStorage.getItem('auth_token')) {
            localStorage.removeItem('auth_token')
        }

        if (localStorage.getItem('auth_user')) {
            localStorage.removeItem('auth_user')
        }

        setTimeout(() => { location.reload() })
    }


    return (
        <Fragment>
            <header>
                <div id="top-header" className='p-0 bg-dark'>
                    <div className="container py-2">
                        <div className='clearfix'>
                            {logged ? <>
                                <ul className="header-links float-start p-0">
                                    <li><a href="https://wa.me/628989218470"><i className="bi bi-telephone-outbound me-1 mb-1 text-primary"></i> {user?.phone}</a></li>
                                    <li><a href="#"><i className="bi bi-envelope me-1 mb-1 text-primary"></i> {user?.email}</a></li>
                                    <li><a href="#"><i className="bi bi-pin-map me-1 mb-1 text-primary"></i> {user?.city}, {user?.country}</a></li>
                                </ul>
                            </> : <></>}
                            <ul className="header-links float-end p-0 header-account">
                                {logged ? <>
                                    <li><a href="#"><i className="bi bi-currency-dollar me-1 mb-1 text-primary"></i> USD</a></li>
                                    <li>
                                        <NavLink to="/account/profile"><PersonPlus className='me-1 mb-1 text-primary' /> My Account</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/account/password"><BiLock className='me-1 mb-1 text-primary' /> Change Password</NavLink>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => logout(e)} ><i className="fas fa-sign-out me-1 mb-1 text-primary"></i> Sign Out</a>
                                    </li>
                                </> : <>
                                    <li>
                                        <NavLink to="/auth/login"><PersonCircle className='me-1 mb-1 text-primary' /> Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/auth/register"><PersonFillAdd className='me-1 mb-1 text-primary' /> Register</NavLink>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="header" className="bg-primary p-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="header-logo">
                                    <NavLink to="/" className="logo">
                                        <img src="/logo.png" alt="logo" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="header-search mt-3">
                                    <InputGroup>
                                        <DropdownButton
                                            variant="bg-dark btn-dark"
                                            title={filters[filter]}
                                            id="input-group-dropdown-3"
                                        >
                                            {filters.map((row, i) => {
                                                return (
                                                    <Dropdown.Item href="#" key={i} onClick={() => setFilter(i)}>{row}</Dropdown.Item>
                                                )
                                            })}
                                        </DropdownButton>
                                        <Form.Control placeholder='Search here..' aria-label="Text input with 2 dropdown buttons" />
                                        <Button variant="bg-dark btn-dark" id="button-addon2">
                                            <Search className='mb-1 me-1' />Search
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-md-3 clearfix">
                                {logged ? <>

                                    <div className="header-ctn">

                                        <div className='position-relative'>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault()
                                                setShowModal(true)
                                                setWishlist(true)
                                            }} className='text-center text-decoration-none fw-bold'>
                                                <Heart className='mb-2' size={18} />
                                                <span className='d-block'>Your Wishlist</span>
                                            </a>
                                            <span className="position-absolute top-0 ms-3 start-50 translate-middle badge rounded-pill bg-danger">
                                                2
                                                <span className="visually-hidden">New Wishlist</span>
                                            </span>
                                        </div>

                                        <div className='position-relative'>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault()
                                                setShowModal(true)
                                                setWishlist(false)
                                            }} className='text-center text-decoration-none fw-bold'>
                                                <Cart className='mb-2' size={18} />
                                                <span className='d-block'>Your Cart</span>
                                            </a>
                                            <span className="position-absolute top-0 ms-3 start-50 translate-middle badge rounded-pill bg-danger">
                                                3
                                                <span className="visually-hidden">New Cart</span>
                                            </span>
                                        </div>

                                        <div className="menu-toggle">
                                            <a href="#">
                                                <Grid className='mb-2' size={18} />
                                                <span>Menu</span>
                                            </a>
                                        </div>

                                    </div>

                                </> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Modal
                show={showModal}
                onHide={() => { setShowModal(false) }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {wishlist ? <>
                            <Heart className='mb-2 me-2' />My Wishlist
                        </> : <>
                            <Cart className='mb-2 me-2' />My Cart
                        </>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='mb-2'>
                        <Col md={4} className='text-center'>
                            <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png"} className='img-thumbnail img-responsive' width={100} alt="" />
                        </Col>
                        <Col md={8}>
                            <a href='#' className='text-decoration-none text-uppercase text-muted d-block'>
                                <strong>product name goes here</strong>
                            </a>
                            {!wishlist ? <>
                                <span className='d-block mb-2'>
                                    1 x <strong>$980.00</strong>
                                </span>
                            </> : <></>}
                            <h5>$980.00</h5>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col md={4} className='text-center'>
                            <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png"} className='img-thumbnail img-responsive' width={100} alt="" />
                        </Col>
                        <Col md={8}>
                            <a href='#' className='text-decoration-none text-uppercase text-muted d-block'>
                                <strong>product name goes here</strong>
                            </a>
                            {!wishlist ? <>
                                <span className='d-block mb-2'>
                                    2 x <strong>$980.00</strong>
                                </span>
                            </> : <></>}
                            <h5>$1960.00</h5>
                        </Col>
                    </Row>

                    {!wishlist ? <>

                        <Row className='mb-2'>
                            <Col md={4} className='text-center'>
                                <img src={"https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png"} className='img-thumbnail img-responsive' width={100} alt="" />
                            </Col>
                            <Col md={8}>
                                <a href='#' className='text-decoration-none text-uppercase text-muted d-block'>
                                    <strong>product name goes here</strong>
                                </a>
                                {!wishlist ? <>
                                    <span className='d-block mb-2'>
                                        3 x <strong>$980.00</strong>
                                    </span>
                                </> : <></>}
                                <h5>$2940.00</h5>
                            </Col>
                        </Row>

                        <div className="cart-summary">
                            <small>3 Item(s) selected</small>
                            <h5>SUBTOTAL: $5880.00</h5>
                        </div>
                        <div className="cart-btns">
                            <a href="#" onClick={(e) => redirectTo(e, "/cart")} className='text-decoration-none'>View Cart <Cart className='' /></a>
                            <a href="#" onClick={(e) => redirectTo(e, "/checkout")} className='text-decoration-none'>Checkout  <ArrowRightCircle className='' /></a>
                        </div>

                    </> : <></>}
                </Modal.Body>
            </Modal>

        </Fragment >
    )
}

export default HeaderComponent