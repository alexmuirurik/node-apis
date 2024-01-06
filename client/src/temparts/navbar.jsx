import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent w-100">
            <div className="container-fluid p-0 m-0">
                <div className="navbar-wrapper me-auto">
                    <a className="navbar-brand ms-0 mt-2" href="javascript:void(0)">
                        <img className="ms-2 img-fluid" src="/assets/img/ddsd.png" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars"></span>
                </button>
                <div className="navbar-collapse collapse" id="navigation">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-1">
                            <a href="javascript:void(0)" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">

                                <i className="fa fa-bell"></i>
                                <p className="d-lg-none text-gray-700 text-capitalize">
                                    Notifications
                                </p>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-navbar p-0 pl-2 pr-2 alertlist">
                            </ul>
                        </li>
                        <li className="light-badge nav-item d-none px-1">
                            <a href="javascript:lightmode()" className="nav-link">
                                <i className="fa-solid fa-star-and-crescent"></i>
                                <p className="d-lg-none text-gray-700 text-capitalize">
                                    Dark Mode
                                </p>
                            </a>
                        </li>
                        <li className="dark-badge nav-item px-1">
                            <a href="javascript:darkmode()" className="nav-link">
                                <i className="fa fa-sun"></i>
                                <p className="d-lg-none text-gray-700 text-capitalize">
                                    Light Mode
                                </p>
                            </a>
                        </li>
                        <li className="dropdown nav-item ps-1">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-user-tie"></i>
                                <p className="d-lg-none text-gray-700 text-capitalize">
                                    View User
                                </p>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left"  aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="/user/copyscibersclient">
                                    <i className="fas fa-user-doctor fa-sm fa-fw mr-2 text-gray-400"></i>
                                    <span className="mr-2 d-lg-inline text-gray-700 small">
                                        Client Copyscibers </span>
                                </a>
                                <a className="dropdown-item" href="/message">
                                    <i className="fas fa-comment fa-sm fa-fw mr-2 text-gray-400 small"></i>
                                    <small className="small">Contact Admin</small>
                                </a>
                                <a className="dropdown-item" href="/billing">
                                    <i className="fa-solid fa-file-invoice-dollar fa-sm fa-fw mr-2 text-gray-400 small"></i>
                                    <small className="small">Manage billing</small>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400 small"></i>
                                    <small className="small">Logout</small>
                                </a>
                            </ul>
                        </li>
                        <li className="separator d-lg-none"></li>
                    </ul>
                </div>
            </div>

            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Leaving Already?</h3>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex">
                            <p>Select "Logout" if you are ready to end your current session.</p>
                            <a className="btn form-control flex-right col-md-3" href="/logout"><i className="fa fa-sign-out"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar