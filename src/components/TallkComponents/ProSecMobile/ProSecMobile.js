import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { BLUETICK, CLOSERED, GREYTICK, TALLKCTAIMG, TALLKLOGO } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { Icon } from "@iconify/react";

export default function ProSecMobile() {

    return (
        <Box sx={MUIStyle.CTASecMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutTitleRow}>
                    <Typography variant="h1" sx={MUIStyle.AboutTitle}><span>Tallk </span>  Like a Pro mobile </Typography>
                    <Typography variant="body1" sx={MUIStyle.AboutTitleText}>
                        Tallks AI delivers personalized, expert sales interactions 24/7. Get tailored expertise for your business without traditional limitations.
                    </Typography>
                </Box>
                <Box sx={MUIStyle.CTASecpricingBox}>
                    <Box sx={MUIStyle.CTASecpricingOuterBox}>
                        <Box sx={MUIStyle.CTASecpricingBoxInner}>
                            <Typography variant="h1" sx={MUIStyle.CTASecpricingBoxHeading}>
                                Feature
                            </Typography>
                            <Box sx={MUIStyle.CTASecpricingBoxInnerTop}>
                                <Box component={"img"} src={TALLKLOGO} sx={MUIStyle.CTASecpricingBoxInnerTopImg} />
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerTopHeading}>
                                    Human Sales People
                                </Typography>
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerTopHeading}>
                                    AI  Chatbots
                                </Typography>
                            </Box>
                            <Box sx={MUIStyle.CTASecpricingBoxInnerULs}>
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerULsHeading}>
                                    Expert Sales Intelligence
                                </Typography>
                                <Box sx={MUIStyle.CTASecpricingBoxInnerULsList}>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={BLUETICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={GREYTICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={CLOSERED} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.CTASecpricingBoxInnerULs}>
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerULsHeading}>
                                    Expert Sales Intelligence
                                </Typography>
                                <Box sx={MUIStyle.CTASecpricingBoxInnerULsList}>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={BLUETICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={GREYTICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={CLOSERED} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.CTASecpricingBoxInnerULs}>
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerULsHeading}>
                                    Expert Sales Intelligence
                                </Typography>
                                <Box sx={MUIStyle.CTASecpricingBoxInnerULsList}>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={BLUETICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={GREYTICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={CLOSERED} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.CTASecpricingBoxInnerULs}>
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerULsHeading}>
                                    Expert Sales Intelligence
                                </Typography>
                                <Box sx={MUIStyle.CTASecpricingBoxInnerULsList}>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={BLUETICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={GREYTICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={CLOSERED} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.CTASecpricingBoxInnerULs}>
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerULsHeading}>
                                    Expert Sales Intelligence
                                </Typography>
                                <Box sx={MUIStyle.CTASecpricingBoxInnerULsList}>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={BLUETICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={GREYTICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={CLOSERED} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.CTASecpricingBoxInnerULs}>
                                <Typography variant="h2" sx={MUIStyle.CTASecpricingBoxInnerULsHeading}>
                                    Expert Sales Intelligence
                                </Typography>
                                <Box sx={MUIStyle.CTASecpricingBoxInnerULsList}>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={BLUETICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={GREYTICK} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                    <Box sx={MUIStyle.CTASecpricingBoxInnerULsListIcon}>
                                        <Box component={"img"} src={CLOSERED} sx={MUIStyle.CTASecpricingBoxInnerULsListImg} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Container>
        </Box>
    );
}