import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { AboutBG, AboutBGTEST, HTCSIDEIMG, STAR1, STAR2 } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    CraftedwithCareSec: {
        background: commonColor.white,
        width: "100%",
        padding: {
            xs: "86px 0px",
            sm: "86px 0px",
            md: "86px 0px",
            lg: "86px 0px",
            xl: "86px 0px",
        },
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

    CraftedwithCareSecRow: {
        display: "grid",
        gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
        },
        gap: {
            xs: "50px",
            sm: "50px",
            md: "48px",
            lg: "48px",
            xl: "48px",
        },
    },
    CraftedwithCareSecContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        gap: "0px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "80%",
            xl: "80%",
        },

    },

    CWCCardRatingstarts: {
        display: "flex",
        gap: "5px",
    },
    CWCCardRatingRow: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
    },

    CraftedwithCareSecText: {
        display: "flex",
        flexDirection: "column",
        alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        gap: "40px",
        marginTop: "20px",
    },

    VersatileSecText: {
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
        marginBottom: "20px",
    },
    CraftedwithCareCard: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        position: "relative",
    },
    CraftedwithCareCardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        gap: "10px",
    },
    CraftedwithCareSecCardImg: {
        width: "100%",
        height: "480px",
        objectFit: "cover",
        borderRadius: "10px",
    },
    CWCCardRatingText: {
        fontSize: FONT_SIZE.text16,
        color: commonColor.HCTMidiumGray,
        fontWeight: FONT_WEIGHT.MEDIUM,
    },
    CWCCardHeading: {
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        color: commonColor.HCTRed,
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "140%",
    },
    CWCCardTextRow: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
    },
    CWCCardPrice: {
        fontSize: FONT_SIZE.text20,
        color: commonColor.HCTText,
        fontWeight: FONT_WEIGHT.BOLD,
        "& span": {
            fontSize: FONT_SIZE.text18,
            color: commonColor.HCTMidiumGray,
            fontWeight: FONT_WEIGHT.MEDIUM,
        },
    },
    CWCCardOfferBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "3px 7px",
        borderRadius: "8px",
        backgroundColor: commonColor.HCTRed,
        "& img": {
            width: "15px",
            height: "15px",
            objectFit: "contain",
        },
    },
    CWCCardOfferText: {
        fontSize: FONT_SIZE.text16,
        color: commonColor.white,
        fontWeight: FONT_WEIGHT.MEDIUM,
    },












};
