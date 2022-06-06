import { Card, CardContent, CardHeader } from '@mui/material';
import { Box, styled } from '@mui/system';
import { BotaoModoFuncionamento } from '../BotaoModoFuncionamento/BotaoModoFuncionamento';
import { SliderTemperatura } from '../SliderTemperatura/SliderTemperatura';
import { SliderVelocidade } from '../SliderVelocidade/SliderVelocidade';

const Container = styled(Box)({
  display: 'flex'
});

export const Layout: React.FC = () => {
  return (
    <Container
      width={'100vw'}
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ backgroundColor: '#1BA1E2' }}
    >
      <Card
        sx={{
          width: 500,
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Container justifyContent={'space-around'}>
            <SliderTemperatura />
            <SliderVelocidade />
          </Container>
          <Container justifyContent={'space-around'}>
            <BotaoModoFuncionamento />
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
};
