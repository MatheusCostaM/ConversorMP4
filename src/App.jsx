import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Texto from './components/Texto';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Texto>COLOQUE O LINK E BAIXE SEU VÍDEO</Texto>
      <Input />
    </>
  )
}

export default App
