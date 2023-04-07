import Text from './components/Text'
import './App.css'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import normalMap from "./assets/normalmap.jpg"
import { useTexture } from '@react-three/drei';
import Background from './components/Background'

function App() {
  const handleCanvasCreated = (canvas) => {
    console.log(canvas.offsetWidth, canvas.offsetHeight);
  };

  //const normalmap = useLoader(TextureLoader, './assets/normalmap.jpg')
  //const texture = useTexture('./assets/normalmap.jpg');

  return (
    <Canvas
      style={{ color: '#00000', height: '100vh', width: '100vw' }}
      onCreated={handleCanvasCreated}
    >
      <Background/>
      <directionalLight position={[10, 10, 10]} />
      <ambientLight intensity={0.3} />
      <Text text={'L'} pos={[-10, -0.75, -10]} rot={1} />
      <Text text={'a'} pos={[-8, -0.25, -10]} rot={1} />
      <Text text={'u'} pos={[-6, 0, -10]} rot={1} />
      <Text text={'r'} pos={[-4, 0.25, -10]} rot={1} />
      <Text text={'a'} pos={[-2, 0, -10]} rot={1} />

      <Text text={'J'} pos={[-10, -4.25, -10]} rot={1} />
      <Text text={'ü'} pos={[-8, -4, -10]} rot={1} />
      <Text text={'r'} pos={[-6, -3.75, -10]} rot={1} />
      <Text text={'g'} pos={[-4, -3.5, -10]} rot={1} />
      <Text text={'e'} pos={[-2, -3.25, -10]} rot={1} />
      <Text text={'n'} pos={[0, -3, -10]} rot={1} />
      <Text text={'s'} pos={[2, -3, -10]} rot={1} />
      <Text text={'m'} pos={[4, -3.25, -10]} rot={1} />
      <Text text={'e'} pos={[6, -3.5, -10]} rot={1} />
      <Text text={'i'} pos={[8, -3.75, -10]} rot={1} />
      <Text text={'e'} pos={[10, -4, -10]} rot={1} />
      <Text text={'r'} pos={[12, -4.25, -10]} rot={1} />
    </Canvas>
  );
}

export default App;
