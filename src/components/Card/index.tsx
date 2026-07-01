import { Link, useNavigate } from "react-router-dom";

import avatarLogo from "../../assets/avatars/admin.png";

import { Sidebar, Avatar, NavMenu, NavText, NavItem } from "./styles";

function Card() {
    const navigate = useNavigate();
    const iduser = localStorage.getItem("iduser") ?? "";
    const username = localStorage.getItem("username") ?? "";

    function logout() {
        localStorage.removeItem("iduser");
        localStorage.removeItem("username");
        navigate("/");
    }
    return (
        <Sidebar>
            <Avatar><img src={avatarLogo} alt="Avatar" width={72} height={72} /></Avatar>
            <NavMenu>
            <Link id="link" to="/feed">Startups</Link>
            <Link id="link" to={`/editar-usuario/${iduser}`}>Perfil usuário</Link>
                <NavText>Nome: {username || "—"}</NavText>
                <Link id="link" to="/perfil-startup">Criar nova Startup</Link>
                <Link id="link" to="/minhas-startups">Minhas Startups</Link>
                <NavText>Notificações:</NavText>
                <NavItem type="button" onClick={logout}>
                    Sair
                </NavItem>
            </NavMenu>
        </Sidebar>
    )
}

export default Card;