import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation()
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo d-flex">
                    <a href="javascript:void(0)" className="simple-text logo-mini">
                        <img className="img-fluid rounded-circle avatar" src="/assets/img/profile.jpg" alt="" srcset=""/>
                    </a>
                    <a href="javascript:void(0)" className="simple-text logo-normal"> Copyscibers Client{" "} </a>
                </div>
                <ul className="nav">
                    <li className={"nav-item " + (location.pathname === '/' ? 'active' : '')}>
                        <Link className="nav-link" to="/">
                            <i className="fas fa-heartbeat fa-fw"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li className={"nav-item " + (location.pathname === '/collabo' ? 'active' : '')}>
                        <Link className="nav-link" to="/collabo">
                            <i className="fas fa-message fa-fw"></i>
                            <p>Collaborative</p>
                        </Link>
                    </li>
                    <li className={"nav-item " + (location.pathname === '/pmanage' ? 'active' : '')}>
                        <Link className="nav-link" to="/pmanage">
                            <i className="fas fa-users fa-fw"></i>
                            <p>Pmanagement</p>
                        </Link>
                    </li>
                    <li className={"nav-item " + (location.pathname === '/search' ? 'active' : '')}>
                        <Link className="nav-link" to="/search">
                            <i className="fa-brands fa-google fa-fw"></i>
                            <p>Search Engine</p>
                        </Link>
                    </li>
                    <li className={"nav-item " + (location.pathname === '/chatgpt' ? 'active' : '')}>
                        <Link className="nav-link" to="/chatgpt">
                            <i className="fa-solid fa-khanda fa-fw"></i>
                            <p>ChatGPT API</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
