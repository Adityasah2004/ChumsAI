import { useEffect, useState } from "react";
import { Modal, FileInput, Label } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import localStorageUtils from "../Hooks/localStorageUtils";
import frontProfile from "../assets/frontProfile.png";
import leftProfile from "../assets/leftProfile.png";
import rightProfile from "../assets/rightProfile.png";
import '../styles/CompanionCreation.css';


function SomeParentComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
}
const userId = localStorageUtils.getUserId();

function CompanionCreation({ onClose }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        src: "",
        public_id: "",
        characterName: "",
        description: "",
        greetings: "",
        user_id: userId,
        private: 0,
        category: "",
        voice: "",
        enable_3d_avatar: false,
        voice_processing: false,
        visibility: "",
        language: "",
        age: "",
        avatar_attire: ""
    });

    const handleInputChange = async (field, value) => {
        if (field === 'file') {
            const formData = new FormData();
            formData.append('file', value);

            try {
                const response = await fetch('http://localhost:8000/companion/upload_character_pic', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const result = await response.json();
                    // Log the fetched public URL to the console
                    console.log('Fetched Public URL:', result.url);

                    // Handle the result as needed, e.g., update state with the received data
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        imageUrl: result.url, // assuming you want to store the URL in state
                        publicId: result.Public_id,
                    }));
                } else {
                    // Handle the error response
                    console.error('Error uploading file:', response.statusText);
                }
            } catch (error) {
                console.error('Error uploading file:', error.message);
            }
        } else {
            // Handle other input fields if needed
            setFormData((prevFormData) => ({
                ...prevFormData,
                [field]: value,
            }));
        }
    };



    const handleNameChange = (nameField, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            characterName: {
                ...prevFormData.characterName,
                [nameField]: value,
            },
        }));
    };

    const handleCheckboxChange = (field) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: !prevFormData[field],
        }));
    };

    const handleFileChange = (files, fileType) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fileType]: files[0],
        }));
        console.log("File Type:", fileType);
    };

    // const handleSelectChange = (field, value) => {
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [field]: value,
    //     }));
    // };

    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const token = localStorageUtils.getAccessToken();
        setAccessToken(token);
    }, []);

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
                onClose();
            } else {
                const responseData = await response.json();
                console.error("Error sending data to backend:", responseData);
            }
        } catch (error) {
            console.error("Error sending data to backend:", error.message);
        }
    }; // Add closing parenthesis here

    const languagesList = ["Chinese", "Korean", "Dutch", "Turkish", "Swedish", "Indonesian", "Filipino", "Japanese", "Ukrainian", "Greek", "Czech", "Finnish", "Romanian", "Russian", "Danish", "Bulgarian", "Malay", "Slovak", "Croatian", "Classic Arabic", "Tamil", "English", "Polish", "German", "Spanish", "French", "Italian", "Hindi", "Portuguese"]

    return (
        // <Modal show={true} size="xxl" onClose={onClose} popup>
        // <Modal.Body>
        <div className="z-50 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 relative">
            {/* <div className="p-2 flex flex-col gap-4 shadow-lg w-full overflow-y-auto"> */}
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
                                    <p className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            upload
                                        </span>Upload Left Profile Image
                                    </p>
                                    <span className="text-xs font">Click to upload or drag and drop</span>
                                </div>
                                {/* <div className="flex flex-col items-center"> */}
                                <img src={leftProfile} alt="" width="100" className="rounded-xl" />
                                {/* <span>Left profile image</span> */}
                                {/* </div> */}
                            </p>
                            {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                            <FileInput
                                id="avatar-file1"
                                onChange={(files) => handleFileChange(files, 'avatarFile1')}
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
                                    <p className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            upload
                                        </span>Upload Right Profile Image
                                    </p>
                                    <span className="text-xs font">Click to upload or drag and drop</span>
                                </div>
                                {/* <div className="flex flex-col items-center"> */}
                                <img src={rightProfile} alt="" width="100" className="rounded-xl" />
                                {/* <span>Left profile image</span> */}
                                {/* </div> */}
                            </p>
                            {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                            <FileInput
                                id="avatar-file2"
                                onChange={(files) => handleFileChange(files, 'avatarFile2')}
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
                                    <p className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            upload
                                        </span>Upload Front Profile Image
                                    </p>
                                    <span className="text-xs font">Click to upload or drag and drop</span>
                                </div>
                                {/* <div className="flex flex-col items-center"> */}
                                <img src={frontProfile} alt="" width="100" className="rounded-xl" />
                                {/* <span>Left profile image</span> */}
                                {/* </div> */}
                            </p>
                            {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                            <FileInput
                                id="avatar-file3"
                                onChange={(files) => handleFileChange(files, 'avatarFile3')}
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
                            value={formData.characterName.firstName}
                            onChange={(e) => handleNameChange('firstName', e.target.value)}
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
                            onChange={(e) => handleInputChange('greeting', e.target.value)}
                            className="border rounded-md p-2 w-full bg-black"
                        />
                    </div>
                </div>
                {/* <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Greeting"
                        value={formData.greeting}
                        onChange={(e) => handleInputChange('greeting', e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div> */}
                <div className="w-full flex flex-col items-center md:justify-between md:w-4/5 md:flex-row text-white gap-8 px-4">
                    <div className="flex gap-4 flex-col items-start md:justify-between text-white" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <div className=" flex flex-col items-start justify-between gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500x" }}>
                            <label htmlFor="voice-file" className="text-white">Upload your voice file or select a default voice <span className="text-sky-500" title="required field">*</span></label>
                            <input
                                type="file"
                                id="voice-file"
                                onChange={(files) => handleFileChange(files, 'voiceFile')}
                                className="border rounded-md w-full bg-black"
                            />
                        </div>
                        <p className="or">---- OR ----</p>
                        <div className=" flex flex-col items-start gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500x" }}>
                            {/* <label htmlFor="category" className="text-white">Select Category</label> */}
                            <select
                                id="category"
                                value={formData.defaultVoice}
                                onChange={(e) => handleInputChange('defaultVoice', e.target.value)}
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
                                onChange={(e) => handleInputChange('visibility', e.target.value)}
                                className="border rounded-md p-2 w-full bg-black text-gray-500"
                                required
                            >
                                <option value="" disabled selected>Select Visibility</option>
                                <option value="public">Public</option>
                                <option value="unlisted">Unlisted</option>
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
                    <div className="mb-4  flex flex-col items-start justify-between gap-2" style={{ fontSize: "clamp(0.5rem, 4vw, 1.2rem)", width: "100%", maxWidth: "500px" }}>
                        <label htmlFor="age" className="text-white">Enter your age <span className="text-sky-500" title="required field">*</span></label>
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
                        <label htmlFor="attier" className="text-white">Enter your attier <span className="text-sky-500" title="required field">*</span></label>
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
                                    onChange={() => handleCheckboxChange('enable3DAvatar')}
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
                                    onChange={() => handleCheckboxChange('enableVoiceInputProcessing')}
                                    className=" text-black mr-2"
                                />
                                Enable Voice Input Processing
                            </label>
                        </div>
                    </div>
                </div>
                {/* <div className='flex flex-col gap-2 text-white'>
                    <div className="flex flex-col">
                        <Label htmlFor="voice-file" className="  text-left text-sm text-white">
                            Voice File (MP3)
                        </Label>
                        <FileInput
                            id="voice-file"
                            onChange={(files) => handleFileChange(files, 'voiceFile')}
                            className=""
                        />
                    </div>
                        <span>or</span>
                    <div className="mb-4">
                        <select
                            value={formData.defaultVoice}
                            onChange={(e) => handleInputChange('defaultVoice', e.target.value)}
                            className="border rounded-md p-2 w-full"
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
                </div> */}
                
                <label className="flex justify-center items-center gap-4">
                    <input
                        type="checkbox"
                        required
                    />
                    <Link to="/terms" className="text-sky-500 hover:underline">I agree to the terms and conditions</Link>
                </label>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="border flex px-5 py-2 font-thick text-lg bg-white rounded-full hover:bg-transparent hover:border-white hover:text-white transition-all"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {/* </div> */}
        </div>
        // </Modal.Body>
        // </Modal>
    );
}

export default CompanionCreation