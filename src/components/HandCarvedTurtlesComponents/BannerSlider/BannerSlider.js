import { HCTBANNERSLIDER1, HCTBANNERSLIDER2, HCTBANNERSLIDER3, HCTBANNERSLIDER4 } from "@/values/Constants/ImageConstants";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { commonColor } from "@/values/Colors/CommonColor";
import Image from "next/image";

function SimpleSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4; // Total number of slides

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: (current) => setCurrentSlide(current),
    };

    const calculateProgressWidth = () => {
        // Calculate the progress width as a percentage
        return `${((currentSlide + settings.slidesToScroll) / totalSlides) * 100}%`;
    };
    return (
        <div className={"bannerSliderArea"}>
            <Slider sx={MUIStyle.sliderBanner} {...settings}>
                <Box sx={MUIStyle.sliderImgBox}>
                    <Image height={1200} width={1200} src={HCTBANNERSLIDER1} />
                </Box>
                <Box sx={MUIStyle.sliderImgBox}>
                    <Image height={1200} width={1200} src={HCTBANNERSLIDER2} />
                </Box>
                <Box sx={MUIStyle.sliderImgBox}>
                    <Image height={1200} width={1200} src={HCTBANNERSLIDER3} />
                </Box>
                <Box sx={MUIStyle.sliderImgBox}>
                    <Image height={1200} width={1200} src={HCTBANNERSLIDER4} />
                </Box>
            </Slider>
            <Box sx={MUIStyle.sliderCountBox}>
                <span>01</span>
                <Box sx={{
                    position: "relative",
                    height: "7px",
                    width: "170px",
                    background: "#E0E0E0",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Box sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: "1px",
                        width: calculateProgressWidth(),
                        height: "100%",
                        borderRadius: "20px",
                        background: commonColor.HCTGreen,
                        transition: "width 0.5s ease",
                    }} />
                </Box>
                <span> {String(currentSlide + 1).padStart(2, '0')}</span>
            </Box>
        </div>
    );
}

export default SimpleSlider;
