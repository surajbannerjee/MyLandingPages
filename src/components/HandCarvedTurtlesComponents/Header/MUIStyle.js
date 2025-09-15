import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { FOOTERBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    HeaderMain: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: commonColor.white,
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        boxShadow: "0px 4px 16px 0px rgb(0 0 0 / 10%)",
        zIndex: "999",
    },

    HeaderInner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "10px 0",
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
        justifyContent: "start",
        alignItems: "center",
        width: {
            xs: "200px",
            sm: "200px",
            md: "300px",
            lg: "300px",
            xl: "300px",
        },
    },
    logoImage: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
        },
    },

    menuBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    },
    HeaderBtn: {
        background: commonColor.Trans,
        border: "2px solid",
        borderColor: commonColor.tallkBlue,
        boxShadow: "none",
        padding: "7px 25px",
        borderRadius: "5px",
        fontSize: {
            xs: FONT_SIZE.text14,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20
        },
        fontWeight: FONT_WEIGHT.BOLD,
        color: commonColor.tallkBlue,
        "&:hover": {
            background: commonColor.tallkBlue,
            boxShadow: "none",
            color: commonColor.white,
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
            xs: commonColor.HCTLightpink,
            sm: commonColor.HCTLightpink,
            lg: commonColor.Trans,
            xl: commonColor.Trans,
        },
        height: "100%",
        marginLeft: {
            xs: "auto",
            sm: "auto",
            lg: "0px",
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
        color: commonColor.yellow,
        background: commonColor.white,
        position: "absolute",
        top: "10px",
        left: {
            xs: "5.5%",
            sm: "34%",
            lg: "auto",
        },
        borderRadius: "50% 50% 0% 50%",
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
        color: commonColor.talkDarkblue1,
    },
    LogoImgMob: {
        width: {
            xs: "250px",

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
        background: commonColor.trans,
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
        color: commonColor.HCTGreen,
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.BOLD,
        cursor: "pointer",
        padding: "10px 18px",
        transition: "all 0.3s",
        "&:hover": {
            color: commonColor.HCTRed,
            boxShadow: "none",
        }
    },

    TopBar: {
        background: commonColor.HCTGreen,
        width: "100%",
        padding: "20px 0",
    },
    TopBarInner: {
        display: "flex",
        justifyContent: "center",
        flexDirection: {
            xs: "column",
            sm: "row",
        },
        alignItems: "center",
        gap: "0px",
    },
    TopBarText: {
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20,
        },
        fontWeight: FONT_WEIGHT.REGULAR,
        padding: {
            xs: "10px 0",
            sm: "0px 10px",
        },
        borderRight: {
            xs: "none",
            sm: "1px solid",
        },
        borderBottom: {
            xs: "1px solid",
            sm: "none",
        },
        borderColor: commonColor.white,
        textAlign: "center",
        "&:last-child": {
            border: "none",
        },
    },
    HeaderBtnsArea: {
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "20px",
    },
    LoginBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        background: commonColor.Trans,
        color: commonColor.HCTMidiumGray,
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: FONT_SIZE.text22,
        boxShadow: "none",
        fontWeight: FONT_WEIGHT.MEDIUM,
        "&:hover": {
            background: commonColor.Trans,
            boxShadow: "none",
            color: commonColor.HCTMidiumGray,
        },
    },
    IConBtn: {
        color: commonColor.HCTGreen,
        fontSize: FONT_SIZE.heading32,
        padding: "0px",
    },
    IConBtnBadge: {
        "& .MuiBadge-badge": {
            background: commonColor.HCTGreen,
            color: commonColor.white,
            boxShadow: "none",
            top: "10px",
            right: "5px",
        }
    }

};