import {Canvas} from '@react-three/fiber';
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";

function Model(props) {
    const {scene} = useGLTF('/model.glb');
    return <primitive object={scene} {...props} />
}

const Avatar = () => {
    return (
        <Canvas dpr={[1,2]} shadows camera={{fov:45}}>
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
                <Stage environment={null}>
                    <Model scale={0.01}/>
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}

export default Avatar
