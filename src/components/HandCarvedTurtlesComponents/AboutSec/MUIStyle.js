import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { AboutBG, AboutBGTEST, HTCSIDEIMG, STAR1, STAR2 } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    AboutMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: commonColor.white,
        width: "100%",
        padding: {
            xs: "86px 0",
            sm: "86px 0",
            md: "86px 0",
            lg: "86px 0",
            xl: "86px 0",
        },
    },
    AboutRow: {
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
    AboutImageBox: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "45%",
            lg: "45%",
            xl: "45%",
        },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        zIndex: "1",
        "&::before": {
            content: "''",
            position: "absolute",
            top: "25%",
            right: {
                xs: "-10%",
                sm: "-10%",
                md: "-10%",
                lg: "-8%",
                xl: "8%",
            },
            width: "60%",
            height: "60%",
            background: `url(${HTCSIDEIMG}) no-repeat center center`,
            backgroundSize: "contain",
            zIndex: "-1",
        },
    },
    AboutImage: {
        width: {
            xs: "350px",
            sm: "450px",
            md: "450px",
            lg: "450px",
            xl: "450px",
        },
        height: {
            xs: "450px",
            sm: "550px",
            md: "550px",
            lg: "550px",
            xl: "550px",
        },
        objectFit: "cover",
        padding: "24px",
        background: commonColor.white,
        boxShadow: "0px 2.1px 8.4px rgba(0, 0, 0, 15%)",
    },
    AboutContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "55%",
            lg: "55%",
            xl: "55%",
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
    },
    TitlebottomBar: {
        width: "100%",
        height: "8px",
    },
    AboutText: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },

        color: commonColor.HCTText2,
        fontWeight: FONT_WEIGHT.REGULAR,
        textAlign: {
            xs: "center",
            sm: "left",
            md: "left",
            lg: "left",
            xl: "left",
        },
        marginBottom: "40px",
    },
    AboutContentInner: {
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
        gap: "20px",
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

    },
    AboutSmallText: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        color: commonColor.HCTRed,
        fontWeight: FONT_WEIGHT.BOLD,
    },
    HTCBtn: {
        background: commonColor.Trans,
        color: commonColor.HCTGreen,
        borderRadius: "50px",
        padding: "20px 35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        minHeight: "50px",
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        boxShadow: "none",
        lineHeight: "24px",
        border: `2px solid ${commonColor.HCTGreen}`,
        "&:hover": {
            background: commonColor.white,
            boxShadow: "none",
        },
    },
    HTCBtnIcon: {
        width: "30px",
        height: "30px",
        objectFit: "contain",
    },




















};
