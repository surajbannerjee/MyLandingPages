import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { ICON1, ICON2, ICON3, ICON4, OURTERGETIMG1, OURTERGETIMG2, OURTERGETIMG3 } from "@/values/Constants/ImageConstants";
import OurServiceSlider from "../OurServiceSlider/OurServiceSlider";
import { motion } from "framer-motion"


export default function OurTarget() {

    return (
        <Box sx={MUIStyle.OurServiceMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.OurServiceRow}>
                    <Box sx={MUIStyle.OurServiceTopBox}>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Box sx={commonStyle.TitleBox}>
                            <Typography variant="body1" className="greadientText" sx={commonStyle.Title}>
                                Our Target Audience
                            </Typography>
                        </Box>
                        </motion.div>
                        <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Typography variant="h1" sx={MUIStyle.OurServiceHeading}>
                            Tailored Cybersecurity Solutions for Every Need
                        </Typography>
                        </motion.div>
                    </Box>
                </Box>

                {/* ------box */}
                <Box sx={MUIStyle.OurTargetRow}>
                <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                    <Box sx={MUIStyle.OurTargetBox}>
                    {/* <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}> */}
                        <Box sx={MUIStyle.OurTargetImgBox}>
                            <Box sx={MUIStyle.OurTargetImg} component="img" src={OURTERGETIMG1} alt="OurTarget" />
                        </Box>
{/* </motion.div> */}
                        <Box sx={MUIStyle.OurTargetContent}>
                        <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                            <Typography variant="h3" sx={MUIStyle.OurTargetHeading}>
                                Small and Medium-sized Businesses
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.OurTargetText}>
                                These businesses are looking for affordable and scalable security solutions to protect their digital assets. They may have limited IT resources and are seeking efficient, cost-effective cybersecurity measures.
                            </Typography>
                            </motion.div>
                        </Box>
                    </Box>
</motion.div>

    {/* ------box */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                    <Box sx={MUIStyle.OurTargetBox}>
                        <Box sx={MUIStyle.OurTargetImgBox}>
                            <Box sx={MUIStyle.OurTargetImg} component="img" src={OURTERGETIMG2} alt="OurTarget" />
                        </Box>
                        <Box sx={MUIStyle.OurTargetContent}>
                        {/* <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}> */}
                            <Typography variant="h3" sx={MUIStyle.OurTargetHeading}>
                                Large Enterprises Businesses
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.OurTargetText}>
                                Large enterprises have complex IT environments that require comprehensive penetration testing. They need robust and reliable security solutions to safeguard their extensive digital infrastructure and sensitive data
                            </Typography>
                            {/* </motion.div> */}
                        </Box>
                    </Box>
</motion.div>

    {/* ------box */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                    <Box sx={MUIStyle.OurTargetBox}>
                        <Box sx={MUIStyle.OurTargetImgBox}>
                            <Box sx={MUIStyle.OurTargetImg} component="img" src={OURTERGETIMG3} alt="OurTarget" />
                        </Box>
                        <Box sx={MUIStyle.OurTargetContent}>
                        {/* <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}> */}
                            <Typography variant="h3" sx={MUIStyle.OurTargetHeading}>
                                Government Agencies Businesses
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.OurTargetText}>
                                Government agencies require specialized security solutions to protect critical infrastructure and sensitive data. They seek highly secure, customized, and proactive cybersecurity measures to counter sophisticated threats.
                            </Typography>
                            {/* </motion.div> */}
                        </Box>
                    </Box>
</motion.div>
                </Box>
            </Container>


        </Box>
    );
}