import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { ICON1, ICON2, ICON3, ICON4 } from "@/values/Constants/ImageConstants";
import OurServiceSlider from "../OurServiceSlider/OurServiceSlider";
import { motion } from "framer-motion"

export default function OurService() {

    return (
        <Box sx={MUIStyle.OurServiceMain} id="our-service">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.OurServiceRow}>
                    <Box sx={MUIStyle.OurServiceTopBox}>
                    {/* <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                    }}> */}
                    <Box sx={commonStyle.TitleBox}>
               
                     
                       
                            <Typography variant="body1" className="greadientText" sx={commonStyle.Title}>
                                Our Service   
                            </Typography>
                          
                        </Box>
                        {/* </motion.div> */}
                            <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                    }}>
                        <Typography variant="h1" sx={MUIStyle.OurServiceHeading}>
                            Discover the Unique Advantages of SecureBotAIs Penetration Testing Services
                        </Typography>
                        </motion.div>
                    </Box>
                </Box>
                <OurServiceSlider />
            </Container>


        </Box>
    );
}