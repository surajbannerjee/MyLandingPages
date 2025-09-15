"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./AboutSec.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { ABOUTSECUREBOTAI, OURMISSION } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { motion } from "framer-motion"



export default function AboutSec() {


    return (
        <Box sx={MUIStyle.AboutSecMain} id="about-us">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutSecRow}>
                    <Box sx={MUIStyle.AboutSecImage}>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Box component={"img"} src={ABOUTSECUREBOTAI} alt="AboutSecImage" />
                        </motion.div>
                    </Box>
                    <Box sx={MUIStyle.AboutSecContent}>
                        <Box sx={MUIStyle.AboutSecContentInner}>
                        <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                          
                           
                        }}>
                            <Box sx={commonStyle.TitleBox}>
                            
                                <Typography variant="body1" className="greadientText" sx={commonStyle.Title}>
                                    About us SecurebotAI
                                </Typography>
                              
                            </Box>  </motion.div>
                            <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay:0.4
                        }}>
                            <Typography variant="h1" sx={MUIStyle.AboutSecHeading}>
                                Empowering Your Cybersecurity with AI-Driven Precision
                            </Typography>
                            </motion.div>
                            <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                          
                          
                        }}>
                            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
                                SecureBotAI is at the forefront of cybersecurity innovation, specializing in AI-powered penetration testing services that provide comprehensive security assessments for your digital infrastructure.
                            </Typography>
                            </motion.div>
                            <Box sx={commonStyle.CustomBtnBox1}>
                            <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                         
                        }}>
                                <Button sx={commonStyle.CustomBtn1} variant="contained" size="large">
                                    Learn More
                                </Button>
                                </motion.div>
                            </Box>
                        </Box>
                    </Box>

                </Box>



                {/* ------box */}
                <Box sx={MUIStyle.AboutSecRow1}>
                    <Box sx={MUIStyle.AboutSecContent}>
                        <Box sx={MUIStyle.AboutSecContentInner1}>
                        <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                          
                           
                        }}>
                            <Box sx={commonStyle.TitleBox}>
                                <Typography variant="body1" className="greadientText" sx={commonStyle.Title}>
                                    Our Mission
                                </Typography>
                            </Box>
                            </motion.div>
                            <motion.div
                        initial={{ x: -130, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                      
                        }}>
                            <Typography variant="h1" sx={MUIStyle.AboutSecHeading}>
                                At SecureBotAI, we are committed to delivering unparalleled cybersecurity
                            </Typography>
</motion.div>
                            <Box component={"ul"} sx={MUIStyle.MissionUlList}>
                            <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay:0.2
                        }}>
                                <Box component={"li"} sx={MUIStyle.MissionLi}>
                            
                                    <Typography variant="h5" sx={MUIStyle.number}>1. </Typography>
                                    <Box component={"span"} sx={MUIStyle.MissionCont}>
                                   
                                        <Typography variant="h5" sx={MUIStyle.MissionTitle} className={styles.MissionTitle}>
                                            Innovation
                                        </Typography>
                                  
                                        <Typography variant="body1" sx={MUIStyle.MissionText}>
                                            Continuously pushing the boundaries of cybersecurity with cutting-edge AI technology.
                                        </Typography>
                                    </Box>  
                                </Box>
                                </motion.div>


                                <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay:0.4
                        }}>
                                <Box component={"li"} sx={MUIStyle.MissionLi}>
                                    <Typography variant="h5" sx={MUIStyle.number}>2. </Typography>
                                    <Box component={"span"} sx={MUIStyle.MissionCont}>
                                        <Typography variant="h5" sx={MUIStyle.MissionTitle} className={styles.MissionTitle}>
                                            Proactivity
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.MissionText}>
                                            Anticipating and mitigating threats before they become breaches.
                                        </Typography>
                                    </Box>
                                </Box>
                                </motion.div>


                                <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay:0.6
                        }}>
                                <Box component={"li"} sx={MUIStyle.MissionLi}>
                                    <Typography variant="h5" sx={MUIStyle.number}>3. </Typography>
                                    <Box component={"span"} sx={MUIStyle.MissionCont}>
                                        <Typography variant="h5" sx={MUIStyle.MissionTitle} className={styles.MissionTitle}>
                                            Accuracy
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.MissionText}>
                                            Ensuring precise identification and resolution of security vulnerabilities.
                                        </Typography>
                                    </Box>
                                </Box>

                                </motion.div>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.AboutSecImage}>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Box component={"img"} src={OURMISSION} alt="AboutSecImage" />
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}