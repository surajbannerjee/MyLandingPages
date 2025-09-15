import { motion } from 'framer-motion';

export default function JourneyStarted() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5, // Delay between each child
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="ready-journey-getstarted-mainsec">
            <div className="container">
                <div className="ready-journey-started-inr">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <motion.div
                                className="ready-journey-inside-inr"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <motion.h2 variants={childVariants}>READY TO GET STARTED?</motion.h2>
                                <motion.h3 variants={childVariants}>Begin Your Journey to Your Best Self</motion.h3>
                                <motion.p variants={childVariants}>
                                    Embark on the path to a more confident, healthier you. Apply now, and let us create a personalized transformation plan just for you.
                                </motion.p>
                                <motion.div className="last-journey-get-btnsec" variants={childVariants}>
                                    <a href="" className="cmn-apply-now-btn-getstarted">Apply Now</a>
                                    <a href="" className="cmn-see-result-btngetstarted">See our result</a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}