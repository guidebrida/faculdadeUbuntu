import { Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

export const SliderVelocidade: React.FC = () => {
  const [velocidade, setVelocidade] = useState<number | number[]>(1);

  return (
    <Box height={100} width={100}>
      <Typography>
        Velocidade: <b>{velocidade}</b>
      </Typography>
      <Slider
        orientation="horizontal"
        defaultValue={1}
        step={1}
        marks={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' }
        ]}
        min={1}
        max={3}
        onChange={(e, value) => {
          setVelocidade(value);
        }}
      />
    </Box>
  );
};
