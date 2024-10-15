"use client";

import * as React from "react";
import { Card, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const RecentActivity: React.FC = () => {
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
            pb: "15px",
          }}
          className="text-black border-bottom"
        >
          Recent Activity
        </Typography>

        <Timeline
          sx={{
            padding: "0",
            margin: "0",

            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem sx={{ mt: "15px" }}>
            <TimelineOppositeContent
              fontSize="13px"
              className="text-start text-body"
            >
              Just now
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "success.main",
                  mb: "0",
                }}
              />
              <TimelineConnector sx={{ width: "1px", bgcolor: "#eceef2" }} />
            </TimelineSeparator>

            <TimelineContent>
              <Typography className="text-black" fontWeight={500} mb="10px">
                Weekly Stand-Up Meetings:
              </Typography>

              <Typography
                fontSize="13px"
                mb="10px"
                maxWidth="500px"
                lineHeight="1.7"
              >
                We continued our weekly stand-up meetings where team members
                provided updates on their current tasks, discussed any
                roadblocks, and coordinated efforts for the week ahead.
              </Typography>

              <Typography fontSize="13px">
                By: <span className="text-primary">Olivia Rodriguez</span>
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ mt: "15px" }}>
            <TimelineOppositeContent
              fontSize="13px"
              className="text-start text-body"
            >
              1 day ago
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "error.main",
                  mb: "0",
                }}
              />
              <TimelineConnector sx={{ width: "1px", bgcolor: "#eceef2" }} />
            </TimelineSeparator>

            <TimelineContent>
              <Typography className="text-black" fontWeight={500} mb="10px">
                Project Kickoff Session:
              </Typography>

              <Typography
                fontSize="13px"
                mb="10px"
                maxWidth="500px"
                lineHeight="1.7"
              >
                The session included introductions, a review of project goals
                and objectives, and initial planning discussions.
              </Typography>

              <Typography fontSize="13px">
                By: <span className="text-primary">Isabella Cooper</span>
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ mt: "15px" }}>
            <TimelineOppositeContent
              fontSize="13px"
              className="text-start text-body"
            >
              2 day ago
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  mb: "0",
                }}
                className="bg-purple"
              />
              <TimelineConnector sx={{ width: "1px", bgcolor: "#eceef2" }} />
            </TimelineSeparator>

            <TimelineContent>
              <Typography className="text-black" fontWeight={500} mb="10px">
                Team Building Workshop:
              </Typography>

              <Typography
                fontSize="13px"
                mb="10px"
                maxWidth="500px"
                lineHeight="1.7"
              >
                Last Friday, we conducted a team building workshop focused on
                improving communication and collaboration among team members.
                Activities included team challenges, icebreakers, and open
                discussions.
              </Typography>

              <Typography fontSize="13px">
                By: <span className="text-primary">Lucas Morgan</span>
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ mt: "15px" }}>
            <TimelineOppositeContent
              fontSize="13px"
              className="text-start text-body"
            >
              3 day ago
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "primary.main",
                  mb: "0",
                }}
              />
              <TimelineConnector sx={{ width: "1px", bgcolor: "#eceef2" }} />
            </TimelineSeparator>

            <TimelineContent>
              <Typography className="text-black" fontWeight={500} mb="10px">
                Lunch and Learn Session:
              </Typography>

              <Typography
                fontSize="13px"
                mb="10px"
                maxWidth="500px"
                lineHeight="1.7"
              >
                We organized a lunch and learn session on March 15th where a
                guest speaker from the industry discussed emerging trends in our
                field. It was an insightful session that sparked valuable
                discussions among team members.
              </Typography>

              <Typography fontSize="13px">
                By: <span className="text-primary">Ethan Parker</span>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Card>
    </>
  );
};

export default RecentActivity;
