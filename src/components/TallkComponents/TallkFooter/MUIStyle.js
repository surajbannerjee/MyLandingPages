import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { TALLKCTABGFTR, TALLKFOOTERBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    TallkFooter: {
        background: `url(${TALLKFOOTERBG})`,
        backgroundSize: {
            xs: "cover",
            sm: "cover",
            md: "cover",
            lg: "100% 100%",
            xl: "100% 100%",
        },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: {
            xs: "50px 0 30px",
            sm: "50px 0 30px",
            md: "50px 0 30px",
            lg: "500px 0 50px",
            xl: "500px 0 50px",
        },
    },

    TallkFooterCTASEC: {
        marginTop: {
            xs: "0px",
            sm: "0px",
            md: "0px",
            lg: "-650px",
            xl: "-650px",

        },
        marginBottom: {
            xs: "50px",
            sm: "50px",
            md: "50px",
            lg: "100px",
            xl: "100px",
        },
        background: `url(${TALLKCTABGFTR})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "64px 36px",
            xl: "64px 36px",
        },
        borderRadius: "20px",
        gap: "70px",
    },
    TallkFooterCTASECLeftContent: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "40%",
            xl: "40%",
        },
    },
    TallkFooterCTASECLeftContentTitle: {
        color: commonColor.talkDarkblue1,
        fontSize: {
            xs: FONT_SIZE.heading36,
            sm: FONT_SIZE.heading36,
            md: FONT_SIZE.heading42,
            lg: FONT_SIZE.heading42,
            xl: FONT_SIZE.heading42,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },
    textLogo: {
        width: "85px",
    },
    TallkFooterCTASECLeftContentText: {
        color: commonColor.talkDarkblue1,
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.REGULAR,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },
    TallkFooterCTASECSubscribeArea: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        },
    },
    TallkFooterCTASECSubscribeAreaTitle: {
        color: commonColor.talkDarkblue1,
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.REGULAR,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },
    TallkFooterCTASECSubscribeAreaInputBox: {
        display: "flex",
        alignItems: "stretch",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",

        },
        background: commonColor.white,
        padding: "6px",
        borderRadius: "12px",
    },
    TallkFooterCTASECSubscribeAreaInput: {
        background: commonColor.Trans,
        flex: "5",
        border: "none",
        color: commonColor.talkDarkblue1,
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.REGULAR,
        "& .MuiOutlinedInput-root": {
            padding: "0px",
            "& fieldset": {
                border: 'none',

            },
            "&:hover fieldset": {
                border: 'none',
            },
            "&.Mui-focused fieldset": {
                border: 'none',
            },
        },
        "&::placeholder": {
            color: commonColor.talkDarkblue1,
            fontSize: FONT_SIZE.text16,
            fontWeight: FONT_WEIGHT.REGULAR,
            opecity: "1 !important",
        },

    },
    TallkFooterCTASECSubscribeAreaButton: {
        flex: "2",
        background: commonColor.tallkBlue,
        color: commonColor.white,
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.MEDIUM,
        borderRadius: "10px",
        padding: "10px 20px",
        "&:hover": {
            background: commonColor.PrimaryColor,
        },
    },
    TallkFooterInnerRow: {
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "64px 36px",
            xl: "64px 36px",
        },
        gap: {
            xs: "50px",
            sm: "50px",
            md: "50px",
            lg: "20px",
            xl: "20px",
        },
        borderRadius: "10px",
    },

    FooterLogoBox: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },

        width: {
            xs: "100%",
            sm: "100%",
            md: "20%",
            lg: "20%",
            xl: "20%",
        },
    },
    FooterMenuBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        gap: "20px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "20%",
            lg: "20%",
            xl: "20%",
        },
    },
    FooterMenuUl: {
        display: "flex",
        flexDirection: "column",
        gap: {
            xs: "10px",
            sm: "10px",
            md: "10px",
            lg: "20px",
            xl: "20px",
        },
    },
    FooterSocialLinksBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        gap: "20px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "15%",
            lg: "15%",
            xl: "15%",
        },
    },
    FooterSocialLinkBox: {
        display: "flex",
        gap: "20px",
    },
    FooterSocialLink: {
        color: commonColor.white,
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.REGULAR,
        height: "42px",
        width: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: '#1A1C39',
        transition: "all 0.5s",
        "&:hover": {
            background: commonColor.Secondarycolor,
        },
    },
    FooterMenuText: {
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
        color: commonColor.white,
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.REGULAR,
        borderLeft: `0px solid ${commonColor.Secondarycolor}`,
        paddingLeft: "0px",

        transition: "all 0.3s ease-in-out",
        "&:hover": {
            paddingLeft: "10px",
            borderLeft: `4px solid ${commonColor.Secondarycolor}`,
            color: commonColor.Secondarycolor,
        },
    },
    FooterLogoText: {
        color: commonColor.white,
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.REGULAR,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },
    FooterMenuTitleText: {
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        fontWeight: FONT_WEIGHT.BOLD,
    },
    FooterSocialLinksText: {
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        fontWeight: FONT_WEIGHT.REGULAR,
    },
    FooterMenuLi: {
        padding: "5px 0",
    },
    logoImage: {
        width: {
            xs: "100px",
            sm: "100px",
            md: "105px",
            lg: "105px",
            xl: "105px",
        },
    },
    FooterCopyrightBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "50px 0",
    },
    FooterCopyrightText: {
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.text14,
            sm: FONT_SIZE.text14,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text16,
            xl: FONT_SIZE.text16,
        },
        fontWeight: FONT_WEIGHT.LIGHT,
        textAlign: "center",
    },
};