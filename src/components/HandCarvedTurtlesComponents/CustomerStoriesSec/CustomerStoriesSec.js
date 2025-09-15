import { Box, Container, Typography } from "@mui/material";
// import styles from "./AboutSec.module.css";
import { MUIStyle } from "./MUIStyle";
import { BOTTOMBARTITLE1, CARDHEADINGIMG, CLIENT1, FULLSTAR, WCUCARDIMG1, WCUCARDIMG2, WCUCARDIMG3 } from "@/values/Constants/ImageConstants";
import TesttimonialSlider from "@/components/HandCarvedTurtlesComponents/TestimonialSlider/TestimonialSlider";

export default function CustomerStoriesSec() {

    return (
        <Box sx={MUIStyle.WhyChooseUsMain} id="stories">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.WhyChooseUsHeadingRow}>
                    <Typography component={"h4"} sx={MUIStyle.AboutSmallText}>
                        Customer Stories
                    </Typography>
                    <Typography variant="h2" sx={MUIStyle.AboutHeading}>
                        What Are Our Lovely Customers Saying
                    </Typography>
                    <Box component={"img"} src={BOTTOMBARTITLE1} sx={MUIStyle.TitlebottomBar} />
                </Box>
                {/* <Slider sx={MUIStyle.TestimonialSlider} {...settings}>
                    <Box sx={MUIStyle.TestimonialSliderOuter}>
                        <Box sx={MUIStyle.TestimonialSliderInner}>
                            <Box sx={MUIStyle.TestimonialClientBox}>
                                <Box component={"img"} src={CLIENT1} sx={MUIStyle.TestimonialClientImg} />
                            </Box>
                            <Box sx={MUIStyle.TestimonialSliderContent}>
                                <Box sx={MUIStyle.Starts}>
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                </Box>
                                <Typography sx={MUIStyle.TestimonialContent}>
                                    "I wondered if the product would truly enhance my style, but I received endless compliments after wearing it.  The confidence it gave me was priceless, and I couldn't be happier with my purchase"
                                </Typography>
                                <Typography sx={MUIStyle.TestimonialClientName}>
                                    Amelia, Alberta, CA
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    
                </Slider> */}
                <TesttimonialSlider />
            </Container>
        </Box>
    );
}