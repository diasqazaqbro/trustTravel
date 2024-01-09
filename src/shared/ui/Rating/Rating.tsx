import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Rating.scss'
import { Rate } from 'antd';
import { StarOutlined, StarTwoTone } from '@ant-design/icons';

export default function BasicRating() {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="no-value" value={null} style={{ fontSize: '32px' }} />
    </Box>
  );
}

export const ReleatedRating = () => {
  return (
    // <Rating name="no-value" value={null} style={{ fontSize: '32px', flexDirection: 'column-reverse' }} />
    <Rate character={<StarTwoTone className='grade_rate' />} allowHalf style={{ display: 'inline-flex', flexDirection: 'column-reverse' }} className='star__grade'/>
    )
}