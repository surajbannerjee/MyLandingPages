import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { FEATURESBG, LATESTTALKBG, TALLKFEATURESCARDRIGHT } from "@/values/Constants/ImageConstants";
import { display, lineHeight, width } from "@mui/system";

export const MUIStyle = {
    AboutBoxRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "40px",
            xl: "40px",

        },
    },
    AboutTitleRow: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "20px",

    },
    AboutTitle: {
        fontSize: FONT_SIZE.heading36,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkDarkBlue,
        lineHeight: "120%",
    },
    sectionSubTitle: {
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "130%",

    },
    AboutSecMain: {
        background: `url(${LATESTTALKBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: {
            xs: "86px 0",
            sm: "86px 0",
            md: "86px 0",
            lg: "226px 0",
            xl: "226px 0",
        },
    },
    LatestTallkSliderOuter: {
        padding: "10px",
    },
    LatestTallkSliderInner: {
        background: commonColor.trustTallkBGColor2,
        borderRadius: "10px",
        padding: "42px 26px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "stretch",
        justifyContent: "flex-start",
    },
    LatestTallkSliderCont: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    LatestTallkSliderTitle: {
        fontSize: FONT_SIZE.heading28,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkBlue,
        lineHeight: "130%",
    },
    LatestTallkSliderDesc: {
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "130%",
    },
    LatestTallkSliderImage: {
        width: "100%",
        "& img": {
            width: "100%",
            borderRadius: "20px",
        },
    },
    LatestTallkSliderBtnBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    LatestTallkSliderBtnBoxLeft: {
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
    },
    ResourcesBtn: {
        background: commonColor.tallkBlue,
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        lineHeight: "130%",
        fontWeight: FONT_WEIGHT.BOLD,
        borderRadius: "50px",
        padding: "12px 24px",
        boxShadow: "none",
        "&:hover": {
            background: commonColor.tallkBlue,
            boxShadow: "none",
        },
    },
    LatestTallkSliderDate: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "130%",
    },

    ArrowBtn: {
        background: commonColor.tallkBlue,
        color: commonColor.white,
        borderRadius: "50%",
        boxShadow: "none",
        padding: "0",
        height: {
            xs: "40px",
            sm: "40px",
            md: "40px",
            lg: "60px",
            xl: "60px",
        },
        width: {
            xs: "40px",
            sm: "40px",
            md: "40px",
            lg: "60px",
            xl: "60px",
        },
        minWidth: {
            xs: "40px",
            sm: "40px",
            md: "40px",
            lg: "60px",
            xl: "60px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.heading36,
            xl: FONT_SIZE.heading36,
        },
        "&:hover": {
            background: commonColor.tallkBlue,
            boxShadow: "none",
        },
    },
    buttonSliderRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
    },
    sliderBtn: {
        display: "block",
        right: "0px",
        left: "auto",
        top: {
            xs: "5%",
            sm: "5%",
            md: "5%",
            lg: "-20%",
            xl: "-20%",
        },
        minWidth: "50px",
        height: "50px",
        width: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: commonColor.white,
        border: `2px solid ${commonColor.tallkBlue}`,
        fontSize: FONT_SIZE.heading28,
        color: commonColor.tallkBlue,
        transition: "all 0.3s",
        "&:hover": {
            background: commonColor.tallkBlue,
            color: commonColor.white,
        },

    },
};
