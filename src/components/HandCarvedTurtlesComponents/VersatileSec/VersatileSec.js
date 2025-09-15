import { Box, Container, Typography } from "@mui/material";
// import styles from "./VersatileSec.module.css";
import { MUIStyle } from "./MUIStyle";
import { BOTTOMBARTITLE, HCTTICK, VS_Side } from "@/values/Constants/ImageConstants";

export default function VersatileSec() {

    return (
        <Box sx={MUIStyle.VersatileSecMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.VersatileSecRow}>
                    <Box sx={MUIStyle.VersatileSecImageBox}>
                        <Box component={"img"} src={VS_Side} sx={MUIStyle.VersatileSecImage} />
                    </Box>
                    <Box sx={MUIStyle.VersatileSecContent}>
                        <Box sx={MUIStyle.VersatileSecContentInner}>
                            <Box sx={MUIStyle.VersatileSecContentTop}>
                                <Typography component={"h4"} sx={MUIStyle.VersatileSecSmallText}>
                                    Versatile & Meaningful
                                </Typography>
                                <Typography variant="h2" sx={MUIStyle.VersatileSecHeading}>
                                    Perfect For Every Occasion
                                </Typography>
                                <Box component={"img"} src={BOTTOMBARTITLE} sx={MUIStyle.TitlebottomBar} />
                            </Box>
                            <Typography variant="body1" sx={MUIStyle.VersatileSecText}>
                                Hand-Carved Turtle Necklaces are more than just jewelry—they`&apos;`re versatile and meaningful gifts or personal accessories that suit every moment.
                            </Typography>
                            <Box sx={MUIStyle.VersatileRow}>
                                <Box sx={MUIStyle.VersatileUl}>
                                    <Box sx={MUIStyle.VersatileLi}>
                                        <Box component={"img"} src={HCTTICK} sx={MUIStyle.VersatileLiIcon} />
                                        <Typography variant="body1" sx={MUIStyle.VersatileLiText}>
                                            Symbolic Mother-Daughter Gift
                                        </Typography>
                                    </Box>
                                    <Box sx={MUIStyle.VersatileLi}>
                                        <Box component={"img"} src={HCTTICK} sx={MUIStyle.VersatileLiIcon} />
                                        <Typography variant="body1" sx={MUIStyle.VersatileLiText}>
                                            Birthday Present
                                        </Typography>
                                    </Box>
                                    <Box sx={MUIStyle.VersatileLi}>
                                        <Box component={"img"} src={HCTTICK} sx={MUIStyle.VersatileLiIcon} />
                                        <Typography variant="body1" sx={MUIStyle.VersatileLiText}>
                                            Meaningful Friendship Token
                                        </Typography>
                                    </Box>

                                </Box>

                                <Box sx={MUIStyle.VersatileUl}>
                                    <Box sx={MUIStyle.VersatileLi}>
                                        <Box component={"img"} src={HCTTICK} sx={MUIStyle.VersatileLiIcon} />
                                        <Typography variant="body1" sx={MUIStyle.VersatileLiText}>
                                            Statement Piece for Occasions
                                        </Typography>
                                    </Box>
                                    <Box sx={MUIStyle.VersatileLi}>
                                        <Box component={"img"} src={HCTTICK} sx={MUIStyle.VersatileLiIcon} />
                                        <Typography variant="body1" sx={MUIStyle.VersatileLiText}>
                                            Personal Protection Amulet
                                        </Typography>
                                    </Box>
                                    <Box sx={MUIStyle.VersatileLi}>
                                        <Box component={"img"} src={HCTTICK} sx={MUIStyle.VersatileLiIcon} />
                                        <Typography variant="body1" sx={MUIStyle.VersatileLiText}>
                                            Decor for Car Rearview Mirror
                                        </Typography>
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