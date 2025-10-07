import { motion } from "framer-motion"
import Image from "next/image"

export default function OrionHanburySection() {
    return (
        <section className="orion-hanbury-main-sec" id="scrollBottom">
            <div className="container">
                <div className="orion-hanbury-inrsec">
                    <div className="row">
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                            className="col-lg-5 col-md-5 col-sm-12" >
                            <div className="left-orion-inrimg">
                                <Image height={500} width={500} src="/images/orionPerformanceImages/left-orion-inr-img1.png" alt="" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                            className="col-lg-7 col-md-7 col-sm-12">
                            <div className="right-sec-hanbury-inr">
                                <div className="right-arrow-animate">
                                    <Image height={500} width={500} src="/images/orionPerformanceImages/right-arrow-animate1.png" alt="" />
                                    <Image height={500} width={500} src="/images/orionPerformanceImages/right-arrow-animate2.png" alt="" />
                                </div>
                                <h2>Meet Orion Hanbury: The Visionary Behind OPC</h2>
                                <p>Orion Hanbury is a standout in fitness, holding the 2023 Mens Physique State title across two federations, 2x Junior State titles, and top placements nationally and internationally. His achievements underscore his exceptional standing in the field.</p>
                                <br className="responsive__tagnone__br" />
                                <p>Orions impact extends beyond his accolades. Driven by a passion for helping others, he combines expert knowledge with meticulous attention to detail to ensure each individuals success.</p>
                                <ul className="right-sec-hanbury-ullist">
                                    <li>Certificate III & IV Master Trainer</li>
                                    <li>AIF Nutrition Coach</li>
                                    <li>2023 ICN SA Men’s Physique Overall Champion</li>
                                    <li>DMA Certified in Whole Body Massage (L1, L2, L3 & L4)</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}