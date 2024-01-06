import React from 'react'
import Navbar from '../temparts/navbar'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'
import { Link } from 'react-router-dom'
import { MakeAPIRequest } from '../functions'

const Collabo = () => {
  
  
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
                  <h4 className="title">Collaborative API Tests</h4>
                </div>
                <div className="card-body">
                  <pre>
                    <MakeAPIRequest/>
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
                    <li className="list-group-item"><Link to="#slack" className="nav-link">Slack</Link></li>
                    <li className="list-group-item"><Link to="#twilio" className="nav-link">Twilio</Link></li>
                    <li className="list-group-item"><Link to="#ms-teams" className="nav-link">Ms Teams</Link></li>
                    <li className="list-group-item"><Link to="#jira-confluence" className="nav-link">Jira Confluence</Link></li>
                    <li className="list-group-item"><Link to="#google-apps" className="nav-link">Google Apps</Link></li>
                    <li className="list-group-item"><Link to="#zoom" className="nav-link">Zoom</Link></li>
                    <li className="list-group-item"><Link to="#dropbox" className="nav-link">Dropbox</Link></li>
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

export default Collabo