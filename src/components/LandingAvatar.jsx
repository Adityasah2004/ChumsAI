import { useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useAnimations} from "@react-three/drei/core"
import { useEffect, useState } from "react";
import * as THREE from "three";

const Avatar = () => {
    const avatar = useGLTF("lp-model.glb");
    const [animation, setanimation] = useState("Idle");
    avatar.animations[0].name = "Idle"
    const { actions, names } = useAnimations(avatar.animations, avatar.scene);

    //animation use effect
    useEffect(() => {
        actions[animation]?.reset().fadeIn(0.5).play();
        return () => {
            actions[animation]?.fadeOut(0.5);
        };
    }, [animation]);

    useEffect(() => {
        let blinkTimeout;
        const nextBlink = () => {
            blinkTimeout = setTimeout(() => {
                setTimeout(() => {
                    nextBlink();
                }, 100);
            }, THREE.MathUtils.randInt(1000, 5000));
        };
        nextBlink();
        return () => clearTimeout(blinkTimeout);
    }, []);


    
    return (
        <group>
            <primitive object={avatar.scene} scale={3.2} position-y={-3.5} />
        </group>
    )
}

const LandingAvatar = () => {
    return (
        <Canvas dpr={[0, 2]}>
            <ambientLight />
            <pointLight position={[1, 1, 1]} />
            {/* <OrbitControls /> */}
            <Avatar />
        </Canvas>
    )
}

export default LandingAvatar
