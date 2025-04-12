import { Fragment } from "react/jsx-runtime"
import { StarFill, CartPlus } from 'react-bootstrap-icons';
import Slider from "react-slick";

const RelatedProduct = () => {

  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }

  const images = [
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png"
  ]

  return (
    <Fragment>
      <div className="slider-container text-center">
        <Slider {...setting}>
          {images.map((image, index) => {
            return (
              <div className='me-2' key={index}>
                <div className='card me-2'>
                  <img src={image} className='card-img-top' alt='' />
                  <div className='card-body p-4'>
                    <h5 className='text-primary'>CATEGORY</h5>
                    <h6 className="fw-bolder">Product Name Goes Here</h6>
                    <strong className='text-danger me-2'>$980.00</strong><del><strong className='text-muted'>$990.00</strong></del>
                    <div className="d-flex justify-content-center small text-warning">
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                    </div>
                  </div>
                  <div className="card-footer bg-transparent text-center border-top-0">
                    <a className="btn btn-primary text-white w-100" href="#"><CartPlus className='mb-1 me-1' />Add To Cart</a>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </Fragment>
  )
}

export default RelatedProduct