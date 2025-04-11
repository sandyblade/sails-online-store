import { Fragment } from "react/jsx-runtime"

const NewsletterComponent = () => {
   return (
     <Fragment>
        <main className="flex-shrink-0 p-5 mt-auto" id="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="newsletter text-center">
                            <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                            <div className="input-group newsletter-input-group">
                                <input type="email"  placeholder='Enter Your Email' className="form-control" aria-label=""/>
                                <button className="btn bg-primary btn-primary" id="button-addon2">
                                    <i className="bi bi-envelope mb-1 me-1"></i>Subscribe
                                </button>
                            </div>
                            <div className="clearfix mt-2">
                                <button  className="btn btn-light border me-1">
                                    <i className="bi bi-facebook mb-1"></i>
                                </button>
                                <button className="btn btn-light border me-1">
                                    <i className="bi bi-twitter mb-1"></i>
                                </button>
                                <button  className="btn btn-light border me-1">
                                    <i className="bi bi-instagram mb-1"></i>
                                </button>
                                <button className="btn btn-light border">
                                    <i className="bi bi-pinterest mb-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main> 
     </Fragment>
   )
}

export default NewsletterComponent