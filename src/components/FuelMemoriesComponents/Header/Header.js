import Link from 'next/link';
import { motion } from "framer-motion"


export default function Header() {
    return (
        <header className="header-adventure-main-sec">
            <div className="header-first-login-secmain">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <motion.div
                             initial={{ x: -200, opacity: 0 }}
                             whileInView={{ x: 0, opacity: 1 }}
                             transition={{
                                 duration: 1,
                             }}
                            className="logo-sec-header">
                                <Link href='#'><img src="/images/fuelMemoriesImages/header-logo.png" alt="" /></Link>
                            </motion.div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <motion.div
                             initial={{ x: 200, opacity: 0 }}
                             whileInView={{ x: 0, opacity: 1 }}
                             transition={{
                                 duration: 1,
                             }}
                            className="right-sec-header-cart">
                                {/* <div className="searchbox-inrdiv">
                                    <button className="search-iconopen-pop"><img src="/images/fuelMemoriesImages/search-icon1.png" alt="" /></button>
                                    <div className="search-headerinr">
                                        <input type="search" placeholder="search here.." />
                                    </div>
                                </div> */}
                                <a href="tel:123-234-123400" className="call-sec-header"><img src="/images/fuelMemoriesImages/call-icon.png" alt="" />+123 - 234 - 123400</a>
                                <a href="#" className="login-btn-header"><img src="/images/fuelMemoriesImages/login-icon1.png" alt="" /> Login</a>
                                <button className="open__nav__btn" ><img src="/images/fuelMemoriesImages/open-menu-icon1.png" alt="" /></button>
                                <button className="close__btn__navbar" ><img src="/images/fuelMemoriesImages/close-icon-nav.png" alt="" /></button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div
             
            className="second-header-navbar-secmain">
                <div className="container">
                    <div className="header-inner-sec">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-9 col-md-10 col-sm-12">
                                <div className="header-navbar-inrsec">
                                    <ul>
                                        <li className="active__menulink"><a href="#">Home</a></li>
                                        <li className="active__menulink"><a href="#categories">Categories</a></li>
                                        {/* <li className="dropdown-item-li">
                                            <a className="click__dropdown">Page</a>
                                            <div className="dropdown-pop-inr-header">
                                                <ul>
                                                    <li><a href="">drop 1</a></li>
                                                    <li><a href="">drop 2</a></li>
                                                    <li><a href="">drop 3</a></li>
                                                    <li><a href="">drop 4</a></li>
                                                </ul>
                                            </div>
                                        </li> */}
                                        <li><a href="#our-service">Our Service</a></li>
                                        <li className="active__menulink"><a href="#contact">Contact Us</a></li>
                                        {/* <li className="dropdown-item-li">
                                            <a className="click__dropdown">Adventure</a>
                                            <div className="dropdown-pop-inr-header">
                                                <ul>
                                                    <li><a href="">drop 1</a></li>
                                                    <li><a href="">drop 2</a></li>
                                                    <li><a href="">drop 3</a></li>
                                                    <li><a href="">drop 4</a></li>
                                                </ul>
                                            </div>
                                        </li> */}
                                        {/* <li className="dropdown-item-li">
                                            <a className="click__dropdown">Packages</a>
                                            <div className="dropdown-pop-inr-header">
                                                <ul>
                                                    <li><a href="">drop 1</a></li>
                                                    <li><a href="">drop 2</a></li>
                                                    <li><a href="">drop 3</a></li>
                                                    <li><a href="">drop 4</a></li>
                                                </ul>
                                            </div>
                                        </li> */}
                                        {/* <li className="dropdown-item-li">
                                            <a className="click__dropdown">News & Article</a>
                                            <div className="dropdown-pop-inr-header">
                                                <ul>
                                                    <li><a href="">drop 1</a></li>
                                                    <li><a href="">drop 2</a></li>
                                                    <li><a href="">drop 3</a></li>
                                                    <li><a href="">drop 4</a></li>
                                                </ul>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}