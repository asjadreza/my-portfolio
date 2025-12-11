"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";

export default function ExperienceTimeline() {
  return (
    <Timeline sx={{ "& .MuiTimelineItem-root:before": { display: "none" }}}>
      {/* Ombrella */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: "transparent",
              border: "2px solid #bbbbbb",
              padding: "4px",
            }}
          >
            <WorkIcon sx={{ fontSize: "16px", color: "" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            className="text-slate-400"
            variant="body2"
            sx={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontSize: {
                xs: "0.775rem",
                sm: "0.875rem",
              },
            }}
          >
            Oct 2023 — June 2025
          </Typography>
          <Typography
            variant="h6"
            component="span"
            sx={{ 
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "normal", 
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
              },
            }}
          >
            Software Engineer — SYMB Technologies
          </Typography>

          {/* Experience Details as a Bullet List */}
          <List
            dense
            sx={{
              listStyleType: "disc",
              pl: 2,
              py: 0,
              "& .MuiListItem-root": { display: "list-item" },
            }}
          >
            <ListItem sx={{ p: 0, fontSize: "1.1rem" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                  },
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#94a3b8" }}>
                  Dashboard & Systems Leadership:
                </span>{" "}
                Enhanced the AcePlus.in admin dashboard by integrating backend
                services and optimizing data workflows, streamlining application
                operations.
              </Typography>
            </ListItem>

            <ListItem sx={{ p: 0, fontSize: "1.1rem" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                  },
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#94a3b8" }}>
                  Feature Architecture:
                </span>{" "}
                Engineered an intuitive drag-and-drop game management system,
                improving content organization and accelerating game upload
                efficiency by 80%.
              </Typography>
            </ListItem>
            <ListItem sx={{ p: 0, fontSize: "1.1rem" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                  },
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#94a3b8" }}>
                  API Development:
                </span>{" "}
                Built scalable REST and GraphQL APIs to strengthen
                frontend-backend communication.
              </Typography>
            </ListItem>
            <ListItem sx={{ p: 0, fontSize: "1.1rem" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                  },
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#94a3b8" }}>
                  Platform Modernization:
                </span>{" "}
                Successfully migrated the ASU Chat LP platform from Vue 2 to Vue
                3, improving performance, maintainability, and user experience.
              </Typography>
            </ListItem>
          </List>
        </TimelineContent>
      </TimelineItem>

      {/* Freelance */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: "transparent",
              border: "2px solid #bbbbbb",
              padding: "4px",
            }}
          >
            <WorkIcon sx={{ fontSize: "16px", color: "" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            className="text-slate-400"
            variant="body2"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: {
                xs: "0.775rem",
                sm: "0.875rem",
              },
            }}
          >
            Jun 2025 — Present
          </Typography>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "normal",
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
              },
            }}
          >
            Frontend Developer — Upwork (Freelance)
          </Typography>

          {/* Experience Details as a Bullet List */}
          <List
            dense
            sx={{
              listStyleType: "disc",
              pl: 2,
              py: 0,
              "& .MuiListItem-root": { display: "list-item" },
            }}
          >
            <ListItem sx={{ p: 0, fontSize: "1.1rem" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                  },
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#94a3b8" }}>
                  BeatDrop:
                </span>{" "}
                Engineered and deployed a scalable, full-stack music streaming
                platform with secure authentication, real-time audio streaming,
                and a modular component architecture.
              </Typography>
            </ListItem>

            <ListItem sx={{ p: 0, fontSize: "1.1rem" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                  },
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#94a3b8" }}>
                  Silanyas:
                </span>{" "}
                Built a complete e-commerce platform from the ground up with
                authentication, payment gateway integration, and a responsive
                UI.
              </Typography>
            </ListItem>
          </List>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
