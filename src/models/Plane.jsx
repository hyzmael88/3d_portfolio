import { useGLTF } from '@react-three/drei';
import React from 'react'

const planceScene = "/3d/plane.glb";

function Plane() {

    const {scene, animations} = useGLTF(planceScene)

  return (

    <mesh>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane