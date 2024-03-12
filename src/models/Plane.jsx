import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react'

const planceScene = "/3d/plane.glb";

function Plane({isRotating, ...props}) {

    const ref = useRef()
    const {scene, animations} = useGLTF(planceScene)
    const {actions} = useAnimations(animations, ref)

    useEffect(() => {
        console.log(isRotating)
        if(isRotating){
            actions['Take 001'].play()
        }
        else{
            actions['Take 001'].stop()
        }
        actions['Take 001'].play()

    },[actions,isRotating])

  return (

    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane