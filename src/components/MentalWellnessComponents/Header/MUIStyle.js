import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    TopBar: {
        background: commonColor.MRed,
        width: "100%",
        padding: "22px 0",
    },
    TopBarInner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    TopBarText: {
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.text14,
            sm: FONT_SIZE.text14,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        lineHeight: "130%",
        textAlign: "center",
        fontWeight: FONT_WEIGHT.REGULAR,
        "& span": {
            color: commonColor.white,
            marginLeft: {
                xs: "0px",
                sm: "0px",
                md: "0px",
                lg: "30px",
                xl: "30px",
            },
            marginTop: {
                xs: "20px",
                sm: "0px",
                md: "0px",
                lg: "0px",
                xl: "0px",
            },

            position: "relative",
            "&:before": {
                display: {
                    xs: "block",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                },
                content: '""',
                position: "absolute",
                top: {
                    xs: "-10px",
                    sm: "-10px",
                    md: "-10px",
                    lg: "50%",
                    xl: "50%",
                },
                left: {
                    xs: "0",
                    sm: "0",
                    md: "0",
                    lg: "-15px",
                    xl: "-15px",
                },
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "2px",
                    xl: "2px",
                },
                height: {
                    xs: "1px",
                    sm: "1px",
                    md: "1px",
                    lg: "15px",
                    xl: "15px",
                },
                background: commonColor.white,
                transform: "translateY(-50%)",
            },
        },
    },

    HeaderMain: {
        background: commonColor.MWhiteBg,
        width: "100%",
        top: "0",
        left: "0",
        borderBottom: "1px solid",
        borderColor: commonColor.MGoldFade,
        zIndex: "999",
    },

    HeaderInner: {
        display: "flex",
        justifyContent: "space-between",
        // flexDirection: {
        //     xs: "column",
        //     sm: "row",
        // },
        alignItems: "center",
        width: "100%",
        padding: "15px 0",
        gap: {
            xs: "10px",
            sm: "20px",
        }
    },
    HeaderNavBox: {

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        flexDirection: {
            xs: "column",
            sm: "row",
        },
    },
    HeaderLogoBox: {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    logoImage: {
        width: {
            xs: "150px",
            sm: "180px",
            md: "180px",
            lg: "180px",
            xl: "180px",
        },
    },

    MAinMenuBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: {
            xs: 'stretch',
            sm: 'stretch',
            md: 'stretch',
            lg: 'center',
            xl: 'center',
        },
        gap: {
            xs: '10px',
            sm: '20px',
            md: '50px',
            lg: '50px',
            xl: '80px',
        },
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
    },

    HeaderMenuBox: {
        position: {
            xs: "fixed",
            sm: "fixed",
            lg: "relative",
        },
        transition: "all 0.5s",
        background: commonColor.Trans,
        top: "0",
        width: "100%",
        height: {
            xs: "100vh",
            sm: "100vh",
            lg: "auto",
        },
        padding: {
            xs: "0px",
            sm: "0px",
        },
        zIndex: "999",
        "&:after": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgb(0 0 0 / 86%)",
            zIndex: "-1",
            display: {
                xs: "block",
                sm: "block",
                lg: "none",
            },

        }

    },
    HeadermobInner: {
        width: {
            xs: "87%",
            sm: "60%",
            lg: "auto",
        },
        background: {
            xs: commonColor.MSecondary,
            sm: commonColor.MSecondary,
            lg: commonColor.Trans,
            xl: commonColor.Trans,
        },
        height: "100%",
        marginLeft: {
            xs: "auto",
            sm: "auto",
            lg: "20px",
        },
    },

    menuCloseBtn: {
        height: "40px",
        width: "40px",
        display: {
            xs: "flex",
            sm: "flex",
            lg: "none",
        },
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        color: commonColor.MGoldPrimary,
        background: commonColor.MSecondary,
        position: "absolute",
        top: "10px",
        left: {
            xs: "10px",
            sm: "34%",
            lg: "auto",
        },
        borderRadius: "50% 50% 0% 50%",
        border: "2px solid",
        borderColor: commonColor.MGoldPrimary,
    },

    HeaderMobLogoBox: {
        padding: "20px",
        display: {
            xs: "flex",
            sm: "flex",
            lg: "none",
        },
    },
    menuBtn: {
        display: {
            xs: "flex",
            sm: "flex",
            lg: "none",
        },
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "30px",
        color: commonColor.MSecondary,
    },
    LogoImgMob: {
        width: {
            xs: "200px",

        },
    },
    HEaderMenu: {
        display: "flex",
        justifyContent: "center",
        flexDirection: {
            xs: "column",
            sm: "column",
            lg: "row",
        },
        alignItems: {
            xs: "start",
            sm: "start",
            lg: "center",

        },
        gap: {
            xs: "10px",
            sm: "20px",
            lg: "20px",
        },
        listStyle: "none",
        padding: 0,
        margin: 0,
        background: commonColor.Trans,
    },
    HEaderMenuLi: {
        display: {
            xs: "block",
            sm: "block",
            lg: "inline-block",
        },
        padding: "0",
        width: {
            xs: "100%",
            sm: "auto",
        },
    },
    HeaderMenuBtn: {
        color: {
            xs: commonColor.white,
            sm: commonColor.white,
            lg: commonColor.MSecondary,
            xl: commonColor.MSecondary,
        },
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.BOLD,
        cursor: "pointer",
        padding: "10px 18px",
        transition: "all 0.3s",
        "&:hover": {
            color: {
                xs: commonColor.MGoldPrimary,
                sm: commonColor.MGoldPrimary,
                lg: commonColor.MGoldPrimary,
            },
        }
    },
    ButtonsGroups: {
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: {
            xs: "20px",
            sm: "20px",
            lg: "0",
        },
    },
    HeaderMobBtnLog: {
        background: commonColor.Trans,
        color: commonColor.MGoldPrimary,
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        boxShadow: "none !important",
        padding: "10px 20px",
        lineHeight: "130%",
        borderRadius: "5px",
        "&:hover": {
            background: commonColor.Trans,
        },
    },
    HeaderMobBtnSign: {
        background: commonColor.MGoldPrimary,
        color: commonColor.white,
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.BOLD,
        boxShadow: "none !important",
        padding: "10px 20px",
        borderRadius: "30px",
        lineHeight: "130%",
        "&:hover": {
            background: commonColor.MGoldPrimary,
        },
    },
};