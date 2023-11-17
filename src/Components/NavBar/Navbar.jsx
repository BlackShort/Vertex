import { Stack, Button, Typography, Avatar } from "@mui/material";
import { AccountBalanceWalletRounded, CurrencyBitcoinRounded } from '@mui/icons-material';
import { Link } from "react-router-dom";

const Navbar = ({ logo, name }) => {
    return (
        <Stack
            className="Vertex_Navbar"
            height={{ xs: "5vh", sm: "7vh" }}
            sx={{
                color: '#ffff',
                padding: "0.5em 1em",
            }}
        >
            <Stack direction={'row'} gap={'1em'}>
                <Avatar src={logo}></Avatar>
                <Typography
                    variant="h4"
                    sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
                >
                    {/* ✨ */}
                    {name}
                </Typography>
            </Stack>
            <Stack direction={'row'} gap={'1em'} maxWidth={'fit-content'}>
                {/* <Button variant="contained" size="small" color="primary" startIcon={<CurrencyBitcoinRounded />}>BUY CRYPTO</Button> */}
                {/* <Button variant="contained" size="small" color="warning" startIcon={<AccountBalanceWalletRounded />}>WALLET</Button> */}
                <Link to={'/signup'}><Button variant="contained" size="small" color="success" >Sign up</Button></Link>
                <Link to={'/login'}><Button variant="contained" size="small" color="primary" >Log in</Button></Link>
            </Stack>
        </Stack>
    );
};
export default Navbar;
