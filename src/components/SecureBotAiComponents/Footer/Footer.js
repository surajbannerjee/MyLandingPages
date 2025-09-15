import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { commonStyle } from "@/values/Styles/CommonStyle";
import Link from "next/link";
import { LOGO } from "@/values/Constants/ImageConstants";
import { motion } from "framer-motion"



export default function Footer() {


    return (
        <Box sx={MUIStyle.FooterMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.FooterInnerBoxRow}>


                    <Box  sx={MUIStyle.FooterLogoBox}>
                    <motion.div
                        initial={{x:-100, opacity: 0 }}
                        whileInView={{x:0,  opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Link href="/">
                       
                            <Box sx={MUIStyle.logoImage} component={"img"} src={LOGO} alt="Logo" />
                          
                        </Link>  </motion.div>

                        <Typography variant="body1" sx={MUIStyle.FooterLogoText}>SecureBotAI is a leading cybersecurity company specializing in AI-powered penetration testing services.</Typography>
                    </Box>

                    <Box  sx={MUIStyle.FooterMenuBox}>
                  
                        <Typography variant="h4" sx={MUIStyle.FooterMenuTitleText}>Company</Typography>
                        <Box sx={MUIStyle.FooterMenuUl}>
                        <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Our Services</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>About Us</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Service</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Benefits</Typography>
                                </Link>
                            </Box>
</motion.div>
                        </Box>
                  
                    </Box>
                    
                    <Box   sx={MUIStyle.FooterMenuBox}>
                        <Typography variant="h4" sx={MUIStyle.FooterMenuTitleText}>Quicks Links</Typography>
                        <Box sx={MUIStyle.FooterMenuUl}>
                        <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Privacy Policy</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Terms of Service</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Contact Information</Typography>
                                </Link>
                            </Box>
                            </motion.div>
                        </Box>
                    </Box>

                    <Box  sx={MUIStyle.FooterSocialLinksBox}>
                        <Typography variant="h4" sx={MUIStyle.FooterSocialLinksText}>Follow On Social Media</Typography>
                       
                        <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                            <Box sx={MUIStyle.FooterSocialLinkBox}>

                            <Link href="/">

                            <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="uil:facebook-f" />
                                </Box>
                                </motion.div>
                            </Link>
                            <Link href="/">
                            <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="icon-park-outline:instagram" />
                                </Box>
                                </motion.div>
                            </Link>
                            <Link href="/">
                            <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="prime:twitter" />
                                </Box>
                                </motion.div>
                            </Link>
                            <Link href="/">
                            <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="akar-icons:linkedin-fill" />
                                </Box>
                                </motion.div>
                            </Link> </Box>
                            </motion.div>
                       
                    </Box>
                    
                  
                </Box>
                <Box sx={MUIStyle.FooterCopyrightBox}>
                    <Typography variant="h5" sx={MUIStyle.FooterCopyrightText}>© Copyright 2024 Secure Bot AI. All Rights Reserved.</Typography>
                </Box>
            </Container>
        </Box>
    );
}