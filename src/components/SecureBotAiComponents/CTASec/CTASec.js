import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./CTASec.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { CTASecUREBOTAI, OURMISSION } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { motion } from "framer-motion"

export default function CTASec() {


    return (
        <Box  sx={MUIStyle.CTASecMain} id="contact-us">
            {/* <motion.div
                        initial={{x:-100, y: 200, opacity: 0 }}
                        whileInView={{x:0, y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}> */}
            <Container maxWidth="xl">
                <Box sx={MUIStyle.CTASecInnerBox}>
                <motion.div
                        initial={{x:-100, y: 200, opacity: 0 }}
                        whileInView={{x:0, y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                    <Box sx={MUIStyle.CTASecContent}>
                   
                        <Typography variant="h4" sx={MUIStyle.CTASecTitle}>
                            Secure Your Future with SecureBotAI
                        </Typography>
                      
                        <Typography variant="body1" sx={MUIStyle.CTASecSubText}>
                            Discover proactive cybersecurity measures tailored to your needs. SecureBotAI offers cutting-edge, reliable penetration testing services
                        </Typography>
                    </Box>
                    </motion.div>
                  

                    <motion.div
                        initial={{x:100, y: -200, opacity: 0 }}
                        whileInView={{x:0, y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                    <Box sx={MUIStyle.CTASecRight}>
                        <Button sx={MUIStyle.CtaBtn} variant="contained" size="large">
                            Contact Us
                            <Icon icon="material-symbols:arrow-outward-rounded" className={styles.arrowIcon} />
                        </Button>
                        <Typography variant="body1" sx={MUIStyle.CTASecText}>
                            For a Free Consultation
                        </Typography>
                    </Box>
                    </motion.div>
                </Box>

            </Container>
            {/* </motion.div> */}
        </Box>
    );
}