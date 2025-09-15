'use client'
import 'bootstrap/dist/css/bootstrap.css'
import "./FuelMemoriesStyles.css";
import Header from '@/components/FuelMemoriesComponents/Header/Header';
import HomeBanner from '@/components/FuelMemoriesComponents/HomeBanner/HomeBanner';
import CategorySection from '@/components/FuelMemoriesComponents/CategorySection/CategorySection';
import DestinationSection from '@/components/FuelMemoriesComponents/DestinationSection/DestinationSection';
import GetQuestionSection from '@/components/FuelMemoriesComponents/GetQuestionSection/GetQuestionSection';
import NewsLetterJourney from '@/components/FuelMemoriesComponents/NewsLetterJourney/NewsLetterJourney';
import Footer from '@/components/FuelMemoriesComponents/Footer/Footer';
import $ from "jquery";
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FuelMemoriesPage() {

    useEffect(() => {
        $(document).ready(function () {
            $(".tab__linkbtn").click(function () {
                $(".tab-content-walking-tour").removeClass("tab__linkcontentactive");
                $(
                    ".tab-content-walking-tour[data-id='" + $(this).attr("data-id") + "']"
                ).addClass("tab__linkcontentactive");
                $(".tab__linkbtn").removeClass("active__tablinkbtn");
                $(this).parent().find(".tab__linkbtn").addClass("active__tablinkbtn");
            });
        });

        let navBtnOpen = document.querySelector(".open__nav__btn");
        let navHeader = document.querySelector(".header-navbar-inrsec");
        let navBtnClose = document.querySelector(".close__btn__navbar");

        function openBtnNavHeader() {
            navBtnOpen.classList.toggle("active__btn__open__nav");
            navHeader.classList.add("active__navbar__open__nav");
            navBtnClose.classList.add("active__close__nabar");
        }
        function closeBtnNavHeader() {
            navBtnOpen.classList.remove("active__btn__open__nav");
            navHeader.classList.remove("active__navbar__open__nav");
            navBtnClose.classList.remove("active__close__nabar");
        }

        navBtnOpen.addEventListener("click", openBtnNavHeader);
        navBtnClose.addEventListener("click", closeBtnNavHeader);

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

        // let searchBtnOpen = document.querySelector(".search-iconopen-pop");
        // let openSearchBox = document.querySelector(".search-headerinr");

        // const openBtnSearch = () => {
        //     searchBtnOpen.classList.toggle("active__btn__search");
        //     openSearchBox.classList.toggle("active__searchbox");
        // };
        // searchBtnOpen.addEventListener("click", openBtnSearch);

        // document.onclick = function (event) {
        //     if (
        //         !searchBtnOpen.contains(event.target) &&
        //         !openSearchBox.contains(event.target)
        //     ) {
        //         searchBtnOpen.classList.remove("active__btn__search");
        //         openSearchBox.classList.remove("active__searchbox");
        //     }
        // };

        // tabs read more //

        function readMoreFun(index) {
            let dotsReadMore = document.querySelector(".new-dots-btn-index-" + index);
            let moreTextDisplay = document.querySelector(".new-more-txt-index-" + index);
            let readMorebtnText = document.querySelector(
                ".new-readmore-btn-index-" + index
            );

            if (dotsReadMore.style.display === "none") {
                dotsReadMore.style.display = "inline";
                readMorebtnText.innerHTML = "Read more";
                moreTextDisplay.style.display = "none";
            } else {
                dotsReadMore.style.display = "none";
                readMorebtnText.innerHTML = "Read less";
                moreTextDisplay.style.display = "inline";
            }
        }

        // cards readmore //
        function readMoreFunCards(index) {
            let dotsCardsReadMore = document.querySelector(
                ".dots__cards__peradven_" + index
            );
            let moreTextCards = document.querySelector(
                ".more__content__peradven_" + index
            );
            let readMorebtnCards = document.querySelector(
                ".readmore__btn__cards__peradven_" + index
            );

            // console.log(dotsCardsReadMore, moreTextCards, readMorebtnCards);


            if (dotsCardsReadMore.style.display === "none") {
                dotsCardsReadMore.style.display = "inline";
                moreTextCards.style.display = "none";
                readMorebtnCards.innerHTML = "Read more";
            } else {
                dotsCardsReadMore.style.display = "none";
                moreTextCards.style.display = "inline";
                readMorebtnCards.innerHTML = "Read less";
            }
        }

        [1, 2, 3].forEach((index) => {
            $(".readmore__btn__cards__peradven_" + index).off("click").on("click", function () {
                readMoreFunCards(index);
            });

            $(".new-readmore-btn-index-" + index).off("click").on("click", function () {
                readMoreFun(index);
            });
        });

    }, []);

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
            <CategorySection />
            <DestinationSection />
            <GetQuestionSection />
            <NewsLetterJourney />
            <Footer />
        </motion.div>
    )
}