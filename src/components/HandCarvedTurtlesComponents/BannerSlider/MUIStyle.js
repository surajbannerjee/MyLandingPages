import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { color } from "framer-motion";

export const MUIStyle = {
    sliderImgBox: {
        width: "100%",
        height: "450px",
        overflow: "hidden",
        borderRadius: "200px 200px 0 0",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },
    sliderBanner: {
        position: "relative",
    },
    sliderCountBox: {
        background: commonColor.HCTLightpink,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        position: "absolute",
        bottom: {
            xs: "-30px",
            sm: "-30px",
            md: "0",
            lg: "20px",
            xl: "20px",
        },
        right: {
            xs: "20%",
            sm: "20%",
            md: "43px",
            lg: "43px",
            xl: "43px",
        },
        width: "200px",
        "& span": {
            fontSize: FONT_SIZE.text16,
            color: commonColor.HCTGreen,
            fontWeight: FONT_WEIGHT.BOLD,
        },
    }
};
