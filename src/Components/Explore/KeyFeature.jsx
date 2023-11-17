import { Stack, Typography } from '@mui/material';
import svg9 from '../../assets/svg9.svg';

const KeyFeature = () => {
  return (
    <Stack direction={'row'} gap={'2em'}>
      <Stack gap={'2em'}>
        <Typography variant='h6'>Welcome to Vertex, where blockchain innovation meets user-friendly simplicity. Explore our platform's key features:</Typography>
        <Typography variant='h5'>#Security First: <Typography variant='subtitle1'>We prioritize the security of your digital assets. With cutting-edge encryption and multi-factor authentication, your investments are safe with us.</Typography></Typography>
        <Typography variant='h5'>#Simplicity Redefined: <Typography variant='subtitle1'>We've simplified blockchain and cryptocurrency operations. Buying, selling, and managing digital assets has never been easier.</Typography></Typography>
        <Typography variant='h5'>#Smart Contracts: <Typography variant='subtitle1'>Dive into the future with our smart contract capabilities. Automate transactions and agreements with trustless precision.</Typography></Typography>
        <Typography variant='h5'>#User-Friendly Wallet: <Typography variant='subtitle1'>Our intuitive wallet solution provides a secure home for your cryptocurrencies. Easy access and management at your fingertips.</Typography></Typography>
        <Typography variant='h5'>#Blockchain Explorer: <Typography variant='subtitle1'> Get real-time insights into the blockchain with our comprehensive explorer. Monitor transactions, blocks, and more with ease.</Typography></Typography>
      </Stack>
      <img src={svg9} alt="" width={300} height={300} />
    </Stack>
  )
}

export default KeyFeature