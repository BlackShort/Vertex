import { Stack } from '@mui/material'
import svg7 from '../../assets/svg7.svg';

const EarnCoins = () => {
  return (
    <Stack direction={'row'} gap={'2em'}>
      <Stack>
        Unlock the potential to earn more with Vertex. Our platform offers various opportunities to earn cryptocurrency rewards. Whether through staking, yield farming, or other innovative methods, you can grow your digital assets while being part of the blockchain revolution. Explore our earning options today and watch your portfolio flourish.
      </Stack>
      <img src={svg7} alt="" width={350} height={350} />
    </Stack>
  )
}

export default EarnCoins