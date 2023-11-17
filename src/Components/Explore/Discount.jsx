import { Typography } from '@mui/material'
import { Stack } from '@mui/material'
import svg10 from '../../assets/svg10.svg';

const Discount = () => {
  return (

    <Stack direction={'row'} gap={'2em'}>
      <Stack>
        <Typography variant='subtitle1'>
          At Vertex, we believe in rewarding our users. Keep an eye out for exclusive discounts and promotions on trading fees, wallet services, and more. Stay tuned to our announcements for limited-time offers to make the most of your blockchain experience.        </Typography>
      </Stack>
      <img src={svg10} alt="" width={350} height={350} />
    </Stack>
  )
}

export default Discount