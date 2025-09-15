import { Box } from "@mui/material";
import styles from "./TallkPage.module.css";
import Header from "@/components/TallkComponents/Header/Header";
import Banner from "@/components/TallkComponents/Banner/Banner";
import EnterpriseLevel from "@/components/TallkComponents/EnterpriseLevel/EnterpriseLevel";
import BiggerResultsSec from "@/components/TallkComponents/BiggerResultsSec/BiggerResultsSec";
import FeaturesSec from "@/components/TallkComponents/FeaturesSec/FeaturesSec";
import TallkCTASec from "@/components/TallkComponents/TallkCTASec/TallkCTASec";
import ProSec from "@/components/TallkComponents/ProSec/ProSec";
import GetTallkingSec from "@/components/TallkComponents/GetTallkingSec/GetTallkingSec";
import LatestTallkSec from "@/components/TallkComponents/LatestTallkSec/LatestTallkSec";
import TallkFooter from "@/components/TallkComponents/TallkFooter/TallkFooter";
import ProSecMobile from "@/components/TallkComponents/ProSecMobile/ProSecMobile";

export default function TallkPage() {
    return (
        <Box className={styles.homePage}>
            <Header />
            <Banner />
            <EnterpriseLevel />
            <BiggerResultsSec />
            <FeaturesSec />
            <TallkCTASec />
            <Box sx={
                {
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "block",
                        xl: "block",
                    }
                }
            } >
                <ProSec />
            </Box>

            <Box sx={
                {
                    display: {

                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none",
                    }
                }
            }>
                <ProSecMobile />
            </Box>

            <GetTallkingSec />
            <LatestTallkSec />
            <TallkFooter />
        </Box>
    );
}
