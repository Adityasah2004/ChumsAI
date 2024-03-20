import { useEffect, useState } from 'react'
import '../styles/AdminPanelBody.css'

const AdminPanelBody = () => {

    const [adminMenuOpen, setAdminMenuOpen] = useState(false);
    const [adminCompanions, setAdminCompanions] = useState([]);
    const handleAdminMenu = () => {
        setAdminMenuOpen(!adminMenuOpen);
    };

    const handleSubmit = (e) => {
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

    // admin get all companions
    const fetchAllCompanions = async () => {
        try {
            const response = await fetch(`http://localhost:8000/companion/admin_get_all_charcters`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log('Data:', data);
            setAdminCompanions(data);
            console.log('Admin Companions:', adminCompanions);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    console.log('Admin Companions:', adminCompanions);
    useEffect(() => {
        fetchAllCompanions();
    }, []);

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
            <div className='body-main-admin-div'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    {/* <p className='text-2xl text-white'>Upload GLB file </p> */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="file">
                            <p className="mb-2 text-sm flex gap-4 flex-col items-center text-gray-500 dark:text-gray-400">
                                <div className='flex flex-col'>
                                    <div className="flex items-center gap-2 text-xl text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            upload
                                        </span>Upload GLB file
                                    </div>
                                    <span className="text-xs font">Click to upload or drag and drop</span>
                                    <span>
                                        <span className="text-xs font">Supported formats: </span>
                                        <span className="text-xs font-semibold">.glb</span>
                                    </span>
                                </div>
                            </p>
                            <input type="file" id="file" />
                        </label>
                        <div className='flex gap-5 justify-center items-center px-1'>
                            <button type="submit">Upload</button>
                            <button type="reset" onClick={handleReset}>Cancel</button>
                        </div>
                    </div>
                </form>
                <div className='admin-comp-cards-div'>
                    {/* <p>Companions to Create</p> */}
                    <div className='overflow-y-auto flex flex-col gap-4'>
                        {
                            adminCompanions.length > 0 ?
                                adminCompanions.map((companion, index) => {
                                    return (
                                        <div className='companion-card' key={index}>
                                            <div className='companion-card-img'>
                                                <img src={companion.img} alt={companion.name} />
                                            </div>
                                            <div className='companion-card-details'>
                                                <p>{companion.name}</p>
                                                <p>{companion.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <p className='text-white'>No Companions to Create</p>
                        }
                        <div className='companion-card'>
                            <div className='companion-card-img'>
                                <img src="" alt={"companion.name"} />
                            </div>
                            <div className='companion-card-details'>
                                <p>companion.name</p>
                                <p>companion.description</p>
                            </div>
                        </div>
                        <div className='companion-card'>
                            <div className='companion-card-img'>
                                <img src="" alt={"companion.name"} />
                            </div>
                            <div className='companion-card-details'>
                                <p>companion.name</p>
                                <p>companion.description</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminPanelBody
