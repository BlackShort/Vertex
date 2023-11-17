import { Stack } from '@mui/material'
import svg5 from '../../assets/svg5.svg';

const WebRevolution = () => {
  return (
    <Stack direction={'row'} gap={'2em'}>
      <Stack>
        The Web 3.0 revolution is here, and Vertex is your gateway to it. Web 3.0 represents a decentralized internet powered by blockchain technology. It empowers users with greater control over their data, assets, and digital experiences. Join us in this exciting era where trust, transparency, and decentralization are at the forefront. Experience the future of the internet with Vertex as your trusted companion on this transformative journey.
      </Stack>
      <img src={svg5} alt="" width={300} height={300} />
    </Stack>
  )
}

export default WebRevolution