import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { ABOUTSEC } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    AboutSecMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${ABOUTSEC})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: "114px 0 45px",
    },
    AboutSecRow: {
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
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "48px",
            xl: "48px",

        },
        padding: "0",
    },
    AboutSecRow1: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "Flex-start",
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
            lg: "48px",
            xl: "48px",

        },
        padding: "0",
        marginTop: "68px",
    },
    AboutSecContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
        },
        paddingTop: {
            xs: "10px",
            sm: "10px",
            md: "10px",
            lg: "120px",
            xl: "120px",
        },


    },

    AboutSecContentInner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "30px",
        paddingRight: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "110px",
            xl: "110px",
        },
    },
    AboutSecContentInner1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "30px",
        // paddingRight: {
        //     xs: "0",
        //     sm: "0",
        //     md: "0",
        //     lg: "110px",
        //     xl: "110px",
        // },
    },
    AboutSecHeading: {
        fontSize: {
            xs: FONT_SIZE.heading28,
            sm: FONT_SIZE.heading28,
            md: FONT_SIZE.heading28,
            lg: FONT_SIZE.heading36,
            xl: FONT_SIZE.heading36,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.black,
        lineHeight: "120%",
    },
    AboutSecText: {
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.text,
        lineHeight: "136%",
        marginBottom: {
            xs: "0px",
            sm: "0px",
            md: "0px",
            lg: "20px",
            xl: "20px",
        },
    },
    AboutSecImage: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        },
        "& img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",
        },
    },

    MissionUlList: {
        marginTop: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "48px",
            xl: "48px",
        },

    },
    MissionLi: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "20px",
        gap: "10px",
    },
    number: {
        fontSize: FONT_SIZE.heading28,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.PrimaryColor,
    },
    MissionCont: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    MissionTitle: {
        fontSize: FONT_SIZE.heading28,
        fontWeight: FONT_WEIGHT.MEDIUM,
    },
    MissionText: {
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.text,
        lineHeight: "136%",
    },



















};
