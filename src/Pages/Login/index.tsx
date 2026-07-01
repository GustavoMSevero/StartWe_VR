import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import {
    Container,
    DivLeft,
    DivRight,
    FormLogin,
    InputLogin,
    InputPassword,
    BtnEnter,
    Message,
} from "./styles";

type InputLoginObject = {
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();

    const [inputLogin, setInputLogin] = useState<InputLoginObject>({
        email: "",
        password: "",
    })

    function change(event: React.ChangeEvent) {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        setInputLogin((values) => ({...values, [name]: value}));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        axios.get("http://localhost:8888/web/react/startWe/php/apiUser.php", {
            params: {
                email: inputLogin.email,
                password: inputLogin.password,
                option: "Login User"
            },
        })
        .then(function(response) {
            if (response.data.status === 0) {
                alert(response.data.message);
            } else {
                if(typeof(Storage) !== "undefined") {
                    localStorage.setItem('iduser', response.data.iduser)
                    localStorage.setItem('email', response.data.email)
                    localStorage.setItem('username', response.data.username)
                    navigate("/feed")
                }
            }
        })
    }

    return (
        <Container>
            <DivLeft aria-hidden="true" />

            <DivRight>
                <FormLogin onSubmit={submit}>
                    <InputLogin
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        onChange={change}
                    />
                    <InputPassword
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={change}
                    />
                    <BtnEnter type="submit">Acessar</BtnEnter>
                    <Message>
                        Não tem uma conta ainda?{" "}
                        <Link to="/cadastro">Cadastre-se</Link>
                    </Message>
                </FormLogin>
            </DivRight>
        </Container>
    );
}

export default Login;
