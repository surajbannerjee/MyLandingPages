import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { APARTBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    WhatSetsUsApartMain: {
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${APARTBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: "86px 0",
    },
    WhatSetsUsApartRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "48px",
            xl: "48px",
        },
        padding: "0",
    },
    WhatSetsUsApartTopBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "0",
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "60%",
            xl: "60%",
        },
    },
    WhatSetsUsApartHeading: {
        fontSize: FONT_SIZE.heading36,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.black,
        lineHeight: "140%",
        textAlign: "center",
    },
    WhatSetsUsApartCardRow: {
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
    WhatSetsUsApartCard: {
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
    WhatSetsUsApartCardImg: {
        width: "70px",
        height: "70px",
    },
    WhatSetsUsApartCardContent: {
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
    WhatSetsUsApartCardHeading: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.black,
        lineHeight: "140%",
    },
    WhatSetsUsApartCardText: {
        fontSize: FONT_SIZE.text16,
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.text,
        lineHeight: "160%",
    },




















};
