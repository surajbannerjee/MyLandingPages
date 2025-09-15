import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import "./BannerStyle.css";
import { MWARROWWAVE, MWBANNERSLIDER1, MWBANNERSLIDER2, MWBANNERSLIDER3, MWBANNERSLIDER4, MWBANNERSLIDER5 } from "@/values/Constants/ImageConstants";
import { useRef } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    const sliderRef = useRef(null);
    const mobSliderRef = useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
        ]
    };
    var settingsMob = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };

    return (
        <Box sx={MUIStyle.BannerMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.BannerRow}>
                    <Box sx={MUIStyle.BannerContent}>
                        <Box sx={MUIStyle.BannerContentInner}>
                            <Typography variant="h1" sx={MUIStyle.BannerHeading}>
                                Find Peace and Healing in a Tranquil Setting
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.BannerText}>
                                Providing compassionate care and support for your mental wellness journey.
                            </Typography>
                            <Box sx={MUIStyle.bannerBtnGroups}>
                                <Box sx={MUIStyle.BtnWaveImg} component={"img"} src={MWARROWWAVE} />
                                <Button variant="contained" sx={MUIStyle.primaryBtn}>
                                    Get In Touch
                                </Button>
                                <Button variant="outlined" sx={MUIStyle.secondaryBtn}>
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={MUIStyle.SliderArea}>
                    <Slider className="bannerSlider" {...settings} ref={sliderRef}>
                        <Box className="BannerSliderImg" sx={MUIStyle.BannerSlider}>
                            <Box className="BannerSliderImgInner" sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER1} />
                        </Box>
                        <Box className="BannerSliderImg" sx={MUIStyle.BannerSlider}>
                            <Box className="BannerSliderImgInner" sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER2} />
                        </Box>
                        <Box className="BannerSliderImg" sx={MUIStyle.BannerSlider}>
                            <Box className="BannerSliderImgInner" sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER3} />
                        </Box>
                        <Box className="BannerSliderImg" sx={MUIStyle.BannerSlider}>
                            <Box className="BannerSliderImgInner" sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER4} />
                        </Box>
                        <Box className="BannerSliderImg" sx={MUIStyle.BannerSlider}>
                            <Box className="BannerSliderImgInner" sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER5} />
                        </Box>
                    </Slider>
                </Box>
                <Box sx={MUIStyle.SliderAreaMob}>
                    <Slider {...settingsMob} ref={mobSliderRef}>
                        <Box sx={MUIStyle.BannerSlider}>
                            <Box sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER1} />
                        </Box>
                        <Box sx={MUIStyle.BannerSlider}>
                            <Box sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER2} />
                        </Box>
                        <Box sx={MUIStyle.BannerSlider}>
                            <Box sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER3} />
                        </Box>
                        <Box sx={MUIStyle.BannerSlider}>
                            <Box sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER4} />
                        </Box>
                        <Box sx={MUIStyle.BannerSlider}>
                            <Box sx={MUIStyle.BannerSliderImg} component={"img"} src={MWBANNERSLIDER5} />
                        </Box>
                    </Slider>
                </Box>
                <Box sx={[MUIStyle.SliderArrowBtns,
                {
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "flex",
                        xl: "flex",
                    },
                }
                ]}>
                    <Box onClick={() => sliderRef.current.slickPrev()} sx={MUIStyle.SliderArrowBtnLeft}>
                        <Icon icon="mingcute:arrow-left-line" />
                    </Box>
                    <Box onClick={() => sliderRef.current.slickNext()} sx={MUIStyle.SliderArrowBtnLeft} >
                        <Icon icon="mingcute:arrow-right-line" />
                    </Box>
                </Box>
                <Box sx={[MUIStyle.SliderArrowBtns,
                {
                    display: {
                        xs: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                        xl: "none",
                    },
                }
                ]}>
                    <Box onClick={() => mobSliderRef.current.slickPrev()} sx={MUIStyle.SliderArrowBtnLeft}>
                        <Icon icon="mingcute:arrow-left-line" />
                    </Box>
                    <Box onClick={() => mobSliderRef.current.slickNext()} sx={MUIStyle.SliderArrowBtnLeft} >
                        <Icon icon="mingcute:arrow-right-line" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}