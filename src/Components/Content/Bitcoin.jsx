import { Button, Stack, Typography } from "@mui/material";
import { AttachMoneyRounded } from '@mui/icons-material';
import { Link } from "react-router-dom";

const Bitcoin = () => {
    return (
        <Stack
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: "-webkit-fill-available",
                height: "28em",
                background: "#ffffff1f",
                borderRadius: "1em",
                maxWidth: "22em",
                margin: "1em 0 1em 1em",
                backdropFilter: "blur(10px)",
                padding: '1em'
            }}
        >
            <Typography sx={{ textDecoration: 'underline', textUnderlineOffset: '5px', }} variant="h4">Vertex Coin</Typography>
            <Stack justifyContent={'space-around'} alignItems={'center'} gap={'1em'} height={'100%'} paddingY={'5%'}>
                <Typography variant="h5">1 Vertex = $0.003438</Typography>
                <Typography variant="h5">$944,832.26 Sold</Typography>
                <Typography variant="subtitle1">Price Increases In:</Typography>
                <Stack>
                    <Typography variant="h5" sx={{ display: 'flex', gap: '1em' }}><span>00</span><span>:</span><span>15</span><span>:</span><span>02</span><span>:</span><span>00</span></Typography>
                    <Typography variant="h6" sx={{ display: 'flex', gap: '2.2em' }}><span>DAY</span><span>HH</span><span>MIN</span><span>SEC</span></Typography>
                </Stack>

            </Stack>
            <Link to={'/signup'}>
                <Button sx={{ margin: 'auto auto 0.5em auto' }} variant="contained" color="success" size="medium" startIcon={<AttachMoneyRounded />}>BUY NOW</Button>
            </Link>
        </Stack>
    );
};

export default Bitcoin
