import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>


<aside className="main-sidebar  elevation-4">
  <a href="index3.html" className="brand-link">
   
  </a>
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="" className="" alt="Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <Link to="/">
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
             
            </p>
          </a>
          <ul className="nav nav-treeview"> 
          </ul>
        </li>
        </Link>
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Manage users
              
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Notifications
             
              <span className="badge badge-info right">6</span>
            </p>
          </a>
         
        </li>
        
        <li className="nav-item">
          <a href="#" className="nav-link">
          <i className="nav-icon far fa-calendar-alt" />
            <p>
              Appointment 
            
            </p>
          </a>
         
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              Forms
             
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Resource management
             
            </p>
          </a>
         
        </li>
        {/* <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              Extras
              <i className="fas fa-angle-left right" />
            </p>
          </a>
         
        </li> */}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-search" />
            <p>
              Search
            
            </p>
          </a>
        
        </li>
        
       
        <li className="nav-item">
          <a href="https://adminlte.io/docs/3.1/" className="nav-link">
            <i className="nav-icon fas fa-file" />
            <p>Healthcare Profesional</p>
          </a>
        </li>
       
       
       
       
      
       
      </ul>
    </nav>
  </div>
</aside>
<aside className="control-sidebar control-sidebar-dark">
</aside>





    </div>
  )
}

export default Sidebar