

import { motion } from "framer-motion"
import Image from "next/image"
export default function NewsLetterJourney() {
    return (
        <section className="newsletter-journey-main-sec">
            <div className="container">
                <div className="newsletter-journey-inr">
                    <div className="row justify-content-between">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                            className="col-lg-6 col-md-6 col-sm-12">
                            <div className="left-journey-inr">
                                <h2>Guiding You to Unforgettable Journeys</h2>
                                <div className="social-icon-sec-journey">

                                    <a
                                        href=""><Image height={100} width={100} src="/images/fuelMemoriesImages/facebook-icon1.png" alt="" /></a>
                                    <a
                                        href=""><Image height={100} width={100} src="/images/fuelMemoriesImages/twitter-icon1.png" alt="" /></a>
                                    <a
                                        href=""><Image height={100} width={100} src="/images/fuelMemoriesImages/youtube-icon1.png" alt="" /></a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                            className="col-lg-4 col-md-5 col-sm-12">
                            <div className="right-inr-newsletter-form">
                                <h2>Join Our News latter</h2>
                                <form action="#">
                                    <div className="form-group-newsletter">
                                        <input type="email" placeholder="Enter your email" />
                                        <input type="submit" value="Subscribe" />
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}