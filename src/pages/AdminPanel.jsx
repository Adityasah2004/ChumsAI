import AdminPanelBody from "../components/AdminPanelBody"
import AdminSideBar from "../components/AdminSideBar"
import "../styles/AdminPanel.css"

const AdminPanel = () => {
    
    return (
        <div className="admin-panel-div w-full h-screen">
            <AdminSideBar />
            <AdminPanelBody />
        </div>
    )
}

export default AdminPanel
