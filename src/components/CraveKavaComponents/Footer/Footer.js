import { FACEBOOK_ICON_FOOTER, HEADER_LOGO_ICON, INSTAGRAM_ICON_FOOTER, LINKEDIN_ICON_FOOTER, TOP_ARROW_ICON, TWITTER_ICON_FOOTER } from "@/values/Constants/ImageConstants";
import Image from "next/image";
import { useEffect } from "react";


export default function Footer() {
  useEffect(() => {
    let scrollTopBtn = document.querySelector(".scrool-to-top-btn");

    window.onscroll = function () {
      scrollTopFunction();
    };

    function scrollTopFunction() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        scrollTopBtn.classList.add("active__scrolltopbtn");
      } else {
        scrollTopBtn.classList.remove("active__scrolltopbtn");
      }
    }

    const openBtnScrollTop = () => {
      window.scroll(0, 0);
    };

    scrollTopBtn.addEventListener("click", openBtnScrollTop);

    let lastScroll = 0;
    let isScrolled = true;
    window.addEventListener("scroll", function () {
      let topHeader = document.querySelector(".header-sec-main");
      let currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      let scrollDirection = currentScroll < lastScroll;
      let shouldToggle = isScrolled && scrollDirection;
      isScrolled = currentScroll > 100;
      topHeader.classList.toggle("active__header-adventure-main-sec", shouldToggle);
      lastScroll = currentScroll;
    });
    // });

  }, []);
  return (
    <footer className="footer-main-sec" id="contact">
      <div className="container">
        <div className="footer-inner-sec">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-cmn-cards-inr">
                <div className="first-footer-logo-descript-inr">
                  <a href="#"><Image height={500} width={500} src={HEADER_LOGO_ICON} alt="" /></a>
                  <p>
                    Experience the calm and clarity of our premium kava with kratom. Crafted for those
                    who seek balance in every sip
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="footer-cmn-cards-inr">
                <h2 className="footer-cmn-heading-one">Explore</h2>
                <div className="footer-link-sec">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop Kava Shots</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Kava Benefits</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-cmn-cards-inr">
                <h2 className="footer-cmn-heading-one">Contact Information</h2>
                <div className="footer-contact-information-sec">
                  <ul>
                    <li><strong>Phone:</strong><a href="tel:+1800 6786 589">+1800 6786 589</a></li>
                    <li><strong>Email:</strong><a href="mailto:support@cravekava.com">support@cravekava.com</a></li>
                    <li><strong>Address:</strong>Crave Kava, 123 Herbal Ave, Wellness City, USA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-cmn-cards-inr">
                <h2 className="footer-cmn-heading-one">Stay Connect with Us</h2>
                <div className="footer-social-iconinr">
                  <a href="#"><Image height={500} width={500} src={FACEBOOK_ICON_FOOTER} alt="" /></a>
                  <a href="#"><Image height={500} width={500} src={INSTAGRAM_ICON_FOOTER} alt="" /></a>
                  <a href="#"><Image height={500} width={500} src={TWITTER_ICON_FOOTER} alt="" /></a>
                  <a href="#"><Image height={500} width={500} src={LINKEDIN_ICON_FOOTER} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-sec-footer">
          <div className="row align-items-center justify-content-between">
            <div className="coil-lg-7 col-md-7 col-sm-12">
              <div className="copyright-txt">© <span className="current-year"></span> Crave Kava. All Rights Reserved</div>
            </div>
            <div className="coil-lg-5 col-md-5 col-sm-12">
              <div className="right-sec-policy-sec">
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to top */}
      <button className="scrool-to-top-btn"><Image height={500} width={500} src={TOP_ARROW_ICON} alt="" /></button>
    </footer>
  )
}
