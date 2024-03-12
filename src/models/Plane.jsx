import { useGLTF } from '@react-three/drei';
import React from 'react'

const planceScene = "/3d/plane.glb";

function Plane({isRotating, ...props}) {

    const {scene, animations} = useGLTF(planceScene)

  return (

    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane