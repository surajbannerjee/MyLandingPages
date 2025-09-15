import { Box, Container, Typography } from "@mui/material";
// import styles from "./AboutSec.module.css";
import { MUIStyle } from "./MUIStyle";
import { BOTTOMBARTITLE1, CARDHEADINGIMG, WCUCARDIMG1, WCUCARDIMG2, WCUCARDIMG3 } from "@/values/Constants/ImageConstants";

const cardData = [
    {
        imgSrc: WCUCARDIMG1,
        heading: 'Craftsmanship',
        text: "Each necklace is meticulously crafted by skilled artisans.",
    },
    {
        imgSrc: WCUCARDIMG2,
        heading: 'Unique Design',
        text: "Inspired by Indonesia's natural beauty.",
    },
    {
        imgSrc: WCUCARDIMG3,
        heading: 'Customer Satisfaction',
        text: "Powerful symbols of protection, longevity, and wisdom.",
    },
];

export default function WhyChooseUsSec() {


    return (
        <Box sx={MUIStyle.WhyChooseUsMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.WhyChooseUsHeadingRow}>
                    <Typography component={"h4"} sx={MUIStyle.AboutSmallText}>
                        Why Choose Us
                    </Typography>
                    <Typography variant="h2" sx={MUIStyle.AboutHeading}>
                        The Hand-Carved Turtles Difference
                    </Typography>
                    <Box component={"img"} src={BOTTOMBARTITLE1} sx={MUIStyle.TitlebottomBar} />
                </Box>
                <Box sx={MUIStyle.WhyChooseUsRow}>
                    {cardData.map((card, index) => (
                        <Box key={index} sx={MUIStyle.WhyChooseUsCard}>
                            <Box sx={MUIStyle.WhyChooseUsCardTop}>
                                <Box component={"img"} src={card.imgSrc} sx={MUIStyle.WhyChooseUsImg} />
                                <Typography variant="h5" sx={MUIStyle.WhyChooseUsCardHeading}>
                                    {card.heading}
                                </Typography>
                                <Box component={"img"} src={CARDHEADINGIMG} sx={MUIStyle.CArdHeadingImg} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.WhyChooseUsCardText}>
                                {card.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}