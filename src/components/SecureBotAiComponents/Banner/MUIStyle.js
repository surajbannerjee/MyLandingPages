import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNERBG, BANNERBGTEST } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    BannerMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${BANNERBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: {
            xs: "300px",
            sm: "400px",
            md: "500px",
            lg: "730px",
            xl: "730px",
        },
        padding: {
            xs: "100px 0 50px",
            sm: "100px 0 50px",
            md: "100px 0 50px",
            lg: "0px 0",
            xl: "0px 0",
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
            lg: FONT_SIZE.heading40,
            xl: FONT_SIZE.heading40,
        },
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.white,
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
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        color: commonColor.white,
        fontWeight: FONT_WEIGHT.REGULAR,
        marginBottom: "20px",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",
        },
    },

    BannerImage: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "56%",
            xl: "56%",
        },
        position: {
            xs: "relative",
            sm: "relative",
            md: "relative",
            lg: "absolute",
            xl: "absolute",
        },
        right: "0",

        "& img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",
        },
    },


















};
