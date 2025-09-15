import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { TALLKCTABG, TALLKCTABGMOB } from "@/values/Constants/ImageConstants";
import { padding, width } from "@mui/system";

export const MUIStyle = {
    CTASecMain: {
        width: "100%",
        padding: {
            xs: "60px 0",
            sm: "60px 0",
            md: "60px 0",
            lg: "80px 0 ",
            xl: "80px 0 ",
        },
    },
    AboutTitleRow: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingBottom: "70px",

    },
    AboutTitle: {
        fontSize: FONT_SIZE.heading48,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkDarkBlue,
        lineHeight: {
            xs: "120%",
            sm: "120%",
            md: "120%",
            lg: "150%",
            xl: "150%",

        },
        "& span": {
            color: commonColor.tallkBlue,
        },
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },
    AboutTitleText: {
        fontSize: FONT_SIZE.text18,
        color: commonColor.tallkDarkBlue,
        lineHeight: "150%",
        textAlign: "center",
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "60%",
            xl: "60%",
        },
    },

    CTASecpricingBox: {
        padding: "20px",
        borderRadius: "20px",
        background: commonColor.white,
        boxShadow: "1px 4px 15px rgb(186 186 186 / 61%)",
        border: "1px solid #D4E0ED",
    },
    CTASecpricingOuterBox: {
        // display: "flex",
        // justifyContent: "space-between",
        // alignItems: "stretch",
    },

    CTASecpricingBoxInnerULsHeading: {
        fontSize: FONT_SIZE.text14,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkDarkBlue,
        lineHeight: "150%",
        background: "#FFF6F6",
        padding: "10px 20px",
        borderRadius: "10px",
        width: "fit-content",
        margin: "20px 0",
    },
    CTASecpricingBoxInnerULsList: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    CTASecpricingBoxInnerULsListIcon: {
        width: "100%",
        padding: "5px",
        border: "1px solid #E9E9E9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    CTASecpricingBoxInnerULsListImg: {
        width: "30px",
        height: "30px",
        objectFit: "contain",

    },

    CTASecpricingBoxText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.tallkDarkBlue,
        lineHeight: "150%",
        textAlign: "center",
    },
    CTASecpricingBoxHeading: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkDarkBlue,
        lineHeight: "150%",
    },
    PricingLogo: {
        width: "67px",
        height: "auto",
        objectFit: "cover",
        padding: "5px 0",
    },
    CTASecpricingBoxInnerTop: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        background: "#FAFAFA",
        borderBottom: "1px solid #E9E9E9",
    },
    CTASecpricingBoxInnerTopImg: {
        width: "40px",
        height: "auto",
        objectFit: "cover",
    },
    CTASecpricingBoxInnerTopHeading: {
        fontSize: FONT_SIZE.text14,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkDarkBlue,
        lineHeight: "150%",
    },


};
