import { useEffect, useRef, useState } from "react"
import $ from "jquery";
import Slider from "react-slick";


export default function Testimonials() {
    const [slider, setSlider] = useState(0)
    const sliderArr = [
        {
            image: "/images/luxeInteriorsImages/testi-profile-img.png",
            name: "Sophia Luna",
            description: "From the moment I made my first purchase, I knew I had found my go-to decor store. Excellent products and top-notch customer service."
        },
        {
            image: "/images/luxeInteriorsImages/testi-profile-img.png",
            name: "Sophia Tuna",
            description: "From the moment I made my first purchase, I knew I had found my go-to decor store. Excellent products and top-notch customer service."
        }
    ]
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    const incSlider = () => {
        if (slider < sliderArr.length - 1) {
            setSlider(slider + 1)
        } else {
            setSlider(0)
        }

    }
    const decSlider = () => {
        if (slider > 0) {
            setSlider(slider - 1)
        } else {
            setSlider(sliderArr.length - 1)
        }
    }

    useEffect(() => {
        // $(".slider-main-testi-sec-inner").slick({
        //   dots: false,
        //   infinite: true,
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   speed: 800,
        //   lazyLoad: "progressive",
        //   autoplay: true,
        //   autoplaySpeed: 4000,
        //   dots: false,
        //   centerMode: false,
        //   arrows: true,
        //   prevArrow: $(".prev-icon-testislide"),
        //   nextArrow: $(".next-icon-testislide"),
        //   responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //       },
        //     },
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //       },
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //       },
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //       },
        //     },
        //   ],
        // });
    }, [])
    return (
        <section className="testimonials-main-sec" id="testimonials">
            <div className="bnr-img-testimonials">
                <img src="/images/luxeInteriorsImages/testi-bnr-bg-img.png" alt="" />
            </div>
            <div className="container">
                <div className="testimonials-inner-sec">
                    <div className="cmn-testi-heading-home">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-9 col-sm-12">
                                <h2>Testimonials</h2>
                                <h3>What Our Customers Are Saying</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="slide__main-div-testimonialslide">
                                {/* custom arrow */}
                                <button className="prev-icon-testislide" onClick={() => sliderRef.current.slickPrev()}><img src="/images/luxeInteriorsImages/left-arrow-icon-slide.png" alt="" /></button>
                                <button className="next-icon-testislide" onClick={() => sliderRef.current.slickNext()}><img src="/images/luxeInteriorsImages/right-arrow-icon-slide.png" alt="" /></button>

                                <div className="slider-container">
                                    <Slider {...settings} ref={sliderRef}>
                                        <div className="slide-items-testi-inr">
                                            <div className="first-testi-profile">
                                                <img src="/images/luxeInteriorsImages/testi-profile-img.png" alt="" />
                                            </div>
                                            <h4>Sophia Luna</h4>
                                            <p>&apos;From the moment I made my first purchase, I knew I had found my go-to decor store. Excellent products and top-notch customer service.&apos;</p>
                                        </div>
                                        <div className="slide-items-testi-inr">
                                            <div className="first-testi-profile">
                                                <img src="/images/luxeInteriorsImages/testi-profile-img.png" alt="" />
                                            </div>
                                            <h4>Sophia Tuna</h4>
                                            <p>&apos;From the moment I made my first purchase, I knew I had found my go-to decor store. Excellent products and top-notch customer service.&apos;</p>
                                        </div>

                                    </Slider>
                                </div>
                                {/* <Slider className="success-stories-inr-slide-sec">
                                    <div className="slide-items-inr-stories">
                                        <div className="slide-items-inr-insideposition">
                                            <figure><img src="/images/orionPerformanceImages/stories-slide-img1.png" alt="" /></figure>
                                            <div className="slide-hover-effect-details-stories">
                                                <h3>Julian</h3>
                                                <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-items-inr-stories">
                                        <div className="slide-items-inr-insideposition">
                                            <figure><img src="/images/orionPerformanceImages/stories-slide-img2.png" alt="" /></figure>
                                            <div className="slide-hover-effect-details-stories">
                                                <h3>Julian</h3>
                                                <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-items-inr-stories">
                                        <div className="slide-items-inr-insideposition">
                                            <figure><img src="/images/orionPerformanceImages/stories-slide-img3.png" alt="" /></figure>
                                            <div className="slide-hover-effect-details-stories">
                                                <h3>Julian</h3>
                                                <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-items-inr-stories">
                                        <div className="slide-items-inr-insideposition">
                                            <figure><img src="/images/orionPerformanceImages/stories-slide-img2.png" alt="" /></figure>
                                            <div className="slide-hover-effect-details-stories">
                                                <h3>Julian</h3>
                                                <p>In the before photo Julian weighed approximately 70kg compared to today weighing in at 74kg, showing us what the true meaning of recompostion is remarkable.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider> */}
                                {/* <div className="slider-main-testi-sec-inner">
                                    {sliderArr.map((item,index)=>{
                                        if(index === slider){
                                        return <div key={index} className="slide-items-testi-inr">
                                            <div className="first-testi-profile">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        }
                                        
                                    })}
                                    
                             
                                <div className="slide-items-testi-inr">
                                    <div className="first-testi-profile">
                                        <img src="/images/luxeInteriorsImages/testi-profile-img.png" alt=""/>
                                    </div>
                                    <h4>Sophia Luna</h4>
                                    <p>"From the moment I made my first purchase, I knew I had found my go-to decor store. Excellent products and top-notch customer service."</p>
                                </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}