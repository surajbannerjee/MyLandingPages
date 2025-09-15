import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { OURSERVICEBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    OurServiceMain: {
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
            lg: "60%",
            xl: "60%",
        },
    },
    OurServiceHeading: {
        fontSize: FONT_SIZE.heading36,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.white,
        lineHeight: "140%",
        textAlign: "center",
    },
    OurServiceCardRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
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
            lg: "30px",
            xl: "30px",
        },
        padding: "0",
        width: '100%',
    },
    OurServiceCard: {
        background: commonColor.white,
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        borderRadius: "20px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
        },
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 15%)",
    },
    OurServiceCardImg: {
        width: "70px",
        height: "70px",
    },
    OurServiceCardContent: {
        display: "flex",
        justifyContent: "flex-start",
        minHeight: "150px",
        flexDirection: "column",
        gap: "10px",
        padding: "0",
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
        },
    },
    OurServiceCardHeading: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.black,
        lineHeight: "140%",
    },
    OurServiceCardText: {
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "160%",
    },




















};
