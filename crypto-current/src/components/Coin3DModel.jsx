import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PresentationControls, Stage } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF('./bitcoin.glb');
    const ref = useRef();

    // Add a spinning effect to the model
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01; // Adjust the speed of rotation here
        }
    });

    return <primitive object={scene} ref={ref} {...props} />;
}

const Coin3DModel = () => {
    return (
        <div className="flex flex-col md:flex-row w-full ">
            {/* Left Side - Text */}
            <div className="flex-1 flex items-center justify-center pl-0 md:pl-2 order-2 md:order-1">
                <h1 className="text-6xl pl-3 pt-3  md:pt-0 md:p-0 md:text-8xl font-bold">
                    <span className="block text-black md:text-9xl">Welcome</span>
                    <span className="block text-black">to</span>
                    <span className="block text-yellow-600">CryptoTrendZ</span>
                    <h1 className="text-lg md:text-xl text-gray-500 mt-4 md:mt-5 mb-5">Get Latest trends/chart graphs/current rates
                        <span className='text-lg ml-2 md:text-xl text-gray-00'>and much more.</span></h1>
                </h1>
            </div>

            {/* Right Side - 3D Coin */}
            <div className="flex-1 h-[0vh] md:h-[90vh] order-1 md:order-2">
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ height: '100%' }}>
                    <color attach="background" args={['#787569']} />
                    <ambientLight intensity={1} />
                    <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment={null}>
                            <Model scale={0.01} />
                        </Stage>
                    </PresentationControls>
                </Canvas>
            </div>
        </div >
    );
};

export default Coin3DModel;
