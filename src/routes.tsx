import { createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import SelectProfile from './Pages/SelectProfile'
import StartupProfile from './Pages/StartupProfile'
import ParticipantProfile from './Pages/ParticipantProfile'
import Feed from './Pages/Feed'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Register />
    },
    {
        path: "/selecionar-perfil",
        element: <SelectProfile />
    },
    {
        path: "/perfil-startup",
        element: <StartupProfile />
    },
    {
        path: "/perfil-participante",
        element: <ParticipantProfile />
    },
    {
        path: "/feed",
        element: <Feed />
    },
])

export default router