"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./Banner.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { BANNERIMAGE, LOGO } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { motion } from "framer-motion"


export default function Banner() {


    return (
        <Box sx={MUIStyle.BannerMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.BannerRow}>
                    <Box sx={MUIStyle.BannerContent}>
                        <Box sx={MUIStyle.BannerContentInner}>
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                            <Typography variant="h1" sx={MUIStyle.BannerHeading}>
                                Revolutionizing <span className={'greadientText'}>  Cyber Security  </span> with AI-Powered Penetration Testing
                            </Typography>
                            
                        </motion.div>
                            <Typography variant="body1" sx={MUIStyle.BannerText}>
                                Protecting your digital assets with advanced AI technology
                            </Typography>
                            <Box sx={commonStyle.CustomBtnBox}>
                            <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                         
                        }}>
                                <Button sx={commonStyle.CustomBtn} variant="contained" size="large">
                                    Learn More
                                </Button>
                                </motion.div>
                            </Box>
                            
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.BannerImage}>
                    <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>
                    
                        <Box component={"img"} src={BANNERIMAGE} alt="BannerImage" />
                    </motion.div>
                    </Box>
                </Box>
                
            </Container>
        </Box>
    );
}