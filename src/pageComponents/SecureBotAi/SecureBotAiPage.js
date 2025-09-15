"use client"
import { Box, Typography } from "@mui/material";
import styles from "./SecureBotAiPage.module.css";
import Header from "@/components/SecureBotAiComponents/Header/Header";
import Banner from "@/components/SecureBotAiComponents/Banner/Banner";
import AboutSec from "@/components/SecureBotAiComponents/AboutSec/AboutSec";
import WhatSetsUsApart from "@/components/SecureBotAiComponents/WhatSetsUsApart/WhatSetsUsApart";
import OurService from "@/components/SecureBotAiComponents/OurService/OurService";
import CTASec from "@/components/SecureBotAiComponents/CTASec/CTASec";
import Footer from "@/components/SecureBotAiComponents/Footer/Footer";
import KeyBenefits from "@/components/SecureBotAiComponents/KeyBenefits/KeyBenefits";
import OurTarget from "@/components/SecureBotAiComponents/OurTarget/OurTarget";
import { useEffect } from "react";

export default function SecureBotAiPage() {

    return (
        <Box className={styles.homePage}>
            <Header />
            <Banner />
            <AboutSec />
            <WhatSetsUsApart />
            <OurService />
            <KeyBenefits />
            <OurTarget />
            <CTASec />
            <Footer />
        </Box>
    );
}
