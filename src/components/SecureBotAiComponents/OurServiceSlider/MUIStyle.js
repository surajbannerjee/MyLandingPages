import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    OurServiceSliderBox: {
        padding: "20px",
    },
    OurServiceSliderBoxInner: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        padding: "10px",
        background: "linear-gradient(180deg,#052044 0%,#0E4B72 100%)",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        zIndex: "1",
        minHeight: "530px",
        "&:after": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "0",
            background: "linear-gradient( 91.02deg, rgba(49, 102, 255, 0.75) 0%, rgba(219, 32, 160, 0.75) 100%) ",
            opacity: "0",
            transition: "all 0.3s ease-in-out",
        },
        "&:hover:after": {
            opacity: "1",
        },
    },
    OurServiceSliderCardImgBox: {
        width: "100%",
        minHeight: "270px",
        borderRadius: "10px",
        overFlow: "hidden",
        zIndex: "1",
        position: "relative",
    },
    OurServiceSliderCardImg: {
        width: "100%",
        height: "100%",
    },


    OurServiceSliderCardContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "0 20px 20px 32px",
        zIndex: "1",
    },
    OurServiceSliderCardHeading: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.white,
        lineHeight: "120%",
        textAlign: "center",
    },
    OurServiceSliderCardText: {
        fontSize: FONT_SIZE.text16,
        color: commonColor.white,
        fontWeight: FONT_WEIGHT.REGULAR,
        textAlign: "center",
    },

};