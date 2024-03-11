import { useGLTF } from '@react-three/drei';
import React from 'react'

const birdScene = "/3d/bird.glb";

function Bird() {
    const {scene, animations} = useGLTF(birdScene)
  return (
    <mesh
    position={[10,2,1]}
    sckale={[0.003,0.003,0.003]}
    >
        <primitive object={scene}/>

    </mesh>
  )
}

export default Bird