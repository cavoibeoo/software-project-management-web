"use client";

import React from "react";
import { Grid, Card, Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const TablesOfContent: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Tables Of Content
          </Typography>
        </Box>

        <Grid
          container
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
        >
          <Grid item xs={12} md={7} lg={7} xl={7}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="toc-accordion bg-f6f7f9"
              sx={{
                border: "none",
                borderRadius: "3px",
                mt: "10px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="bg-f6f7f9"
                sx={{
                  padding: "9px 25px",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize="14px"
                  className="text-black"
                >
                  Introduction to Cybersecurity
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  border: "none",
                  padding: "0 25px 5px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        info
                      </i>
                      Course Introduction
                    </Link>

                    <Typography className="text-body">2m 24s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        play_circle
                      </i>
                      Cyber Security Introduction
                    </Link>

                    <Typography className="text-body">0m 46s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        list
                      </i>
                      What is Cyber Security and the CIA Triad
                    </Link>

                    <Typography className="text-body">3m 32s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        star
                      </i>
                      Threat Actors: Who are They?
                    </Link>

                    <Typography className="text-body">2m 2s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        hotel_class
                      </i>
                      Types of Threat Actors
                    </Link>

                    <Typography className="text-body">2m 13s</Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="toc-accordion bg-f6f7f9"
              sx={{
                border: "none",
                borderRadius: "3px",
                mt: "10px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="bg-f6f7f9"
                sx={{
                  padding: "9px 25px",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize="14px"
                  className="text-black"
                >
                  Secure Networking
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  border: "none",
                  padding: "0 25px 5px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        info
                      </i>
                      Network Security Introduction
                    </Link>

                    <Typography className="text-body">2m 24s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        hotel_class
                      </i>
                      Introduction to Wired and Wireless Networks
                    </Link>

                    <Typography className="text-body">2m 13s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        list
                      </i>
                      Wired Network Vulnerabilities and How to Protect Wired
                      Networks
                    </Link>

                    <Typography className="text-body">3m 32s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        star
                      </i>
                      Wireless Network Vulnerabilities and How to Protect
                      Wireless Networks
                    </Link>

                    <Typography className="text-body">2m 2s</Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="toc-accordion bg-f6f7f9"
              sx={{
                border: "none",
                borderRadius: "3px",
                mt: "10px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="bg-f6f7f9"
                sx={{
                  padding: "9px 25px",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize="14px"
                  className="text-black"
                >
                  Secure E-Mail
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  border: "none",
                  padding: "0 25px 5px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        info
                      </i>
                      E-Mail Security Introduction
                    </Link>

                    <Typography className="text-body">2m 24s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        play_circle
                      </i>
                      E-Mail: Overview and Importance
                    </Link>

                    <Typography className="text-body">2m 13s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        list
                      </i>
                      Phishing: Techniques, Implications and How to Spot
                    </Link>

                    <Typography className="text-body">3m 32s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        star
                      </i>
                      Understanding E-Mail Headers for Verification
                    </Link>

                    <Typography className="text-body">2m 2s</Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="toc-accordion bg-f6f7f9"
              sx={{
                border: "none",
                borderRadius: "3px",
                mt: "10px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="bg-f6f7f9"
                sx={{
                  padding: "9px 25px",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize="14px"
                  className="text-black"
                >
                  Secure Internet Browsing
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  border: "none",
                  padding: "0 25px 5px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        info
                      </i>
                      Internet Security Introduction
                    </Link>

                    <Typography className="text-body">2m 24s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        play_circle
                      </i>
                      Exploring Web-Based Threats
                    </Link>

                    <Typography className="text-body">2m 13s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        list
                      </i>
                      Typo Squatting: Risks and Mitigation
                    </Link>

                    <Typography className="text-body">3m 32s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        star
                      </i>
                      Watering Hole Attacks: Tactics and Countermeasures
                    </Link>

                    <Typography className="text-body">2m 2s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        hotel_class
                      </i>
                      Secure Browsing Best Practices
                    </Link>

                    <Typography className="text-body">2m 13s</Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              className="toc-accordion bg-f6f7f9"
              sx={{
                border: "none",
                borderRadius: "3px",
                mt: "10px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="bg-f6f7f9"
                sx={{
                  padding: "9px 25px",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize="14px"
                  className="text-black"
                >
                  Device Security & Password Management
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  border: "none",
                  padding: "0 25px 5px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        info
                      </i>
                      Device Security Introduction
                    </Link>

                    <Typography className="text-body">2m 24s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        play_circle
                      </i>
                      Securing Computers, Laptops, and Mobile Devices
                    </Link>

                    <Typography className="text-body">2m 13s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        list
                      </i>
                      Password Best Practices
                    </Link>

                    <Typography className="text-body">3m 32s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        star
                      </i>
                      Multi-Factor Authentication (MFA)
                    </Link>

                    <Typography className="text-body">2m 2s</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { sm: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "13px",
                      marginBottom: "13px",
                    }}
                    className="border-bottom"
                  >
                    <Link
                      href="/lms/courses/lesson-preview/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        mb: { xs: "8px", sm: "0" },
                      }}
                      className="text-body hover-text-color"
                    >
                      <i
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "20px" }}
                      >
                        hotel_class
                      </i>
                      Keeping Devices Up-to-Date
                    </Link>

                    <Typography className="text-body">2m 13s</Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} md={5} lg={5} xl={5}>
            <Box
              className="bg-primary"
              sx={{
                textAlign: "center",
                borderRadius: "7px",
                padding: "50px 30px",
                maxWidth: "440px",
                margin: "auto",
              }}
            >
              <Typography
                variant="h4"
                className="text-white"
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Unlock Library
              </Typography>

              <Typography className="text-white" mb="20px">
                Get access to all videos in the library
              </Typography>

              <Link
                href="/lms/courses/details"
                sx={{
                  borderRadius: "7px",
                  padding: "15px 22px",
                  marginBottom: "15px",
                  display: "inline-block",
                  color: "#fff !important",
                  background: "#ffffff14",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Sign Up - Only $120/mo
              </Link>

              <Typography>
                Have an account?{" "}
                <a href="#" className="text-white">
                  Login
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default TablesOfContent;
