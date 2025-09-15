import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { MWFOOTERTOPBG, MWGETINTOUCHBG } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    FooterSec: {
        background: commonColor.HCTLightpink,
        width: "100%",
        paddingTop: {
            xs: "40px",
            sm: "40px",
            md: "40px",
            lg: "50px",
            xl: "50px",
        },
    },
    FooterContentLeft: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        gap: {
            xs: "20px",
            sm: "20px",
            md: "40px",
            lg: "40px",
            xl: "40px",
        },
    },
    WorkImg: {
        width: "180px",
        height: "74px",
        objectFit: "contain",
    },
    WorkContent: {
        display: "flex",
        alignItems: "center",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        gap: "10px",
    },
    WorkTitle: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.MSecondary,
    },
    WorkDesc: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MSecondary,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },
    FooterContentRight: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: {
            xs: "20px",
            sm: "20px",
            md: "0px",
            lg: "0px",
            xl: "0px",
        },
    },
    SocialMediaTitle: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MSecondary,
    },
    SocialMediaBox: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
    },
    SocialMediaIcon: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        height: {
            xs: "35px",
            sm: "35px",
            md: "42px",
            lg: "42px",
            xl: "42px",
        },
        width: {
            xs: "35px",
            sm: "35px",
            md: "42px",
            lg: "42px",
            xl: "42px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: "#BD8D36",
        color: commonColor.MSecondary,
    },
    // MainFooterBox: {
    //     background: "#0D1915",
    //     width: "100%",
    //     padding: {
    //         xs: "32px 0px",
    //         sm: "32px 0px",
    //         md: "120px 0px 60px",
    //         lg: "150px 0px 86px",
    //         xl: "150px 0px 86px",
    //     },


    // },
    FooterRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        alignItems: "Flex-start",
        gap: "50px",
    },
    FooterLogoBox: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "25%",
            lg: "25%",
            xl: "25%",
        },
    },

    FooterLogoText: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MWLightGrey,
        lineHeight: "150%",
    },
    FooterMenuBox: {
        display: "flex",
        flexDirection: "column",
        gap: "42px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "20%",
            lg: "20%",
            xl: "20%",
        },
    },
    FooterMenuBox1: {
        display: "flex",
        flexDirection: "column",
        gap: "42px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "30%",
            lg: "30%",
            xl: "30%",
        },
        paddingRight: {
            xs: "0px",
            sm: "0px",
            md: "0px",
            lg: "40px",
            xl: "40px",
        },
    },
    FooterCunnectMenuLi: {
        display: "grid",
        gap: "15px",
        gridTemplateColumns: "40px 1fr",
        alignItems: "center",
    },
    FooterMenuTitleText: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.white,
        lineHeight: "150%",
    },
    FooterMenuUl: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },
    FooterMenuLi: {
        display: "flex",
        gap: "10px",
    },
    FooterMenuText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MWLightGrey,
        transition: "all 0.4s ease-in-out",
        "&:hover": {
            color: commonColor.MGoldPrimary,
            paddingLeft: "10px",
        },
    },
    FooterCunnectIConBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: FONT_SIZE.text20,
        width: "40px",
        height: "40px",
        background: "",
        background: "#14201C",
        borderRadius: "50%",
        color: commonColor.MGoldPrimary,
    },
    FooterMenuNewsBox: {
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "25%",
            lg: "25%",
            xl: "25%",
        },
    },

    FooterNewsLetterForm: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px !important",
            border: "none !important",
            "& fieldset": {
                border: "none !important",
            },

            "&:hover fieldset": {
                border: "none !important",
            },
            "&.Mui-focused fieldset": {
                border: "none !important",
            },
            "&.Mui-focused": {
                border: "none !important",
            },

        },
        "& .MuiInputBase-input": {
            padding: "0px 20px",
            minHeight: "54px",
            backgroundColor: commonColor.MWNewsletterinput,
            color: commonColor.MWLightGrey,
            fontSize: FONT_SIZE.text18,
            width: "100%",
            border: "none !important",
            borderRadius: "50px",
            "&::placeholder": {
                color: commonColor.MWLightGrey,
                fontSize: FONT_SIZE.text18,
                fontWeight: FONT_WEIGHT.MEDIUM,
                opacity: 1,
            },
        },

        "& .MuiButton-contained": {
            background: commonColor.MGoldPrimary,
            color: commonColor.MWhiteBg,
            fontSize: {
                xs: FONT_SIZE.text18,
                sm: FONT_SIZE.text18,
                md: FONT_SIZE.text20,
                lg: FONT_SIZE.text20,
                xl: FONT_SIZE.text20,
            },
            fontWeight: FONT_WEIGHT.MEDIUM,
            lineHeight: "130%",
            border: "2px solid #FFD993",
            boxShadow: " 0 7px 24px rgba(206, 149, 45, 0.42) !important",
            padding: "14px 35px",
            borderRadius: "50px",
            "&:hover": {
                background: commonColor.Trans,
                color: commonColor.MGoldPrimary,
                border: `2px solid ${commonColor.MGoldPrimary}`,
            },
        },
    },




};
