import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { TALLKCTABG, TALLKCTABGMOB } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    CTASecMain: {
        width: "100%",
        padding: {
            xs: "60px 0",
            sm: "60px 0",
            md: "60px 0",
            lg: "220px 0 0",
            xl: "220px 0 0",
        },
    },
    CTASecRow: {
        minHeight: {
            xs: "820px",
            sm: "820px",
            md: "800px",
            lg: "500px",
            xl: "500px",
        },
        background: {
            xs: `url(${TALLKCTABGMOB})`,
            sm: `url(${TALLKCTABGMOB})`,
            md: `url(${TALLKCTABGMOB})`,
            lg: `url(${TALLKCTABG})`,
            xl: `url(${TALLKCTABG}) `,
        },
        backgroundSize: {
            xs: "cover",
            sm: "cover",
            md: "cover",
            lg: "contain",
            xl: "contain",
        },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat !important",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row-reverse",
            xl: "row-reverse",
        },
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "20px",
            xl: "20px",
        },
        padding: {
            xs: "40px 20px 20px 20px",
            sm: "40px 40px 20px 40px",
            md: "40px",
            lg: "60px",
            xl: "60px",

        },
        position: "relative",
    },

    CTASecImage: {
        position: "absolute",
        left: {
            xs: "0",
            sm: "0",
            md: "10%",
            lg: "10%",
            xl: "10%",
        },
        top: {
            xs: "auto",
            sm: "auto",
            md: "auto",
            lg: "-28%",
            xl: "-28%",
        },
        bottom: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "auto",
            xl: "auto",
        },
        width: {
            xs: "95%",
            sm: "70%",
            md: "50%",
            lg: "623px",
            xl: "623px",
        },
        height: 'auto',
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },
    CTASecContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "40%",
            xl: "40%",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "30px",

    },
    CTASecHeading: {
        fontSize: {
            xs: FONT_SIZE.heading28,
            sm: FONT_SIZE.heading28,
            md: FONT_SIZE.heading36,
            lg: FONT_SIZE.heading36,
            xl: FONT_SIZE.heading36,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.white,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",

        }
    },
    CTASecText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.white,
        lineHeight: "150%",
        textAlign: {
            xs: "center",
            sm: "left",
            md: "left",
            lg: "left",
            xl: "left",
        }
    },
    CustomTallkBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        background: commonColor.white,
        color: commonColor.tallkBlue,
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "150%",
        padding: "15px 32px",
        borderRadius: "10px",
        boxShadow: "none !important",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            background: commonColor.white,
            scale: "1.03",
        },
    },

};
