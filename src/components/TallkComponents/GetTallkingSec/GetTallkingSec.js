'use client';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { ARROWUP, GETTALLKINIMG } from "@/values/Constants/ImageConstants";
import { useState } from "react";

export default function GetTallkingSec() {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };


    return (
        <Box sx={MUIStyle.AboutSecMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.AboutTitleRow}>
                    <Box sx={MUIStyle.AboutTitleContent}>
                        <Typography variant="h1" sx={MUIStyle.AboutTitle}>Get Tallking Instantly (in just 30 seconds) </Typography>
                        <Typography variant="body1" sx={MUIStyle.AboutParaText}>
                            Start with Tallk in three easy steps:
                        </Typography>
                    </Box>

                </Box>
                <Box sx={MUIStyle.AboutSecRow}>
                    <Box sx={MUIStyle.AboutSecImage}>
                        <Box component={"img"} src={GETTALLKINIMG} alt="AboutSecImage" />
                    </Box>
                    <Box sx={MUIStyle.AboutSecContent}>
                        <Box sx={MUIStyle.AboutSecContentInner}>
                            <Accordion
                                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                sx={MUIStyle.Accordion}
                                className="accordion"
                            >
                                <AccordionSummary
                                    expandIcon={<Box component={"img"} src={ARROWUP} sx={MUIStyle.ArrowAccrodion} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography variant="h2"
                                        sx={MUIStyle.AccordionTitle}> 1. Train Tallk (30 seconds)</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1" sx={MUIStyle.AccordionText}>
                                        InsightSphere Technology quickly learns your business. Customize for expert-level knowledge.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                                sx={MUIStyle.Accordion}
                                className="accordion"
                            >
                                <AccordionSummary
                                    expandIcon={<Box component={"img"} src={ARROWUP} sx={MUIStyle.ArrowAccrodion} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography variant="h2"
                                        sx={MUIStyle.AccordionTitle}>2. Lightning fast integration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1" sx={MUIStyle.AccordionText}>
                                        InsightSphere Technology quickly learns your business. Customize for expert-level knowledge.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                                sx={MUIStyle.Accordion}
                                className="accordion"
                            >
                                <AccordionSummary
                                    expandIcon={<Box component={"img"} src={ARROWUP} sx={MUIStyle.ArrowAccrodion} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography variant="h2"
                                        sx={MUIStyle.AccordionTitle}>2. Lightning fast integration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1" sx={MUIStyle.AccordionText}>
                                        InsightSphere Technology quickly learns your business. Customize for expert-level knowledge.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}