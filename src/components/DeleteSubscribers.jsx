import React from 'react'
import Navbar from './Navbar'

const DeleteSubscribers = () => {
  return (
    <><Navbar />
    <br/>
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-6 col-xl-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Feedback</label>
              <textarea name="" id="" cols="10" rows="10" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12 col-xxl-12">
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default DeleteSubscribers