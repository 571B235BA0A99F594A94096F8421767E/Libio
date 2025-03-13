import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Icecreams from './Icecreams';
import Mojito from './Mojitos';
import Milkshake from './Milkshakes';
import Freshjuice from "./Freshjuice";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', margin:'10px' }}>
      <div  className='flex justify-center items-center my-4'  >
        <Tabs  value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile>
          <Tab  label="ICE CREAMS"  sx={{color:'black' ,fontWeight:'bold',fontSize:25}} {...a11yProps(0)} />
          <Tab label="MILKSHAKES " sx={{color:'black' ,fontWeight:'bold',fontSize:25}} {...a11yProps(1)} />
          <Tab label="MOJITOS" sx={{color:'black' ,fontWeight:'bold',fontSize:25}} {...a11yProps(2)} />
          <Tab label="FRESH JUICES" sx={{color:'black' ,fontWeight:'bold',fontSize:25}} {...a11yProps(3)} />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        < Icecreams/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Milkshake />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Mojito/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Freshjuice/>
      </CustomTabPanel>
    </Box>
  );
}
