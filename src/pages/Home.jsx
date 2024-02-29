import React from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'

function Home() {
    {/* <div className='absolute top-28 left-0 right-0 z-10 flex items justify-center'>
        POPUP
    </div> */}
  return (
    <section
    className='w-full h-screen relative'
    >
        <Canvas className='w-full h-screen bg-transparent'
        camera={{near:0.1, far:1000}}
        >
            <Suspense fallback={<Loader/>}>
                </Suspense>

            </Canvas>
    </section>
  )
}

export default Home