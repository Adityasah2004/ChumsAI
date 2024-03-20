import { useEffect, useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import localStorageUtils from "../Hooks/localStorageUtils";
import frontProfile from "../assets/frontProfile.png";
import leftProfile from "../assets/leftProfile.png";
import rightProfile from "../assets/rightProfile.png";
import '../styles/CompanionCreation.css';
import Natasha from "../assets/default audio/voice_preview_Natasha - Valley girl.mp3";
import Alex from "../assets/default audio/voice_preview_Alex - expressive narrator.mp3";
import Priya from "../assets/default audio/voice_preview_Priya - affectionate and delicate.mp3";
import Meera from "../assets/default audio/voice_preview_Meera - high quality, emotive.mp3";
import Vikram from "../assets/default audio/voice_preview_Vikram.mp3";
import Mark from "../assets/default audio/voice_preview_Mark - Young and Calm.mp3";
import Markus from "../assets/default audio/voice_preview_Markus - Mature and Chill.mp3";
import Sally from "../assets/default audio/voice_preview_Sally - very realistic, superb.mp3";

const userId = localStorageUtils.getUserId();
const bearerToken = localStorageUtils.getAccessToken();

function CompanionCreation() {
    const history = useHistory();

    function handleFrontImageChange(event) {
        setFrontImage(event.target.files[0]);
        console.log("Front Image:", event.target.files[0]);
    }

    const handleLeftSideImageChange = (event) => {
        setLeftSideImage(event.target.files[0]);
        console.log("Left Side Image:", event.target.files[0]);
    };

    const handleRightSideImageChange = (event) => {
        setRightSideImage(event.target.files[0]);
        console.log("Right Side Image:", event.target.files[0]);
    };

    const [frontImage, setFrontImage] = useState(null);
    const [leftSideImage, setLeftSideImage] = useState(null);
    const [rightSideImage, setRightSideImage] = useState(null);
    // const [frontUrl, setFrontUrl] = useState("");
    // const [leftSideUrl, setLeftSideUrl] = useState("");
    // const [rightSideUrl, setRightSideUrl] = useState("");
    // const [frontPublicId, setFrontPublicId] = useState("");
    // const [leftSidePublicId, setLeftSidePublicId] = useState("");
    // const [rightSidePublicId, setRightSidePublicId] = useState("");
    // let frontUrlN = "";
    // let leftSideUrlN = "";
    // let rightSideUrlN = "";
    // let frontPublicIdN = "";
    // let leftSidePublicIdN = "";
    // let rightSidePublicIdN = "";

    const handleInput = async () => {
        try {
            const formData = new FormData();
            formData.append('front', frontImage);
            formData.append('left_side', leftSideImage);
            formData.append('right_side', rightSideImage);

            const apiURL = "http://localhost:8000/companion/upload_character_pics";
            const requestOptions = {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${bearerToken}`,
                },
                body: formData
            };

            console.log("form data:", formData);
            const response = await fetch(apiURL, requestOptions);
            console.log("Response:", response);
            if (!response.ok) {
                throw new Error(`Failed to upload images. Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log('Public IDs:', responseData);

            // console.log('Front Image URL:', responseData[0].url);
            // setFrontUrl(responseData[0].url);
            // setFrontPublicId(responseData[0].public_id);
            // frontUrlN = frontUrl;
            // frontPublicIdN = frontPublicId;

            // console.log('Left Side Image URL:', responseData[1].url);
            // setLeftSideUrl(responseData[1].url);
            // setLeftSidePublicId(responseData[1].public_id);
            // leftSideUrlN = leftSideUrl;
            // leftSidePublicIdN = leftSidePublicId;

            // console.log('Right Side Image URL:', responseData[2].url);
            // setRightSideUrl(responseData[2].url);
            // setRightSidePublicId(responseData[2].public_id);
            // rightSideUrlN = rightSideUrl;
            // rightSidePublicIdN = rightSidePublicId;

            // Set the form data after getting the response
            setFormData((prevFormData) => ({
                ...prevFormData,
                front_public_id: responseData[0].Public_id,
                front_src: responseData[0].url,
                left_side_public_id: responseData[1].Public_id,
                left_side_src: responseData[1].url,
                right_side_public_id: responseData[2].Public_id,
                right_side_src: responseData[2].url,
            }));
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };

    useEffect(() => {
        if (frontImage && leftSideImage && rightSideImage) {
            handleInput();
        }
    }, [frontImage, leftSideImage, rightSideImage]);


    // console.log("before form data fronturl", frontUrl);
    const [formData, setFormData] = useState({
        Transcription_language_code: "",
        avatar_attire: "",
        category: "",
        description: "",
        enable_3d_avatar: true,
        front_public_id: "",
        front_src: "",
        greetings: "",
        language: "",
        left_side_public_id: "",
        left_side_src: "",
        message: "",
        message_count: 0,
        name: "",
        private: 1,
        right_side_public_id: "",
        right_side_src: "",
        translation_language_code: "",
        user_id: userId,
        user_voice: "",
        voice: "",
        voice_processing: true
    });


    const handleInputChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };

    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const token = localStorageUtils.getAccessToken();
        setAccessToken(token);
    }, []);

    const handleVoiceChange = (e) => {
        const selectedVoice = e.target.value;
        playAudio(selectedVoice); // Call playAudio function whenever a voice option is selected
    };

    const playAudio = (selectedVoice) => {
        // Define audio sources based on selected option
        const audioSources = {
            "Natasha": Natasha,
            "Alex": Alex,
            "Priya": Priya,
            "Meera": Meera,
            "Vikram": Vikram,
            "Mark": Mark,
            "Markus": Markus,
            "Sally": Sally
        };
        // Check if selected voice has an associated audio source
        if (audioSources[selectedVoice]) {
            const audio = new Audio(audioSources[selectedVoice]);
            // play the new audio
            audio.play();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = "http://localhost:8000/companion/";
        const bearerToken = accessToken;

        try {
            console.log("Form Data:", formData);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearerToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Response from backend:", responseData);
                history.push(`/dashboard/${userId}`);
                // onClose();
            } else {
                const responseData = await response.json();
                console.error("Error sending data to backend:", responseData);
            }
        } catch (error) {
            console.error("Error sending data to backend:", error.message);
        }
    };

    const languagesList = ["Chinese", "Korean", "Dutch", "Turkish", "Swedish", "Indonesian", "Filipino", "Japanese", "Ukrainian", "Greek", "Czech", "Finnish", "Romanian", "Russian", "Danish", "Bulgarian", "Malay", "Slovak", "Croatian", "Classic Arabic", "Tamil", "English", "Polish", "German", "Spanish", "French", "Italian", "Hindi", "Portuguese"]

    return (
        <div className="z-50 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 relative">
            <img src="../create-form-bg-img2.svg" alt="" width={400} className="absolute -z-10 -top-40 -right-40 opacity-25 lg:opacity-50" />
            <div className="flex justify-start w-full p-4 gap-4 items-center">
                <Link to={`/dashboard/${userId}`} className="text-gray-200 hover:text-gray-300 cursor-pointer flex justify-center items-center">
                    <HiOutlineArrowLeft size={24} />
                </Link>
                <h1 className="create-form-heading flex-1">Create your AI Companion</h1>
            </div>
            <form className="create-comp-form w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col px-4 w-full mt-10 mb-2 md:w-4/5">
                    <p className="text-white text-left" style={{ fontSize: "clamp(0.6rem, 4vw, 1.2rem)" }}>Upload 3 photos to create your avatar (.svg, .png, .jpg, or .gif ) <span className="text-sky-500" title="required field">*</span></p>
                    <div className="img-drop-area-div my-5 flex gap-4 justify-around">
                        <Label
                            htmlFor="avatar-file1"
                            className="img-drop-area dark:hover:bg-bray-800 flex h-64 w-fit px-8 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-black hover:bg-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <p className="mb-2 text-sm flex gap-4 flex-col items-center text-gray-500 dark:text-gray-400">
                                <div>
                                    <div className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            upload
                                        </span>Upload Left Profile Image
                                    </div>
                                    <span className="text-xs font">Click to upload or drag and drop</span>
                                </div>
                                <img src={leftProfile} alt="" width="100" className="rounded-xl" />
                            </p>
                            <FileInput
                                id="avatar-file1"
                                onChange={(files) => handleLeftSideImageChange(files, 'avatarFile1')}
                                className="hidden"
                                required
                            />
                        </Label>
                        <Label
                            htmlFor="avatar-file2"
                            className="img-drop-area dark:hover:bg-bray-800 flex h-64 w-fit px-8 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-black hover:bg-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <p className="mb-2 text-sm flex gap-4 flex-col items-center text-gray-500 dark:text-gray-400">
                                <div>
                                    <div className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            upload
                                        </span>Upload Right Profile Image
                                    </div>
                                    <span className="text-xs font">Click to upload or drag and drop</span>
                                </div>
                                <img src={rightProfile} alt="" width="100" className="rounded-xl" />
                            </p>
                            <FileInput
                                id="avatar-file2"
                                onChange={(files) => handleRightSideImageChange(files, 'avatarFile2')}
                                className="hidden"
                                required
                            />
                        </Label>
                        <Label
                            htmlFor="avatar-file3"
                            className="img-drop-area dark:hover:bg-bray-800 flex h-64 w-fit px-8 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-black hover:bg-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <p className="mb-2 text-sm flex gap-4 flex-col items-center text-gray-500 dark:text-gray-400">
                                <div>
                                    <div className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            upload
                                        </span>Upload Front Profile Image
                                    </div>
                                    <span className="text-xs font">Click to upload or drag and drop</span>
                                </div>
                                <img src={frontProfile} alt="" width="100" className="rounded-xl" />
                            </p>
                            <FileInput
                                id="avatar-file3"
                                onChange={(files) => handleFrontImageChange(files, 'avatarFile3')}
                                className="hidden"
                                required
                            />
                        </Label>
                    </div>
                </div>

                <div className="flex w-full md:w-4/5 gap-8 px-4 flex-col items-center md:justify-between md:flex-row">
                    <div className="mb-4  flex flex-col items-start justify-between gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <label htmlFor="character-name" className="text-white">Enter any name for your companion <span className="text-sky-500" title="required field">*</span></label>
                        <input
                            id="character-name"
                            type="text"
                            placeholder="Character Name"
                            value={formData.characterName}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="border rounded-md p-2 w-full bg-black"
                            required
                        />
                    </div>
                    <div className="mb-4  flex flex-col items-start gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <label htmlFor="category" className="text-white">Select Category <span className="text-sky-500" title="required field">*</span></label>
                        <select
                            id="category"
                            value={formData.category}
                            onChange={(e) => handleInputChange('category', e.target.value)}
                            className="border rounded-md p-2 w-full bg-black text-gray-500"
                            required
                        >
                            <option value="" disabled selected>Select Category</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Wellness and Mental Health"> Wellness and Mental Health</option>
                            <option value="Education">Education</option>
                            <option value="Social Interaction">Social Interaction</option>
                            <option value="Custom Solutions">Custom Solutions</option>
                        </select>
                    </div>
                </div>

                <div className="flex w-full gap-8 px-4 flex-col items-center md:justify-between md:w-4/5 md:flex-row">
                    <div className="mb-4  w-full flex flex-col items-start justify-between gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <label htmlFor="description" className="text-white">Enter a description for your character <span className="text-sky-500" title="required field">*</span></label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className="border rounded-md p-2 w-full bg-black"
                        />
                    </div>
                    <div className="mb-4  w-full flex flex-col items-start gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <label htmlFor="greeting" className="text-white">Enter a greeting for your character <span className="text-sky-500" title="required field">*</span></label>
                        <input
                            id="greeting"
                            type="text"
                            placeholder="Greeting"
                            value={formData.greetings}
                            onChange={(e) => handleInputChange('greetings', e.target.value)}
                            className="border rounded-md p-2 w-full bg-black"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center md:justify-between md:w-4/5 md:flex-row text-white gap-8 px-4">
                    <div className="flex gap-4 flex-col items-start md:justify-between text-white" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <div className=" flex flex-col items-start justify-between gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500x" }}>
                            <label htmlFor="voice-file" className="text-white">Upload your voice file or select a default voice <span className="text-sky-500" title="required field">*</span></label>
                            <input
                                type="file"
                                id="voice-file"
                                onChange={(user_voice) => handleInputChange(user_voice, 'voiceFile')}
                                className="border rounded-md w-full bg-black"
                            />
                        </div>
                        <p className="or">---- OR ----</p>
                        <div className=" flex flex-col items-start gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500x" }}>
                            {/* <label htmlFor="category" className="text-white">Select Category</label> */}
                            <select
                                id="category"
                                value={formData.defaultVoice}
                                onChange={(e) => { handleInputChange('voice', e.target.value), handleVoiceChange(e) }}
                                className="border rounded-md p-2 w-full bg-black text-gray-500"
                                required
                            >
                                <option value="" disabled selected>Select Default Voice</option>
                                <option value="Natasha">Natasha - vally girl</option>
                                <option value="Alex">Alex - expression narrator</option>
                                <option value="Priya">Priya - affectionate and delicate</option>
                                <option value="Meera">Meera - high quality, emotive</option>
                                <option value="Vikram">Vikram</option>
                                <option value="Mark">Mark - Young and Calm</option>
                                <option value="Markus">Markus - Mature and Chill</option>
                                <option value="Sally">Sally - very realistic, superb</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col w-full justify-between gap-8 md:gap-6" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <div className="flex flex-col gap-2 items-start" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                            <label htmlFor="visibility" className="text-white" >Visibility <span className="text-sky-500" title="required field">*</span></label>
                            <select
                                id="visibility"
                                value={formData.visibility}
                                onChange={(e) => handleInputChange('private', e.target.value)}
                                className="border rounded-md p-2 w-full bg-black text-gray-500"
                            // required
                            >
                                <option value="" disabled selected>Select Visibility</option>
                                <option value="public">Public</option>
                                {/* <option value="unlisted">Unlisted</option> */}
                                <option value="private">Private</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2 items-start' style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                            <label htmlFor="visibility" className="text-white" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)" }}>Select Language <span className="text-sky-500" title="required field">*</span></label>
                            <select
                                value={formData.language}
                                onChange={(e) => handleInputChange('language', e.target.value)}
                                className="border rounded-md p-2 w-full bg-black text-gray-500"
                                required
                            >
                                <option value="" disabled required>Select Language</option>
                                {languagesList.map((language, index) => (
                                    <option key={index} value={language}>{language}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex w-full md:w-4/5 gap-8 px-4 flex-col items-center md:justify-between md:flex-row">
                    {/* <div className="mb-4  flex flex-col items-start justify-between gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <label htmlFor="age" className="text-white">Age <span className="text-sky-500" title="required field">*</span></label>
                        <input
                            id="age"
                            type="number"
                            placeholder="Age"
                            value={formData.age}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                            className="border rounded-md p-2 w-full bg-black"
                            required
                        />
                    </div> */}
                    <div className="mb-4  w-full flex flex-col items-start gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <label htmlFor="attier" className="text-white">Attier preference <span className="text-sky-500" title="required field">*</span></label>
                        <input
                            id="attier"
                            type="text"
                            placeholder="Attier"
                            value={formData.avatar_attire}
                            onChange={(e) => handleInputChange('avatar_attire', e.target.value)}
                            className="border rounded-md p-2 w-full bg-black"
                        />
                    </div>
                </div>

                <div className="text-white flex md:justify-start px-4 justify-center w-full md:w-4/5">
                    <div className="flex flex-col gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <div className="mb-4 w-fit">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.enable3DAvatar}
                                    onChange={() => handleInputChange('enable3dAvatar')}
                                    className="text-black mr-2"
                                />
                                Enable 3D Avatar
                            </label>
                        </div>
                        <div className="mb-4 w-fit">
                            <label className="flex items-start md:items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.enableVoiceInputProcessing}
                                    onChange={() => handleInputChange('enableVoiceInputProcessing')}
                                    className=" text-black mr-2"
                                />
                                Enable Voice Input Processing
                            </label>
                        </div>
                    </div>
                </div>

                <label className="flex justify-center items-center gap-4">
                    <input
                        type="checkbox"
                        required
                    />
                    <p className="text-white">
                        I agree to the<Link to="/terms" className="text-sky-500 hover:underline"> terms and conditions</Link>
                    </p>
                </label>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="border flex px-5 py-2 font-thick text-lg bg-white rounded-full hover:bg-transparent hover:border-white hover:text-white transition-all"
                    >
                        Submit
                    </button>
                </div>
            </form >
        </div >
    );
}

export default CompanionCreation