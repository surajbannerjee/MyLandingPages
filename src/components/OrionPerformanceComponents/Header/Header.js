import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="header-adventure-main-sec">
            <div className="container">
                <div className="header-adventure-inr">
                    <div className="logo-sec-header">
                        <Link href="#"><img src="/images/orionPerformanceImages/header-logo.png" alt="" /></Link>
                    </div>
                    <div className="header-navbar-inrsec">
                        <ul>
                            <li className="active__menulink"><a href="#">Home</a></li>
                            {/* <li>
                                <a href="">Service</a>
                            </li> */}
                            <li><a href="#our-service">Our Service</a></li>
                            <li>
                                <a href="#result">Result</a>
                            </li>
                            <li>
                                <a href="#experts">Experts</a>
                            </li>
                            <li>
                                <a href="#faqs">FAQs</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                            {/* <li>
                                <a href="">FAQs</a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="right-sec-header-cart">
                        <motion.a href="" className="apply-now-btn-header"
                            initial={{ scale: 0.3, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.1,
                            }}
                        >Apply Now</motion.a>
                        <button className="open__nav__btn" ><img src="/images/orionPerformanceImages/open-menu-icon1.png" alt="" /></button>
                        <button className="close__btn__navbar" ><img src="/images/orionPerformanceImages/close-icon-nav.png" alt="" /></button>
                    </div>
                </div>
            </div>
            <button className="scrool-to-top-btn active__scrolltopbtn"><img src="/images/orionPerformanceImages/top-arrow-icon.png" alt="" /></button>
        </header>
    );
}