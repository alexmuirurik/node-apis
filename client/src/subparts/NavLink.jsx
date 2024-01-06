import React from 'react'


const NavLink = () => {
  return (
    <li className={"nav-item " + (location.pathname === '/collabo' ? 'active' : '')}>
        <Link className="nav-link" to="/collabo">
            <i className="fas fa-heartbeat fa-fw"></i>
            <p>Collaborative</p>
        </Link>
    </li>
  )
}

export default NavLink