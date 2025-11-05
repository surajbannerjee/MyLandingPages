import { CLIENT1, CLIENT2, FULLSTAR, HCTBTNARROW, HCTBTNARROWLEFT } from "@/values/Constants/ImageConstants";
import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { MUIStyle } from "./MUIStyle";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <Box
            className={[className, "CustomNext"]}
            onClick={onClick}
            sx={{
                display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                },
            }}
        >
            <Box sx={MUIStyle.NextArrow}>
                <Box component={"img"} src={HCTBTNARROW} />
            </Box>
        </Box>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <Box
            className={[className, "CustomPrev"]}
            onClick={onClick}
            sx={{
                display: {
                    xs: "none !important",
                    sm: "none !important",
                    md: "block",
                },
            }}
        >
            <Box sx={MUIStyle.PrevArrow}>
                <Box component={"img"} src={HCTBTNARROWLEFT} />
            </Box>
        </Box>
    );
}


function TesttimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 2,
        slidesToScroll: 1,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    };
    return (
        <Box className="Review_slider_container" sx={MUIStyle.TestimonialSliderBox}>
            <Slider {...settings}>
                <Box>
                    <Box sx={MUIStyle.TestimonialSliderOuter}>
                        <Box sx={MUIStyle.TestimonialSliderImgBox}>
                            <Box component={"img"} src={CLIENT1} sx={MUIStyle.TestimonialSliderImg} />
                        </Box>
                        <Box sx={MUIStyle.TestimonialSliderContent}>
                            <Box sx={MUIStyle.Starts}>
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.TestimonialContent}>
                                `&quot;`I wondered if the product would truly enhance my style, but I received endless compliments after wearing it.  The confidence it gave me was priceless, and I couldn`&apos;`t be happier with my purchase`&quot;`
                            </Typography>
                            <Typography variant="h5" sx={MUIStyle.TestimonialClientName}>
                                Amelia, Alberta, CA
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={MUIStyle.TestimonialSliderOuter}>
                        <Box sx={MUIStyle.TestimonialSliderImgBox}>
                            <Box component={"img"} src={CLIENT2} sx={MUIStyle.TestimonialSliderImg} />
                        </Box>
                        <Box sx={MUIStyle.TestimonialSliderContent}>
                            <Box sx={MUIStyle.Starts}>
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.TestimonialContent}>
                                `&quot;`With their intricate designs and natural inspiration, these necklaces are a breath of fresh air in a sea of generic jewelry options`&quot;`
                            </Typography>
                            <Typography variant="h5" sx={MUIStyle.TestimonialClientName}>
                                Ginger, Montana
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={MUIStyle.TestimonialSliderOuter}>
                        <Box sx={MUIStyle.TestimonialSliderImgBox}>
                            <Box component={"img"} src={CLIENT2} sx={MUIStyle.TestimonialSliderImg} />
                        </Box>
                        <Box sx={MUIStyle.TestimonialSliderContent}>
                            <Box sx={MUIStyle.Starts}>
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.TestimonialContent}>
                                `&quot;`I wondered if the product would truly enhance my style, but I received endless compliments after wearing it.  The confidence it gave me was priceless, and I couldn`&apos;`t be happier with my purchase`&quot;`
                            </Typography>
                            <Typography variant="h5" sx={MUIStyle.TestimonialClientName}>
                                Amelia, Alberta, CA
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={MUIStyle.TestimonialSliderOuter}>
                        <Box sx={MUIStyle.TestimonialSliderImgBox}>
                            <Box component={"img"} src={CLIENT1} sx={MUIStyle.TestimonialSliderImg} />
                        </Box>
                        <Box sx={MUIStyle.TestimonialSliderContent}>
                            <Box sx={MUIStyle.Starts}>
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.TestimonialContent}>
                                `&quot;`I wondered if the product would truly enhance my style, but I received endless compliments after wearing it.  The confidence it gave me was priceless, and I couldn`&apos;`t be happier with my purchase`&quot;`
                            </Typography>
                            <Typography variant="h5" sx={MUIStyle.TestimonialClientName}>
                                Amelia, Alberta, CA
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={MUIStyle.TestimonialSliderOuter}>
                        <Box sx={MUIStyle.TestimonialSliderImgBox}>
                            <Box component={"img"} src={CLIENT2} sx={MUIStyle.TestimonialSliderImg} />
                        </Box>
                        <Box sx={MUIStyle.TestimonialSliderContent}>
                            <Box sx={MUIStyle.Starts}>
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.TestimonialContent}>
                                `&quot;`With their intricate designs and natural inspiration, these necklaces are a breath of fresh air in a sea of generic jewelry options`&quot;`
                            </Typography>
                            <Typography variant="h5" sx={MUIStyle.TestimonialClientName}>
                                Ginger, Montana
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={MUIStyle.TestimonialSliderOuter}>
                        <Box sx={MUIStyle.TestimonialSliderImgBox}>
                            <Box component={"img"} src={CLIENT2} sx={MUIStyle.TestimonialSliderImg} />
                        </Box>
                        <Box sx={MUIStyle.TestimonialSliderContent}>
                            <Box sx={MUIStyle.Starts}>
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                                <Box component={"img"} src={FULLSTAR} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.TestimonialContent}>
                                `&quot;`I wondered if the product would truly enhance my style, but I received endless compliments after wearing it.  The confidence it gave me was priceless, and I couldn`&apos;`t be happier with my purchase`&quot;`
                            </Typography>
                            <Typography variant="h5" sx={MUIStyle.TestimonialClientName}>
                                Amelia, Alberta, CA
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Slider>
        </Box>
    );
}

export default TesttimonialSlider;
