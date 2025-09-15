'use client';
import { Badge, Box, Button, Container, IconButton, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { HCTLOGO, LOGO, TALLKLOGO, TALLKLOGOWHITE } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";


export default function Header() {
    const headerRef = useRef(null); // Create a ref for the header element
    const [isSticky, setIsSticky] = useState(false); // State to track sticky behavior
    const [isActiveMenuVisible, setIsActiveMenuVisible] = useState(false);
    const [pathName, setPathName] = useState("");
    const [isScrollingDown, setIsScrollingDown] = useState(false); // State to track scroll direction
    const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

    /* global window */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsSticky(scrollY > 100); // Add sticky class if scrolled past 100px

            // Determine scroll direction
            if (scrollY > lastScrollY) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }
            setLastScrollY(scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    }, [lastScrollY]);

    /* global window */
    useEffect(() => {
        setPathName(window.location.pathname);
    }, []);

    return (
        <Box ref={headerRef} className={isSticky ? styles.stickyHeader : ""} sx={MUIStyle.HeaderMain}>
            {!isScrollingDown && (
                <Box sx={MUIStyle.TopBar} className={"TopBar"}>
                    <Container maxWidth="xl">
                        <Box sx={MUIStyle.TopBarInner}>
                            <Typography component={'p'} sx={MUIStyle.TopBarText}>Festive Sale! Get extra 20% off on your order </Typography>
                            <Typography component={'p'} sx={MUIStyle.TopBarText}>Use Code: WELCOME20 </Typography>
                        </Box>
                    </Container>
                </Box>
            )}
            <Container maxWidth="xl">
                <Box sx={MUIStyle.HeaderInner}>
                    <Box sx={MUIStyle.HeaderLogoBox}>
                        <Link href="#">
                            <Box sx={MUIStyle.logoImage} component={"img"} src={HCTLOGO} alt="Logo" />
                        </Link>
                    </Box>
                    <Box sx={MUIStyle.menuBox}>
                        <Box sx={[MUIStyle.HeaderBtnsArea, {
                            display: {
                                xs: "flex",
                                sm: "flex",
                                lg: "none",
                            },
                        }]}>
                            <IconButton sx={MUIStyle.IConBtn} aria-label="wishList">
                                <Icon icon="solar:heart-outline" />
                            </IconButton>

                            <IconButton sx={MUIStyle.IConBtn} aria-label="add to shopping cart">
                                <Badge sx={MUIStyle.IConBtnBadge} badgeContent={4}>
                                    <Icon icon="heroicons:shopping-bag" />
                                </Badge>
                            </IconButton>

                        </Box>
                        <Box sx={MUIStyle.menuBtn}
                            onClick={() => setIsActiveMenuVisible(!isActiveMenuVisible)}
                        >
                            <Icon icon="heroicons:bars-3-bottom-right-16-solid" />
                        </Box>
                        <Box
                            className={isActiveMenuVisible ? styles.activeMenu : styles.inactiveMenu}
                            sx={MUIStyle.HeaderMenuBox}
                        >
                            <Box sx={MUIStyle.HeadermobInner}>
                                <Box sx={MUIStyle.HeaderMobLogoBox}>
                                    <Link href="#" >
                                        <Box component={"img"} src={HCTLOGO} alt="logo" sx={MUIStyle.LogoImgMob} />
                                    </Link>
                                    <Box sx={MUIStyle.menuCloseBtn}
                                        onClick={() => setIsActiveMenuVisible(!isActiveMenuVisible)}
                                    >
                                        <Icon icon="charm:cross" />
                                    </Box>
                                </Box>
                                <Box component={"ul"} sx={MUIStyle.HEaderMenu}>
                                    <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                        <Link
                                            className={"headerMenu" + (pathName === "/" ? " active" : "")}
                                            href="#" >
                                            <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Home</Typography>

                                        </Link>
                                    </Box>
                                    {/* <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                        <Link className={"headerMenu" + (pathName === "/Shop" ? " active" : "")} href="/Shop" >
                                            <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Shop</Typography>
                                        </Link>
                                    </Box> */}
                                    <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                        <Link className={"headerMenu" + (pathName === "/aboutUs" ? " active" : "")} href="#collections" >
                                            <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Collections</Typography>
                                        </Link>
                                    </Box>
                                    <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                        <Link className={"headerMenu" + (pathName === "/Collection" ? " active" : "")} href="#faqs" >
                                            <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>FAQs</Typography>
                                        </Link>
                                    </Box>
                                    <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                        <Link className={"headerMenu" + (pathName === "/Blog" ? " active" : "")} href="#stories" >
                                            <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Stories</Typography>
                                        </Link>
                                    </Box>

                                    <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                        <Link className={"headerMenu" + (pathName === "/Blog" ? " active" : "")} href="#contact" >
                                            <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Contact Us</Typography>
                                        </Link>
                                    </Box>

                                    <Button sx={[MUIStyle.LoginBtn, {
                                        display: {
                                            xs: "flex",
                                            sm: "flex",
                                            lg: "none",
                                        },
                                        marginLeft: "20px",
                                        marginTop: "20px",
                                    }]} variant="contained">
                                        <Icon icon="uiw:user-add" />
                                        Login / Sign Up
                                    </Button>
                                </Box>


                            </Box>
                        </Box>

                    </Box>

                    <Box sx={[MUIStyle.HeaderBtnsArea, {
                        display: {
                            xs: "none",
                            sm: "none",
                            lg: "flex",
                        },
                    }]}>
                        <Button sx={MUIStyle.LoginBtn} variant="contained">
                            <Icon icon="uiw:user-add" />
                            Login / Sign Up
                        </Button>
                        <IconButton sx={MUIStyle.IConBtn} aria-label="wishList">
                            <Icon icon="solar:heart-outline" />
                        </IconButton>

                        <IconButton sx={MUIStyle.IConBtn} aria-label="add to shopping cart">
                            <Badge sx={MUIStyle.IConBtnBadge} badgeContent={4}>
                                <Icon icon="heroicons:shopping-bag" />
                            </Badge>
                        </IconButton>

                    </Box>
                </Box >
            </Container >
        </Box >
    );
}