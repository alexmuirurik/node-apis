import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-flex container-fluid">
                <div className="col">
                    <ul className="">
                        <li className="nav-item"><small>Copyright @ CopyScribers.com</small></li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="text-end me-4">
                        <li className="nav-item">Privacy Policy</li>
                        <li className="nav-item">Disclaimer</li>
                        <li className="nav-item">About Us</li>
                        <li className="nav-item">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="modal fade" id="assignModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Assign This Article?</h3>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="assigntask" className="was-validated" onsubmit="event.preventDefault(); assigntasknproject();" method="post">
                                <div className="form-group">
                                    <label for="projecttitle">Task Title</label>
                                    <input name="title" type="text" className="tasktitle form-control" readonly="" value="" />
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label for="tasktitle">Assign Author</label>
                                        <select className="form-control" name="author" id="projecttitle" required="">
                                            <option value="anyauthor">Return to Pool</option>
                                            <option value="writeraccount">--Writer Account</option>
                                            <option value="writing">Mark as Taken</option>
                                            <option value="pending-approval">Mark as Pending Approval</option>
                                            <option value="approved">Mark as Approved</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3"></div>
                                <div className="col-lg-12 pl-0 pr-0 mt-2">
                                    <button className="float-left btn-danger rounded p-2 w-25" type="button" data-dismiss="modal">Close</button>
                                    <input type="hidden" className="taskurl" name="url" value=""/>
                                    <input type="hidden" name="assignmodal" id="assignmodal" value="assignmodal"/>
                                    <button type="submit" className="btn btn-success float-right mr-0 w-25">Assign</button>                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer