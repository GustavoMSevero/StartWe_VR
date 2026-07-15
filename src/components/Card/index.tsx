    import { useEffect, useState } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import axios from "axios";

    import avatarLogo from "../../assets/avatars/admin.png";

    import { Sidebar, Avatar, NavMenu, NavText, NavItem } from "./styles";

    function Card() {
        const navigate = useNavigate();
        
        const iduser = localStorage.getItem("iduser") ?? "";
        const username = localStorage.getItem("username") ?? "";

        const [numberMessages, setNumberMessages] = useState<number | null>(null);

        const [idParticipant, setIdParticipant] = useState<number | null>(null);

        const [photo, setPhoto] = useState<string | null>(null);

        function logout() {
            localStorage.removeItem("iduser");
            localStorage.removeItem("username");
            navigate("/");
        }

        function getPhoto() {
            axios.get("http://localhost:8888/web/react/StartWe_VR/php/getPhotoUser.php", {
                params: {
                    iduser: iduser,
                    option: "Get Photo",
                },
            })
            .then(function (response) {
                // console.log(response.data);
                setPhoto(response.data.filename);
            })
            .catch(function (error) {
                console.error(error);
            });
        }

        function getMessages() {
            axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiMessage.php", {
                params: {
                    username: username,
                    iduser: Number(iduser),
                    option: "Get Number Of Messages",
                },
            })
            .then(function (response) {
                // console.log(response.data);
                setNumberMessages(response.data.countMessages);
            })
            .catch(function (error) {
                console.error(error);
            });
        }

        function getIdParticipant() {
            axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiParticipant.php", {
                params: {
                    iduser: Number(iduser),
                    option: "Get Id Participant",
                },
            })
            .then(function (response) {
                // console.log(response.data);
                setIdParticipant(response.data.id);
            })
            .catch(function (error) {
                console.error(error);
            });
        }

        useEffect(() => {
            getPhoto();
            getIdParticipant();
            getMessages();
        }, []);

        return (
            <Sidebar>
                <Avatar>
                    {photo ? <img src={photo} alt="Avatar" width={72} height={72} /> : <img src={avatarLogo} alt="Avatar" width={72} height={72} />}
                </Avatar>
                <NavMenu>
                <Link id="link" to="/feed">Startups</Link>
                <Link id="link" to={`/editar-usuario/${iduser}`}>Perfil usuário</Link>
                <Link id="link" to={`/imagem-usuario/${iduser}`}>Foto usuário</Link>
                {idParticipant ? <Link id="link" to={`/editar-participante/${idParticipant}`}>Perfil participante</Link> : <></>}
                    <NavText>Nome: {username || "—"}</NavText>
                    <Link id="link" to="/perfil-startup">Criar nova Startup</Link>
                    <Link id="link" to={`/minhas-startups/${iduser}`}>Minhas Startups</Link>
                    <NavText>Mensagens: {numberMessages ? numberMessages : 0}</NavText>
                    <Link id="link" to={`/ver-mensagens/${iduser}`}>Ver Mensagens</Link>
                    <NavItem type="button" onClick={logout}>
                        Sair
                    </NavItem>
                </NavMenu>
            </Sidebar>
        )
    }

    export default Card;