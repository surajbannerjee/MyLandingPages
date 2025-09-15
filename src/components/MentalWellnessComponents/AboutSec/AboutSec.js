import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { MWABOUTLEFTIMG, MWABOUTMENTALHEALTH, MWABOUTSIGNATURE } from "@/values/Constants/ImageConstants";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"

export default function AboutSec() {

    return (
        <Box sx={MUIStyle.AboutSec} id="about-us">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.Row}>
                    
                    <Box sx={MUIStyle.AboutImage}>
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                        <Box component={"img"} src={MWABOUTLEFTIMG} alt="About" />
                        </motion.div>
                        
                            <Box sx={MUIStyle.AboutMentalHealthContent}>
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                }}
                            >
                                <Box component={"img"} src={MWABOUTMENTALHEALTH} alt="About" />
                                <Box sx={MUIStyle.AboutMentalHealthTextBox}>
                                    <Typography variant="h3" sx={MUIStyle.AboutMentalHealthTitle}>
                                        Mental wellness ready to start
                                        treatment today
                                    </Typography>
                                    <Button variant="contained" sx={MUIStyle.AboutMentalHealthBtn}>
                                        Contact Us
                                    </Button>
                                </Box>
                            </motion.div>
                            </Box>
                        
                        
                            
                        
                    </Box>
                    
                    <Box sx={MUIStyle.AboutContent}>
                        <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                            <Box sx={MUIStyle.AboutContentBox}>
                                <Typography variant="h4" sx={MUIStyle.AboutTitle}>
                                    About Us
                                </Typography>
                                <Typography variant="h3" sx={MUIStyle.AboutDesc}>
                                    Welcome to Serenity Haven, a premier residential inpatient mental wellness center nestled on 100 tranquil acres in the heart.
                                </Typography>
                                <Box sx={MUIStyle.AboutMissionBox}>
                                    <Typography variant="h3" sx={MUIStyle.AboutMissionTitle}>
                                        Our Mission
                                    </Typography>
                                    <Typography variant="body1" sx={MUIStyle.AboutMissionDesc}>
                                        At Serenity Haven, our mission is to offer a sanctuary where healing and recovery are nurtured in a serene and supportive environment
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.AboutMissionBox}>
                                    <Typography variant="h3" sx={MUIStyle.AboutMissionTitle}>
                                        Our Facility
                                    </Typography>
                                    <Typography variant="body1" sx={MUIStyle.AboutMissionDesc}>
                                        Our center is designed to blend the comforts of a high-end resort with the essential services of a top-tier healthcare provider.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.AboutInfoBox}>
                                <Box sx={MUIStyle.AboutInfo}>
                                    <Box sx={MUIStyle.SignatureImg}
                                        component={"img"}
                                        src={MWABOUTSIGNATURE}
                                        alt="Signature"
                                    />
                                    <Typography variant="h4" sx={MUIStyle.AboutInfoTitle}>
                                        Kathryn Murphy - <span>CEO & Founder</span>
                                    </Typography>
                                </Box>
                                <Divider
                                    sx={MUIStyle.AboutDivider}
                                    orientation="vertical" variant="middle" flexItem />
                                <Box component={"ul"} sx={MUIStyle.AboutSocialIcons}>
                                    <Link href="#">
                                        <Box sx={MUIStyle.SocialLink}>
                                            <Icon icon="uil:facebook-f" />
                                        </Box>
                                    </Link>
                                    <Link href="#">
                                        <Box sx={MUIStyle.SocialLink}>
                                            <Icon icon="icon-park-outline:instagram" />
                                        </Box>
                                    </Link>
                                    <Link href="#">
                                        <Box sx={MUIStyle.SocialLink}>
                                            <Icon icon="prime:twitter" />
                                        </Box>
                                    </Link>
                                    <Link href="#">
                                        <Box sx={MUIStyle.SocialLink}>
                                            <Icon icon="akar-icons:linkedin-fill" />
                                        </Box>
                                    </Link>

                                </Box>
                            </Box>
                        </motion.div>
                    </Box>
                        
                    
                </Box>
            </Container>
        </Box>
    );
}