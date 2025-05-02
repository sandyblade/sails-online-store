import { Fragment, useEffect, useState, useCallback } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HeaderComponent from "./components/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";
import NewsletterComponent from "./components/NewsletterComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmPage from "./pages/ConfirmPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import PasswordPage from "./pages/PasswordPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import StorePage from "./pages/StorePage";
import { Route, HashRouter, Routes } from "react-router";
import Service from "./Service";
import './App.css'

const App = () => {

  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [offset, setOffset] = useState(0);

  const toTop = (event: React.MouseEvent<HTMLElement>) => {
    const e = event
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    e.nativeEvent.stopImmediatePropagation();
  }

  const loadContent = useCallback(async () => {
    await Service.ping()
      .then(() => {
        setLoading(false)
        setConnected(true)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        setConnected(false)
      })
  }, [])

  useEffect(() => {

    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    setTimeout(async () => {
      await loadContent()
    }, 1500);

    return () => window.removeEventListener('scroll', onScroll);

  }, [loadContent])

  return (
    <Fragment>
      {loading ? <>
        <main className="flex-shrink-0 p-3 mb-5">
          <div className="container loader-section">
            <div className="row">
              <div className="col-md-5 mx-auto" style={{ marginTop: '12rem' }}>
                <DotLottieReact src="/animations/loader.json" loop autoplay />
              </div>
            </div>
          </div>
        </main>
      </> : <>
        {!connected ? <>
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
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/auth/register/confirm/:token" element={<ConfirmPage />} />
              <Route path="/auth/email/forgot" element={<ForgotPasswordPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/account/password" element={<PasswordPage />} />
              <Route path="/account/profile" element={<ProfilePage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/auth/email/reset/:token" element={<ResetPasswordPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <NewsletterComponent />
            <FooterComponent />
            {offset > 300 ? <>
              <a href="#" onClick={(e) => toTop(e)} className="btn btn-lg btn-primary back-to-top">
                <i className="bi bi-chevron-up"></i>
              </a>
            </> : <></>}
          </HashRouter>
        </>}
      </>}
    </Fragment >
  )

}

export default App