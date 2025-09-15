import { motion } from 'framer-motion';

export default function ExpertCoaches() {
    return (
        <section className="expert-coaches-main-sec" id="experts">
            <div className="container">
                <div className="expert-coaches-inr">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="left-expert-coaches-inr"
                            >
                                <motion.img
                                    initial={{ x: -50, y: 50 }}
                                    whileInView={{ x: 0, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    src="/images/orionPerformanceImages/expert-coaches-left-img1.png" alt="" />
                            </div>
                        </div>
                        <motion.div className="col-lg-7 col-md-6 col-sm-12"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <div className="right-sec-expert-coaches-inr">
                                <h2>MEET OUR EXPERT COACHES</h2>
                                <p>Our team of highly qualified and knowledgeable coaches shares the Orion Performance Coaching vision. Together, we deliver a 5-star service and achieve 5-star results for you.</p>
                                <div className="expert-right-coaches-faq-sec">
                                    <div className="accordion__expertcoaches">
                                        <div className="accordion-item-coaches">
                                            <button aria-expanded="true">
                                                Orion - Head Coach & Founder
                                            </button>
                                            <div className="accordion-content-exper-coaches">
                                                <p>Orion Hanbury, U23 Men’s Physique State Champion and aspiring 2023 bodybuilding titleholder, leads Orion Performance Coaching. He turns fitness journeys into victories with personalized, enjoyable training rooted in his philosophy of joy and excellence.</p>
                                            </div>
                                        </div>
                                        <div className="accordion-item-coaches">
                                            <button aria-expanded="false">
                                                Ella - Personal Trainer & Online Coach
                                            </button>
                                            <div className="accordion-content-exper-coaches">
                                                <p>Orion Hanbury, U23 Men’s Physique State Champion and aspiring 2023 bodybuilding titleholder, leads Orion Performance Coaching. He turns fitness journeys into victories with personalized, enjoyable training rooted in his philosophy of joy and excellence.</p>
                                            </div>
                                        </div>
                                        <div className="accordion-item-coaches">
                                            <button aria-expanded="false">
                                                James - Premium Online Coach
                                            </button>
                                            <div className="accordion-content-exper-coaches">
                                                <p>Orion Hanbury, U23 Men’s Physique State Champion and aspiring 2023 bodybuilding titleholder, leads Orion Performance Coaching. He turns fitness journeys into victories with personalized, enjoyable training rooted in his philosophy of joy and excellence.</p>
                                            </div>
                                        </div>
                                        <div className="accordion-item-coaches">
                                            <button aria-expanded="false">
                                                Austin- Premium Online Coach
                                            </button>
                                            <div className="accordion-content-exper-coaches">
                                                <p>Orion Hanbury, U23 Men’s Physique State Champion and aspiring 2023 bodybuilding titleholder, leads Orion Performance Coaching. He turns fitness journeys into victories with personalized, enjoyable training rooted in his philosophy of joy and excellence.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}