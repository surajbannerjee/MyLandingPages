import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { TALLKDASHBOARD, EXPRIENCE, TREND } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { Icon } from "@iconify/react";

export default function BiggerResultsSec() {


    return (
        <Box sx={MUIStyle.AboutSecMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutSecRow}>
                    <Box sx={MUIStyle.AboutSecContent}>
                        <Box sx={MUIStyle.AboutSecContentInner}>
                            <Typography variant="h1" sx={MUIStyle.AboutSecHeading}>
                                Big Tallk,<br /> Bigger Results.
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
                                Boost online sales and close more deals with Tallks AI sales expert. Engage clients where they first see you, seamlessly integrating and optimizing your sales process for bigger results
                            </Typography>
                            <Button sx={commonStyle.CustomTallkBtn} variant="contained" size="large">
                                Start Tallking Smarter, Not Harder <Icon icon="ic:round-arrow-outward" />
                            </Button>
                            <Box sx={MUIStyle.ResultBoxRow}>
                                <Box sx={MUIStyle.ResultBox}>
                                    <Typography variant="h2" sx={MUIStyle.ResultBoxHeading}>3.1X</Typography>
                                    <Typography variant="body1" sx={MUIStyle.ResultBoxText}>More Online Sales</Typography>
                                </Box>
                                <Box sx={MUIStyle.ResultBox}>
                                    <Typography variant="h2" sx={MUIStyle.ResultBoxHeading}>62%</Typography>
                                    <Typography variant="body1" sx={MUIStyle.ResultBoxText}>More Deals Closed</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={MUIStyle.AboutSecImage}>
                        <Box component={"img"} src={TALLKDASHBOARD} alt="AboutSecImage" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}