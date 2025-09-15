'use client';
import { Box, Container, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { ARROWUP, BOTTOMBARTITLE, HCTBANNERSLIDER4 } from "@/values/Constants/ImageConstants";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function TurtleTalkSec() {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <Box sx={MUIStyle.TurtleTalkSec} id="faqs">
            <Container maxWidth="xl">
                <Box sx={MUIStyle.TurtleTalkSecRow}>
                    <Box sx={MUIStyle.TurtleTalkSecImageBox}>
                        <Box component={"img"} src={HCTBANNERSLIDER4} sx={MUIStyle.TurtleTalkSecImage} />
                    </Box>

                    <Box sx={MUIStyle.TurtleTalkQusBox}>
                        <Box sx={MUIStyle.AboutContentTop}>
                            <Typography variant="h2" sx={MUIStyle.AboutHeading}>
                                Turtle Talk: Answers to Your Questions
                            </Typography>
                            <Box component={"img"} src={BOTTOMBARTITLE} sx={MUIStyle.TitlebottomBar} />
                        </Box>
                        <Box sx={MUIStyle.AboutSecContentInner}>
                            {[
                                { panel: 'panel1', question: 'What materials are used in your turtle necklaces?', answer: 'Our turtle necklaces are hand-carved from ethically sourced water buffalo bone, ensuring that no animals are harmed in the process. ' },
                                { panel: 'panel2', question: 'How often should I feed my turtle?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
                                { panel: 'panel3', question: 'How do I know if my turtle is sick?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },

                            ].map(({ panel, question, answer }) => (
                                <Accordion sx={[MUIStyle.TurtleTalkQusAccordion,
                                {
                                    "& .MuiAccordionSummary-contentGutters": {
                                        justifyContent: "space-between",
                                        width: "100%",
                                        margin: expanded === panel ? "36px 0 20px 0" : "36px 0px",
                                    },
                                }
                                ]} key={panel} expanded={expanded === panel} onChange={handleChange(panel)}>
                                    <AccordionSummary sx={MUIStyle.TurtleTalkQusHeading}
                                        aria-controls={`${panel}bh-content`}
                                        id={`${panel}bh-header`}
                                    >
                                        {/* <Box sx={MUIStyle.TurtleTalkQusBox}> */}
                                        <Typography variant="h6" sx={MUIStyle.TurtleTalkQus}>
                                            {question}
                                        </Typography>
                                        {expanded === panel ? <Icon icon="charm:plus" /> : <Icon icon="charm:minus" />}
                                        {/* </Box> */}

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={MUIStyle.TurtleTalkAns} variant="body1">
                                            {answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}