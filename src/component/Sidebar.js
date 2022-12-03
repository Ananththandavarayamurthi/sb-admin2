import React from 'react'
import {Link} from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
function Sidebar() {
  return (
    <>
         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <Link to='./Navbar'><span className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                    </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                
                    </span></Link>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                    <Link to='./navbar'>
                    <div className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></div>
                    </Link>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider"/>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
    crud
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <Link to='./inputs'>
                    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
  <PersonAddIcon />&nbsp;
        <span>input</span>
                    </div>
                    </Link>
                    </li>
                    
        </ul>     
    </>
  )
}

export default Sidebar