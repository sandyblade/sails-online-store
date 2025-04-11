import { Fragment } from "react/jsx-runtime"
import { Star, StarFill } from 'react-bootstrap-icons';
import Slider from "react-slick";

interface IBestSellerComponent { num: number }

const BestSellerComponent = (props: IBestSellerComponent) => {

  const num = props.num
  const images = [
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product04.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product05.png",
    "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product06.png"
  ]

 

  const Product1 = images[0]
  const Product2 = images[1]
  const Product3 = images[2]
  const Product4 = images[3]
  const Product5 = images[4]
  const Product6 = images[5]

  return (
     <Fragment>
         <div className='card me-2 p-4 rounded-0 border-0'>
              <div className='card-body clearfix'>
                  <div className='float-start'>
                      <div className="text-center">
                        <img src={ num === 1 ? Product1 : Product4 } className='img img-responsive' width={100} alt='' />
                      </div>
                  </div>
                  <div className='float-end'>
                    <h5 className='text-primary'>CATEGORY</h5>  
                    <h6 className="fw-bolder">Product Name Goes Here</h6>
                    <strong className='text-danger me-2'>$980.00</strong><del><strong className='text-muted'>$990.00</strong></del>
                    <div className='clearfix text-warning'>
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                    </div>
                  </div>
              </div>
          </div>
          <div className='card me-2 p-4 rounded-0 border-0'>
              <div className='card-body clearfix'>
                  <div className='float-start'>
                      <div className="text-center">
                        <img src={ num === 2 ? Product2 : Product5 } className='img img-responsive' width={100} alt='' />
                      </div>
                  </div>
                  <div className='float-end'>
                    <h5 className='text-primary'>CATEGORY</h5>  
                    <h6 className="fw-bolder">Product Name Goes Here</h6>
                    <strong className='text-danger me-2'>$980.00</strong><del><strong className='text-muted'>$990.00</strong></del>
                    <div className='clearfix text-warning'>
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                    </div>
                  </div>
              </div>
          </div>
          <div className='card me-2 p-4 rounded-0 border-0'>
              <div className='card-body clearfix'>
                  <div className='float-start'>
                      <div className="text-center">
                        <img src={ num === 3 ? Product3 : Product6 } className='img img-responsive' width={100} alt='' />
                      </div>
                  </div>
                  <div className='float-end'>
                    <h5 className='text-primary'>CATEGORY</h5>  
                    <h6 className="fw-bolder">Product Name Goes Here</h6>
                    <strong className='text-danger me-2'>$980.00</strong><del><strong className='text-muted'>$990.00</strong></del>
                    <div className='clearfix text-warning'>
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                      <StarFill size={17} />
                    </div>
                  </div>
              </div>
          </div>
     </Fragment>
   )
}

export default BestSellerComponent