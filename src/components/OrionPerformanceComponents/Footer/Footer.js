import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer-main-sec" id="contact">
            <div className="first-footer-main-sec">
                <div className="container">
                    <div className="first-footer-inr-sec row">
                        <motion.div className="col-lg-4 col-md-6 col-sm-12 cmn-footer-column-cards"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <div className="footer-first-inside-cards-logo">
                                <a href=""><Image height={300} width={300} src="/images/orionPerformanceImages/footer-logo-icon.png" alt="" /></a>
                                <p>Dedicated to transforming lives through personalized fitness and nutrition, empowering clients to reach their peak physical and mental potential.</p>
                            </div>
                        </motion.div>
                        <motion.div className="col-lg-2 col-md-6 col-sm-12 cmn-footer-column-cards"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <div className="footer-linking-sec">
                                <h2 className="footer-cmn-heading-one">Pages</h2>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Service</a></li>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Result</a></li>
                                    <li><a href="">Review</a></li>
                                    <li><a href="">FAQs</a></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className="col-lg-2 col-md-6 col-sm-12 cmn-footer-column-cards"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <div className="footer-linking-sec">
                                <h2 className="footer-cmn-heading-one">Resources</h2>
                                <ul>
                                    <li><a href="">Application</a></li>
                                    <li><a href="">Terms of Service</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className="col-lg-4 col-md-6 col-sm-12 cmn-footer-column-cards"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <div className="footer-subscribe-newslettersec">
                                <h2 className="footer-cmn-heading-one">Subscribe Our News Latter</h2>
                                <div className="footer-newsletter-form">
                                    <form action="#">
                                        <div className="form-group-newsletter">
                                            <input type="email" placeholder="Enter your email id" />
                                            <input type="submit" value="Subscribe" />
                                        </div>
                                    </form>
                                </div>
                                <div className="footer-address-sec">
                                    <a href="mailto:orion@orionperformancecoaching.com"><Image height={24} width={24} src="/images/orionPerformanceImages/footer-email-icon.png" alt="" />orion@orionperformancecoaching.com</a>
                                    <a href="tel:0408-284-862"><Image height={24} width={24} src="/images/orionPerformanceImages/footer-call-icon.png" alt="" />0408-284-862</a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/footer-cus-spport-icon.png" alt="" />Customer Support | LIVE</a>
                                </div>
                                <div className="footer-social-iconsec">
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/footer-facebook-icon.png" alt="" /></a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/footer-insta-icon.png" alt="" /></a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/footer-twitter-icon.png" alt="" /></a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/footer-LinkedIn-icon.png" alt="" /></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-mainsec">
                <div className="container">
                    <div className="footer-copyright-inr">
                        <div className="row align-items-center">
                            <motion.div className="col-lg-7 col-md-7 col-sm-12"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                            >
                                <p className="copyright-txt-footer">© <span>2024</span>, Orion Performance Coaching</p>
                            </motion.div>
                            <motion.div className="col-lg-5 col-md-5 col-sm-12"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                            >
                                <div className="right-paypal-cards-linkfooter">
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/paypal-btn-icon.png" alt="" /></a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/mastercard-btn-icon.png" alt="" /></a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/visa-btn-icon.png" alt="" /></a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/american-expresss-btn-icon.png" alt="" /></a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}