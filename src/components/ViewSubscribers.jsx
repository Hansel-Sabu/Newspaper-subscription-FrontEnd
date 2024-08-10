import React from 'react'
import Navbar from './Navbar'

const ViewSubscribers = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      {/* i thought of using that data mapping, but i couldnt get tht logic here */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Slno</th>
                  <th scope="col">Subscriber Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">District</th>
                  <th scope="col">Village Office</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td >Mark Ruffalo</td>
                  <td>9895264158</td> 
                  <td>violet.sparrow@domain.com</td>
                  <td>7852</td> 
                  <td>F3</td> 
                  <td>V1</td> 
                  <td>123..</td> 
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td >Jacob Bryan</td>
                  <td>6598748351</td>
                  <td>alex.rider123@mail.com</td>
                  <td>7752</td> 
                  <td>A3</td>
                  <td>V2</td> 
                  <td>345..</td>  
                  
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td >Oliver Bennett</td>
                  <td>9659784851</td>
                  <td>nova.storm@example.net</td>
                  <td>1852</td> 
                  <td>P2</td>
                  <td>V3</td> 
                  <td>678..</td>  
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td >Liam Hawkins</td>
                  <td>8657894851</td>
                  <td>hamilton123@twitter</td>
                  <td>7123</td> 
                  <td>K9</td>
                  <td>V4</td> 
                  <td>884..</td>  
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td >Sophia Reynolds</td>
                  <td>8796874851</td>
                  <td>jupiter.jones@webmail.com</td>
                  <td>6962</td> 
                  <td>Y7</td> 
                  <td>V5</td> 
                  <td>9759...</td> 
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td >Ethan Caldwell</td>
                  <td>8797899451</td>
                  <td>ethan.heartfilia@randommail.com</td>
                  <td>10007</td> 
                  <td>O9</td>
                  <td>V6</td> 
                  <td>933..</td>  
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td >Isabella Tate</td>
                  <td>4597899451</td>
                  <td>lucy.heartfilia@randommail.com</td>
                  <td>1252</td> 
                  <td>T5</td>
                  <td>V7</td> 
                  <td>953..</td>
                </tr><tr>
                  <th scope="row">8</th>
                  <td >Noah Preston</td>
                  <td>8797899478</td>
                  <td>echo.wave@mailservice.com</td>
                  <td>8962</td> 
                  <td>U7</td> 
                  <td>V8</td> 
                  <td>003..</td>  
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td >Maya Harrison</td>
                  <td>8797899950</td>
                  <td>pixel.artist@artworld.net</td>
                  <td>1258</td>
                  <td>I2</td>  
                  <td>V9</td> 
                  <td>996..</td>  
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td >Larry Beef</td>
                  <td>8985634789</td>
                  <td>forest.green@sampledomain.org</td>
                  <td>8122</td> 
                  <td>E3</td> 
                  <td>V10</td> 
                  <td>192..</td>  
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