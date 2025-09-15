'use client'
import 'bootstrap/dist/css/bootstrap.css';
import "./LuxeInteriorsStyles.css";
import "./LuxeInteriorsStyleResponsive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import $ from "jquery";
import Header from '@/components/LuxeInteriorsComponents/Header/Header';
import HomeBanner from '@/components/LuxeInteriorsComponents/HomeBanner/HomeBanner';
import ShippingSection from '@/components/LuxeInteriorsComponents/ShippingSection/ShippingSection';
import HomeDecorCategories from '@/components/LuxeInteriorsComponents/HomeDecorCategories/HomeDecorCategories';
import FurnitureModernDesign from '@/components/LuxeInteriorsComponents/FurnitureModernDesign/FurnitureModernDesign';
import Testimonials from '@/components/LuxeInteriorsComponents/Testimonials/Testimonials';
import OurBlogs from '@/components/LuxeInteriorsComponents/OurBlogs/OurBlogs';
import Footer from '@/components/LuxeInteriorsComponents/Footer/Footer';

export default function LuxeInteriorsPage() {
  useEffect(() => {
    // New Document Ready Function
    $(function () {

      let navBtnOpen = document.querySelector(".open__nav__btn");
      let navHeader = document.querySelector(
        ".right-sec-header-cartfull-menus-desktop"
      );
      let navBtnClose = document.querySelector(".close__btn__navbar");

      function openBtnNavHeader() {
        navBtnOpen.classList.toggle("active__btn__open__nav");
        navHeader.classList.toggle("active__navbar__open__nav");
        navBtnClose.classList.add("active__close__nabar");
      }
      function closeBtnNavHeader() {
        navBtnOpen.classList.remove("active__btn__open__nav");
        navHeader.classList.remove("active__navbar__open__nav");
        navBtnClose.classList.remove("active__close__nabar");
      }
      $(".open__nav__btn").off("click").on("click", openBtnNavHeader);
      $(".close__btn__navbar").off("click").on("click", closeBtnNavHeader);

      let searchBtnOpen = document.querySelector(".searchbtn");
      let openSearchBox = document.querySelector(".search-headerinr");
      const openBtnSearch = () => {
        searchBtnOpen.classList.toggle("active__btn__search");
        openSearchBox.classList.toggle("active__searchbox");
      };
      searchBtnOpen.addEventListener("click", openBtnSearch);
      document.onclick = function (event) {
        if (
          !searchBtnOpen.contains(event.target) &&
          !openSearchBox.contains(event.target)
        ) {
          searchBtnOpen.classList.remove("active__btn__search");
          openSearchBox.classList.remove("active__searchbox");
        }
      };

      let scrollTopBtn = $(".scrool-to-top-btn");


      window.onscroll = function () {
        scrollTopFunction();
      };

      function scrollTopFunction() {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          scrollTopBtn.addClass("active__scrolltopbtn");
        } else {
          scrollTopBtn.removeClass("active__scrolltopbtn");
        }
      }

      const openBtnScrollTop = () => {
        window.scroll(0, 0);
      };

      scrollTopBtn.off("click").on("click", openBtnScrollTop);

      let lastScroll = 0;
      let isScrolled = true;
      window.addEventListener("scroll", function () {
        let topHeader = document.querySelector(".header-luxe-interi-main-sec");
        let currentScroll =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        let scrollDirection = currentScroll < lastScroll;
        let shouldToggle = isScrolled && scrollDirection;
        isScrolled = currentScroll > 100;
        topHeader.classList.toggle(
          "active__header-adventure-main-sec",
          shouldToggle
        );
        lastScroll = currentScroll;
      });
    });

  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      style={{
        overflow: "hidden",
      }}
    >

      <Header />
      <HomeBanner />
      <ShippingSection />
      <HomeDecorCategories />
      <FurnitureModernDesign />
      <Testimonials />
      <OurBlogs />
      <Footer />
    </motion.div>
  )
}

