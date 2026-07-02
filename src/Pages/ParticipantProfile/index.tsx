import { useEffect, useState } from "react";
import {
    Container,
    Content,
    Header,
    Title,
    Subtitle,
    UserName,
    UserEmail,
    Form,
    FormField,
    FormInput,
    FormTextarea,
    Footer,
    ButtonRegister,
} from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type InputObject = {
    profession: string;
    about: string;
    cep: string;
    address: string;
    city: string;
    uf: string;
    linkedin: string;
    iduser: number;
    option: string;
};

function ParticipantProfile() {
    const navigate = useNavigate();
    const username = localStorage.getItem("username") ?? "";
    const iduser = localStorage.getItem("iduser") ?? "";

    const [email, setEmail] = useState();

    const [input, setInput] = useState<InputObject>({
        profession: "",
        about: "",
        cep: "",
        address: "",
        city: "",
        uf: "",
        linkedin: "",
        iduser: 0,
        option: "",
    });

    const handleCepBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
        let cep = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    
        // Validação básica
        if (cep.length !== 8) {
            return; // CEP inválido, não faz nada
        }
    
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;
    
            // Se o CEP não foi encontrado
            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }
    
            // Atualiza os campos
            setInput((prev) => ({
                ...prev,
                address: data.logradouro || "",     // Rua / Logradouro
                uf: data.uf || "",
            }));
    
        } catch (error) {
            console.error("Erro ao consultar CEP:", error);
            alert("Erro ao buscar o CEP. Verifique sua conexão.");
        }
    };

    function getUserData() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiUser.php", {
            params: {
                iduser: iduser,
                option: "Get User Data"
            }
        }).then(function(response) {
            setEmail(response.data.email);
            setInput((values) => ({ ...values, city: response.data.city || "" }));
        })
    }

    useEffect(()=> {
        getUserData();
    }, [iduser])

    function change(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setInput((values) => ({ ...values, [name]: value }));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        input.option = "Register Participant";
        input.iduser = Number(iduser);
        axios.post("http://localhost:8888/web/react/startWe/php/apiParticipant.php", input).then(function(response) {
            // console.log(response.data)
            navigate("/feed");
        })
    }

    return (
        <Container>
            <Content>
                <Header>
                    <Title>Perfil participante</Title>
                    <Subtitle>Dados pessoais</Subtitle>
                    {username && <UserName>{username}</UserName>}
                    {email && <UserEmail>{email}</UserEmail>}
                </Header>

                <Form id="participant-profile-form" onSubmit={submit}>
                    <FormField>
                        <label htmlFor="inputProfession">
                            Profissão/Especialidade
                        </label>
                        <FormInput
                            id="inputProfession"
                            type="text"
                            name="profession"
                            value={input.profession}
                            onChange={change}
                            required
                        />
                    </FormField>

                    <FormField>
                        <label htmlFor="inputAbout">Sobre</label>
                        <FormTextarea
                            id="inputAbout"
                            name="about"
                            value={input.about}
                            placeholder="Engenheiro(a) com 16 anos de experiência..."
                            onChange={change}
                            required
                        />
                    </FormField>

                    <FormField>
                        <label htmlFor="inputCep">CEP</label>
                        <FormInput
                            id="inputCep"
                            type="text"
                            name="cep"
                            onBlur={handleCepBlur}
                            value={input.cep}
                            onChange={change}
                            required
                        />
                    </FormField>

                    <FormField>
                        <label htmlFor="inputAddress">Endereço</label>
                        <FormInput
                            id="inputAddress"
                            type="text"
                            name="address"
                            value={input.address}
                            onChange={change}
                            required
                        />
                    </FormField>

                    <FormField>
                        <label htmlFor="inputCity">Cidade</label>
                        <FormInput
                            id="inputCity"
                            type="text"
                            name="city"
                            value={input.city}
                            onChange={change}
                            required
                        />
                    </FormField>

                    <FormField>
                        <label htmlFor="inputUf">UF</label>
                        <FormInput
                            id="inputUf"
                            type="text"
                            name="uf"
                            value={input.uf}
                            onChange={change}
                            required
                        />
                    </FormField>

                    <FormField>
                        <label htmlFor="inputLinkedin">LinkedIn</label>
                        <FormInput
                            id="inputLinkedin"
                            type="url"
                            name="linkedin"
                            value={input.linkedin}
                            placeholder="https://www.linkedin.com/in/fulano-03ab9620/"
                            onChange={change}
                            required
                        />
                    </FormField>
                </Form>
            </Content>

            <Footer>
                <ButtonRegister type="submit" form="participant-profile-form">
                    Cadastrar
                </ButtonRegister>
            </Footer>
        </Container>
    );
}

export default ParticipantProfile;
