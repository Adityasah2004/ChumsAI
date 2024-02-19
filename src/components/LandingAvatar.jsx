import { useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useAnimations} from "@react-three/drei/core"
import { useEffect, useState } from "react";
import * as THREE from "three";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
};



const Avatar = () => {
    const screenSizes = useScreenSize();
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

    let scale = 3;
    if(screenSizes.width < 768){
        scale = 3.5;
    }


    
    return (
        <group>
            <primitive object={avatar.scene} scale={scale} position-y={-3.5} />
        </group>
    )
}

const LandingAvatar = () => {
    return (
        <Canvas dpr={[0, 2]}>
            <ambientLight />
            <pointLight position={[1, 1, 1]} />
            <OrbitControls />
            <Avatar />
        </Canvas>
    )
}

export default LandingAvatar
