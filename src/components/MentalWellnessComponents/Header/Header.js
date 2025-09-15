'use client';
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { commonColor } from "@/values/Colors/CommonColor";
import { MWLOGO, MWLOGOFooter } from "@/values/Constants/ImageConstants";


export default function Header() {
    const headerRef = useRef(null); // Create a ref for the header element
    const [isSticky, setIsSticky] = useState(false); // State to track sticky behavior
    const [isActiveMenuVisible, setIsActiveMenuVisible] = useState(false);
    const [pathName, setPathName] = useState("");
    /* global window */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsSticky(scrollY > 50); // Add sticky class if scrolled past 200px
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    }, []);
    /* global window */
    useEffect(() => {

        setPathName(window.location.pathname);
    }, []);



    // console.log("pathName", pathName);

    return (
        <>

            <Box ref={headerRef} className={isSticky ? styles.stickyHeader : ""} sx={[MUIStyle.HeaderMain,
            {
                position: isSticky ? 'absolute ' : "fixed",
            },
            ]}>
                <Box sx={MUIStyle.TopBar}>
                    <Container maxWidth="xl">
                        <Box sx={MUIStyle.TopBarInner}>
                            <Typography component={"p"} sx={MUIStyle.TopBarText}>2972 Westheimer Rd. Santa Ana, Illinois 85486  <Link href='#'><span>Care Counselors: (966) 569-9687</span></Link></Typography>
                        </Box>
                    </Container>
                </Box>
                <Container maxWidth="xl">
                    <Box sx={MUIStyle.HeaderInner}>
                        <Box sx={MUIStyle.HeaderLogoBox}>
                            <Link href="/">
                                <Box sx={MUIStyle.logoImage} component={"img"} src={MWLOGO} alt="Logo" />
                            </Link>
                        </Box>
                        <Box sx={MUIStyle.menuBox}>
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
                                        <Link href="/" >
                                            <Box component={"img"} src={MWLOGOFooter} alt="logo" sx={MUIStyle.LogoImgMob} />
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
                                        <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                            <Link className={"headerMenu" + (pathName === "/aboutUs" ? " active" : "")} href="#about-us" >
                                                <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>About Us</Typography>
                                            </Link>
                                        </Box>
                                        <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                            <Link className={"headerMenu" + (pathName === "/service" ? " active" : "")} href="#service" >
                                                <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Service</Typography>
                                            </Link>
                                        </Box>
                                        <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                            <Link className={"headerMenu" + (pathName === "/ourfacility" ? " active" : "")} href="#our-facility" >
                                                <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Our Facility</Typography>
                                            </Link>
                                        </Box>
                                        <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                                            <Link className={"headerMenu" + (pathName === "/testimonials" ? " active" : "")} href="#testimonials" >
                                                <Typography component={'p'} sx={MUIStyle.HeaderMenuBtn}>Testimonials</Typography>
                                            </Link>
                                        </Box>
                                        <Box sx={[MUIStyle.ButtonsGroups, {
                                            display: {
                                                xs: "block",
                                                sm: "none",
                                            },
                                        }]}>
                                            <Button sx={MUIStyle.HeaderMobBtnLog} variant="contained" color="primary">Login</Button>
                                            <Button sx={MUIStyle.HeaderMobBtnSign} variant="contained" color="primary">Sign Up</Button>
                                        </Box>
                                    </Box>


                                </Box>
                            </Box>

                        </Box>
                        <Box sx={[MUIStyle.ButtonsGroups, {
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }]}>
                            <Button sx={MUIStyle.HeaderMobBtnLog} variant="contained" color="primary">Login</Button>
                            <Button sx={MUIStyle.HeaderMobBtnSign} variant="contained" color="primary">Sign Up</Button>
                        </Box>
                    </Box >
                </Container >
            </Box >
        </>
    );
}