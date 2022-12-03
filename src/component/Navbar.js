import React,{useState} from 'react'

import {useNavigate} from 'react-router-dom'

function Navbar(props) {

   
  
    
  return (
    
            <div id="content" className='mx-auto col-10 '>

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                < button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form
        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                aria-label="Search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                </button>
            </div>
        </div>
                </form>

                    

                </nav>
                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

{/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
<li className="nav-item dropdown no-arrow d-sm-none">
    {/* <a className="nav-link dropdown-toggle" href="javascript(void)" id="searchDropdown" role="button" */}
        {/* data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-search fa-fw"></i>
    </a> */}
    {/* <!-- Dropdown - Messages --> */}
    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
        aria-labelledby="searchDropdown">
        <form className="form-inline mr-auto w-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small"
                    placeholder="Search for..." aria-label="Search"
                    aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</li>
<div className="topbar-divider d-none d-sm-block"></div>
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
             </div>
             {/* <!-- Content Row --> */}
                 <div className="row">

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Earnings (Monthly)</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.earningMonthly}</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Earnings (Annual)</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.earningAnnualy}</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                    </div>
                    <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.tasks}%</div>
                        </div>
                        <div className="col">
                            <div className="progress progress-sm mr-2">
                                <div className="progress-bar bg-info" role="progressbar"
                        style={{"width": `${props.data.tasks}%`, "ariavaluenow": `${props.data.tasks} `, "ariavaluemin":"0",
                                    "ariavaluemax":"100"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
                    </div>

                    {/* <!-- Pending Requests Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Requests</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.pendingRequst}</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
                    </div>
                </div>
                 </div>

                

                </ul>
               
            </div>
           
    
        )
}

export default Navbar