import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { MWARROWROUND, MWFACILITYBOXIMG1, MWFACILITYBOXIMG2, MWFACILITYBOXIMG3, MWFACILITYBOXIMG4, MWTICK } from "@/values/Constants/ImageConstants";
import { motion } from 'framer-motion';


export default function FacilitySec() {

    return (
        <Box sx={MUIStyle.FacilitySec} id="our-facility">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.HeadingRow}>
                    <Box sx={MUIStyle.HeadingBox}>
                        <Typography variant="h5" sx={MUIStyle.FacilitySecTitle}>
                            Discover Our Facility
                        </Typography>
                        <Typography variant="h2" sx={MUIStyle.FacilitySecDesc}>
                            Experience comfort and care in a setting designed for healing
                        </Typography>
                    </Box>
                </Box>
                <Box sx={MUIStyle.FacilityRow}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <Box sx={MUIStyle.FacilityBox}>
                            <Box sx={MUIStyle.FacilityImgBox}>
                                <Box component={"img"} sx={MUIStyle.FacilityImg} src={MWFACILITYBOXIMG3} alt="FacilityImgBox" />
                            </Box>
                            <Box sx={MUIStyle.FacilityContentBox}>
                                <Box>
                                    <Typography variant="h4" sx={MUIStyle.FacilityHeading}>
                                        Accommodations
                                    </Typography>
                                    <Typography variant="h3" sx={MUIStyle.FacilityTitle}>
                                        Comfortable, Private Rooms
                                    </Typography>
                                    <Typography variant="body1" sx={MUIStyle.FacilityDesc}>
                                        Our rooms are designed to provide a peaceful, private space where you can relax and focus on your recovery. Each room features
                                    </Typography>
                                    <Box component={'ul'} sx={MUIStyle.FacilityUlBox}>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Cozy, high-quality bedding.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Private en-suite bathrooms.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Scenic views of our expansive grounds.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Thoughtfully designed decor.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Button variant="outlined" sx={MUIStyle.FacilityBtn}>
                                    <Box component={'img'} sx={MUIStyle.FacilityBtnIcon} src={MWARROWROUND} alt="ListIcon" />
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <Box sx={MUIStyle.FacilityBox}>
                            <Box sx={MUIStyle.FacilityImgBox}>
                                <Box component={"img"} sx={MUIStyle.FacilityImg} src={MWFACILITYBOXIMG4} alt="FacilityImgBox" />
                            </Box>
                            <Box sx={MUIStyle.FacilityContentBox}>
                                <Box>
                                    <Typography variant="h4" sx={MUIStyle.FacilityHeading}>
                                        Grounds
                                    </Typography>
                                    <Typography variant="h3" sx={MUIStyle.FacilityTitle}>
                                        100 Acres of Natural Beauty
                                    </Typography>
                                    <Typography variant="body1" sx={MUIStyle.FacilityDesc}>
                                        Our center is surrounded by lush greenery, providing a serene backdrop for your healing journey
                                    </Typography>
                                    <Box component={'ul'} sx={MUIStyle.FacilityUlBox}>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Walking through peaceful woodlands
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Beautifully landscaped gardens.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Quiet spaces for meditation.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Outdoor seating areas to enjoy nature.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Button variant="outlined" sx={MUIStyle.FacilityBtn}>
                                    <Box component={'img'} sx={MUIStyle.FacilityBtnIcon} src={MWARROWROUND} alt="ListIcon" />
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <Box sx={MUIStyle.FacilityBox}>
                            <Box sx={MUIStyle.FacilityImgBox}>
                                <Box component={"img"} sx={MUIStyle.FacilityImg} src={MWFACILITYBOXIMG2} alt="FacilityImgBox" />
                            </Box>
                            <Box sx={MUIStyle.FacilityContentBox}>
                                <Box>
                                    <Typography variant="h4" sx={MUIStyle.FacilityHeading}>
                                        Amenities
                                    </Typography>
                                    <Typography variant="h3" sx={MUIStyle.FacilityTitle}>
                                        Resort-Like Amenities with a Purpose
                                    </Typography>
                                    <Typography variant="body1" sx={MUIStyle.FacilityDesc}>
                                        While our primary focus is your mental health, we offer a range of amenities to enhance your stay.
                                    </Typography>
                                    <Box component={'ul'} sx={MUIStyle.FacilityUlBox}>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Nutritious, chef-prepared meals tailored.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Personalized wellness programs.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Yoga and meditation classes.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Art and music therapy sessions
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Button variant="outlined" sx={MUIStyle.FacilityBtn}>
                                    <Box component={'img'} sx={MUIStyle.FacilityBtnIcon} src={MWARROWROUND} alt="ListIcon" />
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <Box sx={MUIStyle.FacilityBox}>
                            <Box sx={MUIStyle.FacilityImgBox}>
                                <Box component={"img"} sx={MUIStyle.FacilityImg} src={MWFACILITYBOXIMG1} alt="FacilityImgBox" />
                            </Box>
                            <Box sx={MUIStyle.FacilityContentBox}>
                                <Box>
                                    <Typography variant="h4" sx={MUIStyle.FacilityHeading}>
                                        Services
                                    </Typography>
                                    <Typography variant="h3" sx={MUIStyle.FacilityTitle}>
                                        Comfortable Accommodations
                                    </Typography>
                                    <Typography variant="body1" sx={MUIStyle.FacilityDesc}>
                                        We provide a wide range of treatments tailored to meet your unique needs, including.
                                    </Typography>
                                    <Box component={'ul'} sx={MUIStyle.FacilityUlBox}>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Individual and group therapy.
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Cognitive-behavioral therapy (CBT).
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Dialectical behavior therapy (DBT).
                                            </Typography>
                                        </Box>
                                        <Box component={'li'} sx={MUIStyle.FacilityLi}>
                                            <Box component={'img'} sx={MUIStyle.FacilityIcon} src={MWTICK} alt="ListIcon" />
                                            <Typography variant="body1" sx={MUIStyle.FacilityLiText}>
                                                Medication management.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Button variant="outlined" sx={MUIStyle.FacilityBtn}>
                                    <Box component={'img'} sx={MUIStyle.FacilityBtnIcon} src={MWARROWROUND} alt="ListIcon" />
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>

            </Container>
        </Box>
    );
}