import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { REVIEWBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    TestimonialSliderBox: {
        padding: "50px 0px",
    },
    TestimonialSliderOuter: {
        display: "flex",
        alignItems: {
            xs: "center",
            sm: "center",
            md: "stretch",
            lg: "stretch",
            xl: "stretch",
        },
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        justifyContent: "center",
        padding: {
            xs: "30px 20px",
            sm: "30px 20px",
            md: "30px 20px",
            lg: "60px 36px 36px 36px",
            xl: "72px 46px 46px 46px",
        },
        borderRadius: "20px",
        gap: "20px",
        background: `url(${REVIEWBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: "0px 20px",
        minHeight: "400px",
        border: `1px solid ${commonColor.HTCBDR}`
    },
    TestimonialSliderImgBox: {
        width: "130px",
        height: "120px",
        overflow: "hidden",
        borderRadius: "12px",
    },
    TestimonialSliderImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

    TestimonialSliderContent: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "calc(100% - 130px)",
            lg: "calc(100% - 130px)",
            xl: "calc(100% - 130px)",
        },
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
        paddingLeft: {
            xs: "0",
            sm: "0",
            md: "20px",
            lg: "20px",
            xl: "20px",
        },
    },
    Starts: {
        display: "flex",
        gap: "5px",
        justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
        },

    },
    TestimonialContent: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.HCTText,
        fontStyle: "italic",
    },
    TestimonialClientName: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.HCTRed,
    },
    PrevArrow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: commonColor.Trans,
        border: `2px solid ${commonColor.HCTGreen}`,
        "& img": {
            height: "30px",
            width: "30px",
            objectFit: "contain",
        },
    },
    NextArrow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: commonColor.Trans,
        border: `2px solid ${commonColor.HCTGreen}`,
        "& img": {
            height: "30px",
            width: "30px",
            objectFit: "contain",
        },
    },

};
