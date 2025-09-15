import { motion } from "framer-motion"

export default function DestinationSection() {
    return (
        <section className="discover-destination-main-sec" id="our-service">
            <div className="container">
                <div className="discover-destination-inrsec">
                    <div className="discover-headinginr">
                    <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                        <h2>Discover Our Destination</h2>
                        </motion.div>
                    </div>
                    <div className="discover-destination-explore-inr">
                        <div className="row align-items-start">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="left-walking-explore-sec">
                                    <h3>Walking Explore in Soematra Forest</h3>
                                    <div className="rating-google-discoverhome">Rating on google <img src="/images/fuelMemoriesImages/rating-icon.png" alt="" /><b>(36)</b></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="right-save-share-destination">
                                    <a href="" className="share-btn-discovehome"><img src="/images/fuelMemoriesImages/share-btn-icon.png" alt="" /></a>
                                    <a href="" className="save-btn-discove-home"><img src="/images/fuelMemoriesImages/like-heart-btn-icon.png" alt="" />save</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="walking-explore-img-col-inr">
                        <div className="row">
                            <div className="col-lg-6 col-md-7 col-sm-12">
                                <motion.div 
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                                className="leftcol-explore-gallery-img">
                                    <figure><img src="/images/fuelMemoriesImages/discover-explore-gallery-img1.png" alt="" /></figure>
                                </motion.div>
                            </div>
                            <div className="col-lg-6 col-md-5 col-sm-12">
                                <div className="rightcol-explore-gallery-img">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <motion.div 
                                            initial={{ y: -100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 1,
                                            }}
                                            className="rightcol-explore-gallery-inside">
                                                <figure><img src="/images/fuelMemoriesImages/discover-explore-gallery-img2.png" alt="" /></figure>
                                            </motion.div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <motion.div 
                                            initial={{ x: -100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 1,
                                            }}
                                            className="rightcol-explore-gallery-inside">
                                                <figure><img src="/images/fuelMemoriesImages/discover-explore-gallery-img3.png" alt="" /></figure>
                                            </motion.div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <motion.div
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 1,
                                            }}
                                            className="rightcol-explore-gallery-inside">
                                                <figure><img src="/images/fuelMemoriesImages/discover-explore-gallery-img4.png" alt="" /></figure>
                                                <button className="see-all-exploresbtn">See all</button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="walking-tour-fulldescription-main">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="walking-tour-tab-sec-main">
                                    <div className="tab-menu-li">
                                        <ul>
                                            <motion.li 
                                             initial={{ x: -100, opacity: 0 }}
                                             whileInView={{ x: 0, opacity: 1 }}
                                             transition={{
                                                 duration: 1,
                                             }}
                                            ><a className="tab__linkbtn active__tablinkbtn" data-id="tab1Content">About</a></motion.li>
                                            <motion.li
                                             initial={{ x: -200, opacity: 0 }}
                                             whileInView={{ x: 0, opacity: 1 }}
                                             transition={{
                                                 duration: 1,
                                             }}
                                            ><a className="tab__linkbtn" data-id="tab2Content">Itinerary</a></motion.li>
                                            <motion.li
                                             initial={{ x: -300, opacity: 0 }}
                                             whileInView={{ x: 0, opacity: 1 }}
                                             transition={{
                                                 duration: 1,
                                             }}
                                            ><a className="tab__linkbtn" data-id="tab3Content">Tour Detail</a></motion.li>
                                        </ul>
                                    </div>
                                    <div className="tab-content-walking-tour tab__linkcontentactive" data-id="tab1Content">
                                        <p>
                                            Cras semper auctor neque vitae tempus quam pellentesque nec nam. Duis ut diam quam nulla porttitor massa id. Blandit cursus risus at ultrices mi tempus imperdiet. Risus in hendrerit gravida rutrum quisque non tellus orci. Vitae sapien pellentesque habitant morbi tristique. Elit eget gravida cum sociis.
                                            Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Nisl vel pretium lectus quam id leo in vitae turpis. Viverra mauriaMattis molestie a iaculis at erat. A lacus vestibulum sed arcu non odio euismod. Nulla malesuada pellentesque elit eget gravida cum. Mi quis hend
                                            <b className="more__txt__read new-more-txt-index-1">gna eget est lorem. Ultricies mi eget mauris pharetra. Euismod nisi porta lorem mollis. Tincidunt dui ut ornare lectus sit amet est placerat. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Bibendum at varius vel pharetra vel turpis nunc eget. s in aliquam sem fringilla. Tortor dignissim convallis aenean et tortor at risus viverra.</b>
                                            <button className="readmore__btn new-readmore-btn-index-1" style={{ marginLeft: 5 }}>Read more</button>
                                            <span className="dots_btn new-dots-btn-index-1">......</span>
                                        </p>
                                        <h3>Highlight</h3>
                                        <ul>
                                            <li>Learn about the rich history and ecology of the forest from knowledgeable guides.</li>
                                            <li>Choose from half-day, full-day, or multi-day trekking packages to suit your schedule .</li>
                                            <li>Included maps of the trails help you explore further and discover hidden gems within the forest.</li>
                                            <li>Complimentary shuttle service from select lodges to trailheads.</li>
                                            <li>Choose from half-day, full-day, or multi-day trekking packages to suit your schedule.</li>
                                        </ul>
                                    </div>
                                    <div className="tab-content-walking-tour" data-id="tab2Content">
                                        Itinerary content just for example
                                        <p>
                                            Cras semper auctor neque vitae tempus quam pellentesque nec nam. Duis ut diam quam nulla porttitor massa id. Blandit cursus risus at ultrices mi tempus imperdiet. Risus in hendrerit gravida rutrum quisque non tellus orci. Vitae sapien pellentesque habitant morbi tristique. Elit eget gravida cum sociis.
                                            Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Nisl vel pretium lectus quam id leo in vitae turpis. Viverra mauriaMattis molestie a iaculis at erat. A lacus vestibulum sed arcu non odio euismod. Nulla malesuada pellentesque elit eget gravida cum. Mi quis hend
                                            <b className="more__txt__read new-more-txt-index-2">gna eget est lorem. Ultricies mi eget mauris pharetra. Euismod nisi porta lorem mollis. Tincidunt dui ut ornare lectus sit amet est placerat. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Bibendum at varius vel pharetra vel turpis nunc eget. s in aliquam sem fringilla. Tortor dignissim convallis aenean et tortor at risus viverra.</b>
                                            <button className="readmore__btn new-readmore-btn-index-2" style={{ marginLeft: 5 }}>Read more</button>
                                            <span className="dots_btn new-dots-btn-index-2">......</span>
                                        </p>
                                        <h3>Highlight</h3>
                                        <ul>
                                            <li>Learn about the rich history and ecology of the forest from knowledgeable guides.</li>
                                            <li>Choose from half-day, full-day, or multi-day trekking packages to suit your schedule .</li>
                                            <li>Included maps of the trails help you explore further and discover hidden gems within the forest.</li>
                                            <li>Complimentary shuttle service from select lodges to trailheads.</li>
                                            <li>Choose from half-day, full-day, or multi-day trekking packages to suit your schedule.</li>
                                        </ul>
                                    </div>
                                    <div className="tab-content-walking-tour" data-id="tab3Content">
                                        Tour Detail content just for example
                                        <p>
                                            Cras semper auctor neque vitae tempus quam pellentesque nec nam. Duis ut diam quam nulla porttitor massa id. Blandit cursus risus at ultrices mi tempus imperdiet. Risus in hendrerit gravida rutrum quisque non tellus orci. Vitae sapien pellentesque habitant morbi tristique. Elit eget gravida cum sociis.
                                            Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Nisl vel pretium lectus quam id leo in vitae turpis. Viverra mauriaMattis molestie a iaculis at erat. A lacus vestibulum sed arcu non odio euismod. Nulla malesuada pellentesque elit eget gravida cum. Mi quis hend
                                            <b className="more__txt__read new-more-txt-index-3">gna eget est lorem. Ultricies mi eget mauris pharetra. Euismod nisi porta lorem mollis. Tincidunt dui ut ornare lectus sit amet est placerat. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Bibendum at varius vel pharetra vel turpis nunc eget. s in aliquam sem fringilla. Tortor dignissim convallis aenean et tortor at risus viverra.</b>
                                            <button className="readmore__btn new-readmore-btn-index-3" style={{ marginLeft: 5 }}>Read more</button>
                                            <span className="dots_btn new-dots-btn-index-3">......</span>
                                        </p>
                                        <h3>Highlight</h3>
                                        <ul>
                                            <li>Learn about the rich history and ecology of the forest from knowledgeable guides.</li>
                                            <li>Choose from half-day, full-day, or multi-day trekking packages to suit your schedule .</li>
                                            <li>Included maps of the trails help you explore further and discover hidden gems within the forest.</li>
                                            <li>Complimentary shuttle service from select lodges to trailheads.</li>
                                            <li>Choose from half-day, full-day, or multi-day trekking packages to suit your schedule.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <div className="book-adventure-sec-right">
                                    <motion.div
                                     initial={{ y: -100, opacity: 0 }}
                                     whileInView={{ y: 0, opacity: 1 }}
                                     transition={{
                                         duration: 1,
                                     }}
                                    className="sale-sec-tags-adventure">top <br />seller</motion.div>
                                    <h2>Book This Adventure <b>4 days</b></h2>
                                    <div className="adventure-dalmore-sometra-sec">
                                        <ul>
                                            <li>2N Dalmore</li>
                                            <li>2N Sometra</li>
                                        </ul>
                                    </div>
                                    <div className="adventure-pricing-sec">
                                        <div className="offer-tags-adventure">40% off</div>
                                        <div className="price-deals-advent">
                                            <s>$2399</s>
                                            $1949 <b>/Person</b>
                                        </div>
                                        <p>(Price includes taxes and booking fees )</p>
                                        <div className="tour-start-tags">Next tour start from 23 Aug</div>
                                    </div>
                                    <div className="last-book-adven-btnsec">
                                        <a
                                        href="" className="book-now-btn-adven">Book now</a>
                                        <a
                                        href="" className="contact-enquairy-btn-adven">Contact for Enquairy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}