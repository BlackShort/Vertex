import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Tab, Tabs } from '@mui/material';
import { BuyGuide, Discount, EarnCoins, KeyFeature, WebRevolution } from '../Explore';

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
            {value === index && (
                <Box className='Tabpannel_Tabs' sx={{ p: 3, borderTop: '1px solid #808080', height: '18.5em', overflow: 'scroll' }}>
                    <Typography>{children}</Typography>
                </Box>
            )
            }
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
        <Box sx={{ width: '80%', height: '25em', border: '1px solid #808080', borderRadius: '1em' }}>
            <Box sx={{ overflow: 'hidden' }}>
                <Tabs value={value} textColor='#fff' onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Key Features" {...a11yProps(0)} />
                    <Tab label="Web3 Revolution" {...a11yProps(1)} />
                    <Tab label="Earn Coins" {...a11yProps(2)} />
                    <Tab label="Discount" {...a11yProps(3)} />
                    <Tab label="Buying Guide" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <KeyFeature />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <WebRevolution />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <EarnCoins />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Discount />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <BuyGuide />
            </CustomTabPanel>
        </Box>
    );
}
