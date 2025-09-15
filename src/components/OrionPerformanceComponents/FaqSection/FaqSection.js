import { motion } from 'framer-motion';

export default function FaqSection() {
    return (
        <section className="faq-accordion-home-main-sec" id="faqs">
            <div className="container">
                <div className="faq-accordion-inr-home">
                    <div className="faq-cmn-heading-homeinr">
                        <div className="row justify-content-center">
                            <motion.div className="col-lg-8 col-md-10 col-sm-12"
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                            >
                                <h2>FAQs</h2>
                                <p>Have questions? We have answers. If you need more information, dont hesitate to contact us and inquire about our services.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="accordion-question-inr-home">
                        <div className="row">
                            <motion.div className="col-lg-7 col-md-7 col-sm-12"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                            >
                                <div className="left-home-accordion-inr-main">
                                    <div className="accoridian-items-home-faq">
                                        <button aria-expanded="true">
                                            <h3>What training services are available at Orion Performance Coaching?</h3>
                                            <span><img src="/images/orionPerformanceImages/faq-arrow-icon1.png" alt="" /></span>
                                        </button>
                                        <div className="accoridian-content-home-faq">
                                            <p>OPC offers personalized one-on-one training in Adelaide and tailored online coaching programs. Clients also get exclusive access to our custom OPC app to enhance their training and nutrition plans.</p>
                                        </div>
                                    </div>
                                    <div className="accoridian-items-home-faq">
                                        <button aria-expanded="false">
                                            <h3>What qualifications do OPC coaches have?</h3>
                                            <span><img src="/images/orionPerformanceImages/faq-arrow-icon1.png" alt="" /></span>
                                        </button>
                                        <div className="accoridian-content-home-faq">
                                            <p>OPC offers personalized one-on-one training in Adelaide and tailored online coaching programs. Clients also get exclusive access to our custom OPC app to enhance their training and nutrition plans.</p>
                                        </div>
                                    </div>
                                    <div className="accoridian-items-home-faq">
                                        <button aria-expanded="false">
                                            <h3>How can I start with Orion Performance Coaching?</h3>
                                            <span><img src="/images/orionPerformanceImages/faq-arrow-icon1.png" alt="" /></span>
                                        </button>
                                        <div className="accoridian-content-home-faq">
                                            <p>OPC offers personalized one-on-one training in Adelaide and tailored online coaching programs. Clients also get exclusive access to our custom OPC app to enhance their training and nutrition plans.</p>
                                        </div>
                                    </div>
                                    <div className="accoridian-items-home-faq">
                                        <button aria-expanded="false">
                                            <h3>What are the pricing options for OPCs services?</h3>
                                            <span><img src="/images/orionPerformanceImages/faq-arrow-icon1.png" alt="" /></span>
                                        </button>
                                        <div className="accoridian-content-home-faq">
                                            <p>OPC offers personalized one-on-one training in Adelaide and tailored online coaching programs. Clients also get exclusive access to our custom OPC app to enhance their training and nutrition plans.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="col-lg-5 col-md-5 col-sm-12"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                            >
                                <div className="right-faq-anyquestion-inr">
                                    <span className="img-faqquestion-icons"><img src="/images/orionPerformanceImages/questions-faq-img1.png" alt="" /></span>
                                    <h4>Do You have any question?</h4>
                                    <p>If you need more information feel free to reach out. Were here to help you every step of the way!</p>
                                    <a className="cmn-apply-now-btn-getstarted">Ask a Question</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}