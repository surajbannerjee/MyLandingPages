"use client";
import { Box } from "@mui/material";
import styles from "./MentalWellnessStyle.css";
import Header from "@/components/MentalWellnessComponents/Header/Header";
import Banner from "@/components/MentalWellnessComponents/Banner/Banner";
import AboutSec from "@/components/MentalWellnessComponents/AboutSec/AboutSec";
import ServiceSec from "@/components/MentalWellnessComponents/ServiceSec/ServiceSec";
import FacilitySec from "@/components/MentalWellnessComponents/FacilitySec/FacilitySec";
import ReviewSec from "@/components/MentalWellnessComponents/ReviewSec/ReviewSec";
import GetInTouchSec from "@/components/MentalWellnessComponents/GetInTouchSec/GetInTouchSec";
import FooterSec from "@/components/MentalWellnessComponents/FooterSec/FooterSec";


export default function MentalWellnessPage() {
    return (
        <Box className={styles.homePage}>
            <Header />
            <Banner />
            <AboutSec />
            <ServiceSec />
            <FacilitySec />
            <ReviewSec />
            <GetInTouchSec />
            <FooterSec />
        </Box>
    );
}
