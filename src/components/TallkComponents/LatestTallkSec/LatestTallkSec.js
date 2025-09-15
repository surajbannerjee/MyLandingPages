"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LATESTTALKSLIDERIMG1, LATESTTALKSLIDERIMG2 } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE } from "@/values/Constants/FontConstants";
import { useRef } from "react";


export default function LatestTallkSec() {
    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
                    initialSlide: 1
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

    return (
        <Box sx={MUIStyle.AboutSecMain} id="blogs">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutBoxRow}>
                    <Box sx={MUIStyle.AboutTitleRow}>
                        <Typography variant="h2" sx={MUIStyle.AboutTitle}>Latest Tallk</Typography>
                        <Typography variant="p" sx={MUIStyle.sectionSubTitle}>Discover how Tallk transforms businesses worldwide.</Typography>
                    </Box>
                    <Box sx={MUIStyle.buttonSliderRow}>
                        <Button sx={MUIStyle.sliderBtn}
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <Icon icon="majesticons:arrow-left-line" />
                        </Button>
                        <Button sx={MUIStyle.sliderBtn}
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <Icon icon="majesticons:arrow-right-line" />
                        </Button>
                    </Box>
                </Box>
                <Slider {...settings} ref={sliderRef}>
                    <Box sx={MUIStyle.LatestTallkSliderOuter}>
                        <Box sx={MUIStyle.LatestTallkSliderInner}>
                            <Box sx={MUIStyle.LatestTallkSliderCont}>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderTitle}>How Tallk.ai </Typography>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderDesc}>From Craft to Conversion: How Tallk.ai is Revolutionizing Sales for SMBs</Typography>
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderImage}>
                                <Box component={"img"} src={LATESTTALKSLIDERIMG1} alt="Latest Tallk" />
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderBtnBox}>
                                <Box sx={MUIStyle.LatestTallkSliderBtnBoxLeft}>
                                    <Button variant="contained" sx={MUIStyle.ResourcesBtn}>Resources</Button>
                                    <Typography variant="p" sx={MUIStyle.LatestTallkSliderDate}>June 15, 2021</Typography>
                                </Box>
                                <Button variant="contained" sx={MUIStyle.ArrowBtn}>
                                    <Icon icon="material-symbols:arrow-outward-rounded" />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.LatestTallkSliderOuter}>
                        <Box sx={MUIStyle.LatestTallkSliderInner}>
                            <Box sx={MUIStyle.LatestTallkSliderCont}>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderTitle}>How Tallk.ai </Typography>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderDesc}>From Craft to Conversion: How Tallk.ai is Revolutionizing Sales for SMBs</Typography>
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderImage}>
                                <Box component={"img"} src={LATESTTALKSLIDERIMG2} alt="Latest Tallk" />
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderBtnBox}>
                                <Box sx={MUIStyle.LatestTallkSliderBtnBoxLeft}>
                                    <Button variant="contained" sx={MUIStyle.ResourcesBtn}>Resources</Button>
                                    <Typography variant="p" sx={MUIStyle.LatestTallkSliderDate}>June 15, 2021</Typography>
                                </Box>
                                <Button variant="contained" sx={MUIStyle.ArrowBtn}>
                                    <Icon icon="material-symbols:arrow-outward-rounded" />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.LatestTallkSliderOuter}>
                        <Box sx={MUIStyle.LatestTallkSliderInner}>
                            <Box sx={MUIStyle.LatestTallkSliderCont}>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderTitle}>How Tallk.ai </Typography>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderDesc}>From Craft to Conversion: How Tallk.ai is Revolutionizing Sales for SMBs</Typography>
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderImage}>
                                <Box component={"img"} src={LATESTTALKSLIDERIMG1} alt="Latest Tallk" />
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderBtnBox}>
                                <Box sx={MUIStyle.LatestTallkSliderBtnBoxLeft}>
                                    <Button variant="contained" sx={MUIStyle.ResourcesBtn}>Resources</Button>
                                    <Typography variant="p" sx={MUIStyle.LatestTallkSliderDate}>June 15, 2021</Typography>
                                </Box>
                                <Button variant="contained" sx={MUIStyle.ArrowBtn}>
                                    <Icon icon="material-symbols:arrow-outward-rounded" />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.LatestTallkSliderOuter}>
                        <Box sx={MUIStyle.LatestTallkSliderInner}>
                            <Box sx={MUIStyle.LatestTallkSliderCont}>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderTitle}>How Tallk.ai </Typography>
                                <Typography variant="p" sx={MUIStyle.LatestTallkSliderDesc}>From Craft to Conversion: How Tallk.ai is Revolutionizing Sales for SMBs</Typography>
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderImage}>
                                <Box component={"img"} src={LATESTTALKSLIDERIMG2} alt="Latest Tallk" />
                            </Box>
                            <Box sx={MUIStyle.LatestTallkSliderBtnBox}>
                                <Box sx={MUIStyle.LatestTallkSliderBtnBoxLeft}>
                                    <Button variant="contained" sx={MUIStyle.ResourcesBtn}>Resources</Button>
                                    <Typography variant="p" sx={MUIStyle.LatestTallkSliderDate}>June 15, 2021</Typography>
                                </Box>
                                <Button variant="contained" sx={MUIStyle.ArrowBtn}>
                                    <Icon icon="material-symbols:arrow-outward-rounded" />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Slider>

            </Container>
        </Box>
    );
}