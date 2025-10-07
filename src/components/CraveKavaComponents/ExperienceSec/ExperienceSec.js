import { TESTI_PROFILE_IMG1, TESTI_PROFILE_IMG2, TESTI_PROFILE_MAIN_IMG1 } from '@/values/Constants/ImageConstants'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

export default function ExperienceSec() {


  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };
  return (
    <section className="experience-journey-main-sec" id="reviews">
      <div className="container">
        <div className="experience-journey-inr">
          <div className="journey-cmn-heading">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9 col-sm-12">
                <h2>Experience the Calm, Share the Journey</h2>
                <p>Our community&apos;s stories speak louder than words. Discover how Crave Kava is making a difference in lives every day</p>
              </div>
            </div>
          </div>
          <div className="experience-journey-slider-main-sec">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-sm-12">
                {/* Slider div */}
                <div className="slide-journeyexperi-inner">

                  {/* Slider items */}
                  <Slider {...settings} >
                    <div className="slide-items-experi-journey">
                      <div className="first-profile-img-uploads">
                        <Image height={1000} width={2000} src={TESTI_PROFILE_IMG1} alt="Profile 1" />
                        <Image height={1000} width={2000} src={TESTI_PROFILE_MAIN_IMG1} alt="Main Profile" />
                        <Image height={1000} width={2000} src={TESTI_PROFILE_IMG2} alt="Profile 2" />
                      </div>
                      <div className="last-postion-txtdetails">
                        <h3>Zen Surge</h3>
                        <h4>Marketing Assistant</h4>
                        <p>Find serenity in every sip with our Tranquil Escape shot. A perfect blend of kava and kratom for a peaceful mind</p>
                      </div>
                    </div>
                    {/* Slider items */}
                    <div className="slide-items-experi-journey">
                      <div className="first-profile-img-uploads">
                        <Image height={1000} width={2000} src={TESTI_PROFILE_IMG1} alt="Profile 1" />
                        <Image height={1000} width={2000} src={TESTI_PROFILE_MAIN_IMG1} alt="Main Profile" />
                        <Image height={1000} width={2000} src={TESTI_PROFILE_IMG2} alt="Profile 2" />
                      </div>
                      <div className="last-postion-txtdetails">
                        <h3>Zen Surge</h3>
                        <h4>Marketing Assistant</h4>
                        <p>Find serenity in every sip with our Tranquil Escape shot. A perfect blend of kava and kratom for a peaceful mind</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
