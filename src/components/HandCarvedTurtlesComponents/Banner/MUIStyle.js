import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNERBG, BANNERBGTEST, STAR1, STAR2 } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    BannerMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: commonColor.HCTLightpink,
        width: "100%",
        padding: {
            xs: "250px 0 86px",
            sm: "250px 0 86px",
            md: "250px 0 86px",
            lg: "200px 0 86px",
            xl: "200px 0 86px",
        },
        position: "relative",
        "&::before": {
            content: "''",
            position: "absolute",
            top: "30%",
            right: "27%",
            width: "45px",
            height: "45px",
            background: `url(${STAR1}) no-repeat center center`,
            backgroundSize: "cover",
            zIndex: "1",
        },
        "&::after": {
            content: "''",
            position: "absolute",
            right: "9%",
            bottom: "30%",
            width: "38px",
            height: "38px",
            background: `url(${STAR2}) no-repeat center center`,
            backgroundSize: "cover",
            zIndex: "1",
        },

    },
    BannerRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
        },
        gap: "70px",
        padding: "0",
        position: "relative",
    },
    BannerContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "55%",
            xl: "55%",
        },

    },
    BannerContentInner: {
        paddingTop: {
            xs: "50px",
            sm: "50px",
            md: "0",
            lg: "0px",
            xl: "0px",
        },
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
    BannerHeading: {
        fontSize: {
            xs: FONT_SIZE.heading36,
            sm: FONT_SIZE.heading36,
            md: FONT_SIZE.heading36,
            lg: FONT_SIZE.heading46,
            xl: FONT_SIZE.heading46,
        },
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "140%",
        "& span": {
            padding: "0px 10px",
            fontSize: {
                xs: FONT_SIZE.heading36,
                sm: FONT_SIZE.heading36,
                md: FONT_SIZE.heading36,
                lg: FONT_SIZE.heading40,
                xl: FONT_SIZE.heading40,
            },
            fontWeight: "700",
        },
    },
    BannerText: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "70%",
            xl: "70%",
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
        marginBottom: "20px",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },

    BannerSlider: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "45%",
            xl: "45%",
        },
    },
    BtnRow: {
        display: "flex",
        flexFlow: "wrap",
        justifyContent: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },
        alignItems: "center",
        gap: "30px",
        marginTop: "20px",
        width: "100%",
    },
    BannerDivider: {
        width: {
            xs: "100px",
            sm: "200px",
            md: "200px",
            lg: "200px",
            xl: "200px",
        },
        height: "1.5px",
        background: commonColor.HCTGreen,
        position: "relative",
        "&::before": {
            content: "''",
            position: "absolute",
            width: "7px",
            height: "7px",
            background: commonColor.HCTGreen,
            top: "-3px",
            right: "0",
            borderRadius: "50%",
            zIndex: "1",
        },
    },
    BannerSocialIcons: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "20px",
        marginTop: "48px",
    },
    BannerSocialIcon: {
        background: commonColor.HCTGreen,
        color: commonColor.white,
        fontSize: FONT_SIZE.heading28,
        padding: "10px",
        borderRadius: "50%",
        "&:hover": {
            background: commonColor.HCTGreen,
        },
    },

















};
