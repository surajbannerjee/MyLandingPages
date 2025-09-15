import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { MWBANNERBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    BannerMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${MWBANNERBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: {
            xs: "50px 0 50px",
            sm: "50px 0 50px",
            md: "86px 0 43px",
            lg: "86px 0 43px",
            xl: "86px 0 43px",
        },
        marginTop: {
            xs: "194px",
            sm: "194px",
            md: "195px",
            lg: "170px",
            xl: "170px",
        },
    },
    BannerRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
        },
        gap: "20px",
        padding: "0",
        position: "relative",
    },
    BannerContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "53%",
            xl: "53%",
        },

    },
    BannerContentInner: {
        display: "flex",
        justifyContent: "center",
        alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
        },
        flexDirection: "column",
        gap: "30px",
    },
    BannerHeading: {
        fontSize: {
            xs: FONT_SIZE.heading36,
            sm: FONT_SIZE.heading36,
            md: FONT_SIZE.heading48,
            lg: FONT_SIZE.heading72,
            xl: FONT_SIZE.heading72,
        },
        textAlign: 'center',
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MSecondary,
        fontFamily: FONT_FAMILY.Playfair,
        lineHeight: "130%",

    },
    BannerText: {
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        color: commonColor.MMediumGrey,
        fontWeight: FONT_WEIGHT.REGULAR,
        padding: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "0 50px",
            xl: "0 50px",
        },
        marginBottom: "38px",
        lineHeight: "120%",
        textAlign: 'center',
    },


    bannerBtnGroups: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        position: "relative",
    },
    BtnWaveImg: {
        position: "absolute",
        top: "-50px",
        left: {
            xs: "-5%",
            sm: "-5%",
            md: "-5%",
            lg: "-50%",
            xl: "-50%",
        },
        zIndex: "1",
        width: {
            xs: "50px",
            sm: "50px",
            md: "70px",
            lg: "100px",
            xl: "100px",
        },
        height: {
            xs: "50px",
            sm: "50px",
            md: "70px",
            lg: "100px",
            xl: "100px",
        },
        objectFit: "contain",
    },
    primaryBtn: {
        background: commonColor.MGoldPrimary,
        color: commonColor.MWhiteBg,
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        border: "2px solid #FFD993",
        boxShadow: " 0 7px 24px rgba(206, 149, 45, 0.42) !important",
        padding: "10px 20px",
        borderRadius: "30px",
        "&:hover": {
            background: commonColor.Trans,
            color: commonColor.MGoldPrimary,
            border: `2px solid ${commonColor.MGoldPrimary}`,
        },
    },
    secondaryBtn: {
        background: commonColor.Trans,
        color: commonColor.MGoldPrimary,
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        boxShadow: "none !important",
        padding: "10px 20px",
        borderRadius: "30px",
        borderColor: `${commonColor.MGoldPrimary} !important`,
        "&:hover": {
            background: commonColor.MGoldPrimary,
            color: commonColor.MWhiteBg,
            boxShadow: " 0 7px 24px rgba(206, 149, 45, 0.42) !important",
        },
    },

    SliderArea: {
        marginTop: "64px",
        display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
        }
    },
    SliderAreaMob: {
        marginTop: "64px",
        display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
        }
    },
    BannerSlider: {
        borderRadius: "20px",
        overflow: "hidden",
        height: "100%",
        padding: {
            xs: "0 10px",
            sm: "0 10px",
            md: "0 10px",
            lg: "0",
            xl: "0",
        },
    },

    BannerSliderImg: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "256px",
            xl: "256px",
        },
        height: "340px",
        objectFit: "cover",
        borderRadius: "20px",
    },
    SliderArrowBtns: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
    },
    SliderArrowBtnLeft: {
        width: "50px",
        height: "50px",
        background: commonColor.Trans,
        border: `2px solid ${commonColor.MGoldPrimary}`,
        color: commonColor.MGoldPrimary,
        borderRadius: "50%",
        fontSize: FONT_SIZE.text22,
        cursor: "pointer",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },











};
