import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DownloadAppSection() {
    return (
        <motion.section className="download-ourapp-mainsec"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 1,
            }}
        >
            <div className="container">
                <div className="download-ourapp-inr-sec">
                    <div className="bnr-img-download-app">
                        <Image height={500} width={800} src="/images/orionPerformanceImages/ourapp-bg-img1.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-sm-12">
                            <div className="download-app-inrleft">
                                <div className="download-app-txt-arrow">
                                    <div className="right-arrow-animate">
                                        <Image height={24} width={24} src="/images/orionPerformanceImages/right-arrow-animate1.png" alt="" />
                                        <Image height={24} width={24} src="/images/orionPerformanceImages/right-arrow-animate2.png" alt="" />
                                    </div>
                                    <h2>Download Our App</h2>
                                </div>
                                <p>Enhance your training with the OPC app. Get personalized plans, evidence-based nutrition, and support directly on your phone.</p>
                                <div className="last-btn-sec-download-app">
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/play-store-logo1.png" alt="" /></a>
                                    <a href=""><Image height={24} width={24} src="/images/orionPerformanceImages/app-store-logo1.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}