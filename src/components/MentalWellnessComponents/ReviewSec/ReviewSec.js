import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { MWQUOTE, MWREVIEWLEFTIMG, MWREVIEWUSERIMG } from "@/values/Constants/ImageConstants";
import { useRef } from "react";
import { Icon } from '@iconify/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';


export default function ReviewSec() {
    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        // fade: true,
        // waitForAnimate: false,
    };
    return (
        <Box sx={MUIStyle.ReviewSec} id="testimonials">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.Row}>

                    <Box sx={MUIStyle.ReviewImage}>
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                        <Box component={"img"} src={MWREVIEWLEFTIMG} alt="About" />
                        </motion.div>
                    </Box>
                    
                    <Box sx={MUIStyle.ReviewContent}>
                        
                        <Box sx={MUIStyle.ReviewContentBox}>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}   
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                                >

                            <Typography variant="h4" sx={MUIStyle.ReviewTitle}>
                                What Our Residents Say
                            </Typography>
                            <Typography variant="h3" sx={MUIStyle.ReviewDesc}>
                                What people say Real stories from our community
                            </Typography>
                            </motion.div>
                        </Box>
                        <Box sx={MUIStyle.ReviewSlider}>
                            <Slider {...settings} ref={sliderRef}>
                                <Box sx={MUIStyle.ReviewOuter}>
                                    <Box sx={MUIStyle.ReviewBox}>
                                        <Box>
                                            <Box component={"img"} src={MWQUOTE} alt="Review" sx={MUIStyle.ReviewQuoteImg} />
                                            <Typography variant="body1" sx={MUIStyle.ReviewAreaDesc}>
                                                My time at the Mental Wellness Center was transformative. The serene environment and compassionate staff provided the perfect setting for my recovery. I felt supported every step of the way and found a sense of peace I hadnt felt in years. I cant recommend this place enough.
                                            </Typography>
                                        </Box>
                                        <Box sx={MUIStyle.ReviewUser}>
                                            <Box component={"img"} src={MWREVIEWUSERIMG} alt="User" sx={MUIStyle.ReviewUserImg} />
                                            <Box sx={MUIStyle.ReviewUserContent}>
                                                <Typography variant="h6" sx={MUIStyle.ReviewUserName}>
                                                    - Esther Howard
                                                </Typography>
                                                <Typography variant="h6" sx={MUIStyle.ReviewUserDesignation}>
                                                    Preston Rd, (Inglewood)
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={MUIStyle.ReviewOuter}>
                                    <Box sx={MUIStyle.ReviewBox}>
                                        <Box>
                                            <Box component={"img"} src={MWQUOTE} alt="Review" sx={MUIStyle.ReviewQuoteImg} />
                                            <Typography variant="body1" sx={MUIStyle.ReviewAreaDesc}>
                                                My time at the Mental Wellness Center was transformative. The serene environment and compassionate staff provided the perfect setting for my recovery. I felt supported every step of the way and found a sense of peace I hadn`&apos;`t felt in years. I can`&apos;`t recommend this place enough.
                                            </Typography>
                                        </Box>
                                        <Box sx={MUIStyle.ReviewUser}>
                                            <Box component={"img"} src={MWREVIEWUSERIMG} alt="User" sx={MUIStyle.ReviewUserImg} />
                                            <Box sx={MUIStyle.ReviewUserContent}>
                                                <Typography variant="h6" sx={MUIStyle.ReviewUserName}>
                                                    - Esther Howard
                                                </Typography>
                                                <Typography variant="h6" sx={MUIStyle.ReviewUserDesignation}>
                                                    Preston Rd, (Inglewood)
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={MUIStyle.ReviewOuter}>
                                    <Box sx={MUIStyle.ReviewBox}>
                                        <Box>
                                            <Box component={"img"} src={MWQUOTE} alt="Review" sx={MUIStyle.ReviewQuoteImg} />
                                            <Typography variant="body1" sx={MUIStyle.ReviewAreaDesc}>
                                                My time at the Mental Wellness Center was transformative. The serene environment and compassionate staff provided the perfect setting for my recovery. I felt supported every step of the way and found a sense of peace I hadnt felt in years. I cant recommend this place enough.
                                            </Typography>
                                        </Box>
                                        <Box sx={MUIStyle.ReviewUser}>
                                            <Box component={"img"} src={MWREVIEWUSERIMG} alt="User" sx={MUIStyle.ReviewUserImg} />
                                            <Box sx={MUIStyle.ReviewUserContent}>
                                                <Typography variant="h6" sx={MUIStyle.ReviewUserName}>
                                                    - Esther Howard
                                                </Typography>
                                                <Typography variant="h6" sx={MUIStyle.ReviewUserDesignation}>
                                                    Preston Rd, (Inglewood)
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Slider>
                            <Box sx={MUIStyle.SliderArrowBtns}>
                                <Box onClick={() => sliderRef.current.slickPrev()} sx={MUIStyle.SliderArrowBtn} >
                                    <Icon icon="akar-icons:arrow-left" />
                                </Box>
                                <Box onClick={() => sliderRef.current.slickNext()} sx={MUIStyle.SliderArrowBtn}>
                                    <Icon icon="akar-icons:arrow-right" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}