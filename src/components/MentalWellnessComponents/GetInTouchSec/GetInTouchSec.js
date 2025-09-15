import { Box, Button, Container, MenuItem, Select, styled, TextareaAutosize, TextField, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { style } from "./GetInTouchSecSecStyle.css";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useRef } from "react";
import { Icon } from '@iconify/react';
import { MW24CALL, MWGETINTOUCHSMALLIMG } from "@/values/Constants/ImageConstants";
import { motion } from 'framer-motion';



export default function GetInTouchSec() {
    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    padding: 8px 12px;
    border-radius: 10px;
    color: #74706A;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    background: #fff;
    border: none !important;
    box-shadow: none !important;
      font-family: "Lato", sans-serif !important;

    &:hover {
      border: "none !important",
    }
      &::placeholder {
        color: #74706A;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    }


    &:focus {
      border: "none !important",
      box-shadow:none;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
    );
    return (
        <Box sx={MUIStyle.GetInTouchSec}>
            <Container maxWidth="xl">
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <Box sx={MUIStyle.Row}>

                        <Box component={"img"} src={MWGETINTOUCHSMALLIMG} alt="side Image" sx={MUIStyle.OverlayImg} />

                        <Box sx={MUIStyle.CallBox}>
                            {/* <motion.div
                            class="MuiBox-root css-17t3qew"
                        > */}
                            <Box sx={MUIStyle.CallImgBox}>
                                <Box component={"img"} src={MW24CALL} alt="Call" sx={MUIStyle.CallImg} />
                            </Box>
                            <Box sx={MUIStyle.CallContent}>
                                <Typography variant="h4" sx={MUIStyle.CallTitle}>
                                    Call Anytime
                                </Typography>
                                <Typography variant="h3" sx={MUIStyle.CallDesc}>
                                    (966) 569-9687
                                </Typography>
                            </Box>
                            {/* </motion.div> */}
                        </Box>


                        <Box sx={MUIStyle.GetInTouchContent}>
                            {/* <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}
                        > */}
                            <Box sx={MUIStyle.GetInTouchContentBox}>
                                <Typography variant="h4" sx={MUIStyle.GetInTouchTitle}>
                                    Get in Touch with Us
                                </Typography>
                                <Typography variant="h3" sx={MUIStyle.GetInTouchDesc}>
                                    Were here to help you every step of the way
                                </Typography>
                            </Box>
                            {/* </motion.div> */}

                            <Box sx={MUIStyle.GetInTouchForm}>

                                <Box sx={MUIStyle.GetInTouchInputBoxRow}>
                                    <TextField sx={MUIStyle.GetInTouchInput}
                                        placeholder="Full Name"
                                        fullWidth
                                        id="outlined-basic" variant="outlined" />
                                    <TextField sx={MUIStyle.GetInTouchInput}
                                        placeholder="Phone number"
                                        fullWidth
                                        id="outlined-basic" variant="outlined" />
                                </Box>

                                <TextField sx={MUIStyle.GetInTouchInput}
                                    placeholder="Email"
                                    fullWidth
                                    id="outlined-basic" variant="outlined" />
                                <Select
                                    fullWidth
                                    sx={MUIStyle.GetInTouchSelect}
                                    defaultValue=""
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Service
                                    </MenuItem>
                                    <MenuItem value="1">Option 1</MenuItem>
                                    <MenuItem value="2">Option 2</MenuItem>
                                    <MenuItem value="3">Option 3</MenuItem>
                                </Select>
                                <Textarea fullWidth aria-label="minimum height" minRows={5} placeholder="Message..." />
                                <Button sx={MUIStyle.GetInTouchBtn} variant="contained">Book Online Now</Button>

                            </Box>

                        </Box>

                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}