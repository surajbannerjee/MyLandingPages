import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// import styles from "./AboutSec.module.css";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { BOTTOMBARTITLE, HCTBANNERSLIDER3, HCTBTNARROW, HTCSIDEIMG } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";


export default function AboutSec() {


    return (
        <Box sx={MUIStyle.AboutMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutRow}>
                    <Box sx={MUIStyle.AboutImageBox}>
                        <Box component={"img"} src={HCTBANNERSLIDER3} sx={MUIStyle.AboutImage} />
                    </Box>
                    <Box sx={MUIStyle.AboutContent}>
                        <Box sx={MUIStyle.AboutContentInner}>
                            <Box sx={MUIStyle.AboutContentTop}>
                                <Typography component={"h4"} sx={MUIStyle.AboutSmallText}>
                                    Who we are
                                </Typography>
                                <Typography variant="h2" sx={MUIStyle.AboutHeading}>
                                    Our Story
                                </Typography>
                                <Box component={"img"} src={BOTTOMBARTITLE} sx={MUIStyle.TitlebottomBar} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.AboutText}>
                                At Hand-Carved Turtles, we celebrate the union of artistry and nature. Our necklaces are hand-carved by master artisans in the lush jungles of Indonesia, using ethically sourced water buffalo bone. Each piece reflects our commitment to sustainability, craftsmanship, and the spiritual symbolism of the turtle—an emblem of protection, longevity, and wisdom. By wearing our jewelry, you`&apos;`re not just embracing a beautiful accessory; you`&apos;`re connecting with a rich cultural heritage and the serenity it represents. Join us in honoring the beauty of nature and the elegance of handmade artistry.
                            </Typography>

                            <Button sx={commonStyle.HTCBtn} variant="contained" size="large">
                                Know More
                                <Box component={"img"} src={HCTBTNARROW} sx={commonStyle.HTCBtnIcon} />
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}