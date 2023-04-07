import React, { useRef } from 'react';
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import righteous from '../assets/Righteous_Regular.json';
import { useFrame, useThree } from '@react-three/fiber'

extend({ TextGeometry })

export default function Title() {
    const font = new FontLoader().parse(righteous);
    const textOpt = {
        font,
        size: 2,
        height: 1
    };

    const mesh = useRef(null)
    var animationTrigger = 0.0;

    const { viewport } = useThree();

    useFrame(({ mouse }) => {
        //console.log(mouse); // check if mouse values are correct
        //console.log(viewport); // check if viewport values are correct

        //mesh.current.rotation.x += 0.01
        //mesh.current.rotation.y += 0.01
        const x = (mouse.x * viewport.width) / 2.5
        const y = (mouse.y * viewport.height) / 2.5
        mesh.current.lookAt(x, y, 1)
        mesh.current.geometry.center()

    })

    return (
        <mesh position={[0, 0, -10]} ref={mesh}>
            <textGeometry args={['Laura\nJürgensmeier', textOpt]} />
            <meshStandardMaterial attach='material' />
        </mesh>
    );
}