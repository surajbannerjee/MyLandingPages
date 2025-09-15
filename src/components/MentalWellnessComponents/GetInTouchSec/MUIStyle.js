import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { MWGETINTOUCHBG } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    GetInTouchSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: commonColor.MWLightBG,
        width: "100%",
        padding: {
            xs: "50px 0 340px",
            sm: "50px 0 340px",
            md: "86px 0",
            lg: "86px 0",
            xl: "86px 0",
        },
        position: "relative",
        "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: 0,
            width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
            },
            height: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "85%",
                xl: "85%",
            },
            background: `url(${MWGETINTOUCHBG})`,
            backgroundSize: "contain",
            backgroundPosition: {
                xs: "right bottom",
                sm: "right bottom",
                md: "right center",
                lg: "right center",
                xl: "right center",
            },
            backgroundRepeat: "no-repeat",
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
        alignItems: "flex-end",
        gap: {
            xs: "20px",
            sm: "20px",
            md: "90px",
            lg: "90px",
            xl: "90px",
        },
        position: "relative",
    },
    OverlayImg: {
        width: "150px",
        height: "150px",
        ObjectFit: "contain",
        position: "absolute",
        bottom: "0%",
        left: "47%",
        zIndex: "-1",
    },

    CallBox: {
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "315px",
            lg: "315px",
            xl: "315px",
        },
        background: commonColor.white,
        position: {
            xs: "relative",
            sm: "relative",
            md: "absolute",
            lg: "absolute",
            xl: "absolute",
        },
        top: "0%",
        right: {
            xs: "0%",
            sm: "0%",
            md: "0%",
            lg: "16%",
            xl: "16%",
        },
        borderRadius: "20px",
        boxShadow: "0px 20px 30px rgba(186, 177, 170, 0.46)",
        zIndex: 1,
    },
    CallImgBox: {
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: commonColor.MSecondary,
        "& img": {
            width: "30px",
            height: "30px",
            ObjectFit: "contain",
        },
    },
    CallContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    CallTitle: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MMediumGrey,
        marginBottom: "5px",
        lineHeight: "120%",
    },
    CallDesc: {
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.heading28,
            xl: FONT_SIZE.heading28,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MSecondary,
        lineHeight: "115%",
    },

    GetInTouchContent: {
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
        width: {
            xs: "100%",
            sm: "100%",
            md: "40%",
            lg: "40%",
            xl: "40%",
        },
    },
    GetInTouchContentBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",
        },
        marginBottom: "32px",
        alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "Flex-start",
        },
        width: "100%",

    },
    GetInTouchTitle: {
        fontSize: {
            xs: FONT_SIZE.text22,
            sm: FONT_SIZE.text22,
            md: FONT_SIZE.text22,
            lg: FONT_SIZE.heading28,
            xl: FONT_SIZE.heading28,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MGoldPrimary,
        marginBottom: "20px",
        lineHeight: "120%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },
    GetInTouchDesc: {
        fontFamily: FONT_FAMILY,
        fontSize: {
            xs: FONT_SIZE.heading28,
            sm: FONT_SIZE.heading28,
            md: FONT_SIZE.heading28,
            lg: FONT_SIZE.heading40,
            xl: FONT_SIZE.heading40,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.MSecondary,
        lineHeight: "115%",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
        },
    },

    GetInTouchForm: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "16px",
        width: "100%",

        "& .MuiOutlinedInput-root": {
            borderRadius: "10px !important",
            "& fieldset": {
                border: "none",
            },

            "&:hover fieldset": {
                border: "none",
            },
            "&.Mui-focused fieldset": {
                border: "none",
            },
            "&.Mui-focused": {
                border: "none",

            },

        },
        "& .MuiInputBase-input": {
            padding: "0px 15px",
            minHeight: "54px",
            backgroundColor: commonColor.white,
            color: commonColor.MMediumGrey,
            fontSize: FONT_SIZE.text18,
            width: "100%",
            borderRadius: "10px",
            "&::placeholder": {
                color: commonColor.MMediumGrey,
                fontSize: FONT_SIZE.text18,
                fontWeight: FONT_WEIGHT.MEDIUM,
                opacity: 1,
            },
        },

        "& .MuiButton-contained": {
            background: commonColor.MGoldPrimary,
            color: commonColor.MWhiteBg,
            fontSize: {
                xs: FONT_SIZE.text18,
                sm: FONT_SIZE.text18,
                md: FONT_SIZE.text20,
                lg: FONT_SIZE.text20,
                xl: FONT_SIZE.text20,
            },
            fontWeight: FONT_WEIGHT.MEDIUM,
            lineHeight: "150%",
            border: "2px solid #FFD993",
            boxShadow: " 0 7px 24px rgba(206, 149, 45, 0.42) !important",
            padding: "10px 20px",
            borderRadius: "15px",
            "&:hover": {
                background: commonColor.Trans,
                color: commonColor.MGoldPrimary,
                border: `2px solid ${commonColor.MGoldPrimary}`,
            },
        },
    },
    GetInTouchInputBoxRow: {
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        gap: "16px",
        width: "100%",
    },
    GetInTouchSelect: {
        width: "100%",
        "& .MuiSelect-select": {
            padding: "0px 15px",
            minHeight: "54px !important",
            display: "flex",
            alignItems: "center",

            backgroundColor: commonColor.white,
            color: commonColor.MMediumGrey,
            fontSize: FONT_SIZE.text18,
            width: "100%",
            borderRadius: "10px",
            "&::placeholder": {
                color: commonColor.MMediumGrey,
                fontSize: FONT_SIZE.text18,
                fontWeight: FONT_WEIGHT.MEDIUM,
                opacity: 1,
            },
        },

        "& .MuiSelect-root": {
            padding: "0px 15px",
            minHeight: "54px",
            backgroundColor: commonColor.white,
            color: commonColor.MMediumGrey,
            fontSize: FONT_SIZE.text18,
            width: "100%",
            borderRadius: "10px",
            "&::placeholder": {
                color: commonColor.MMediumGrey,
                fontSize: FONT_SIZE.text18,
                opacity: 1,
            },
        },
        "& .MuiSelect-icon": {
            color: commonColor.MMediumGrey,
        },

    },
};
