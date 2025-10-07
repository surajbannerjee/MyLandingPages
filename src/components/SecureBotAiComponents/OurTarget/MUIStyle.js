import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { OURSERVICEBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    OurServiceMain: {
        overflowX: "hidden",
        background: `url(${OURSERVICEBG})`,
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
            lg: "45%",
            xl: "45%",
        },
    },
    OurServiceHeading: {
        fontSize: FONT_SIZE.heading36,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.white,
        lineHeight: "140%",
        textAlign: "center",
    },
    OurTargetRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "64px",
            xl: "64px",
        },
    },
    OurTargetBox: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
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
            md: "74px",
            lg: "74px",
            xl: "74px",
        },
        padding: {
            xs: "20px",
            sm: "20px",
            md: "30px 0px",
            lg: "30px 0px",
            xl: "30px 0px",
        },
        borderBottom: `1px solid ${commonColor.borderColor1}`,
        "&:last-child": {
            borderBottom: "none",
        },
    },

    OurTargetImgBox: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "416px",
            xl: "416px",
        },
        height: {
            xs: "240px",
            sm: "240px",
            md: "260px",
            lg: "260px",
            xl: "260px",
        },
        flex: "2.5",
        borderRadius: "10px",
        overflow: "hidden",
    },
    OurTargetImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    OurTargetContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "20px",
        flex: "5",
        paddingRight: {
            xs: "0",
            sm: "0",
            md: "100px",
            lg: "130px",
            xl: "130px",
        },

    },
    OurTargetHeading: {
        fontSize: FONT_SIZE.heading36,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.white,
        lineHeight: "140%",
    },
    OurTargetText: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text18,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.white,
        lineHeight: "160%",
    },






















};
