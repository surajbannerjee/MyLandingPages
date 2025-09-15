'use client'
import 'bootstrap/dist/css/bootstrap.css'
import "./OrionPerformanceStyles.css";
import $ from "jquery";
import Header from '@/components/OrionPerformanceComponents/Header/Header';
import HomeBanner from '@/components/OrionPerformanceComponents/HomeBanner/HomeBanner';
import OrionHanburySection from '@/components/OrionPerformanceComponents/OrionHanburySection/OrionHanburySection';
import OurServicesSection from '@/components/OrionPerformanceComponents/OurServicesSection/OurServicesSection';
import JourneyStarted from '@/components/OrionPerformanceComponents/JourneyStarted/JourneyStarted';
import ExpertCoaches from '@/components/OrionPerformanceComponents/ExpertCoaches/ExpertCoaches';
import FaqSection from '@/components/OrionPerformanceComponents/FaqSection/FaqSection';
import DownloadAppSection from '@/components/OrionPerformanceComponents/DownloadAppSection/DownloadAppSection';
import Footer from '@/components/OrionPerformanceComponents/Footer/Footer';
import SuccessStories from '@/components/OrionPerformanceComponents/SuccessStories/SuccessStories';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function OrionPerformancePage() {

    useEffect(() => {
        $(document).ready(function () {
            let navBtnOpen = document.querySelector(".open__nav__btn");
            let navHeader = document.querySelector(".header-navbar-inrsec");
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

            const ExpertCoachesitems = $(
                ".accordion__expertcoaches button"
            );

            function ExpertCoachesAccordionFun() {
                const ExpertitemToggle = this.getAttribute("aria-expanded");

                if (ExpertitemToggle == "false") {
                    this.setAttribute("aria-expanded", "true");
                } else {
                    this.setAttribute("aria-expanded", "false");
                }
            }

            ExpertCoachesitems.each((index, item) => {
                $(item).off("click").on("click", ExpertCoachesAccordionFun);
            });

            // home faq //

            const homeFaqitems = $(
                ".accoridian-items-home-faq button"
            );

            function homeFaqAccordionFun() {
                const homeFaqtitemToggle = this.getAttribute("aria-expanded");


                // console.log(homeFaqtitemToggle);


                if (homeFaqtitemToggle == "false") {
                    this.setAttribute("aria-expanded", "true");
                } else {
                    this.setAttribute("aria-expanded", "false");
                }
            }

            homeFaqitems.each((index, item) => {
                $(item).off("click").on("click", homeFaqAccordionFun);
            });

            let lastScroll = 0;
            let isScrolled = true;
            window.addEventListener("scroll", function () {
                let topHeader = document.querySelector(".header-adventure-main-sec");
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
            <OrionHanburySection />
            <OurServicesSection />
            <SuccessStories />
            <JourneyStarted />
            <ExpertCoaches />
            <FaqSection />
            <DownloadAppSection />
            <Footer />
        </motion.div>
    )
}