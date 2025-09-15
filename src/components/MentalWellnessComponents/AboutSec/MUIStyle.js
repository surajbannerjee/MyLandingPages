import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { MWABOUTSEC } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    AboutSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${MWABOUTSEC})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: {
            xs: "50px 0",
            sm: "50px 0",
            md: "100px 0",
            lg: "100px 0",
            xl: "100px 0",
        },
    },
    Row: {
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: {
            xs: "20px",
            sm: "20px",
            md: "90px",
            lg: "90px",
            xl: "90px",
        }
    },
    AboutImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        },
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
        },
    },
    AboutMentalHealthContent: {
        position: "absolute",
        bottom: {
            xs: "5px",
            sm: "5px",
            md: "5px",
            lg: "-5%",
            xl: "-5%",
        },
        right: {
            xs: "50%",
            sm: "50%",
            md: "50%",
            lg: "-5%",
            xl: "-5%",
        },
        transform: {
            xs: "translate(50%,0)",
            sm: "translate(50%,0)",
            md: "translate(50%,0)",
            lg: "translate(0,0)",
            xl: "translate(0,0)",
        },
        display: "flex",
        alignItems: "center",
        gap: {
            xs: "10px",
            sm: "10px",
            md: "20px",
            lg: "20px",
            xl: "20px",
        },
        width: {
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "70%",
            xl: "70%",
        },
        background: '#FDF4DA',
        border: "2px solid #D7AE64",
        padding: "22px",
        borderRadius: "20px",
        "& img": {
            flex: 1,
            width: {
                xs: "80px",
                sm: "80px",
                md: "100px",
                lg: "100px",
                xl: "100px",
            },
            height: "100px",
            objectFit: "contain",
            marginRight: {
                xs: "0px",
                sm: "0px",
                md: "20px",
                lg: "20px",
                xl: "20px",
            },
        },
    },

    AboutMentalHealthTextBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "Flex-start",

    },
    AboutMentalHealthTitle: {
        fontSize: {
            xs: FONT_SIZE.text18,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.black,
        marginBottom: "20px",

    },
    AboutMentalHealthBtn: {
        background: commonColor.MGoldPrimary,
        color: commonColor.MWhiteBg,
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },

        lineHeight: "1.3",
        fontWeight: FONT_WEIGHT.MEDIUM,
        border: "2px solid #FFD993",
        boxShadow: " 0 7px 24px rgba(206, 149, 45, 0.42) !important",
        padding: "10px 22px",
        borderRadius: "30px",
        "&:hover": {
            background: commonColor.Trans,
            color: commonColor.MGoldPrimary,
            border: `2px solid ${commonColor.MGoldPrimary}`,
        },
    },

    AboutContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        },
    },
    AboutContentBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",

        },
        alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",
        },
        width: "100%",

    },
    AboutTitle: {
        fontSize: {
            xs: FONT_SIZE.text22,
            sm: FONT_SIZE.text22,
            md: FONT_SIZE.text22,
            lg: FONT_SIZE.heading28,
            xl: FONT_SIZE.heading28,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MGoldPrimary,
        marginBottom: {
            xs: "10px",
            sm: "10px",
            md: "30px",
            lg: "30px",
            xl: "30px",
        },
        lineHeight: "120%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },
    AboutDesc: {
        fontFamily: FONT_FAMILY,
        fontSize: {
            xs: FONT_SIZE.heading28,
            sm: FONT_SIZE.heading28,
            md: FONT_SIZE.heading28,
            lg: FONT_SIZE.heading32,
            xl: FONT_SIZE.heading32,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MSecondary,
        marginBottom: "40px",
        lineHeight: "120%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },

    },
    AboutMissionBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",

        },
        alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",
        },
        width: "100%",
        paddingBottom: "32px",
        "&:last-child": {
            paddingBottom: "36px",
            borderBottom: `1px solid ${commonColor.MMediumGrey}`,
        }

    },
    AboutMissionTitle: {
        fontSize: {
            xs: FONT_SIZE.text22,
            sm: FONT_SIZE.text22,
            md: FONT_SIZE.text22,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.MSecondary,
        marginBottom: "15px",
        lineHeight: "120%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },
    AboutMissionDesc: {
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.MMediumGrey,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },
    AboutInfoBox: {
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",

        },
        justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
            xl: "space-between",
        },
        gap: {
            xs: "20px",
            sm: "20px",
            md: "0",
            lg: "0",
            xl: "0",
        },
        alignItems: 'center',
        width: "100%",
        paddingTop: "30px",
    },
    AboutInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",

        },
        alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",
        },
        maxWidth: "50%",
    },
    SignatureImg: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "70%",
            lg: "70%",
            xl: "70%",
        },
        height: {
            xs: "42px",
            sm: "42px",
            md: "42px",
            lg: "70px",
            xl: "70px",
        },
        objectFit: "contain",
    },
    AboutInfoTitle: {
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.MSecondary,
        lineHeight: "120%",
        "& span": {
            color: commonColor.MMediumGrey,
            fontSize: FONT_SIZE.text20,
            fontWeight: FONT_WEIGHT.MEDIUM,
        },
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },

    AboutSocialIcons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        padding: 0,
        gap: "15px",
        maxWidth: "50%",
    },
    SocialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
            xs: "40px",
            sm: "40px",
            md: "50px",
            lg: "50px",
            xl: "50px",

        },
        height: {
            xs: "40px",
            sm: "40px",
            md: "50px",
            lg: "50px",
            xl: "50px",

        },
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,

        },
        background: commonColor.MDark,
        borderRadius: "50%",
        cursor: "pointer",
        color: commonColor.MGoldPrimary,
    },
    AboutMentalHealthContentBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    AboutMentalHealthDesc: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.black,
        marginBottom: "20px",
    },
    AboutDivider: {
        background: commonColor.MMediumGrey,
        width: "2px",
        height: "100%",
        margin: "0 30px",
        borderRadius: "10px",
        display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
        },
    }










};
