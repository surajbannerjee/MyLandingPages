'use client'
import "./HandCarvedTurtlesStyles.css";
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import Header from "@/components/HandCarvedTurtlesComponents/Header/Header";
import Banner from "@/components/HandCarvedTurtlesComponents/Banner/Banner";
import AboutSec from "@/components/HandCarvedTurtlesComponents/AboutSec/AboutSec";
import WhyChooseUsSec from "@/components/HandCarvedTurtlesComponents/WhyChooseUsSec/WhyChooseUsSec";
import VersatileSec from "@/components/HandCarvedTurtlesComponents/VersatileSec/VersatileSec";
import CraftedwithCareSec from "@/components/HandCarvedTurtlesComponents/CraftedwithCareSec/CraftedwithCareSec";
import TurtleTalkSec from "@/components/HandCarvedTurtlesComponents/TurtleTalkSec/TurtleTalkSec";
import CustomerStoriesSec from "@/components/HandCarvedTurtlesComponents/CustomerStoriesSec/CustomerStoriesSec";
import FooterSec from "@/components/HandCarvedTurtlesComponents/FooterSec/FooterSec";

export default function HandCarvedTurtles() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            style={{
                overflow: "hidden",
            }}
        >
            <Header />
            <Banner />
            <AboutSec />
            <WhyChooseUsSec />
            <VersatileSec />
            <CraftedwithCareSec />
            <TurtleTalkSec />
            <CustomerStoriesSec />
            <FooterSec />
        </motion.div>
    )
}