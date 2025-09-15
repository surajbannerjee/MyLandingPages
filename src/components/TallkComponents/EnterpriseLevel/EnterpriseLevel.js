import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./EnterpriseLevel.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { ABOUTSECUREBOTAI, ENTERPRISEIMG, EXPRIENCE, OURMISSION, TREND } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";


export default function EnterpriseLevel() {


    return (
        <Box sx={MUIStyle.AboutSecMain} id="what-is-tallk">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutSecRow}>
                    <Box sx={MUIStyle.AboutSecImage}>
                        <Box component={"img"} src={ENTERPRISEIMG} alt="AboutSecImage" />
                    </Box>
                    <Box sx={MUIStyle.AboutSecContent}>
                        <Box sx={MUIStyle.AboutSecContentInner}>
                            <Typography variant="h1" sx={MUIStyle.AboutSecHeading}>
                                Enterprise Level Sales Intelligence. Directly On Your Website.
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
                                Customers avoid salespeople, and standard AI leads to generic, non-converting conversations. Tallk, an enterprise-level AI sales expert, leverages industry-specific knowledge and advanced techniques to deliver exceptional customer engagement and drive sales for any business
                            </Typography>
                            <Box component={"ul"} sx={MUIStyle.EnterpriseUL}>
                                <Box component={"li"} sx={MUIStyle.EnterpriseLi}>
                                    <Box sx={MUIStyle.EnterpriseImg} component={"img"} src={TREND} alt="Built For Sales" />
                                    <Box sx={MUIStyle.EnterpriseContent}>
                                        <Typography variant="h5" sx={MUIStyle.EnterpriseLiTitle}>
                                            Built For Sales
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.EnterpriseLiDesc}>
                                            Specialized AI-powered sales conversations that engage, present, close, and upsell.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box component={"li"} sx={MUIStyle.EnterpriseLi}>
                                    <Box sx={MUIStyle.EnterpriseImg} component={"img"} src={EXPRIENCE} alt="Built For Sales" />
                                    <Box sx={MUIStyle.EnterpriseContent}>
                                        <Typography variant="h5" sx={MUIStyle.EnterpriseLiTitle}>
                                            Domain Level Expertise
                                        </Typography>
                                        <Typography variant="body1" sx={MUIStyle.EnterpriseLiDesc}>
                                            Learns from your data and industry to offer personalized interactions
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Button sx={commonStyle.CustomTallkBtn} variant="contained" size="large">
                                Tallk the Talk for Free!
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}