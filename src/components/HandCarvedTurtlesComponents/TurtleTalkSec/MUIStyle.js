import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { QNASEC } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    TurtleTalkSec: {
        background: commonColor.white,
        width: "100%",
        padding: {
            xs: "86px 0px",
            sm: "86px 0px",
            md: "86px 0px",
            lg: "86px 0px",
            xl: "86px 0px",
        },
        background: `url(${QNASEC}) no-repeat center center`,
        backgroundSize: "cover",
    },
    TurtleTalkSecRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "70px",
        },
        padding: "0",
        position: "relative",
    },
    TurtleTalkSecImageBox: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "40%",
            lg: "40%",
            xl: "40%",
        },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

    },
    TurtleTalkSecImage: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "478px",
            lg: "478px",
            xl: "478px",
        },
        height: {
            xs: "100%",
            sm: "100%",
            md: "576px",
            lg: "576px",
            xl: "576px",
        },
        borderRadius: "500px 500px 0px 0px",
        objectFit: "cover",
    },
    TurtleTalkQusBox: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "60%",
            lg: "60%",
            xl: "60%",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        flexDirection: "column",
    },

    AboutContentTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        flexDirection: "column",
        width: {
            xs: "100%",
            sm: "100%",
            md: "60%",
            lg: "60%",
            xl: "60%",
        },
    },
    AboutHeading: {
        fontSize: {
            xs: FONT_SIZE.heading32,
            sm: FONT_SIZE.heading32,
            md: FONT_SIZE.heading32,
            lg: FONT_SIZE.heading36,
            xl: FONT_SIZE.heading36,
        },
        color: commonColor.HCTGreen,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "54px",
        marginBottom: "15px",
        "& h5": {
            display: "inline",
            color: commonColor.HCTGreen,
            fontSize: {
                xs: FONT_SIZE.heading32,
                sm: FONT_SIZE.heading32,
                md: FONT_SIZE.heading32,
                lg: FONT_SIZE.heading36,
                xl: FONT_SIZE.heading36,
            },
            fontWeight: FONT_WEIGHT.BOLD,
            lineHeight: "54px",
        },

    },

    TitlebottomBar: {
        width: "100%",
        height: "8px",
    },
    AboutSecContentInner: {
        marginTop: {
            xs: "30px",
            sm: "30px",
            md: "60px",
            lg: "60px",
            xl: "60px",
        },
        borderTop: "1px solid",
        borderImage: commonColor.btnGradient3,
        borderImageSlice: 1,
    },
    TurtleTalkQusHeading: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        position: "relative",
        fontSize: FONT_SIZE.heading24,
        color: commonColor.HCTGreen,
        "&:last-child": {
            borderBottom: "none",
        },
        // "& .MuiAccordionSummary-contentGutters": {
        //     justifyContent: "space-between",
        //     width: "100%",
        //     margin: "36px 0",
        // },
    },
    TurtleTalkQusAccordion: {
        background: commonColor.Trans,
        boxShadow: "0px 8px 30px rgba(33, 38, 43, 0.20)",
        borderRadius: "10px",
        margin: "0px 0px",
        marginBottom: "0px !important",
        borderRadius: "0px !important",
        boxShadow: "none !important",
        borderBottom: "1px solid",
        borderImage: commonColor.btnGradient3,
        borderImageSlice: 1,
        "&:before": {
            display: "none",
        },
    },
    TurtleTalkQus: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.HCTText,
        lineHeight: "130%",
    },
    TurtleTalkAns: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.HCTText,
        lineHeight: "150%",
    },










};
