import * as React from "react";
import NextLink from "next/link";
import { Grid, Card, Box, Button } from "@mui/material";
import Link from 'next/link';

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>RemixIcon</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Icons</li>
          <li>RemixIcon</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <code
          className="bg-f5f2f0"
          style={{
            padding: "20px",
            display: "block",
          }}
        >
            &lt;<span style={{ color: '#905' }}>i</span> {' '} <span style={{ color: '#690' }}>class</span>=<span style={{ color: '#07a' }}>&quot;ri-home-7-line&quot;</span>&gt;&lt;/<span style={{ color: '#905' }}>i</span>&gt;
        </code>
      </Card>
      
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-home-7-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-home-7-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-store-2-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-store-2-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-mail-open-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-mail-open-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-cloud-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-cloud-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-bar-chart-box-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-bar-chart-box-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-calendar-todo-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-calendar-todo-line
            </Box>
          </Card>
        </Grid>
 
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-global-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-global-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-flag-2-fill" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-flag-2-fill
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-service-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-service-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-megaphone-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-megaphone-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-message-2-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-message-2-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-chat-quote-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
              ri-chat-quote-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-emoji-sticker-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-emoji-sticker-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-ball-pen-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-ball-pen-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-contrast-2-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-contrast-2-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-collage-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-collage-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-bug-fill" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-bug-fill
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-scan-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            cancel
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-wifi-off-fill" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-wifi-off-fill
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-eth-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-eth-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-cup-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-cup-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-cake-3-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-cake-3-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-angularjs-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-angularjs-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-edge-new-fill" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-edge-new-fill
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-xbox-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-xbox-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-map-pin-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-map-pin-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-rocket-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-rocket-line
            </Box>
          </Card>
        </Grid>
        
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-bus-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-bus-line
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-motorbike-fill" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-motorbike-fill
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "40px" },
              textAlign: 'center'

            }}
            className="icon-card"
          >
            <i className="ri-image-add-line" style={{ fontSize: '25px' }}></i>

            <Box className="text-body" sx={{ mt: '20px' }}>
            ri-image-add-line
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          mb: '25px'
        }}
      >
        <Link href="https://remixicon.com/" target="_blank">
          <Button
            type="button"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "30px",
              fontWeight: "400",
              fontSize: { xs: "13px", sm: "14px" },
              padding: '10px 30px',
              color: "#fff !important",
              boxShadow: "none",
            }}
          >
            View All Icons
          </Button>
        </Link>
      </Box>
    </>
  );
}
