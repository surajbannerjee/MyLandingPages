'use client'
import 'bootstrap/dist/css/bootstrap.css'
import './CraveKavaStyles.css'
import './CraveKavaStyleResponsive.css'
import MainBanner from "@/components/CraveKavaComponents/Banner/MainBanner";
import SecondaryBanner from "@/components/CraveKavaComponents/Banner/SecondaryBanner";
import DiscoveryBoxSec from "@/components/CraveKavaComponents/DiscoveryBoxSec/DiscoveryBoxSec";
import ExperienceSec from "@/components/CraveKavaComponents/ExperienceSec/ExperienceSec";
import Footer from "@/components/CraveKavaComponents/Footer/Footer";
import Header from "@/components/CraveKavaComponents/Header/Header";
import WhyUsSec from "@/components/CraveKavaComponents/WhyUsSec/WhyUsSec";
import { motion } from 'framer-motion';

export default function CraveKavaPage() {
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
      <MainBanner />
      <WhyUsSec />
      <DiscoveryBoxSec />
      <ExperienceSec />
      <SecondaryBanner />
      <Footer />
      </motion.div>
  );
}
