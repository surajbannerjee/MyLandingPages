import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

export default function SuccessStories() {

    const sliderRef = useRef(null);

    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        lazyLoad: "progressive",
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        centerMode: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="success-stories-main-sec" id="result">
            <div className="container">
                <div className="success-stories-inrsec">
                    <div className="success-stories-inr-heading">
                        <div className="left-heading-stories">
                            <div className="right-arrow-animate">
                                <img src="/images/orionPerformanceImages/right-arrow-animate1.png" alt="" />
                                <img src="/images/orionPerformanceImages/right-arrow-animate2.png" alt="" />
                            </div>
                            <h2>Success Stories</h2>
                            <p>Experience the remarkable changes our personalized coaching programs deliver. Whether your goal is weight loss or muscle gain, see how OPC Fitness can make a real difference in your fitness journey.</p>
                        </div>
                        <div className="right-custom-arrow-slide-stories">
                            <button className="prev-icon-storiesslide"
                                onClick={() => sliderRef.current.slickPrev()}
                            ><img src="/images/orionPerformanceImages/left-slide-arrow-icon.png" alt="" /></button>
                            <button className="next-icon-storiesslide"
                                onClick={() => sliderRef.current.slickNext()}
                            ><img src="/images/orionPerformanceImages/right-slide-arrow-icon.png" alt="" /></button>
                        </div>
                    </div>
                    <Slider className="success-stories-inr-slide-sec" {...settings} ref={sliderRef}>
                        {/* Slide Items */}
                        <div className="slide-items-inr-stories">
                            <div className="slide-items-inr-insideposition">
                                <figure><img src="/images/orionPerformanceImages/stories-slide-img1.png" alt="" /></figure>
                                <div className="slide-hover-effect-details-stories">
                                    <h3>Julian</h3>
                                    <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                </div>
                            </div>
                        </div>
                        {/* Slide Items */}
                        <div className="slide-items-inr-stories">
                            <div className="slide-items-inr-insideposition">
                                <figure><img src="/images/orionPerformanceImages/stories-slide-img2.png" alt="" /></figure>
                                <div className="slide-hover-effect-details-stories">
                                    <h3>Julian</h3>
                                    <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                </div>
                            </div>
                        </div>
                        {/* Slide Items */}
                        <div className="slide-items-inr-stories">
                            <div className="slide-items-inr-insideposition">
                                <figure><img src="/images/orionPerformanceImages/stories-slide-img3.png" alt="" /></figure>
                                <div className="slide-hover-effect-details-stories">
                                    <h3>Julian</h3>
                                    <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                </div>
                            </div>
                        </div>
                        {/* Slide Items */}
                        <div className="slide-items-inr-stories">
                            <div className="slide-items-inr-insideposition">
                                <figure><img src="/images/orionPerformanceImages/stories-slide-img2.png" alt="" /></figure>
                                <div className="slide-hover-effect-details-stories">
                                    <h3>Julian</h3>
                                    <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}