import { ConfigProvider } from 'antd';
import React from 'react';
import './App.less';
import { Heroi } from './components/Heroi';

function App() {
  return (
    <ConfigProvider>
      <Heroi />
    </ConfigProvider>
  );
}

export default App;
