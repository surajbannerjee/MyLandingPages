import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
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
        padding: "40px",
        borderRadius: "20px",
        background: commonColor.white,
        boxShadow: "1px 4px 15px rgb(186 186 186 / 61%)",
        border: "1px solid #D4E0ED",
    },
    CTASecpricingOuterBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    CTASecpricingBoxInner: {
        display: "flex",
        justifyContent: "stretch",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        maxWidth: "25%",
        minWidth: "25%",
    },
    CTASecpricingBoxULBg: {
        background: "#FFF6F6",
        borderRadius: "30px",
        paddingLeft: "20px",
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
    CTASecpricingBoxLI: {
        padding: "20px 30px",
        borderBottom: "1px solid #D4E0ED",
        "&:last-child": {
            borderBottom: "none",
        },
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        minHeight: "80px",
    },
    CTASecpricingBoxUL: {
        listStyle: "none",
        padding: "0",
        margin: "0",
        width: "100%",
    },

    PricingIcon: {
        width: "35px",
        height: "35px",
        objectFit: "cover",
    },
};
