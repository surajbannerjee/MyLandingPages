import { Box, Button, Container, Rating, Typography } from "@mui/material";
// import styles from "./AboutSec.module.css";
import { MUIStyle } from "./MUIStyle";
import { BOTTOMBARTITLE, BOTTOMBARTITLE1, CARD1, CARD2, CARD3, CARD4, CARD5, CARDHEADINGIMG, FULLSTAR, HALFSTAR, HCTBANNERSLIDER2, HCTBTNARROW, HCTSTARWHITE, WCUCARDIMG1, WCUCARDIMG2, WCUCARDIMG3 } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { Icon } from "@iconify/react";


export default function CraftedwithCareSec() {


    return (
        <Box sx={MUIStyle.CraftedwithCareSec} id="collections">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.CraftedwithCareSecRow}>
                    <Box sx={MUIStyle.CraftedwithCareSecContent}>
                        <Typography component={"h4"} sx={MUIStyle.VersatileSecSmallText}>
                            Crafted with Care
                        </Typography>
                        <Typography variant="h2" sx={MUIStyle.VersatileSecHeading}>
                            Our Signature Pieces
                        </Typography>
                        <Box component={"img"} src={BOTTOMBARTITLE} sx={MUIStyle.TitlebottomBar} />
                        <Box sx={MUIStyle.CraftedwithCareSecText}>
                            <Typography variant="body1" sx={MUIStyle.VersatileSecText}>
                                Discover the Essence of Artistry with Our Most Iconic Hand-Carved Turtle Necklaces.
                            </Typography>
                            <Button sx={commonStyle.HTCBtn} variant="contained" size="large">
                                View allProducts
                                <Box component={"img"} src={HCTBTNARROW} sx={commonStyle.HTCBtnIcon} />
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.CraftedwithCareCard}>
                        <Box component={"img"} src={CARD1} sx={MUIStyle.CraftedwithCareSecCardImg} />
                        <Box sx={MUIStyle.CraftedwithCareCardContent}>
                            <Box sx={MUIStyle.CWCCardRatingRow}>
                                <Box sx={MUIStyle.CWCCardRatingstarts}>
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={HALFSTAR} />
                                </Box>
                                <Typography variant="body1" sx={MUIStyle.CWCCardRatingText}>
                                    (4.5 Reviews)
                                </Typography>
                            </Box>
                            <Typography variant="h5" sx={MUIStyle.CWCCardHeading}>
                                Sacred Serenity
                            </Typography>
                            <Box sx={MUIStyle.CWCCardTextRow}>
                                <Typography variant="body1" sx={MUIStyle.CWCCardPrice}>
                                    Price $29.95​ <span>(<del>$47.95</del>)</span>
                                </Typography>
                                <Box sx={MUIStyle.CWCCardOfferBox}>
                                    <Box component={"img"} src={HCTSTARWHITE} />
                                    <Typography variant="body1" sx={MUIStyle.CWCCardOfferText}> For 1 </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.CraftedwithCareCard}>
                        <Box component={"img"} src={CARD2} sx={MUIStyle.CraftedwithCareSecCardImg} />
                        <Box sx={MUIStyle.CraftedwithCareCardContent}>
                            <Box sx={MUIStyle.CWCCardRatingRow}>
                                <Box sx={MUIStyle.CWCCardRatingstarts}>
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={HALFSTAR} />
                                </Box>
                                <Typography variant="h3" sx={MUIStyle.CWCCardRatingText}>
                                    (4.2 Reviews)
                                </Typography>
                            </Box>
                            <Typography variant="h5" sx={MUIStyle.CWCCardHeading}>
                                Ocean Embrace
                            </Typography>
                            <Box sx={MUIStyle.CWCCardTextRow}>
                                <Typography variant="body1" sx={MUIStyle.CWCCardPrice}>
                                    Price $49.95​ <span>(<del>$79.95</del>)</span>
                                </Typography>
                                <Box sx={MUIStyle.CWCCardOfferBox}>
                                    <Box component={"img"} src={HCTSTARWHITE} />
                                    <Typography variant="body1" sx={MUIStyle.CWCCardOfferText}> For 2 </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.CraftedwithCareCard}>
                        <Box component={"img"} src={CARD3} sx={MUIStyle.CraftedwithCareSecCardImg} />
                        <Box sx={MUIStyle.CraftedwithCareCardContent}>
                            <Box sx={MUIStyle.CWCCardRatingRow}>
                                <Box sx={MUIStyle.CWCCardRatingstarts}>
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={HALFSTAR} />
                                </Box>
                                <Typography variant="h3" sx={MUIStyle.CWCCardRatingText}>
                                    (4.2 Reviews)
                                </Typography>
                            </Box>
                            <Typography variant="h5" sx={MUIStyle.CWCCardHeading}>
                                Journey Pendant
                            </Typography>
                            <Box sx={MUIStyle.CWCCardTextRow}>
                                <Typography variant="body1" sx={MUIStyle.CWCCardPrice}>
                                    Price $59.85​​ <span>(<del>$95.95</del>)</span>
                                </Typography>
                                <Box sx={MUIStyle.CWCCardOfferBox}>
                                    <Box component={"img"} src={HCTSTARWHITE} />
                                    <Typography variant="body1" sx={MUIStyle.CWCCardOfferText}> For 3 </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.CraftedwithCareCard}>
                        <Box component={"img"} src={CARD4} sx={MUIStyle.CraftedwithCareSecCardImg} />
                        <Box sx={MUIStyle.CraftedwithCareCardContent}>
                            <Box sx={MUIStyle.CWCCardRatingRow}>
                                <Box sx={MUIStyle.CWCCardRatingstarts}>
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={HALFSTAR} />
                                </Box>
                                <Typography variant="h3" sx={MUIStyle.CWCCardRatingText}>
                                    (4.1 Reviews)
                                </Typography>
                            </Box>
                            <Typography variant="h5" sx={MUIStyle.CWCCardHeading}>
                                Timeless Wisdom
                            </Typography>
                            <Box sx={MUIStyle.CWCCardTextRow}>
                                <Typography variant="body1" sx={MUIStyle.CWCCardPrice}>
                                    Price $129.95​​ <span>(<del>$207.95</del>)</span>
                                </Typography>
                                <Box sx={MUIStyle.CWCCardOfferBox}>
                                    <Box component={"img"} src={HCTSTARWHITE} />
                                    <Typography variant="body1" sx={MUIStyle.CWCCardOfferText}> For 6 </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.CraftedwithCareCard}>
                        <Box component={"img"} src={CARD5} sx={MUIStyle.CraftedwithCareSecCardImg} />
                        <Box sx={MUIStyle.CraftedwithCareCardContent}>
                            <Box sx={MUIStyle.CWCCardRatingRow}>
                                <Box sx={MUIStyle.CWCCardRatingstarts}>
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={FULLSTAR} />
                                    <Box component={"img"} src={HALFSTAR} />
                                </Box>
                                <Typography variant="h3" sx={MUIStyle.CWCCardRatingText}>
                                    (4.8 Reviews)
                                </Typography>
                            </Box>
                            <Typography variant="h5" sx={MUIStyle.CWCCardHeading}>
                                Eternal Harmony
                            </Typography>
                            <Box sx={MUIStyle.CWCCardTextRow}>
                                <Typography variant="body1" sx={MUIStyle.CWCCardPrice}>
                                    Price $219.36​ <span>(<del>$415.36</del>)</span>
                                </Typography>
                                <Box sx={MUIStyle.CWCCardOfferBox}>
                                    <Box component={"img"} src={HCTSTARWHITE} />
                                    <Typography variant="body1" sx={MUIStyle.CWCCardOfferText}> For 12 </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
}