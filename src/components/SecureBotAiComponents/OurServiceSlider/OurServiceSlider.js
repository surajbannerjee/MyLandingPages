'use client'
import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import styles from "./OurServiceSlider.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { SLIDERIMG1, SLIDERIMG2, SLIDERIMG3, SLIDERIMG4 } from "@/values/Constants/ImageConstants";
import { motion } from "framer-motion"

export default function OurServiceSlider() {
    const sliderOptions = {
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },



        ],

    }
    return (
        <Slider {...sliderOptions} className="reviewSlider">

{/* ----box */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                }}>
                
                <Box sx={MUIStyle.OurServiceSliderBox}>
                    <Box sx={MUIStyle.OurServiceSliderBoxInner}>
                        <Box sx={MUIStyle.OurServiceSliderCardImgBox}>
                            <Box component={"img"} src={SLIDERIMG1} sx={MUIStyle.OurServiceSliderCardImg} />
                        </Box>
                        <Box sx={MUIStyle.OurServiceSliderCardContent}>
                            <Typography variant="h3" sx={MUIStyle.OurServiceSliderCardHeading}>
                                AI-Powered Penetration Testing
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.OurServiceSliderCardText}>
                                Our AI-driven penetration testing identifies vulnerabilities and security weaknesses with unparalleled accuracy.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </motion.div>

            {/* ----box */}

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                }}>
                <Box sx={MUIStyle.OurServiceSliderBox}>
                    <Box sx={MUIStyle.OurServiceSliderBoxInner}>
                        <Box sx={MUIStyle.OurServiceSliderCardImgBox}>
                            <Box component={"img"} src={SLIDERIMG2} sx={MUIStyle.OurServiceSliderCardImg} />
                        </Box>
                        <Box sx={MUIStyle.OurServiceSliderCardContent}>
                            <Typography variant="h3" sx={MUIStyle.OurServiceSliderCardHeading}>
                                Vulnerability Assessments
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.OurServiceSliderCardText}>
                                Regular vulnerability assessments to detect, analyze, and address security issues, ensuring your systems remain secure and compliant.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </motion.div>
            {/* ------box */}

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                }}>
                <Box sx={MUIStyle.OurServiceSliderBox}>
                    <Box sx={MUIStyle.OurServiceSliderBoxInner}>
                        <Box sx={MUIStyle.OurServiceSliderCardImgBox}>
                            <Box component={"img"} src={SLIDERIMG3} sx={MUIStyle.OurServiceSliderCardImg} />
                        </Box>
                        <Box sx={MUIStyle.OurServiceSliderCardContent}>
                            <Typography variant="h3" sx={MUIStyle.OurServiceSliderCardHeading}>
                                Security Monitoring and Alerts
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.OurServiceSliderCardText}>
                                Continuous monitoring of your IT environment with real-time alerts to promptly address and mitigate security incidents.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </motion.div>

            {/* ----box */}

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                }}>
                <Box sx={MUIStyle.OurServiceSliderBox}>
                    <Box sx={MUIStyle.OurServiceSliderBoxInner}>
                        <Box sx={MUIStyle.OurServiceSliderCardImgBox}>
                            <Box component={"img"} src={SLIDERIMG4} sx={MUIStyle.OurServiceSliderCardImg} />
                        </Box>
                        <Box sx={MUIStyle.OurServiceSliderCardContent}>
                            <Typography variant="h3" sx={MUIStyle.OurServiceSliderCardHeading}>
                                Compliance and Risk Management
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.OurServiceSliderCardText}>
                                Expert guidance on regulatory compliance and risk management, helping you protect critical infrastructure and sensitive data.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </motion.div>


        </Slider>

    )
}