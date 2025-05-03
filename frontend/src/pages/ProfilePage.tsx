import { Fragment, useState, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Shimmer } from 'react-shimmer'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Navigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import TimelineComponent from "../components/TimelineComponent";
import * as yup from "yup"
import Service from "../Service";


interface IUser {
  id: number,
  email: string,
  phone: string,
  image: string,
  firstName: string,
  lastName: string,
  gender: string,
  country: string,
  city: string,
  status: string,
  zipCode: string,
  address: string,
}

const schema = yup
  .object({
    email: yup.string().email().required('E-Mail Address is a required field'),
    firstName: yup.string().required('First Name is a required field'),
    lastName: yup.string().required('Last Name is a required field'),
    gender: yup.string().required('Gender is a required field'),
    phone: yup.string().required('Phone Number is a required field'),
    city: yup.string().required('City is a required field'),
    country: yup.string().required('Country is a required field'),
    zipCode: yup.string().required('Zip Code is a required field'),
    address: yup.string().required('Address is a required field'),
  })
  .required()


const ProfilePage = () => {

  const logged: boolean = localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== null
  const [image, setImage] = useState('')
  const [errorReseponse, setErrorResponse] = useState('')
  const [successReseponse, setSuccessResponse] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadingUpload, setLoadingUpload] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [user, setUser] = useState<IUser>()
  const [activities, setActivities] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values: user
  })

  const onSubmit = (data: unknown) => {
    setLoadingSubmit(true)
    setErrorResponse('')
    setSuccessResponse('')
    setTimeout(async () => {
      await Service.profile.changeProfile(data)
        .then(async (response) => {
          const message = response.data.message
          setLoadingSubmit(false)
          setErrorResponse('')
          setSuccessResponse(message)
          setLoading(true)
          setTimeout(async () => {
            await loadContent()
          }, 2000)
        })
        .catch((error) => {
          const msg = error.status === 401 ? Service.expiredMessage : (error.response.data?.message || error.message)
          setLoadingSubmit(false)
          setErrorResponse(msg)
        })
    }, 2000)
  }

  const loadContent = async () => {
    await Service.profile.detail()
      .then(async (response) => {
        const act = await Service.profile.activity()
        setTimeout(() => {
          const _user = response.data
          setImage(_user.image)
          setUser(_user)
          setActivities(act.data)
          setLoading(false)
        }, 2000)
      })
      .catch((error) => {
        console.log(error)
        const msg = error.status === 401 ? Service.expiredMessage : (error.response.data?.message || error.message)
        setErrorResponse(msg)
      })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLoadingUpload(true)
      const file_image = e.target.files[0]
      const formData = new FormData();
      formData.append('file_image', file_image);
      setTimeout(async () => {
        await Service.profile.upload(formData)
          .then((response) => {
            const message = response.data.message
            setLoadingUpload(false)
            setTimeout(async () => {
              setErrorResponse('')
              setSuccessResponse(message)
              setLoading(true)
              await loadContent()
            }, 2000)
          })
          .catch((error) => {
            console.log(error)
            const msg = error.status === 401 ? Service.expiredMessage : (error.response.data?.message || error.message)
            setErrorResponse(msg)
          })
      }, 2000)
    }
  }

  useEffect(() => {
    loadContent()
  }, [])


  if (!logged) {
    return <Navigate to="/auth/login" />
  } else {
    return (
      <Fragment>
        <main className="flex-shrink-0 p-3 border-bottom bg-gray text-uppercase mb-5" id="breadcrumb">
          <Container>
            <Row>
              <Col md={12}>
                <Breadcrumb className='mt-2'>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Profile</Breadcrumb.Item>
                  <Breadcrumb.Item active>Change Profile</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </main>
        <main className="flex-shrink-0 mb-5">
          <Container>
            {errorReseponse !== '' ? <>
              <div className="alert alert-danger mb-3">
                <span>{errorReseponse}</span>
              </div>
            </> : <></>}
            {successReseponse !== '' ? <>
              <div className="alert alert-success mb-3">
                <span>{successReseponse}</span>
              </div>
            </> : <></>}
            <Row>
              <Col md={6} >
                <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                  <h3 className='text-uppercase mb-3 text-center'>Account Profile</h3>
                  <div className="mb-3">
                    {loading || loadingUpload ? <>
                      <Shimmer width={1} className="w-25 mb-2" height={100} />
                    </> : <>
                      {image ? <>
                        <img className="image img-thumbnail mb-2 d-block" width="200" src={Service.getUpload(image)} />
                      </> : <>
                        <i className="bi-person-circle d-block mb-3 image-user-font"></i>
                      </>}
                      <label className="form-label">Image Profile </label>
                      <input type="file" className="form-control" onChange={handleFileChange} />
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">First Name <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <input type="text" {...register("firstName")} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} disabled={loadingSubmit} placeholder="Enter Your First Name" required />
                      {errors.firstName ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.firstName?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <input type="text"  {...register("lastName")} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} disabled={loadingSubmit} placeholder="Enter Your Last Name" required />
                      {errors.lastName ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.lastName?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gender <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <select
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        {...register("gender", { required: true })}
                      >
                        <option value={'M'}>Male</option>
                        <option value={'F'}>Female</option>
                      </select>
                      {errors.gender ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.gender?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">E-Mail Address <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <input type="email"  {...register("email")} className={`form-control ${errors.email ? 'is-invalid' : ''}`} disabled={loadingSubmit} placeholder="Enter Your E-Mail Address" required />
                      {errors.email ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.email?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <input type="text"  {...register("phone")} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} disabled={loadingSubmit} placeholder="Enter Your Phone Number" required />
                      {errors.phone ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.phone?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">City <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <input type="text"  {...register("city")} className={`form-control ${errors.city ? 'is-invalid' : ''}`} disabled={loadingSubmit} placeholder="Enter Your City" required />
                      {errors.city ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.city?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <input type="text"  {...register("country")} className={`form-control ${errors.country ? 'is-invalid' : ''}`} disabled={loadingSubmit} placeholder="Enter Your Country" required />
                      {errors.country ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.country?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Zip Code <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={25} />
                    </> : <>
                      <input type="text"  {...register("zipCode")} className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`} disabled={loadingSubmit} placeholder="Enter Your Zip Code" required />
                      {errors.zipCode ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.zipCode?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Street Address <span className="text-danger">*</span></label>
                    {loading ? <>
                      <Shimmer width={1} className="w-100 mb-2" height={100} />
                    </> : <>
                      <textarea rows={3} placeholder='Enter Your Street Address'  {...register("address")} className={`form-control ${errors.address ? 'is-invalid' : ''}`} disabled={loadingSubmit}></textarea>
                      {errors.address ? <>
                        <div className="invalid-feedback">
                          <span className="d-block">
                            {errors.address?.message}
                          </span>
                        </div>
                      </> : <></>}
                    </>}
                  </div>
                  <button type='submit' className={`btn btn-lg btn-primary me-2 ${loading || loadingSubmit ? 'disabled' : ''}`}>
                    {loadingSubmit ? <i className="fas fa-circle-notch fa-spin me-1"></i> : <></>} Update Profile
                  </button>
                  <button type='reset' className={`btn btn-lg btn-danger ${loading || loadingSubmit ? 'disabled' : ''}`}>
                    Reset Form
                  </button>
                </form>
              </Col>
              <Col md={6} >
                <h3 className='text-uppercase mb-3 text-center'>Your Activity</h3>
                <div className="p-1">
                  {loading ? <>
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                    <Shimmer width={1} className="w-100 mb-2" height={15} />
                  </> : <>
                    <TimelineComponent rows={activities} />
                  </>}
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>
    )
  }
}

export default ProfilePage