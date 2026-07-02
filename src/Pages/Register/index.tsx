import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {
    Container,
    DivLeft,
    DivRight,
    FormRegister,
    FormRow,
    FormField,
    FormInput,
    FormSelect,
    FormActions,
    ButtonRegister,
    ButtonBack,
} from "./styles";
import axios from "axios";

type InputObject = {
    cpf: string;
    sex: string;
    dateBirth: string;
    city: string;
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    option: string;
}

function Register() {
    const navigate = useNavigate();

    const [input, setInput] = useState<InputObject>({
        cpf: "",
        sex: "",
        dateBirth: "",
        city: "",
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        option: ""
    });

    function change(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setInput((values) => ({ ...values, [name]: value}));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        input.option = "Register User";
        if(input.password == input.confirmPassword) {
            axios.post("http://localhost:8888/web/react/StartWe_VR/php/apiUser.php", input).then(function(response) {
                // console.log(response.data)
                if(response.data.status == 0) {
                    alert(response.data.msg)
                    navigate("/cadastro")
                } else {
                    if(typeof(Storage) !== "undefined") {
                        localStorage.setItem('iduser', response.data.iduser)
                        localStorage.setItem('username', response.data.username)
                        navigate("/selecionar-perfil")
                    }
                }
            })
        } else {
            alert("Senha diferente da senha de confirmação");
        }
        
    }

    return (
        <Container>
            <DivLeft>Esquerda</DivLeft>
            <DivRight>
                <FormRegister onSubmit={submit}>
                    <FormRow $twoColumns>
                        <FormField>
                            <label htmlFor="inputCPF">CPF</label>
                            <FormInput id="inputCPF" type="text" name="cpf" onChange={change} />
                        </FormField>
                        <FormField>
                            <label htmlFor="inputSex">Sexo</label>
                            <FormSelect id="inputSex" name="sex" onChange={change}>
                                <option value="">Sexo...</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="O">Outro</option>
                            </FormSelect>
                        </FormField>
                    </FormRow>

                    <FormRow $twoColumns>
                        <FormField>
                            <label htmlFor="inputDateBirth">Data de nascimento</label>
                            <FormInput id="inputDateBirth" type="date" name="dateBirth" onChange={change} />
                        </FormField>
                        <FormField>
                            <label htmlFor="inputCity">Cidade</label>
                            <FormInput id="inputCity" type="text" name="city" onChange={change} />
                        </FormField>
                    </FormRow>

                    <FormRow>
                        <FormField>
                            <label htmlFor="inputEmail">E-mail</label>
                            <FormInput id="inputEmail" type="email" name="email" onChange={change} />
                        </FormField>
                    </FormRow>

                    <FormRow>
                        <FormField>
                            <label htmlFor="inputName">Nome Completo / Usuário</label>
                            <FormInput id="inputName" type="text" name="name" onChange={change} />
                        </FormField>
                    </FormRow>

                    <FormRow $twoColumns>
                        <FormField>
                            <label htmlFor="inputPassword">Senha</label>
                            <FormInput id="inputPassword" type="password" name="password" onChange={change} />
                        </FormField>
                        <FormField>
                            <label htmlFor="inputConfirmPassword">Confirmação de senha</label>
                            <FormInput id="inputConfirmPassword" type="password" name="confirmPassword" onChange={change} />
                        </FormField>
                    </FormRow>

                    <FormActions>
                        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
                        <ButtonBack type="button" onClick={() => navigate("/")}>Voltar</ButtonBack>
                    </FormActions>
                </FormRegister>
            </DivRight>
        </Container>
    )
}

export default Register
