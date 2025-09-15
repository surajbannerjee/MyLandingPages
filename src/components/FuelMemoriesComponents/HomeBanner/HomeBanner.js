"use client"
import { motion } from "framer-motion"
export default function HomeBanner() {
  
    return (
        <section className="homapage-banner-main-sec">
            <div className="bnr-sec-img-home">
                <img src="/images/fuelMemoriesImages/homebnr-img1.png" alt="" />
            </div>
            <div className="container">
                <div className="homebnr-inr-sec">
                    <div className="row">
                        <div className="col-lg-10 col-md-11 col-sm-12">
                            <div className="left-secbnr-details">
                                <motion.h1
                                 initial={{ x: -200, opacity: 0 }}
                                 whileInView={{ x: 0, opacity: 1 }}
                                 transition={{
                                     duration: 1,
                                 }}
                                
                                >Discover endless travel adventures</motion.h1>
                                <motion.p
                                 initial={{ x: 200, opacity: 0 }}
                                 whileInView={{ x: 0, opacity: 1 }}
                                 transition={{
                                     duration: 1,
                                 }}
                                >—right here. Experience more with our curated trips.</motion.p>
                                <div className="homebnr-social-icon">
                                    <motion.a
                                     initial={{ x: 130, opacity: 0 }}
                                     whileInView={{ x: 0,opacity: 1 }}
                                     transition={{
                                         duration: 0.6,
                                     }}
                                    href=""><img src="/images/fuelMemoriesImages/facebook-icon1.png" alt="" /></motion.a>
                                    <motion.a
                                     initial={{ x:120, opacity: 0 }}
                                     whileInView={{ x: 0, opacity: 1 }}
                                     transition={{
                                         duration: 0.6,
                                     }}
                                    href=""><img src="/images/fuelMemoriesImages/twitter-icon1.png" alt="" /></motion.a>
                                    <motion.a
                                     initial={{ x: 110,opacity: 0 }}
                                     whileInView={{ x: 0, opacity: 1 }}
                                     transition={{
                                         duration:0.6,
                                     }}
                                    href=""><img src="/images/fuelMemoriesImages/youtube-icon1.png" alt="" /></motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}