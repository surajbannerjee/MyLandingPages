import Image from "next/image";


export default function Header() {
    return (
        <header className="header-luxe-interi-main-sec">
            <div className="container">
                <div className="header-interi-inr">
                    <div className="mobile-logoheader-sec">
                        <a href="#"><Image height={500} width={500} src="/images/luxeInteriorsImages/header-logo.png" alt="" /></a>
                    </div>
                    <div className="right-sec-header-cartfull-menus-desktop">
                        <div className="first-menus-link-sec cmn-menu-link-css">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#category">Category</a></li>
                                {/* <li><a href="#">Collections</a></li> */}
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#blog">Blog</a></li>
                            </ul>
                        </div>
                        <div className="desktop-logo-sec">
                            {/* <a href="#"><img src="/images/luxeInteriorsImages/header-logo.png" alt="" /></a> */}
                            <a href="#"><Image height={500} width={500} src="/images/luxeInteriorsImages/header-logo.png" alt="" /></a>
                        </div>
                        <div className="right-sec-menu-search-cart-head">
                            <div className="right-menu-first-head cmn-menu-link-css">
                                <ul>
                                    <li><a href="#contact">Contact Us</a></li>
                                    <li><a href="#">Log In</a> / <a href="#">Sign Up</a></li>
                                </ul>
                            </div>
                            <div className="cart-search-sec">
                                <button className="searchbtn">
                                    <Image height={24} width={24} src="/images/luxeInteriorsImages/search-icon.png" alt="" />
                                </button>
                                <div className="search-headerinr">
                                    <input type="search" placeholder="search here.." />
                                </div>
                                <button className="like-heart-btn"><Image height={24} width={24} src="/images/luxeInteriorsImages/like-heart-icon.png" alt="" /></button>
                                <button className="cart-icon"><Image height={24} width={24} src="/images/luxeInteriorsImages/cart-icon.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="right__mobile__opendesktophidediv">
                        <button className="cart-icon"><Image height={24} width={24} src="/images/luxeInteriorsImages/cart-icon.png" alt="" /></button>
                        {/* open close */}
                        <button className="open__nav__btn"><Image height={24} width={24} src="/images/luxeInteriorsImages/open-menu-icon1.png" alt="" /></button>
                        <button className="close__btn__navbar"><Image height={24} width={24} src="/images/luxeInteriorsImages/close-icon-nav.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </header>

    )
}