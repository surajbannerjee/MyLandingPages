import { motion } from "framer-motion"
import Image from "next/image"

export default function GetQuestionSection() {
    return (
        <section className="get-questions-main-sec" id="contact">
            <motion.div
                initial={{ x: 100, opacity: 0, scale: 0 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                }}
                className="container">
                <div className="get-questions-inr-sec">
                    <div className="bnr-img-questions">
                        <Image height={500} width={500} src="/images/fuelMemoriesImages/questions-bg-img1.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-10 col-sm-12">
                            <div className="left-questions-sec">
                                <h2>GET A QUESTION ?</h2>
                                <p>Sin aliquam sem fringilla. Tortor dignissim convallis aenean et tortor at risus viverra. Proin sed libero enim.</p>
                                <div className="questions-call-email-sec">
                                    <a href="tel:123-234-123400"><Image height={20} width={20} src="/images/fuelMemoriesImages/call-icon-question.png" alt="" />+123 - 234 - 123400</a>
                                    <a href="mailto:hello@awesome.com"><Image height={20} width={20} src="/images/fuelMemoriesImages/mail-icon-question.png" alt="" />hello@awesome.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}