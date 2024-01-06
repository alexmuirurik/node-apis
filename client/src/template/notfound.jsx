import React from 'react'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'
import Navbar from '../temparts/navbar'

const NotFound = () => {
  return (
    <div class="wrapper">
            <Sidebar />
            <div class="main-panel">
                <Navbar />
                <div class="content">
                    <div class="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header"><h1>Content Not Found</h1></div>
                                <div className="card-body">
                                    <p className="text-danger">Sorry we couldn't find content matching your search query</p>
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

export default NotFound