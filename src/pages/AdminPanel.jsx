import { lazy, Suspense } from "react"
// import AdminPanelBody from "../components/AdminPanelBody"
const AdminPanelBody = lazy(() => import("../components/AdminPanelBody"))
// import AdminSideBar from "../components/AdminSideBar"
const AdminSideBar = lazy(() => import("../components/AdminSideBar"))
import "../styles/AdminPanel.css"

const AdminPanel = () => {
    
    return (
        <div className="admin-panel-div w-full h-screen">
            <Suspense fallback={<div>Loading...</div>}>
            <AdminSideBar />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <AdminPanelBody />
            </Suspense>
        </div>
    )
}

export default AdminPanel
