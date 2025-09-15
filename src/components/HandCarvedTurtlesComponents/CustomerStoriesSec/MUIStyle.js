import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { AboutBG, AboutBGTEST, HTCSIDEIMG, STAR1, STAR2 } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    WhyChooseUsMain: {
        background: commonColor.white,
        width: "100%",
        padding: {
            xs: "86px 0px",
            sm: "86px 0px",
            md: "86px 0px 150px",
            lg: "86px 0px 150px",
            xl: "86px 0px 150px",
        },
    },
    WhyChooseUsHeadingRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        textAlign: 'center',
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
        textAlign: 'center',
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "54px",
        marginBottom: "15px",
    },
    TitlebottomBar: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        },
        height: "8px",

    },
    WhyChooseUsRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
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
            md: "20px",
            lg: "80px",
            xl: "80px",
        },
        padding: "0",
        marginTop: "50px",
    },
    WhyChooseUsCard: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        padding: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "36px",
            xl: "36px",
        },
        background: commonColor.HCTFadePink,
        textAlign: "center",
        border: `1px solid ${commonColor.HCTPink}`,
        borderRadius: "22px",
        boxShadow: "0px 25px 47px -15px rgba(6, 8, 27, 0.13)",
    },
    WhyChooseUsCardTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
    },
    WhyChooseUsImg: {
        width: "130px",
        height: "130px",
    },
    WhyChooseUsCardHeading: {
        fontSize: {
            xs: FONT_SIZE.heading24,
            sm: FONT_SIZE.heading24,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading28,
            xl: FONT_SIZE.heading28,
        },
        color: commonColor.HCTRed,
        fontWeight: FONT_WEIGHT.BOLD,
        textAlign: "center",
    },
    CArdHeadingImg: {
        width: "100px",
        height: "8px",
        objectFit: "contain",
    },
    WhyChooseUsCardText: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        color: commonColor.HCTText,
        textAlign: "center",
    },


















};
