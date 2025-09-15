import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { AboutBG, AboutBGTEST, HTCSIDEIMG, STAR1, STAR2 } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    VersatileSecMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: commonColor.HCTLightpink,
        width: "100%",
        padding: {
            xs: "86px 0",
            sm: "86px 0",
            md: "86px 0",
            lg: "86px 0",
            xl: "86px 0",
        },


    },
    VersatileSecRow: {
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
    VersatileSecImageBox: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

    },
    VersatileSecImage: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
        },
        objectFit: "cover",
    },
    VersatileSecContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        },

    },
    VersatileSecContentInner: {
        display: "flex",
        justifyContent: "center",
        alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xl: "flex-start",
        },
        flexDirection: "column",
        gap: "10px",
    },
    VersatileSecHeading: {
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
    VersatileSecText: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "80%",
            xl: "80%",
        },
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
    VersatileSecContentInner: {
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
    VersatileSecContentTop: {
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
    VersatileSecSmallText: {
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
    VersatileRow: {
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
        gap: "20px",
        width: "100%",
    },
    VersatileUl: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
    },
    VersatileLi: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
    },
    VersatileLiIcon: {
        width: "20px",
        height: "20px",
        objectFit: "contain",
    },
    VersatileLiText: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        color: commonColor.HCTText,
        fontWeight: FONT_WEIGHT.REGULAR,
    },




















};
