import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { FEATURESCARDICON1, FEATURESCARDICON2, FEATURESCARDICON3, FEATURESRIGHTIMG, GOOGLE } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { Icon } from "@iconify/react";

export default function FeaturesSec() {


    return (
        <Box sx={MUIStyle.AboutSecMain} id="features">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutTitleRow}>
                    <Typography variant="h1" sx={MUIStyle.AboutTitle}>Must-Have <span>Features</span> of Tallk </Typography>
                </Box>
                <Box sx={MUIStyle.AboutSecRow}>
                    <Box sx={MUIStyle.AboutSecContent}>
                        <Box sx={MUIStyle.AboutSecContentInner}>
                            <Typography variant="h1" sx={MUIStyle.AboutSecHeading}>
                                Get Tallk, So You Can Do
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
                                Tallk blends your industry knowledge with advanced techniques to boost customer connections and deal closures. Our InsightSphere Technology™ analyzes your data, enabling exceptional sales, support, and customer engagement, all while you focus on doing what you do best.
                            </Typography>
                            <Button sx={commonStyle.CustomTallkBtn} variant="contained" size="large">
                                Start Tallking Your Way to Success <Icon icon="ic:round-arrow-outward" />
                            </Button>
                            <Button sx={MUIStyle.GoogleBtn} variant="contained" size="large">
                                <Box component={"img"} src={GOOGLE} sx={MUIStyle.GoogleBtnIcon} />
                                <Box sx={MUIStyle.GoogleReviewStars}>
                                    <Icon icon="ph:star-fill" />
                                    <Icon icon="ph:star-fill" />
                                    <Icon icon="ph:star-fill" />
                                    <Icon icon="ph:star-fill" />
                                    <Icon icon="ph:star-fill" />
                                </Box>
                                <Box sx={MUIStyle.GoogleBtnText}>(4.3) Reviews</Box>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.AboutSecImage}>
                        <Box component={"img"} src={FEATURESRIGHTIMG} alt="AboutSecImage" />
                    </Box>
                </Box>
                <Box sx={MUIStyle.FeaturesCardRow}>
                    <Box sx={MUIStyle.FeaturesCard}>
                        <Box sx={MUIStyle.FeaturesCardImgBox}>
                            <Box component={"img"} src={FEATURESCARDICON1} sx={MUIStyle.FeaturesCardIcon} />
                        </Box>
                        <Box sx={MUIStyle.FeaturesCardContent}>
                            <Typography variant="h2" sx={MUIStyle.FeaturesCardHeading}>Continuous Learning</Typography>
                            <Typography variant="body1" sx={MUIStyle.FeaturesCardText}>Adapts to your business data and trends.</Typography>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FeaturesCard}>
                        <Box sx={MUIStyle.FeaturesCardImgBox}>
                            <Box component={"img"} src={FEATURESCARDICON2} sx={MUIStyle.FeaturesCardIcon} />
                        </Box>
                        <Box sx={MUIStyle.FeaturesCardContent}>
                            <Typography variant="h2" sx={MUIStyle.FeaturesCardHeading}>Predictive Analysis</Typography>
                            <Typography variant="body1" sx={MUIStyle.FeaturesCardText}>Anticipates customer needs for proactive solutions.</Typography>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FeaturesCard}>
                        <Box sx={MUIStyle.FeaturesCardImgBox}>
                            <Box component={"img"} src={FEATURESCARDICON3} sx={MUIStyle.FeaturesCardIcon} />
                        </Box>
                        <Box sx={MUIStyle.FeaturesCardContent}>
                            <Typography variant="h2" sx={MUIStyle.FeaturesCardHeading}>Omni-Channel Communication</Typography>
                            <Typography variant="body1" sx={MUIStyle.FeaturesCardText}>Voice, chat, email, SMS, WhatsApp (Coming Soon).</Typography>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FeaturesCard}>
                        <Box sx={MUIStyle.FeaturesCardImgBox}>
                            <Box component={"img"} src={FEATURESCARDICON1} sx={MUIStyle.FeaturesCardIcon} />
                        </Box>
                        <Box sx={MUIStyle.FeaturesCardContent}>
                            <Typography variant="h2" sx={MUIStyle.FeaturesCardHeading}>Continuous Learning</Typography>
                            <Typography variant="body1" sx={MUIStyle.FeaturesCardText}>Adapts to your business data and trends.</Typography>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FeaturesCard}>
                        <Box sx={MUIStyle.FeaturesCardImgBox}>
                            <Box component={"img"} src={FEATURESCARDICON2} sx={MUIStyle.FeaturesCardIcon} />
                        </Box>
                        <Box sx={MUIStyle.FeaturesCardContent}>
                            <Typography variant="h2" sx={MUIStyle.FeaturesCardHeading}>Predictive Analysis</Typography>
                            <Typography variant="body1" sx={MUIStyle.FeaturesCardText}>Anticipates customer needs for proactive solutions.</Typography>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FeaturesCard}>
                        <Box sx={MUIStyle.FeaturesCardImgBox}>
                            <Box component={"img"} src={FEATURESCARDICON3} sx={MUIStyle.FeaturesCardIcon} />
                        </Box>
                        <Box sx={MUIStyle.FeaturesCardContent}>
                            <Typography variant="h2" sx={MUIStyle.FeaturesCardHeading}>Omni-Channel Communication</Typography>
                            <Typography variant="body1" sx={MUIStyle.FeaturesCardText}>Voice, chat, email, SMS, WhatsApp (Coming Soon).</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}