import { Fragment } from "react"

const TimelineComponent = () => {
  return (
    <Fragment>
      <section className="bsb-timeline-1 py-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-xl-6">
              <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-body">
                    <div className="timeline-content">
                      <div className="card border-0">
                        <div className="card-body p-0">
                          <h5 className="card-subtitle text-secondary mb-1">2023</h5>
                          <h2 className="card-title mb-3">Bootstrap 5</h2>
                          <p className="card-text m-0">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-body">
                    <div className="timeline-content">
                      <div className="card border-0">
                        <div className="card-body p-0">
                          <h5 className="card-subtitle text-secondary mb-1">2022</h5>
                          <h2 className="card-title mb-3">Bootstrap 4</h2>
                          <p className="card-text m-0">Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page. Bootstrap 4 has no active support.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-body">
                    <div className="timeline-content">
                      <div className="card border-0">
                        <div className="card-body p-0">
                          <h5 className="card-subtitle text-secondary mb-1">2019</h5>
                          <h2 className="card-title mb-3">Bootstrap 3</h2>
                          <p className="card-text m-0">Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. Bootstrap 3 has no active support.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-body">
                    <div className="timeline-content">
                      <div className="card border-0">
                        <div className="card-body p-0">
                          <h5 className="card-subtitle text-secondary mb-1">2013</h5>
                          <h2 className="card-title mb-3">Bootstrap 2</h2>
                          <p className="card-text m-0">Sleek, intuitive, and powerful front-end framework for faster and easier web development. Bootstrap 2 is no longer officially supported.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default TimelineComponent