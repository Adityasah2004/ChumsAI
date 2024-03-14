import { useState } from 'react'
import '../styles/AdminPanelBody.css'

const AdminPanelBody = () => {

    const [adminMenuOpen, setAdminMenuOpen] = useState(false);
    const handleAdminMenu = () => {
        setAdminMenuOpen(!adminMenuOpen);
    };

    const handleSubmit = (e) =>  {
        e.preventDefault();
        const file = document.getElementById('file').files[0];
        if (file) {
            console.log('File:', file);
        }
    }

    // cancel button
    const handleReset = (e) => {
        e.preventDefault();
        document.getElementById('file').value = '';
    }

    return (
        <div className="admin-panel-body-div w-full md:rounded-xl ">
            <div className='flex w-full justify-center relative'>
                {
                    adminMenuOpen ? (
                        <div className='admin-menu-div p-4 fixed bg-black rounded-3xl ml-2 top-16 left-2 h-max z-50'>
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <a href="/" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            home
                                        </span>
                                        <span className="ms-3">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            logout
                                        </span>
                                        <p className="ms-3 inline-block">Log Out</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : null
                }
                <div className='admin-icon-nav'>

                    {
                        adminMenuOpen ?
                            <span onClick={handleAdminMenu} className="admin-menu-icon material-symbols-outlined text-white cursor-pointer">
                                close
                            </span>
                            :
                            <span onClick={handleAdminMenu} className="admin-menu-icon material-symbols-outlined text-white cursor-pointer">
                                menu
                            </span>
                    }
                </div>
                <h1>Welcome to Admin Panel</h1>
            </div>
            {/* <div className='form-div text-white flex flex-col items-center gap-5'> */}
                {/* <p>Upload GLB file of the user with naming convention as user_id.glb</p> */}
                {/* input area to upload file */}
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <label htmlFor="file">
                        <p className="mb-2 text-sm flex gap-4 flex-col items-center text-gray-500 dark:text-gray-400">
                            <div className='flex flex-col'>
                                <p className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                    <span className="material-symbols-outlined">
                                        upload
                                    </span>Upload GLB file
                                </p>
                                <span className="text-xs font">Click to upload or drag and drop</span>
                                <span>
                                    <span className="text-xs font">Supported formats: </span>
                                    <span className="text-xs font-semibold">.glb</span>
                                </span>
                            </div>
                        </p>
                        <input type="file" id="file"/>
                    </label>
                    <div className='flex gap-5 justify-center items-center px-1'>
                        <button type="submit">Upload</button>
                        <button type="reset" onClick={handleReset}>Cancel</button>
                    </div>
                </form>
            {/* </div> */}
        </div>
    )
}

export default AdminPanelBody
