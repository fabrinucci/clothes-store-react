import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='header-content'>
        <div className='container container-flex'>
      
          <div className='header-container'>
            <Link to='/' className='header-title'>SPORT BOMB!</Link>
            <span className="icon-nav fa-solid fa-bars"></span>
            <nav className="header-nav">
              <ul className="menu">
                <li className="menu-item">
                  <Link to='/' className="menu-link">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to='/about' className="menu-link">About</Link>
                </li>
                <li className="menu-item">
                  <Link to='/features' className="menu-link">Features</Link>
                </li>
                <li className="menu-item">
                  <Link to='/shop' className="menu-link">Shop</Link>
                </li>
                <li className="menu-item">
                  <Link to='/contact' className="menu-link">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
      
          <div className='header-container'>
            <span className='header-span'>Need Help?</span>
            <p>
              <i className='fa-solid fa-phone'></i>
              Call 3764-568572
            </p>
          </div>
      
          <div className='header-container'>
            <i className='fa-solid fa-user'></i>
            <Link 
              to='/'
              className='btn btn-header'
            >
              My Cart <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <div className="box-search-container">
              <table className="table-search-container">
                <tbody>
                  <tr>
                    <td>
                      <input className="search-input" type="text" placeholder="Search products"/>
                    </td>
                    <td>
                      <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
