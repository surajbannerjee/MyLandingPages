import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="adventure-footer-main-sec">
            <div className="container">
                <div className="footer-innersec">
                    <div className="footerflex-innersec">
                        <motion.div
                         initial={{ x: 500, opacity: 0 }}
                         whileInView={{ x: 0, opacity: 1 }}
                         transition={{
                             duration: 1.2,
                         }}
                        className="footer-inrcardscmn">
                            <div className="first-footer-logo-sec">
                                <a href=""><img src="/images/fuelMemoriesImages/header-logo.png" alt="" /></a>
                                <div className="footer-maps-imgsec">
                                    <img src="/images/fuelMemoriesImages/footer-maps-img.png" alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                          initial={{ x: 400, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                              duration: 1.2,
                          }}
                        className="footer-inrcardscmn">
                            <div className="footer-contact-us-sec">
                                <h2 className="footer-cmn-heading-one">Contact</h2>
                                <a href="tel:123-234-123400"><img src="/images/fuelMemoriesImages/footer-call-icon.png" alt="" />+123 - 234 - 123400</a>
                                <a href="mailto:hello@awesome.com"><img src="/images/fuelMemoriesImages/footer-mail-icon.png" alt="" />hello@awesome.com</a>
                            </div>
                        </motion.div>
                        <motion.div
                          initial={{ x: 300, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                              duration: 1.2,
                          }}
                         className="footer-inrcardscmn">
                            <div className="footer-cmn-links-sec">
                                <h2 className="footer-cmn-heading-one">Company</h2>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Value</a></li>
                                    <li><a href="">Career</a></li>
                                    <li><a href="">Our Story</a></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div 
                          initial={{ x: 200, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                              duration: 1.2,
                          }}
                        className="footer-inrcardscmn">
                            <div className="footer-cmn-links-sec">
                                <h2 className="footer-cmn-heading-one">Support</h2>
                                <ul>
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Help Center</a></li>
                                    <li><a href="">Safety Updates</a></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                          initial={{ x: 100, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                              duration: 1.2,
                          }}
                        className="footer-inrcardscmn">
                            <div className="footer-cmn-links-sec">
                                <h2 className="footer-cmn-heading-one">Community</h2>
                                <ul>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Membership</a></li>
                                    <li><a href="">Adventure Stories</a></li>
                                    <li><a href="">Upcoming Tours</a></li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-sec">
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                      duration: 1,
                  }}
                className="container">
                    <div className="footer-copyrightinr">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12">
                                <div className="left-copyright-inr">
                                    <p><span>2024</span> Company Name <b>|</b> All Right Reserve</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                <div className="right-paypal-cards-linkfooter">
                                    <a href=""><img src="/images/fuelMemoriesImages/paypal-btn-icon.png" alt="" /></a>
                                    <a href=""><img src="/images/fuelMemoriesImages/mastercard-btn-icon.png" alt="" /></a>
                                    <a href=""><img src="/images/fuelMemoriesImages/visa-btn-icon.png" alt="" /></a>
                                    <a href=""><img src="/images/fuelMemoriesImages/american-expresss-btn-icon.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                  duration: 1,
              }}
            className="scrool-to-top-btn"><img src="/images/fuelMemoriesImages/top-arrow-icon.png" alt="" /></motion.button>
        </footer>
    )
}