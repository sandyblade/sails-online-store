import { Fragment, useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HeaderComponent from "./components/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";
import NewsletterComponent from "./components/NewsletterComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { Route, HashRouter, Routes } from "react-router";
import './App.css'

const App = () => {

  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
 
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
          setConnected(true);
      }, 3000);
  }, [loading, connected])

  return (
    <Fragment>
        { loading ? <>
          <main className="flex-shrink-0 p-3 mb-5">
            <div className="container loader-section">
              <div className="row">
                <div className="col-md-5 mt-5 mx-auto">
                  <DotLottieReact src="/animations/loader.json" loop autoplay />
                </div>
              </div>
            </div>
          </main>
        </> : <>
            { !connected ? <>
                <main className="flex-shrink-0 p-3 mb-5 error-section">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <h1 className="display fw-bold text-muted text-error-code"><i className="bi bi-wifi-off"></i></h1>
                            <p className="fs-3"> <span className="text-danger">Opps!</span> Disconnected from server</p>
                            <div className="lead">
                                Sorry, An Http error has occurred. Please close the client and try again.
                            </div>
                        </div>
                    </div>
                </main>
            </> : <>
                <HashRouter>
                  <HeaderComponent />
                  <NavbarComponent/>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage />}/>
                  </Routes>
                  <NewsletterComponent/>
                  <FooterComponent/>
                </HashRouter>
            </> }
        </> }
    </Fragment>
  )

}

export default App