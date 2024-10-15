import * as React from "react";
import NextLink from "next/link";
import { Grid, Card, Box, Button } from "@mui/material";
import Link from 'next/link';

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Material Symbols</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Icons</li>
          <li>Material Symbols</li>
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
          &lt;<span style={{ color: '#905' }}>span</span> {' '} <span style={{ color: '#690' }}>class</span>=
          <span style={{ color: '#07a' }}>&quot;material-symbols-outlined&quot;</span>
          &gt;search&lt;/<span style={{ color: '#905' }}>span</span>&gt;
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
            <span className="material-symbols-outlined">
              search
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
              search
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
            <span className="material-symbols-outlined">
              home
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
              home
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
            <span className="material-symbols-outlined">
              menu
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
              menu
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
            <span className="material-symbols-outlined">
              close
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
              close
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
            <span className="material-symbols-outlined">
              settings
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
              settings
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
            <span className="material-symbols-outlined">
              done
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
              done
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
            <span className="material-symbols-outlined">
            expand_more
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            expand_more
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
            <span className="material-symbols-outlined">
              search
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            search
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
            <span className="material-symbols-outlined">
              check_circle
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            check_circle
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
            <span className="material-symbols-outlined">
              favorite
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            favorite
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
            <span className="material-symbols-outlined">
              add
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            add
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
            <span className="material-symbols-outlined">
              arrow_back
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
              arrow_back
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
            <span className="material-symbols-outlined">
              star
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            star
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
            <span className="material-symbols-outlined">
              chevron_right
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            chevron_right
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
            <span className="material-symbols-outlined">
              logout
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            logout
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
            <span className="material-symbols-outlined">
              arrow_forward_ios
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            arrow_forward_ios
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
            <span className="material-symbols-outlined">
              add_circle
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            add_circle
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
            <span className="material-symbols-outlined">
              cancel
            </span>

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
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            arrow_back_ios
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
            <span className="material-symbols-outlined">
              arrow_forward
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            arrow_forward
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
            <span className="material-symbols-outlined">
              arrow_drop_down
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            arrow_drop_down
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
            <span className="material-symbols-outlined">
              check
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            check
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
            <span className="material-symbols-outlined">
              check_box
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            check_box
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
            <span className="material-symbols-outlined">
              toggle_on
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            toggle_on
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
            <span className="material-symbols-outlined">
              open_in_new
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            open_in_new
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
            <span className="material-symbols-outlined">
              grade
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            grade
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
            <span className="material-symbols-outlined">
              refresh
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            refresh
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
            <span className="material-symbols-outlined">
            check_box_outline_blank
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            check_box_outline_blank
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
            <span className="material-symbols-outlined">
              login
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            login
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
            <span className="material-symbols-outlined">
              chevron_left
            </span>

            <Box className="text-body" sx={{ mt: '20px' }}>
            chevron_left
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
        <Link href="https://fonts.google.com/icons" target="_blank">
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
