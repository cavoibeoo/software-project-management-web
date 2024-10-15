"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Description from "./Description";
import Specifications from "./Specifications";
import Reviews from "./Reviews";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetailsTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", mb: "25px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab
              label="Description"
              {...a11yProps(0)}
              sx={{
                textTransform: "capitalize",
                fontSize: "16px",
              }}
            />
            <Tab
              label="Specifications"
              {...a11yProps(1)}
              sx={{
                textTransform: "capitalize",
                fontSize: "16px",
              }}
            />
            <Tab
              label="Reviews"
              {...a11yProps(2)}
              sx={{
                textTransform: "capitalize",
                fontSize: "16px",
              }}
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Description />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Specifications />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Reviews />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default ProductDetailsTabs;
