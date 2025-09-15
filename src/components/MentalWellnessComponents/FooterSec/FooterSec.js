import { Box, Button, Container, Input, TextField, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from '@iconify/react';
import { MWWORKIMG, MWLOGOFooter } from "@/values/Constants/ImageConstants";
import Link from "next/link";



export default function FooterSec() {

    return (
        <Box sx={MUIStyle.FooterSec}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.FooterTopBox}>
                    <Box sx={MUIStyle.FooterContentLeft}>
                        <Box component={"img"} src={MWWORKIMG} alt="side Image" sx={MUIStyle.WorkImg} />
                        <Box sx={MUIStyle.WorkContent}>
                            <Typography variant="h3" sx={MUIStyle.WorkTitle}>
                                Lockabe Mental Wellness Center Timing  -
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.WorkDesc}>
                                Monday to Friday 8:00am - 6:00pm
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.FooterContentRight}>
                        <Typography variant="body1" sx={MUIStyle.SocialMediaTitle}>
                            Follow On Social Media
                        </Typography>
                        <Box sx={MUIStyle.SocialMediaBox}>
                            <Link href="/">
                                <Box sx={MUIStyle.SocialMediaIcon}>
                                    <Icon icon="uil:facebook-f" />
                                </Box>
                            </Link>
                            <Link href="/">
                                <Box sx={MUIStyle.SocialMediaIcon}>
                                    <Icon icon="icon-park-outline:instagram" />
                                </Box>
                            </Link>
                            <Link href="/">
                                <Box sx={MUIStyle.SocialMediaIcon}>
                                    <Icon icon="prime:twitter" />
                                </Box>
                            </Link>
                            <Link href="/">
                                <Box sx={MUIStyle.SocialMediaIcon}>
                                    <Icon icon="akar-icons:linkedin-fill" />
                                </Box>
                            </Link>
                        </Box>

                    </Box>
                </Box>
            </Container>
            <Box sx={MUIStyle.MainFooterBox}>
                <Container maxWidth="xl">
                    <Box sx={MUIStyle.FooterRow}>
                        <Box sx={MUIStyle.FooterLogoBox}>
                            <Box component={"img"} src={MWLOGOFooter} alt="side Image" sx={MUIStyle.WorkImg} />
                            <Typography variant="h2" sx={MUIStyle.FooterLogoText}>
                                If you have any questions or need more information about our services.
                            </Typography>
                        </Box>
                        <Box sx={MUIStyle.FooterMenuBox}>
                            <Typography variant="h3" sx={MUIStyle.FooterMenuTitleText}>Our Services</Typography>
                            <Box sx={MUIStyle.FooterMenuUl}>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Inpatient Care</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Individual Therapy</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Group Therapy</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Family Therapy</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Medication Management</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Wellness Activities</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={MUIStyle.FooterMenuBox1}>
                            <Typography variant="h3" sx={MUIStyle.FooterMenuTitleText}>Stay Connected</Typography>
                            <Box sx={MUIStyle.FooterMenuUl}>
                                <Link href="/">
                                    <Box sx={MUIStyle.FooterCunnectMenuLi}>
                                        <Box sx={MUIStyle.FooterCunnectIConBox}>
                                            <Icon icon="ic:baseline-call" />
                                        </Box>
                                        <Typography sx={MUIStyle.FooterMenuText}>Phone: +1 (123) 456-7890</Typography>
                                    </Box>
                                </Link>
                                <Link href="/">
                                    <Box sx={MUIStyle.FooterCunnectMenuLi}>
                                        <Box sx={MUIStyle.FooterCunnectIConBox}>
                                            <Icon icon="ic:round-mail" />
                                        </Box>
                                        <Typography sx={MUIStyle.FooterMenuText}>Email: info@mentalwellnesscenter.com</Typography>
                                    </Box>
                                </Link>
                                <Link href="/">
                                    <Box sx={MUIStyle.FooterCunnectMenuLi}>
                                        <Box sx={MUIStyle.FooterCunnectIConBox}>
                                            <Icon icon="ooui:map-pin" />
                                        </Box>
                                        <Typography sx={MUIStyle.FooterMenuText}>Address: 100 Serenity Lane, Countryside, PA 12345</Typography>
                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={MUIStyle.FooterMenuNewsBox}>
                            <Typography variant="h3" sx={MUIStyle.FooterMenuTitleText}>Subscribe to Our Newsletter</Typography>
                            <Box sx={MUIStyle.FooterNewsLetterForm}>
                                <TextField sx={MUIStyle.GetInTouchInput}
                                    placeholder="Enter your email address"
                                    fullWidth
                                    id="outlined-basic" variant="outlined" />
                                <Button sx={MUIStyle.FooterNewsLetterBtn} variant="contained">Subscribe</Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}