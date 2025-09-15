export default function Footer() {
    return (
        <footer className="footer-main-sec" id="contact">
            <div className="footer-first-logosec">
                <div className="container">
                    <div className="footer-first-inner-sec">
                        <div className="first-logo-footer-sec">
                            <a href="#"><img src="/images/luxeInteriorsImages/header-logo.png" alt="" /></a>
                        </div>
                        <div className="footer-inner-headinglink-mainsec row">
                            <div className="cmn-cards-inside-footer-links col-lg-3 col-md-6 col-sm-12">
                                <h2 className="footer-cmn-heading-one">Contact Us</h2>
                                <a href="208-555-0112">(208) 555-0112</a>
                            </div>
                            <div className="cmn-cards-inside-footer-links col-lg-4 col-md-6 col-sm-12">
                                <h2 className="footer-cmn-heading-one">Address</h2>
                                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                            </div>
                            <div className="cmn-cards-inside-footer-links col-lg-3 col-md-6 col-sm-12">
                                <h2 className="footer-cmn-heading-one">Email</h2>
                                <a href="mailto:luxeinteriors@decor.com">luxeinteriors@decor.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-menu-sec-main">
                <div className="container">
                    <div className="copyright-menu-sec-inr">
                        <div className="copyright-txt-footer">
                            <h3>© 2024 Interior Decor. All Rights Reserved.</h3>
                        </div>
                        <div className="social-icons-copyright">
                            <a href="#"><img src="/images/luxeInteriorsImages/facebook-icon-footer.png" alt="" /></a>
                            <a href="#"><img src="/images/luxeInteriorsImages/instagram-icon-footer.png" alt="" /></a>
                            <a href="#"><img src="/images/luxeInteriorsImages/twitter-icon-footer.png" alt="" /></a>
                            <a href="#"><img src="/images/luxeInteriorsImages/linkedIn-icon-footer.png" alt="" /></a>
                        </div>
                        <div className="footer-menu-coyright">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Category</a></li>
                                <li><a href="#">Collections</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* scroll top btn */}
            <button className="scrool-to-top-btn active__scrolltopbtn"><img src="/images/luxeInteriorsImages/top-arrow-icon.png" alt="" /></button>
        </footer>

    )
}