import { Fragment } from "react/jsx-runtime"
import Slider from "react-slick";

const BestSellerComponent = () => {

  const images = [
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png",
  ]

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Fragment>
      <Slider {...setting}>
        {images.map((row, index) => {
          return (
            <div key={index} className="card me-2 p-4 rounded-0 border-0 d-block" v-for="image in images" >
              <div className="card-body clearfix">
                <div className="float-start">
                  <img src={row} className="img img-responsive text-center" width="120" alt="image" />
                </div>
                <div className="float-end">
                  <h5 className='text-primary'>CATEGORY</h5>
                  <h6 className="fw-bolder">Product Name Goes Here</h6>
                  <strong className='text-danger me-2'>$980.00</strong><del><strong className='text-muted'>$990.00</strong></del>
                  <div className='clearfix text-warning'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </Fragment>
  )
}

export default BestSellerComponent