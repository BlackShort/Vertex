import { Avatar, Button, Stack, Typography } from '@mui/material'
import { } from '../../assets'
import { ArrowForwardIosRounded, EmailRounded, FacebookRounded, HomeRounded, Instagram, LocationOnRounded, MyLocationRounded, PhoneRounded, Reddit, Twitter } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Stack className='Vertex_Footer' direction={'row'} p={'1em 2em'}>
            <Stack className='Names'>
                <Typography variant='h4'>Vertex</Typography>
                <Typography variant='subtitle2'><LocationOnRounded />New Delhi, Noida 12992</Typography>
                <Typography variant='subtitle2'><EmailRounded />contact@vertex.com</Typography>
                <Typography variant='subtitle2'><PhoneRounded />+918292828253</Typography>
            </Stack>
            <Stack className='Links'>
                <Typography variant='h5'>About Us</Typography>
                <Stack gap={'0.5em'}>
                    <Link to={'/'} variant='subtitle1'><ArrowForwardIosRounded fontSize={'1em'} />Home</Link>
                    <Link to={'/'} variant='subtitle1'><ArrowForwardIosRounded fontSize={'1em'} />Services</Link>
                    <Link to={'/'} variant='subtitle1'><ArrowForwardIosRounded fontSize={'1em'} />About</Link>
                    <Link to={'/'} variant='subtitle1'><ArrowForwardIosRounded fontSize={'1em'} />Contact</Link>
                    <Link to={'/'} variant='subtitle1'><ArrowForwardIosRounded fontSize={'1em'} />Privacy Policy</Link>
                </Stack>
            </Stack>
            <Stack>
                <Typography fontSize={'1.8rem'}>Follow Us</Typography>
                <Stack direction={"row"} gap={"2em"} mt={"2em"}>
                    <Link to={'#'}><Avatar className='Avatar'><FacebookRounded /></Avatar></Link>
                    <Link to={'#'}><Avatar className='Avatar'><Instagram /></Avatar></Link>
                    <Link to={'#'}><Avatar className='Avatar'><Twitter /></Avatar></Link>
                    <Link to={'#'}><Avatar className='Avatar'><Reddit /></Avatar></Link>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer