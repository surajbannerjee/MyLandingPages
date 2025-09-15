"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./WhatSetsUsApart.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { ICON1, ICON2, ICON3, ICON4 } from "@/values/Constants/ImageConstants";
import { motion } from "framer-motion"


export default function WhatSetsUsApart() {


    return (
        <Box sx={MUIStyle.WhatSetsUsApartMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.WhatSetsUsApartRow}>

                    <Box sx={MUIStyle.WhatSetsUsApartTopBox}>
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
                        </Box>
                     
                     </motion.div>
                        <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Typography variant="h1" sx={MUIStyle.WhatSetsUsApartHeading}>
                            Discover the Unique Advantages of SecureBotAIs Penetration Testing Services
                        </Typography>
                        </motion.div>
                      
                    </Box>


                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Box sx={MUIStyle.WhatSetsUsApartCardRow}>

                            {/* ----- box----- */}
                            <Box sx={MUIStyle.WhatSetsUsApartCard}>
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                    }}>
                                    <Box component={"img"} src={ICON1} sx={MUIStyle.WhatSetsUsApartCardImg} />
                                    <Box sx={MUIStyle.WhatSetsUsApartCardContent}>
                                        <Typography variant="h3" sx={MUIStyle.WhatSetsUsApartCardHeading}>
                                            Intelligent Automation
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.WhatSetsUsApartCardText}>
                                            Leverage AI to automate complex penetration testing tasks, ensuring thorough and efficient vulnerability assessments.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Box>


                            {/* ----- box----- */}
                            <Box sx={MUIStyle.WhatSetsUsApartCard}>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                    }}>
                                    <Box component={"img"} src={ICON2} sx={MUIStyle.WhatSetsUsApartCardImg} />
                                    <Box sx={MUIStyle.WhatSetsUsApartCardContent}>
                                        <Typography variant="h3" sx={MUIStyle.WhatSetsUsApartCardHeading}>
                                            Enhanced Accuracy
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.WhatSetsUsApartCardText}>
                                            Achieve precise results with AI-driven insights, minimizing false positives and maximizing testing accuracy.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Box>


                            {/* ----- box----- */}
                            <Box sx={MUIStyle.WhatSetsUsApartCard}>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                    }}>
                                    <Box component={"img"} src={ICON3} sx={MUIStyle.WhatSetsUsApartCardImg} />
                                    <Box sx={MUIStyle.WhatSetsUsApartCardContent}>
                                        <Typography variant="h3" sx={MUIStyle.WhatSetsUsApartCardHeading}>
                                            Tailored Solutions
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.WhatSetsUsApartCardText}>
                                            Receive bespoke penetration testing services designed to meet the specific security needs of your organization.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Box>

                            {/* ----- box----- */}
                            <Box sx={MUIStyle.WhatSetsUsApartCard}>
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                    }}>
                                    <Box component={"img"} src={ICON4} sx={MUIStyle.WhatSetsUsApartCardImg} />
                                    <Box sx={MUIStyle.WhatSetsUsApartCardContent}>
                                        <Typography variant="h3" sx={MUIStyle.WhatSetsUsApartCardHeading}>
                                            Proactive Defense
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.WhatSetsUsApartCardText}>
                                            Stay ahead of threats with real-time monitoring and proactive defense strategies that adapt to evolving cyber risks.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Box>



                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}