import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/app.css'
import Block1 from './components/Blocks/Block1'
import Block2 from './components/Blocks/Block2'
import Block3 from './components/Blocks/Block3'

function App() {
  return (
      <>
        <Block1/>
        <Block2/>
        <Block3/>
      </>
  );
}

export default App;
