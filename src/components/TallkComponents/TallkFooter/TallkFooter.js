import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import styles from "./TallkFooter.module.css";
import { TALLKLOGO, TALLKLOGOWHITE } from "@/values/Constants/ImageConstants";
import Link from "next/link";
import { Icon } from "@iconify/react";
export default function TallkFooter() {

    return (
        <Box sx={MUIStyle.TallkFooter} id="contact">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.TallkFooterCTASEC}>
                    <Box sx={MUIStyle.TallkFooterCTASECLeftContent}>
                        <Typography variant="h2" sx={MUIStyle.TallkFooterCTASECLeftContentTitle}>Join 1,000+ Businesses
                            Waiting to <Box sx={MUIStyle.textLogo} component={"img"} src={TALLKLOGO} />
                        </Typography>
                        <Typography variant="body1" sx={MUIStyle.TallkFooterCTASECLeftContentText}>Be among the first out of beta to experience unlimited growth with Tallks AI-powered Sales Expert. Get early access and exclusive offers.</Typography>
                    </Box>
                    <Box sx={MUIStyle.TallkFooterCTASECSubscribeArea}>
                        <Typography variant="h4" sx={MUIStyle.TallkFooterCTASECSubscribeAreaTitle}>Subscribe to our newsletter</Typography>
                        <Box sx={MUIStyle.TallkFooterCTASECSubscribeAreaInputBox}>
                            <TextField fullWidth id="outlined-basic"
                                placeholder="Enter your email address"
                                sx={MUIStyle.TallkFooterCTASECSubscribeAreaInput} />
                            <Button variant="contained" sx={MUIStyle.TallkFooterCTASECSubscribeAreaButton}>Secure Your Spot Now!</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.TallkFooterInnerRow} sx={MUIStyle.TallkFooterInnerRow}>
                    <Box sx={MUIStyle.FooterLogoBox}>
                        <Link href="/">
                            <Box sx={MUIStyle.logoImage} component={"img"} src={TALLKLOGOWHITE} alt="Logo" />
                        </Link>
                        <Typography variant="body1" sx={MUIStyle.FooterLogoText}>SecureBotAI is a leading cybersecurity company specializing in AI-powered penetration testing services.</Typography>
                    </Box>
                    <Box sx={MUIStyle.FooterMenuBox}>
                        <Typography variant="h4" sx={MUIStyle.FooterMenuTitleText}>Company</Typography>
                        <Box sx={MUIStyle.FooterMenuUl}>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Home</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Pricing</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Contact</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Enterprise</Typography>
                                </Link>
                            </Box>

                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FooterMenuBox}>
                        <Typography variant="h4" sx={MUIStyle.FooterMenuTitleText}>Quicks Links</Typography>
                        <Box sx={MUIStyle.FooterMenuUl}>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Terms & Conditions</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Blog</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Watch a Demo</Typography>
                                </Link>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuLi}>
                                <Link href="/">
                                    <Typography sx={MUIStyle.FooterMenuText}>Sign In</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FooterSocialLinksBox}>
                        <Typography variant="h4" sx={MUIStyle.FooterSocialLinksText}>Follow On Social Media</Typography>
                        <Box sx={MUIStyle.FooterSocialLinkBox}>
                            <Link href="/">
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="uil:facebook-f" />
                                </Box>
                            </Link>
                            <Link href="/">
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="icon-park-outline:instagram" />
                                </Box>
                            </Link>
                            <Link href="/">
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="prime:twitter" />
                                </Box>
                            </Link>
                            <Link href="/">
                                <Box sx={MUIStyle.FooterSocialLink}>
                                    <Icon icon="akar-icons:linkedin-fill" />
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box sx={MUIStyle.FooterCopyrightBox}>
                    <Typography variant="h5" sx={MUIStyle.FooterCopyrightText}>Copyright © Tallk | Made with ❤️ from NY and TLV</Typography>
                </Box>
            </Container>
        </Box >
    );
}