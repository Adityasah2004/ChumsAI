import React, { useEffect, useState } from "react";
import { Modal, FileInput, Label } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import localStorageUtils from "../Hooks/localStorageUtils";

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
  };

  const handleSelectChange = (field, value) => {
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
  };

  return (
    <Modal show={true} size="md" onClose={onClose} popup>
      <Modal.Body>
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-md overflow-y-auto">
            <div className="flex justify-start m-2">
              <Link
                to="/dashboard"
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <HiOutlineArrowLeft size={24} />
              </Link>
            </div>
            <h2 className="text-black text-2xl font-bold mb-4">
              Create Your AI Companion
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label
                  htmlFor="avatar-file"
                  className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <p className="text-xl text-gray-500 dark:text-gray-400">
                      Upload Avatar
                    </p>
                    <span className="text-xs font-semibold">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  <FileInput
                    id="avatar-file"
                    onChange={(files) => handleFileChange(files, "avatarFile")}
                    className="hidden"
                  />
                </Label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Character Name"
                  value={formData.characterName.firstName}
                  onChange={(e) =>
                    handleNameChange("firstName", e.target.value)
                  }
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="border rounded-md p-2 w-full"
                >
                  <option value="">Select Category</option>
                  <option value="">Singer</option>
                  <option value="">Comedian</option>
                  <option value="">Therapist</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Greeting"
                  value={formData.greeting}
                  onChange={(e) =>
                    handleInputChange("greeting", e.target.value)
                  }
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="voice-file"
                  className="text-left text-sm font-semibold mb-2"
                >
                  Voice File (MP3)
                </Label>
                <FileInput
                  id="voice-file"
                  onChange={(files) => handleFileChange(files, "voiceFile")}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <select
                  value={formData.defaultVoice}
                  onChange={(e) =>
                    handleInputChange("defaultVoice", e.target.value)
                  }
                  className="border rounded-md p-2 w-full"
                >
                  <option value="">Select Default Voice</option>
                  <option value="">AI Voice 1</option>
                  <option value="">AI Voice 2</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.enable3DAvatar}
                    onChange={() => handleCheckboxChange("enable3DAvatar")}
                    className="text-black mr-2"
                  />
                  Enable 3D Avatar
                </label>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.enable_3d_avatar}
                    onChange={() => handleCheckboxChange("enable_3d_avatar")}
                    className="text-black mr-2"
                  />
                  Enable Voice Input Processing
                </label>
              </div>
              <div className="mb-4">
                <select
                  value={formData.visibility}
                  onChange={(e) =>
                    handleInputChange("visibility", e.target.value)
                  }
                  className="border rounded-md p-2 w-full"
                >
                  <option value="">Select Visibility</option>
                  <option value="public">Public</option>
                  <option value="unlisted">Unlisted</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CompanionCreation;
