import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router"

import FavoritesPage from "./pages/FavoritesPage"
import Layout from "./layout/Layout"
import IndexPage from "./pages/IndexPage"
import NotificationList from "./components/Notification"


const App = () => {
    return (
        <BrowserRouter>
            <NotificationList/>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/favoritos" element={<FavoritesPage/>} />
                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
export default App
