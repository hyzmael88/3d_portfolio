import React from 'react'
import {useGLTF} from '@react-three/drei'


const skyScene = "/3d/sky.glb";
function Sky() {
    const sky = useGLTF(skyScene)
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky