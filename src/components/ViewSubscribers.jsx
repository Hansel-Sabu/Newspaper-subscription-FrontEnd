import React from 'react'
import Navbar from './Navbar'

const ViewSubscribers = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Slno</th>
                  <th scope="col">Subscriber Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Address</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">District</th>
                  <th scope="col">Village Office</th>
                  <th scope="col">Email ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewSubscribers