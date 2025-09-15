import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { BLUETICK, CLOSERED, GREYTICK, TALLKCTAIMG, TALLKLOGO } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { Icon } from "@iconify/react";

export default function ProSec() {

    return (
        <Box sx={MUIStyle.CTASecMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutTitleRow}>
                    <Typography variant="h1" sx={MUIStyle.AboutTitle}><span>Tallk </span>  Like a Pro  </Typography>
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
                            <Box sx={[MUIStyle.CTASecpricingBoxUL, MUIStyle.CTASecpricingBoxULBg]}>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Expert Sales Intelligence
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Natural Voice Conversations
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Personalization
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Context Awareness
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Deep-Domain Expertise
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Continous Learning
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Integration with Website
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Predictive Capabilities
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Omnichannel Abilities
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Optimized For Conversions
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Emotional Intelligence
                                    </Typography>
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Typography variant="body1" sx={MUIStyle.CTASecpricingBoxText}>
                                        Handling Complex Queries
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={MUIStyle.CTASecpricingBoxInner}>
                            <Box component={"img"} src={TALLKLOGO} sx={MUIStyle.PricingLogo} />
                            <Box sx={MUIStyle.CTASecpricingBoxUL}>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={BLUETICK} sx={MUIStyle.PricingIcon} />
                                </Box>

                            </Box>
                        </Box>
                        <Box sx={MUIStyle.CTASecpricingBoxInner}>
                            <Typography variant="h1" sx={MUIStyle.CTASecpricingBoxHeading}>
                                Human Sales People
                            </Typography>
                            <Box sx={MUIStyle.CTASecpricingBoxUL}>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={GREYTICK} sx={MUIStyle.PricingIcon} />
                                </Box>

                            </Box>
                        </Box>
                        <Box sx={MUIStyle.CTASecpricingBoxInner}>
                            <Typography variant="h1" sx={MUIStyle.CTASecpricingBoxHeading}>
                                AI  Chatbots
                            </Typography>
                            <Box sx={MUIStyle.CTASecpricingBoxUL}>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>
                                <Box sx={MUIStyle.CTASecpricingBoxLI}>
                                    <Box component={"img"} src={CLOSERED} sx={MUIStyle.PricingIcon} />
                                </Box>


                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}