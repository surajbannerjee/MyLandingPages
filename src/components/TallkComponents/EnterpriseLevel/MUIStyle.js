import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { ENTERPRISEGB } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    AboutSecMain: {
        background: `url(${ENTERPRISEGB})`,
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
        lineHeight: "130%",
    },
    AboutSecText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "150%",
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

    EnterpriseLi: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "20px",
        padding: "20px 0",
        marginRight: {
            xs: "0px",
            sm: "0px",
            md: "0px",
            lg: "120px",
            xl: "120px",
        },
        borderBottom: "1px solid #D8E2EA",
        "&:last-child": {
            borderBottom: "none",
        },
    },
    EnterpriseContent: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "10px",
    },
    EnterpriseLiTitle: {
        fontSize: FONT_SIZE.text20,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkDarkBlue,
        lineHeight: "130%",
    },
    EnterpriseLiDesc: {
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.text,
        lineHeight: "136%",
    },
    EnterpriseImg: {
        height: "30px",
        width: "30px",
        objectFit: "cover",

    },


};
