import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { TALLKCTAIMG } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import { Icon } from "@iconify/react";

export default function TallkCTASec() {

    return (
        <Box sx={MUIStyle.CTASecMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.CTASecRow}>
                    <Box sx={MUIStyle.CTASecImage}>
                        <Box component={"img"} src={TALLKCTAIMG} alt="CTASecImage" />
                    </Box>
                    <Box sx={MUIStyle.CTASecContent}>
                        <Typography variant="h1" sx={MUIStyle.CTASecHeading}>
                            Start Using the AI Sales Expert of the Future.
                        </Typography>
                        <Typography variant="body1" sx={MUIStyle.CTASecText}>
                            Future-proof your business and boost sales with Tallk. Our AI expert understands your business deeply and closes deals effectively. Integrate in 30 seconds for immediate results.
                        </Typography>
                        <Button sx={MUIStyle.CustomTallkBtn} variant="contained" size="large">
                            Start Tallking to Your Customers Today!
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}