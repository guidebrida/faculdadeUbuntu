import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: 420
});

export const BotaoModoFuncionamento: React.FC = () => {
  const [modoFuncionamento, setModoFuncionamento] = useState<string>('Refrigerar');

  return (
    <Container flexDirection={'column'}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-around'}
        margin={5}
        sx={{
          backgroundColor:
            modoFuncionamento === 'Refrigerar'
              ? '#2980B9'
              : modoFuncionamento === 'Ventilar'
              ? '#95A5A6'
              : '#D35400'
        }}
        width={180}
        height={40}
        color={'#fff'}
      >
        <Typography>{modoFuncionamento}</Typography>
        {modoFuncionamento === 'Refrigerar' ? (
          <AcUnitIcon />
        ) : modoFuncionamento === 'Ventilar' ? (
          <AirIcon />
        ) : (
          <WbSunnyIcon />
        )}
      </Box>
      <Container justifyContent={'space-around'}>
        <Button
          variant="contained"
          startIcon={<AcUnitIcon />}
          onClick={() => setModoFuncionamento('Refrigerar')}
        >
          Refrigerar
        </Button>
        <Button
          variant="contained"
          startIcon={<AirIcon />}
          onClick={() => setModoFuncionamento('Ventilar')}
        >
          Ventilar
        </Button>
        <Button
          variant="contained"
          startIcon={<WbSunnyIcon />}
          onClick={() => setModoFuncionamento('Aquecer')}
        >
          Aquecer
        </Button>
      </Container>
    </Container>
  );
};
