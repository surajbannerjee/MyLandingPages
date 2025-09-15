import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { GETTALLKINGBG, TALLKFEATURESCARDRIGHT } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    AboutTitleRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        paddingBottom: "70px",
    },
    AboutTitleContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "32%",
            xl: "32%",
        },
        textAlign: "center",
    },
    AboutTitle: {
        fontSize: FONT_SIZE.heading40,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.white,
        lineHeight: "150%",
        marginBottom: "10px",
    },
    AboutParaText: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.textColor2,
        lineHeight: "150%",
    },

    AboutSecMain: {
        background: `url(${GETTALLKINGBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: {
            xs: "86px 0",
            sm: "86px 0",
            md: "86px 0",
            lg: "86px 0",
            xl: "86px 0",
        },
    },
    AboutSecRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
            xl: "row",
        },
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "20px",
            xl: "20px",

        },
        padding: "0",
    },
    AboutSecContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "40%",
            lg: "40%",
            xl: "40%",
        },
    },


    Accordion: {
        background: commonColor.Trans,
        boxShadow: "0px 8px 30px rgba(33, 38, 43, 0.20)",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "0px !important",
        borderRadius: "0px !important",
        boxShadow: "none !important",
    },
    AccordionTitle: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.white,
        lineHeight: "130%",
    },
    AccordionText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.textColor2,
        lineHeight: "150%",
    },

    ArrowAccrodion: {
        width: "24px",
        height: "24px",
    },

    AboutSecImage: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "60%",
            lg: "60%",
            xl: "60%",
        },
        "& img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",
        },
    },

    ResultBoxRow: {
        display: "flex",
        justifyContent: "Flex-start",
        alignItems: "center",
        gap: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "60px",
            xl: "60px",
        },
    },
    ResultBox: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    ResultBoxHeading: {
        fontSize: {
            xs: FONT_SIZE.heading36,
            sm: FONT_SIZE.heading36,
            md: FONT_SIZE.heading36,
            lg: FONT_SIZE.heading48,
            xl: FONT_SIZE.heading48,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkBlue,
        lineHeight: "130%",
    },
    ResultBoxText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "150%",
    },
    GoogleBtn: {
        padding: "10px 32px",
        background: commonColor.white,
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: '10px',
        boxShadow: "0px 4px 24px rgba(33, 38, 43, 0.24) !important",
        "&:hover": {
            background: commonColor.white,
        },
    },
    GoogleBtnText: {
        color: commonColor.tallkLightBlue,
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.BOLD,
    },
    GoogleBtnIcon: {
        width: "24px",
        height: "24px",
    },
    GoogleReviewStars: {
        display: "flex",
        gap: "5px",
        color: '#F2B900',
        fontSize: FONT_SIZE.text16,

    },
    FeaturesCardRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexFlow: "wrap",
        gap: "40px",
        marginTop: "70px",
    },
    FeaturesCard: {
        background: commonColor.cardBg,
        padding: "42px 24px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "Flex-start",
        justifyContent: "start",
        flexDirection: "column",
        gap: "30px",
        boxShadow: "0px 8px 30px rgba(207, 207, 207, 0.15)",
        position: "relative",
        maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "460px",
            lg: "460px",
            xl: "460px",
        },
        minWidth: {
            xs: "100%",
            sm: "100%",
            md: "460px",
            lg: "460px",
            xl: "460px",
        },
        minHeight: "320px",
        "&::before": {
            content: "''",
            position: "absolute",
            top: "10px",
            right: "10px",
            background: `url(${TALLKFEATURESCARDRIGHT})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "130px",
            height: "130px",
        },

    },
    FeaturesCardImgBox: {
        height: "82px",
        width: "82px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: commonColor.white,
        borderRadius: "15px",
        boxShadow: "0px 8px 24px rgba(33, 38, 43, 0.20)",
    },
    FeaturesCardIcon: {
        width: "46px",
        height: "46px",
        objectFit: "contain",
    },

    FeaturesCardContent: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    FeaturesCardHeading: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkDarkBlue,
        lineHeight: "130%",
    },
    FeaturesCardText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "150%",
    },


};
