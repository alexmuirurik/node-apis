import React from 'react'
import Navbar from '../temparts/navbar'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'
import { Link } from 'react-router-dom'
import { MakeAPIRequest } from '../functions'

const ChatGpt = () => {
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
                          <h4 className="title">ChatGPT API Content</h4>
                        </div>
                        <div className="card-body">
                          <div className="chat-section" style={{height: '500px'}}>
                            <pre>
                              <MakeAPIRequest />
                            </pre>
                          </div>
                          <div className="chatbox">
                            <input id='gptprompt' name="gptprompt" type="text" className="chat-area w-100 form-control" placeholder='Type Your Prompt' />
                          </div>
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
                            <li className="list-group-item"><Link to="#chatgpt/text-generation">Text Generation</Link></li>
                            <li className="list-group-item"><Link to="#chatgpt/image-generation">Image Generation</Link></li>
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

export default ChatGpt