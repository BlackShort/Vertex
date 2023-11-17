import { Stack, Typography } from '@mui/material'
import svg9 from '../../assets/svg9.svg';

const BuyGuide = () => {
  return (
    <Stack direction={'row'} gap={'2em'}>
      <Stack>
        <Typography variant='h5'>Step 1: Sign Up: <Typography variant='subtitle1'>Create your Vertex account quickly and easily. You're one step closer to crypto ownership.</Typography></Typography>
        <Typography variant='h5'>Step 2: Choose Your Coins: <Typography variant='subtitle1'>Browse our selection of cryptocurrencies. Choose from Bitcoin, Ethereum, and more.</Typography></Typography>
        <Typography variant='h5'>Step 3: Payment Options: <Typography variant='subtitle1'>Select your preferred payment method. We offer various options for your convenience.</Typography></Typography>
        <Typography variant='h5'>Step 4: Secure Your Assets: <Typography variant='subtitle1'>Your newly acquired digital assets are stored safely in your Vertex wallet. Security is our top priority.</Typography></Typography>
        <Typography variant='h5'>Step 5: Explore and Trade: <Typography variant='subtitle1'>Now that you own crypto, you can explore blockchain's potential and even start trading. The future is yours to explore.</Typography></Typography>
      </Stack>
      <img src={svg9} alt="" width={350} height={350} />
    </Stack>
  )
}

export default BuyGuide