import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { ARROWWAVE, CTABG, CTASec } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    CTASecMain: {
        padding: "80px 0",
    },
    CTASecInnerBox: {
        background: `url(${CTABG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "82px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        gap: {
            xs: "50px",
            sm: "50px",
            md: "30px",
            lg: "30px",
            xl: "30px",

        },
        justifyContent: "space-between",
        position: "relative",
        "&::after": {
            content: '""',
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: "130px",
            height: "130px",
            background: `url(${ARROWWAVE})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
            },
        },
    },
    CtaBtn: {
        background: commonColor.PrimaryColor,
        color: commonColor.white,
        borderRadius: "20px",
        padding: "10px 35px",
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.BOLD,
        textTransform: "capitalize",
        transition: "all 0.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: '13px',
        "&:hover": {
            background: commonColor.Secondarycolor,
        },
        minWidth: "220px",
    },
    CTASecContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "20px",
    },
    CTASecText: {
        color: "#6F7890",
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        marginTop: "10px",
        textAlign: "center",
    },
    CTASecSubText: {
        color: commonColor.text,
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.REGULAR,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },
    CTASecTitle: {
        color: commonColor.PrimaryColor,
        fontSize: FONT_SIZE.heading42,
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "120%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },

};
