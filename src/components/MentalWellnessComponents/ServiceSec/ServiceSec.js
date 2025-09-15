import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import style from "./ServiceSecStyle.css";
import { MWSERVICEIMG2, MWSERVICEIMG3, MWSERVICEIMG1, MWSERVICEICON2, MWSERVICEICON3, MWSERVICEICON1 } from "@/values/Constants/ImageConstants";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';


export default function ServiceSec() {
    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
    return (
        <Box sx={MUIStyle.ServiceSec} id="service">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.HeadingRow}>
                    <Box sx={MUIStyle.HeadingBox}>
                        <Typography variant="h5" sx={MUIStyle.ServiceSecTitle}>
                            Our Service
                        </Typography>
                        <Typography variant="h2" sx={MUIStyle.ServiceSecDesc}>
                            Our Comprehensive Services for Your Mental Wellness
                        </Typography>
                    </Box>
                </Box>
                <Box sx={MUIStyle.ServiceSliderArea}>
                    <Slider className="ServiceSlider" {...settings} ref={sliderRef}>
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                            >
                        <Box sx={MUIStyle.ServiceOuter}>
                            <Box sx={MUIStyle.ServiceSlider}>
                                <Box sx={MUIStyle.ServiceImage}>
                                    <Box sx={MUIStyle.ServiceImg} component={"img"} src={MWSERVICEIMG1} alt="Service" />
                                    <Box sx={MUIStyle.ServiceIcon}>
                                        <Box component={"img"} src={MWSERVICEICON1} alt="Service" />
                                    </Box>
                                </Box>
                                <Box sx={MUIStyle.ServiceContent}>
                                    <Box sx={MUIStyle.ServiceContbox}>
                                        <Typography variant="h3" sx={MUIStyle.ServiceTitle}>
                                            Inpatient Mental Health Care
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.ServiceDesc}>
                                            Our inpatient program provides 24/7 support and personalized treatment plans tailored to individual needs
                                        </Typography>
                                    </Box>
                                    <Button variant="outlined" sx={MUIStyle.ServiceBtn}>
                                        Learn More
                                        <Icon icon="akar-icons:arrow-right" />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        </motion.div>
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                        <Box sx={MUIStyle.ServiceOuter}>
                            <Box sx={MUIStyle.ServiceSlider}>
                                <Box sx={MUIStyle.ServiceImage}>
                                    <Box sx={MUIStyle.ServiceImg} component={"img"} src={MWSERVICEIMG2} alt="Service" />
                                    <Box sx={MUIStyle.ServiceIcon}>
                                        <Box component={"img"} src={MWSERVICEICON2} alt="Service" />
                                    </Box>
                                </Box>
                                <Box sx={MUIStyle.ServiceContent}>
                                    <Box sx={MUIStyle.ServiceContbox}>
                                        <Typography variant="h3" sx={MUIStyle.ServiceTitle}>
                                            Holistic Therapies
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.ServiceDesc}>
                                            We offer a variety of holistic therapies designed to complement traditional mental health treatments
                                        </Typography>
                                    </Box>
                                    <Button variant="outlined" sx={MUIStyle.ServiceBtn}>
                                        Learn More
                                        <Icon icon="akar-icons:arrow-right" />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        </motion.div>
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                        <Box sx={MUIStyle.ServiceOuter}>
                            <Box sx={MUIStyle.ServiceSlider}>
                                <Box sx={MUIStyle.ServiceImage}>
                                    <Box sx={MUIStyle.ServiceImg} component={"img"} src={MWSERVICEIMG3} alt="Service" />
                                    <Box sx={MUIStyle.ServiceIcon}>
                                        <Box component={"img"} src={MWSERVICEICON3} alt="Service" />
                                    </Box>
                                </Box>
                                <Box sx={MUIStyle.ServiceContent}>
                                    <Box sx={MUIStyle.ServiceContbox}>
                                        <Typography variant="h3" sx={MUIStyle.ServiceTitle}>
                                            Stay Accommodations
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.ServiceDesc}>
                                            Our center is located on 100 acres of beautiful Pennsylvania countryside, providing a tranquil and healing environment.
                                        </Typography>
                                    </Box>
                                    <Button variant="outlined" sx={MUIStyle.ServiceBtn}>
                                        Learn More
                                        <Icon icon="akar-icons:arrow-right" />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        </motion.div>
                    </Slider>
                    <Box sx={MUIStyle.SliderRow}>
                        <Box sx={MUIStyle.SliderArrowBtns}>
                            <Box onClick={() => sliderRef.current.slickPrev()} sx={MUIStyle.SliderArrowBtn} >
                                <Icon icon="akar-icons:arrow-left" />
                            </Box>
                            <Box onClick={() => sliderRef.current.slickNext()} sx={MUIStyle.SliderArrowBtn}>
                                <Icon icon="akar-icons:arrow-right" />
                            </Box>
                        </Box>
                        <Button variant="contained" sx={MUIStyle.ViewBtn}>
                            View All
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}