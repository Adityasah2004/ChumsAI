import { useEffect, useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const [leftProfileFileName, setLeftProfileFileName] = useState('');
    const [rightProfileFileName, setRightProfileFileName] = useState('');
    const [frontProfileFileName, setFrontProfileFileName] = useState('');

    function handleFrontImageChange(event) {
        setFrontImage(event.target.files[0]);
        setFrontProfileFileName(event.target.files[0].name);
        console.log("Front Image:", event.target.files[0]);
    }

    const handleLeftSideImageChange = (event) => {
        setLeftSideImage(event.target.files[0]);
        setLeftProfileFileName(event.target.files[0].name);
        console.log("Left Side Image:", event.target.files[0]);
    };

    const handleRightSideImageChange = (event) => {
        setRightSideImage(event.target.files[0]);
        setRightProfileFileName(event.target.files[0].name);
        console.log("Right Side Image:", event.target.files[0]);
    };

    const [frontImage, setFrontImage] = useState(null);
    const [leftSideImage, setLeftSideImage] = useState(null);
    const [rightSideImage, setRightSideImage] = useState(null);

    const handleInput = async () => {
        try {
            const formData = new FormData();
            formData.append('front', frontImage);
            formData.append('left_side', leftSideImage);
            formData.append('right_side', rightSideImage);

            const apiURL = "https://apiv1-wsuwijidsa-el.a.run.app/companion/upload_character_pics";
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
        private: null,
        right_side_public_id: "",
        right_side_src: "",
        translation_language_code: "",
        user_id: userId,
        user_voice: "",
        voice: "",
        voice_processing: true,
        age: null,
    });


    const handleInputChange = (field, value) => {
        if (field === "language") {
            if (value === "English") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "en-US",
                    translation_language_code: "en",
                }));
            } else if (value === "Hindi") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "hi-IN",
                    translation_language_code: "hi",
                }));
            } else if (value === "Spanish") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "es-ES",
                    translation_language_code: "es",
                }));
            } else if (value === "French") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "fr-FR",
                    translation_language_code: "fr",
                }));
            } else if (value === "Italian") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "it-IT",
                    translation_language_code: "it",
                }));
            } else if (value === "German") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "de-DE",
                    translation_language_code: "de",
                }));
            } else if (value === "Portuguese") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "pt-PT",
                    translation_language_code: "pt",
                }));
            } else if (value === "Russian") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "ru-RU",
                    translation_language_code: "ru",
                }));
            } else if (value === "Japanese") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "ja-JP",
                    translation_language_code: "ja",
                }));
            } else if (value === "Chinese") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "zh-CN",
                    translation_language_code: "zh",
                }));
            } else if (value === "Korean") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "ko-KR",
                    translation_language_code: "ko",
                }));
            } else if (value === "Dutch") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "nl-NL",
                    translation_language_code: "nl",
                }));
            } else if (value === "Turkish") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "tr-TR",
                    translation_language_code: "tr",
                }));
            } else if (value === "Swedish") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "sv-SE",
                    translation_language_code: "sv",
                }));
            } else if (value === "Indonesian") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "id-ID",
                    translation_language_code: "id",
                }));
            } else if (value === "Filipino") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "fil-PH",
                    translation_language_code: "fil",
                }));
            } else if (value === "Ukrainian") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "uk-UA",
                    translation_language_code: "uk",
                }));
            } else if (value === "Greek") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "el-GR",
                    translation_language_code: "el",
                }));
            } else if (value === "Czech") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "cs-CZ",
                    translation_language_code: "cs",
                }));
            } else if (value === "Finnish") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "fi-FI",
                    translation_language_code: "fi",
                }));
            } else if (value === "Romanian") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "ro-RO",
                    translation_language_code: "ro",
                }));
            } else if (value === "Danish") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "da-DK",
                    translation_language_code: "da",
                }));
            } else if (value === "Bulgarian") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "bg-BG",
                    translation_language_code: "bg",
                }));
            } else if (value === "Malay") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "ms-MY",
                    translation_language_code: "ms",
                }));
            } else if (value === "Slovak") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "sk-SK",
                    translation_language_code: "sk",
                }));
            } else if (value === "Croatian") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "hr-HR",
                    translation_language_code: "hr",
                }));
            } else if (value === "Classic Arabic") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "ar-SA",
                    translation_language_code: "ar",
                }));
            } else if (value === "Tamil") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "ta-IN",
                    translation_language_code: "ta",
                }));
            } else if (value === "Polish") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    Transcription_language_code: "pl-PL",
                    translation_language_code: "pl",
                }));
            } else {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    translation_language_code: "en-US",
                    Transcription_language_code: "en",
                }));
            }
            setFormData((prevFormData) => ({
                ...prevFormData,
                [field]: value,
            }));
        } 
        else if (field === "private") {
            const intValue = parseInt(value); // Convert value to integer
            setFormData((prevFormData) => ({
                ...prevFormData,
                private: intValue,
            }));
        }
        else{
            setFormData((prevFormData) => ({
                ...prevFormData,
                [field]: value,
            }));
        }
    }

        const [accessToken, setAccessToken] = useState("");

        useEffect(() => {
            const token = localStorageUtils.getAccessToken();
            setAccessToken(token);
        }, []);

        const handleVoiceChange = (e) => {
            const selectedVoice = e.target.value;
            playAudio(selectedVoice); 
        };

        const playAudio = (selectedVoice) => {
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
           
            if (audioSources[selectedVoice]) {
                const audio = new Audio(audioSources[selectedVoice]);
                audio.play();
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            // check if all the user voice or default voice is selected
            if (!formData.voice && !formData.user_voice) {
                alert("Please select a voice for your companion");
                return;
            }

            const url = "https://apiv1-wsuwijidsa-el.a.run.app/companion/";
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
                    navigate(`/dashboard/${userId}`);
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
                                    {leftProfileFileName && (
                                        <div className="message-div text-white font-thin">
                                            <span>{leftProfileFileName}</span>
                                        </div>
                                    )}
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
                                    {rightProfileFileName && (
                                        <div className="message-div text-white font-thin">
                                            <span>{rightProfileFileName}</span>
                                        </div>
                                    )}
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
                                    {frontProfileFileName && (
                                        <div className="message-div text-white font-thin">
                                            <span>{frontProfileFileName}</span>
                                        </div>
                                    )}
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
                            <label htmlFor="character-name" className="text-white">Name your character<span className="text-sky-500" title="required field">*</span></label>
                            <input
                                id="character-name"
                                type="text"
                                placeholder="Character Name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="border rounded-md p-2 w-full bg-black"
                                required
                            />
                        </div>
                        <div className="mb-4  flex flex-col items-start gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                            <label htmlFor="category" className="text-white"> Select Category<span className="text-sky-500" title="required field">*</span></label>
                            <select
                                id="category"
                                value={formData.category}
                                onChange={(e) => handleInputChange('category', e.target.value)}
                                className="border rounded-md p-2 w-full bg-black text-gray-500"
                                required
                            >
                                <option value="" disabled defaultChecked>Select Category</option>
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
                            <label htmlFor="greeting" className="text-white">How would you like your character to greet you?<span className="text-sky-500" title="required field">*</span></label>
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
                                    value={formData.voice}
                                    onChange={(e) => { handleInputChange('voice', e.target.value), handleVoiceChange(e) }}
                                    className="border rounded-md p-2 w-full bg-black text-gray-500"
                                    // required
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
                                <label htmlFor="visibility" className="text-white" > Select Visibility<span className="text-sky-500" title="required field">*</span></label>
                                <select
                                    id="visibility"
                                    value={formData.private}
                                    onChange={(e) => handleInputChange('private', e.target.value)}
                                    className="border rounded-md p-2 w-full bg-black text-gray-500"
                                // required
                                >
                                    <option value="" disabled selected>Select Visibility</option>
                                    <option value={0}>Public</option>
                                    {/* <option value="unlisted">Unlisted</option> */}
                                    <option value={1}>Private</option>
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
                                    <option value="" disabled required defaultChecked>Select Language</option>
                                    {languagesList.map((language, index) => (
                                        <option key={index} >{language}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full md:w-4/5 gap-8 px-4 flex-col items-center md:justify-between md:flex-row">
                        <div className="mb-4  flex flex-col items-start justify-between gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
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
                    </div>
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
                                        checked={formData.enable3dAvatar}
                                        onChange={() => handleInputChange('enable3dAvatar')}
                                        className="text-black mr-2"
                                    />
                                    Enable 3D Avatar
                                </label>
                            </div>
                            <div className="mb-4 w-fit">
                                <label className="flex items-center">
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