import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurServicesSection() {
    return (
        <section className="our-services-main-sec" id="our-service">
            <div className="container">
                <div className="our-services-inr">
                    <div className="our-services-cmn-heading-sec">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                            }}
                        >Our Services</motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                            }}
                        >At OPC Fitness, we tailor our approach to match your unique fitness journey. Whether youre a gym novice or a seasoned athlete, our services are crafted to help you reach your full potential. Join us and discover a fitness philosophy thats truly personalized.</motion.p>
                    </div>
                    <div className="services-cmn-cards-inrsec">
                        <div className="row">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                                className="col-lg-6 col-md-6 col-sm-12">
                                <div className="all-cmn-cards-inside-sec-services">
                                    <div className="services-insidedetails-txt">
                                        <figure><Image height={500} width={500} src="/images/orionPerformanceImages/services-cards-img1.png" alt="" /></figure>
                                        <div className="service-coach-training-inr">
                                            <a href=""><h3>Online Coaching</h3></a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                                className="col-lg-6 col-md-6 col-sm-12">
                                <div className="all-cmn-cards-inside-sec-services">
                                    <div className="services-insidedetails-txt">
                                        <figure><Image height={500} width={500} src="/images/orionPerformanceImages/services-cards-img2.png" alt="" /></figure>
                                        <div className="service-coach-training-inr">
                                            <a href=""><h3>Personal training</h3></a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}