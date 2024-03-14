// working with correct lip sync
import { Html, useGLTF } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useAnimations, useFBX } from "@react-three/drei/core"
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import useSpeechRecognition from "../Hooks/useSpeechRecognitionHook";


var audio = new Audio();
const Avatar = (/*{companionId}*/) => {
    const corresponding = {
        A: "viseme_PP",
        B: "viseme_kk",
        C: "viseme_I",
        D: "viseme_AA",
        E: "viseme_O",
        F: "viseme_U",
        G: "viseme_FF",
        H: "viseme_TH",
        X: "viseme_PP",
    };
    var {
        text,
        startListening,
        stopListening,
        isListening,
        hasRecognitionSupport
    } = useSpeechRecognition()
    // const avatar = useGLTF(`/${companion_id}.glb`);
    const avatar = useGLTF(`/Avatar3.glb`);
    const [index, setIndex] = useState(0);
    const [animation, setanimation] = useState("Idle");
    avatar.animations[0].name = "Idle"
    // avatar.animations[1].name = "Talking"
    const { actions, names } = useAnimations(avatar.animations, avatar.scene);
    // const jsonFile = useLoader(THREE.FileLoader, `/audio.json`);
    var [lipsync, setlipsync] = useState({})
    var audioElement = new Audio();
    //     useEffect(() => {
    //         if(text!=""){
    //             //apicall(text)
    //             if (index == 1)
    //                 {
    //                     setIndex(0);
    //                 }
    //                 else {
    //                     setIndex(1);    
    //                     setanimationindex(1);       
    //                 }
    //         }       
    // },[text])



    //audio use effect
    useEffect(() => {
        if (text != "") {
            const response = fetch('http://localhost:8000/getResponse?text=' + text, {
                method: 'POST'
            })
                .then(response => {
                    // Check if the request was successful (status code 200)
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    // Parse the JSON in the response
                    return response.blob();
                })
                .then(data => {
                    const audioUrl = URL.createObjectURL(data);
                    audio = new Audio(audioUrl);
                    const responsejson = fetch('http://localhost:8000/getJsondata')
                        .then(response => {
                            // Check if the request was successful (status code 200)
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            // Parse the JSON in the response
                            return response.json();
                        })
                        .then(data => {
                            setanimation("Talking")
                            // Handle the JSON data

                            lipsync = data
                            setlipsync(data)

                            // Now you can work with the data in the 'data' variable
                            audio.play();

                            //setAudio(audio);
                            audio.addEventListener('ended', onPlaybackComplete);
                        })
                        .catch(error => {
                            // Handle errors
                            console.error('There was a problem with the fetch operation:', error);
                        });

                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                });

            // audioElement.addEventListener("play", function() {
            //     setanimationindex(1);
            // });
        }
    }, [text])

    //animation use effect
    useEffect(() => {
        actions[animation]?.reset().fadeIn(0.5).play();
        return () => {
            actions[animation]?.fadeOut(0.5);
        };
    }, [animation]);

    function onPlaybackComplete() {
        setIndex(0);
        setanimation("Idle")
    }
    const lerpMorphTarget = (target, value, speed = 0.1) => {

        avatar.scene.traverse((child) => {
            if (child.isSkinnedMesh && child.morphTargetDictionary) {
                const index = child.morphTargetDictionary[target];
                if (
                    index === undefined ||
                    child.morphTargetInfluences[index] === undefined
                ) {
                    return;
                }
                child.morphTargetInfluences[index] = THREE.MathUtils.lerp(
                    child.morphTargetInfluences[index],
                    value,
                    speed
                );
            }
        });
    };
    const [blink, setBlink] = useState(false);
    const [winkLeft, setWinkLeft] = useState(false);
    const [winkRight, setWinkRight] = useState(false);
    //lip sync
    useFrame(() => {
        lerpMorphTarget("eyeBlinkLeft", blink || winkLeft ? 1 : 0, 0.5);
        lerpMorphTarget("eyeBlinkRight", blink || winkRight ? 1 : 0, 0.5);

        const currentAudioTime = audio.currentTime;
        Object.values(corresponding).forEach((value) => {
            // avatar.nodes.Wolf3D_Head.morphTargetInfluences[avatar.nodes.Wolf3D_Head.morphTargetDictionary[value]] = 0;
            // avatar.nodes.Wolf3D_Teeth.morphTargetInfluences[avatar.nodes.Wolf3D_Teeth.morphTargetDictionary[value]] = 0;
        })

        if (lipsync.mouthCues) {
            for (let i = 0; i <= lipsync.mouthCues.length; i++) {
                const mouthCue = lipsync.mouthCues[i];
                if (currentAudioTime >= mouthCue?.start && currentAudioTime <= mouthCue?.end) {
                    // avatar.nodes.Wolf3D_Head.morphTargetInfluences[avatar.nodes.Wolf3D_Head.morphTargetDictionary[corresponding[mouthCue.value]]] = 1;
                    // avatar.nodes.Wolf3D_Teeth.morphTargetInfluences[avatar.nodes.Wolf3D_Teeth.morphTargetDictionary[corresponding[mouthCue.value]]] = 1;
                    break;
                }
            }
        }

    },)

    useEffect(() => {
        let blinkTimeout;
        const nextBlink = () => {
            blinkTimeout = setTimeout(() => {
                setBlink(true);
                setTimeout(() => {
                    setBlink(false);
                    nextBlink();
                }, 100);
            }, THREE.MathUtils.randInt(1000, 5000));
        };
        nextBlink();
        return () => clearTimeout(blinkTimeout);
    }, []);


    async function apicall(text) {
        try {


        } catch (error) {
            console.error('Error:', error);
        }
    }

    function listening() {
        startListening();
    }
    return (
        <group>
            <primitive object={avatar.scene} scale={3.2} position-y={-3.5} rotation-y={0.5} />
            <Html position={[-1.2, 3, 0]}>
                <div>
                    {hasRecognitionSupport ? (
                        <>
                            {/* <div>
                                <button onClick={listening} className="bg-theme text-black w-[100px] p-2  rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-110 duration-500">Start Listening</button>
                            </div> */}
                            {/* {text} */}
                        </>
                    ) : (
                        <h1> your browser doesnot have speech recognition support</h1>
                    )}
                </div>

            </Html>
        </group>
    )
}
export const Avatar1 = (props) => {
    return (

        <Canvas dpr={[0, 2]}>
            <ambientLight />
            <pointLight position={[1, 1, 1]} />
            <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />
            <Avatar companionId={props.companion_id} />
        </Canvas>

    )
};