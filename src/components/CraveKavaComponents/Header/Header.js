import { CLOSE_ICON_NAV, HEADER_LOGO_ICON, OPEN_MENU_ICON1 } from "@/values/Constants/ImageConstants";


import React, { useState } from 'react'


  

export default function Header() {

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
<header className="header-sec-main">
    <div className="container">
      <div className="header-inner-sec">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-md-4 col-sm-3">
            <div className="logo-sec-header">
              <a href="#"><img src={HEADER_LOGO_ICON} alt="Header Logo" /></a>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-4">
            <div   className={`right-full-menu-contact-sec-header ${isSidebarActive && "activeSidebar"}`}>
              <div className="logo-sec-headerMobile">
                <a href="#"><img src={HEADER_LOGO_ICON} alt="Header Logo" /></a>
              </div>
              <div className="right-menubar-sec">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#why-choose-us">Why Choose Us</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#reviews">Reviews</a></li>
                  {/* <li><a href="#contact">Contact Us</a></li> */}
                </ul>
              </div>
              <div className="right-contactbtn-header">
                <a href="#contact" className="contact-us-btn-cmn">Contact Us</a>
              </div>
              <button onClick={()=>setIsSidebarActive(false)} className="close__btn__navbar">
                <img src={CLOSE_ICON_NAV} alt="Close Menu" />
              </button>
            </div>
            <div className='btn-openheader-menu text-end'>
            <button onClick={()=>setIsSidebarActive(true)} className="open__nav__btn">
                <img src={OPEN_MENU_ICON1} alt="Open Menu" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
