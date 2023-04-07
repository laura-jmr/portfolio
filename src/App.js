import Title from './components/Title'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {
  const handleCanvasCreated = (canvas) => {
    console.log(canvas.offsetWidth, canvas.offsetHeight);
  };


  return (
      <Canvas 
      style={{ height: '100vh', width: '100vw' }}
      onCreated={handleCanvasCreated}
      >
        <pointLight position={[10, 10, 10]} />
        <Title />
      </Canvas>
  );
}

export default App;
