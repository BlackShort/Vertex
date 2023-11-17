import './App.scss';
import { Stack } from '@mui/material';
import logo from './assets/QuantumBlocks.png';
import { Navbar, Content, Footer } from './Components';

const Layout = () => {
    return (
        <Stack className='Vertex_App' width={{ xl: '1200px' }} margin={{ xl: '0 auto' }} overflow={'scroll'}>
            <Navbar logo={logo} name={'Vertex'} />
            <Content />
            <Footer />
        </Stack>
    )
}

export default Layout