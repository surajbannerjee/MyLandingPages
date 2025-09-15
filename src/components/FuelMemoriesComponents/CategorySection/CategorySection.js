
import { motion } from "framer-motion"

export default function CategorySection() {
    return (
        <section className="perfect-adventure-main-sec" id="categories">
            <div className="container">
                <div className="perfect-adven-inr">
                    <div className="category-adven-heading-inr">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                            <h2>Explore by Category</h2>
                        </motion.div>
                        <p>Find Your Perfect Adventure</p>
                    </div>



                    <div className="perfect-adventure-scroll-sec-cards">

                        {/* ---cards */}
                        <div
 
                            className="cards-inr-perfect-adventure">
                            <motion.div 
                             initial={{ y: -90, opacity: 0 }}
                             whileInView={{ y: 0, opacity: 1 }}
                             transition={{
                                 duration: 1,
                             }}
                            className="first-cards-adventure-imginr">
                                <figure>
                                    <img src="/images/fuelMemoriesImages/perfect-adven-cards-img1.png" alt="" />
                                </figure>
                            </motion.div>
                            <div
                            //  initial={{ y: 200, opacity: 0 }}
                            //  whileInView={{ y: 0, opacity: 1 }}
                            //  transition={{
                            //      duration: 1
                            //  }}
                            className="last-cards-details-adventure-home">
                                <div className="cards-middle-inr-adven">
                                    <div className="perfect-adven-btn-linksec">
                                        <div className="tagdes-adven-categroy">Moderate</div>
                                        <div className="tagdes-adven-categroy">Wild life</div>
                                    </div>
                                    <div className="cards-linkbtnmiddle">
                                        <a href=""><img src="/images/fuelMemoriesImages/link-arrow-icon1.png" alt="" /></a>
                                    </div>
                                </div>
                                <h3>Hiking</h3>
                                <p>
                                    Whether youre an experienced hiker or a nature enthusiast, our diverse hiking routes offer the perfect blend of challenge and beauty, making
                                    <span className="cmnmore__content__cards more__content__peradven_1">every step a memorable experience.</span>
                                    <button className="cmnreadmore__btnperadven readmore__btn__cards__peradven_1" style={{ marginLeft: 5 }}>Read more</button>
                                    <span className="dots__cards__peradven_1">.....</span>
                                </p>
                            </div>
                        </div>


                        {/* ----cards */}
                        <div className="cards-inr-perfect-adventure">
                            <motion.div
                            initial={{ y: -150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                               
                            }}
                            className="first-cards-adventure-imginr">
                                <figure>
                                    <img src="/images/fuelMemoriesImages/perfect-adven-cards-img2.png" alt="" />
                                </figure>
                            </motion.div>
                            <div
                            //  initial={{ y: 200, opacity: 0 }}
                            //  whileInView={{ y: 0, opacity: 1 }}
                            //  transition={{
                            //      duration: 1,delay:0.2
                            //  }}
                            className="last-cards-details-adventure-home">
                                <div className="cards-middle-inr-adven">
                                    <div className="perfect-adven-btn-linksec">
                                        <div className="tagdes-adven-categroy">High</div>
                                        <div className="tagdes-adven-categroy">River scenery</div>
                                    </div>
                                    <div className="cards-linkbtnmiddle">
                                        <a href=""><img src="/images/fuelMemoriesImages/link-arrow-icon1.png" alt="" /></a>
                                    </div>
                                </div>
                                <h3>Rafting Adventure</h3>
                                <p>
                                    Embark on a thrilling adventure through breathtaking river routes, where you’ll encounter exhilarating rapids, serene stretches, and stunning
                                    <span className="cmnmore__content__cards more__content__peradven_2">natural beauty. Perfect for both adrenaline seekers and nature enthusiasts, our river tracking experiences offer unforgettable journeys along some of the most scenic waterways.</span>
                                    <button className="cmnreadmore__btnperadven readmore__btn__cards__peradven_2" style={{ marginLeft: 5 }}>Read more</button>
                                    <span className="dots__cards__peradven_2">.....</span>
                                </p>
                            </div>
                        </div>


                        {/* ----cards */}
                        <div className="cards-inr-perfect-adventure">
                            <motion.div
                            initial={{ y: -200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1 
                            }}
                            className="first-cards-adventure-imginr">
                                <figure>
                                    <img src="/images/fuelMemoriesImages/perfect-adven-cards-img3.png" alt="" />
                                </figure>
                            </motion.div>
                            <div
                            //   initial={{ y: 200, opacity: 0 }}
                            //   whileInView={{ y: 0, opacity: 1 }}
                            //   transition={{
                            //       duration: 1,delay:0.3
                            //   }}
                            className="last-cards-details-adventure-home">
                                <div className="cards-middle-inr-adven">
                                    <div className="perfect-adven-btn-linksec">
                                        <div className="tagdes-adven-categroy">Moderate</div>
                                        <div className="tagdes-adven-categroy">Land Scape </div>
                                    </div>
                                    <div className="cards-linkbtnmiddle">
                                        <a href=""><img src="/images/fuelMemoriesImages/link-arrow-icon1.png" alt="" /></a>
                                    </div>
                                </div>
                                <h3>Paragliding</h3>
                                <p>
                                    Soar through the skies with our paragliding adventures, offering a birds-eye view of breathtaking landscapes. Experience the thrill
                                    <span className="cmnmore__content__cards more__content__peradven_3">of flight as you glide over mountains, valleys, and rivers.</span>
                                    <button className="cmnreadmore__btnperadven readmore__btn__cards__peradven_3" style={{ marginLeft: 5 }}>Read more</button>
                                    <span className="dots__cards__peradven_3">.....</span>
                                </p>
                            </div>
                        </div>


                    </div>
                    <div
                     
                    className="explore-btn-seclast">
                        <a href="" className="explore-all-btn">Explore All</a>
                    </div>
                </div>
            </div>
        </section>
    )
}