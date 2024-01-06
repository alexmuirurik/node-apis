import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../temparts/navbar'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'
import { MakeAPIRequest } from '../functions'

const Pmanage = () => {
  return (
    <div class="wrapper">
      <Sidebar />
      <div class="main-panel">
        <Navbar />

        <div className="content">
          <div className="row">
            <div className="col-lg-9">
              <div className="card">
                <div className="card-header">
                  <h4 className="title">Project Management APIs</h4>
                </div>
                <div className="card-body">
                  <pre>
                    <MakeAPIRequest />
                  </pre>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <h4 className="title">APIs</h4>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"><Link to="#monday" className="nav-link">Monday.com</Link></li>
                    <li className="list-group-item"><Link to="#workfront" className="nav-link">Workfront</Link></li>
                    <li className="list-group-item"><Link to="#ms-project" className="nav-link">Microsoft Project</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Pmanage