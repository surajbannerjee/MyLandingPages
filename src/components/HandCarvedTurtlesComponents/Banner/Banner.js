import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import styles from "./Banner.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { BANNERIMAGE, LOGO } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import BannerSlider from "../BannerSlider/BannerSlider";


export default function Banner() {


    return (
        <Box sx={MUIStyle.BannerMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.BannerRow}>
                    <Box sx={MUIStyle.BannerContent}>
                        <Box sx={MUIStyle.BannerContentInner}>
                            <Typography variant="h1" className="headingGradient" sx={MUIStyle.BannerHeading}>
                                Dive into the Exotic with Our Hand-Carved Turtle Necklaces!
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.BannerText}>
                                Each piece is a symbol of serenity, crafted with care from ethically sourced materials.
                            </Typography>
                            <Box sx={MUIStyle.BtnRow}>
                                <Box sx={MUIStyle.BannerDivider} />
                                <Box sx={commonStyle.HTCCustomBtnBox}>
                                    <Button sx={commonStyle.HCTCustomBtn} variant="contained" size="large">
                                        Shop Now
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.BannerSocialIcons}>
                                <IconButton sx={MUIStyle.BannerSocialIcon} aria-label="Fcebook">
                                    <Icon icon="ri:facebook-fill" />
                                </IconButton>
                                <IconButton sx={MUIStyle.BannerSocialIcon} aria-label="twitter">
                                    <Icon icon="hugeicons:new-twitter" />
                                </IconButton>
                                <IconButton sx={MUIStyle.BannerSocialIcon} aria-label="youtube">
                                    <Icon icon="uil:youtube" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.BannerSlider}>
                        <BannerSlider />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}