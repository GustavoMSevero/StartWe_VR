import { createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import SelectProfile from './Pages/SelectProfile'
import StartupProfile from './Pages/StartupProfile'
import ParticipantProfile from './Pages/ParticipantProfile'
import Feed from './Pages/Feed'
import EditUser from './Pages/EditUser'
import MyStartups from './Pages/MyStartups'
import MyStartup from './Pages/MyStartup'
import EditStartup from './Pages/EditStartup'
import PhotoUser from './Pages/PhotoUser'
import EditParticipant from './Pages/EditParticipant'
import SendMessage from './Pages/SendMessage'
import ReceiveMessage from './Pages/ReceiveMessage'
import ReadMessage from './Pages/ReadMessage'

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
    {
        path: "/editar-usuario/:iduser",
        element: <EditUser />
    },
    {
        path: "/minhas-startups/:iduser",
        element: <MyStartups />
    },
    {
        path: "/startup/:idStartup",
        element: <MyStartup />
    },
    {
        path: "/editar-startup/:idStartup",
        element: <EditStartup />
    },
    {
        path: "/imagem-usuario/:iduser",
        element: <PhotoUser />
    },
    {
        path: "/editar-participante/:idparticipant",
        element: <EditParticipant />
    },
    {
        path: "/enviar-mensagem/:idStartup",
        element: <SendMessage />
    },
    {
        path: "/ver-mensagens/:iduser",
        element: <ReceiveMessage />
    },
    {
        path: "/ler-mensagem/:id",
        element: <ReadMessage />
    },
])

export default router