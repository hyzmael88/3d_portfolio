import React, { useState } from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '@/components/Loader'
import Island from '@/models/Island'
import Sky from '@/models/Sky'
import Bird from '@/models/Bird'
import Plane from '@/models/Plane'


function Home() {
    {/* <div className='absolute top-28 left-0 right-0 z-10 flex items justify-center'>
        POPUP
    </div> */}

    const [rotating, setRotating] = useState(false)

    const adjustIslandForScreenSize = () =>{
      let screenScale = null
       let screenPosition = [0,-6.5,-43]
       let rotation = [0.1,4.7,0]

       if (typeof window !== 'undefined' && window.innerWidth < 768) {
        screenScale = [0.9,0.9,0.9]
    }
    else{
      screenScale = [1,1,1]
    }
    return [screenScale, screenPosition, rotation]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  return (
    <section
    className='w-full h-screen relative'
    >
        <Canvas className='w-full h-screen bg-transparent'
        camera={{near:0.1, far:1000}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight position={[1,1,1]} intensity={2}/>
                <ambientLight
                intensity={0.5}
                />
               {/*  <pointLight/>   */} 
               {/*  <spotLight/>   */} 
                <hemisphereLight skyColor="#b11e1ff" groundColor='#000000'/>
                <Bird/>
              <Sky/>
                <Island
                position={islandPosition}
                scale={islandScale}
                rotation = {islandRotation}
                />
                <Plane/>
                </Suspense>

            </Canvas>
    </section>
  )
}

export default Home