import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { FOOTERBG, CTASec } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";

export const MUIStyle = {
    FooterMain: {
        padding: {
            xs: "40px 0",
            sm: "40px 0",
            md: "40px 0",
            lg: "60px 0 20px",
            xl: "60px 0 20px",
        },
        background: `url(${FOOTERBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    FooterInnerBoxRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        gap: "20px",
        paddingBottom: "30px",
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
        flexWrap: "wrap",
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
        background: commonColor.socialBg,
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
            xs: "230px",
            sm: "230px",
            md: "250px",
            lg: "322px",
            xl: "322px",
        },
    },
    FooterCopyrightBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        paddingTop: "20px",
        borderTop: "1px solid",
        borderColor: "#ffffff40",
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
