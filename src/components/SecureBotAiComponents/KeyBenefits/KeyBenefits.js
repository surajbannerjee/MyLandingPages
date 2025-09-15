import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { PEACE, ICON2, ICON3, ICON4, SUBTRACT3, SUBTRACT2, SUBTRACT1, SUBTRACT, IMPROVED, COST, STRENGTHENED } from "@/values/Constants/ImageConstants";
import OurServiceSlider from "../OurServiceSlider/OurServiceSlider";
import { motion } from "framer-motion"




export default function KeyBenefits() {

    return (
        <Box sx={MUIStyle.OurServiceMain} id="key-benefits">
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
                                Key Benefits of SecureBotAI
                            </Typography>
                        </Box>
                        </motion.div>


                        <Typography variant="h1" sx={MUIStyle.OurServiceHeading}>
                            Why Choose Our AI-Powered Penetration Testing Services?
                        </Typography>
                    </Box>
                </Box>
                <Box sx={MUIStyle.BenefitsRow}>

                    {/* -----box */}
                <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>    
                    <Box sx={[MUIStyle.BenefitsBox, {
                        background: `url(${SUBTRACT1})`,
                        paddingRight: "50px",
                    }]}>
                        <Typography variant="h2" sx={MUIStyle.BenefitsHeading}>
                            Peace of Mind
                        </Typography>
                        <Typography variant="body1" sx={MUIStyle.BenefitsText}>
                            Ensure your critical assets are secure, allowing you to focus on your core business.
                        </Typography>
                        <Box sx={MUIStyle.BenefitsBoxIcon} component={"img"} src={PEACE} alt="icon1" />
                        <Button sx={[MUIStyle.ImgBtn,
                        {
                            right: "0",
                            bottom: "0",
                        }
                        ]}>
                        </Button>
                    </Box> </motion.div>

                    
                    <Box sx={MUIStyle.BenefitsBoxRow}>

    {/* -----box */}
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Box sx={[MUIStyle.BenefitsBox,
                        {
                            background: `url(${SUBTRACT})`,
                        }]}>
                            <Box sx={MUIStyle.BenefitsBoxIcon} component={"img"} src={STRENGTHENED} alt="icon1" />
                            <Typography variant="h2" sx={MUIStyle.BenefitsHeading}>
                                Strengthened Security Posture
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.BenefitsText}>
                                Our AI-driven approach identifies and mitigates vulnerabilities to fortify your defenses.
                            </Typography>
                            <Button sx={[MUIStyle.ImgBtn,
                            {
                                right: "0",
                                top: "0",
                            }
                            ]}>
                            </Button>
                        </Box></motion.div>


                           {/* -----box */}
                        <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                        <Box sx={[MUIStyle.BenefitsBox, {
                            background: `url(${SUBTRACT2})`,
                        }]}>
                            <Box sx={[MUIStyle.BenefitsBoxIcon,
                            {
                                alignSelf: "flex-end",
                            }
                            ]} component={"img"} src={COST} alt="icon1" />
                            <Typography variant="h2" sx={MUIStyle.BenefitsHeading}>
                                Cost Savings
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.BenefitsText}>
                                Automated testing reduces costs compared to traditional methods, providing affordable security.
                            </Typography>
                            <Button sx={[MUIStyle.ImgBtn,
                            {
                                left: "0",
                                top: "0",
                            }
                            ]}>
                            </Button>
                        </Box>
                        </motion.div>
                    </Box>


                       {/* -----box */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}>
                    <Box sx={[MUIStyle.BenefitsBox, {
                        background: `url(${SUBTRACT3})`,
                        alignItems: "flex-end",
                    }]}>
                        <Typography variant="h2" sx={MUIStyle.BenefitsHeading}>
                            Improved Compliance
                        </Typography>
                        <Typography variant="body1" sx={[MUIStyle.BenefitsText,
                        {
                            textAlign: "right",
                        }
                        ]}>
                            Stay ahead of regulatory requirements with our comprehensive compliance testing.
                        </Typography>
                        <Box sx={MUIStyle.BenefitsBoxIcon} component={"img"} src={IMPROVED} alt="icon1" />
                        <Button sx={[MUIStyle.ImgBtn,
                        {
                            left: "0",
                            bottom: "0",
                        }
                        ]}>
                        </Button>
                    </Box>
                    </motion.div>


                </Box>
            </Container>


        </Box>
    );
}