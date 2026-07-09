import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

type inputObject = {
    iduser: number;
    city: string;
    username: string;
    email: string;
    cpf: string;
    sex: string;
    dateBirth: string;
    option: string;
    photo: File | null;
    photoPreview: string;
}

import { Page, 
    TopHeader, 
    Brand, 
    HeaderTitle, 
    Body,  
    MainContent, 
    StartupCard, 
    FormRegister, 
    FormField,
    FormInput,
    FormRow,
    FormActions,
    ButtonUpdate,
} from './styles';

import Card from "../../components/Card";


function EditUser() {
    const navigate = useNavigate();

    const { iduser } = useParams();

    const [input, setInput] = useState<inputObject>({
        iduser: 0,
        city: "",
        username: "",
        email: "",
        cpf: "",
        sex: "",
        dateBirth: "",
        option: "",
        photo: null as File | null,        // ← novo
        photoPreview: '' as string,
    });

    function getUserDataToEdit() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiUser.php", {
            params: {
                iduser: iduser,
                option: "Get User Data To Edit",
            },
        })
        .then((response) => {
            const data = response.data;
            setInput({...data});
            localStorage.setItem("username", data.username);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getUserDataToEdit()
    }, [])

    function change(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setInput((values) => ({ ...values, [name]: value }));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        input.option = "Update User Data";
        input.iduser = parseInt(iduser ?? "0");
        axios.post("http://localhost:8888/web/react/StartWe_VR/php/apiUser.php", input).then(function(response) {
            if(response.data.status == 1) {
                alert(response.data.msg)
            }
            localStorage.setItem("username", response.data.username);
            navigate("/feed")
        })
    }
    
    
    return (
        <Page>
            <TopHeader>
                <Brand>StartUs</Brand>
                <HeaderTitle>Perfil Usuário</HeaderTitle>
            </TopHeader>

            <Body>
                <Card />

                <MainContent>
                    <StartupCard>
                    <FormRegister onSubmit={submit}>
                    <FormRow $twoColumns>
                        <FormField>
                            <label htmlFor="inputCPF">CPF</label>
                            <FormInput id="inputCPF" type="text" value={input.cpf} name="cpf" onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow $twoColumns>
                        <FormField>
                            <label htmlFor="inputDateBirth">Data de Nascimento</label>
                            <FormInput id="inputDateBirth" type="text" value={input.dateBirth} name="dateBirth" onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow $twoColumns>
                        <FormField>
                            <label htmlFor="inputCity">Cidade</label>
                            <FormInput id="inputCity" type="text" value={input.city} name="city" onChange={change} />
                        </FormField>
                    </FormRow>

                    <FormRow>
                        <FormField>
                            <label htmlFor="inputEmail">E-mail</label>
                            <FormInput id="inputEmail" type="email" value={input.email} name="email" onChange={change} />
                        </FormField>
                    </FormRow>

                    <FormRow>
                        <FormField>
                            <label htmlFor="inputName">Nome Completo / Usuário</label>
                            <FormInput id="inputName" type="text" value={input.username} name="username" onChange={change} />
                        </FormField>
                    </FormRow>

                    <FormActions>
                        <ButtonUpdate type="submit">Atualizar</ButtonUpdate>
                    </FormActions>
                </FormRegister>
                    </StartupCard>
                </MainContent>
            </Body>
        </Page>
    )
}

export default EditUser;