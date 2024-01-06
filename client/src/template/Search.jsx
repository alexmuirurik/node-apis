import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../temparts/navbar'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'
import { MakeAPIRequest } from '../functions'

const Search = () => {
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
                  <h4 className="title">Search Engine APIs </h4>
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
                    <li className="list-group-item"><Link to="#elastic" className='nav-link'>Elastic</Link></li>
                    <li className="list-group-item"><Link to="#elk" className='nav-link'>Elk</Link></li>
                    <li className="list-group-item"><Link to="#apache-solr" className='nav-link'>Apache Solr</Link></li>
                    <li className="list-group-item"><Link to="#redis" className='nav-link'>Redis</Link></li>
                    <li className="list-group-item"><Link to="#lucene" className='nav-link'>Lucene</Link></li>
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

export default Search