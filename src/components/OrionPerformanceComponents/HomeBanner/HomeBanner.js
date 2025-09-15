import { motion } from 'framer-motion';

export default function HomeBanner() {
    return (
        <section className="homapage-banner-main-sec">
            <div className="bnr-sec-img-home">
                <img src="/images/orionPerformanceImages/homebnr-bg-img1.png" alt="" />
            </div>
            <div className="container">
                <div className="homebnr-inr-sec">
                    <div className="row">
                        <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="left-secbnr-details">
                                <motion.h1
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                >Unleash Your</motion.h1>
                                <motion.h2
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                >
                                    <a href="#scrollBottom"><img src="/images/orionPerformanceImages/down-arrow-scroll.png" alt="" /></a>
                                    <a href="#scrollBottom"><img src="/images/orionPerformanceImages/down-arrow-scroll.png" alt="" /></a>
                                    <a href="#scrollBottom"><img src="/images/orionPerformanceImages/down-arrow-scroll.png" alt="" /></a>
                                    Full <strong>Potential</strong></motion.h2>
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                >Welcome to the home of transformation and premium personal training. Whether youre in Adelaide or online, your journey to excellence begins here. Experience the OPC difference.</motion.p>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="homebnr-lastbtn-inr">
                                    <a href="" className="cmn-apply-now-btn-home">Apply Now</a>
                                    <a href="" className="cmn-know-more-btn-home">Know More</a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}