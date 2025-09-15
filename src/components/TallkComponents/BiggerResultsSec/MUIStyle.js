import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BIGGERRESULTBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    AboutSecMain: {
        background: `url(${BIGGERRESULTBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: "86px 0",
    },
    AboutSecRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
            lg: "20px",
            xl: "20px",

        },
        padding: "0",
    },
    AboutSecContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
        },
    },

    AboutSecContentInner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "30px",
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
        color: commonColor.tallkDarkBlue,
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "80%",
            xl: "80%",
        },
        lineHeight: "130%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },
    AboutSecText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "150%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
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

    ResultBoxRow: {
        display: "flex",
        justifyContent: "Flex-start",
        alignItems: "center",
        gap: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "60px",
            xl: "60px",
        },
    },
    ResultBox: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    ResultBoxHeading: {
        fontSize: {
            xs: FONT_SIZE.heading28,
            sm: FONT_SIZE.heading28,
            md: FONT_SIZE.heading28,
            lg: FONT_SIZE.heading48,
            xl: FONT_SIZE.heading48,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkBlue,
        lineHeight: "130%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },
    ResultBoxText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "150%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },

};
