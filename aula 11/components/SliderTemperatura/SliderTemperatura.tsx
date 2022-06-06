import { Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

export const SliderTemperatura: React.FC = () => {
  const [temperatura, setTemperatura] = useState<number | number[]>(20);

  const temperaturaOutput = (value: number): string => {
    return `${value}°C`;
  };

  return (
    <Box width={200}>
      <Typography>
        Temperatura: <b>{temperatura}</b>
      </Typography>
      <Slider
        orientation="horizontal"
        defaultValue={20}
        step={1}
        marks
        min={16}
        max={28}
        valueLabelFormat={temperaturaOutput}
        valueLabelDisplay="auto"
        onChange={(e, value) => {
          setTemperatura(value);
        }}
      />
    </Box>
  );
};
