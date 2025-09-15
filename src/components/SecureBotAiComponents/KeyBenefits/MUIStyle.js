import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { KEYBG, KEYBG2, ROUNDBTN, SUBTRACT } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    OurServiceMain: {
        background: `url(${KEYBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: "86px 0",
    },
    OurServiceRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "80px",
            xl: "80px",
        },
        padding: "0",
        marginBottom: "80px",
    },
    OurServiceTopBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        padding: "0",
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "60%",
            xl: "60%",
        },
    },
    OurServiceHeading: {
        fontSize: FONT_SIZE.heading36,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.black,
        lineHeight: "140%",
        textAlign: "center",

    },

    BenefitsRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
        },
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "80px",
            xl: "80px",
        },
        padding: "0",
        zIndex: "1",
        "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            height: "60%",
            background: `url(${KEYBG2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: "-1",
            display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
            },
        },
    },
    BenefitsBox: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        width: "380px",
        minHeight: "300px",
        justifyContent: "space-between",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat !important",
        position: "relative",
    },
    ImgBtn: {
        position: "absolute",
        width: "86px",
        height: "86px",
        borderRadius: "50%",
        backgroundSize: "contain !important",
        backgroundPosition: "center !important",
        background: `url(${ROUNDBTN})`,
        backgroundRepeat: "no-repeat !important",
    },
    BenefitsBoxRow: {
        display: "flex",
        flexDirection: "column",
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "30px",
            xl: "30px",
        },
        padding: "0",
    },
    BenefitsHeading: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.black,
        lineHeight: "140%",
    },
    BenefitsText: {
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "140%",
    },
    BenefitsBoxIcon: {
        width: "80px",
        height: "80px",
        objectFit: "cover",
    },





















};
