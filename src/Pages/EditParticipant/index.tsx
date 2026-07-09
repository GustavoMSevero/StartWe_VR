import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

type inputObject = {
    idparticipant: number;
    profession: string;
    about: string;
    cep: string;
    address: string;
    city: string;
    uf: string;
    linkedin: string;
    option: string;
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


function EditParticipant() {
    const navigate = useNavigate();

    const { idparticipant } = useParams();

    const [input, setInput] = useState<inputObject>({
        idparticipant: 0,
        profession: "",
        about: "",
        cep: "",
        address: "",
        city: "",
        uf: "",
        linkedin: "",
        option: "",
    });

    function getPartcipantDataToEdit() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiParticipant.php", {
            params: {
                idparticipant: idparticipant,
                option: "Get Participant Data To Edit",
            },
        })
        .then((response) => {
            // console.log(response.data);
            setInput(response.data);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getPartcipantDataToEdit()
    }, [])

    function change(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setInput((values) => ({ ...values, [name]: value }));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        input.option = "Update Participant Data";
        input.idparticipant = parseInt(idparticipant ?? "0");
        console.log(input);
        axios.post("http://localhost:8888/web/react/StartWe_VR/php/apiParticipant.php", input).then(function(response) {
            if(response.data.status == 1) {
                alert(response.data.msg)
            }
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
                            <label htmlFor="inputProfession">Profissão</label>
                            <FormInput id="inputProfession" type="text" name="profession" value={input.profession} onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField>
                            <label htmlFor="inputAbout">Sobre</label>
                            <FormInput id="inputAbout" type="text" name="about" value={input.about} onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField>
                            <label htmlFor="inputCep">CEP</label>
                            <FormInput id="inputCep" type="text" name="cep" value={input.cep} onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField>
                            <label htmlFor="inputAddress">Endereço</label>
                            <FormInput id="inputAddress" type="text" name="address" value={input.address} onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField>
                            <label htmlFor="inputCity">Cidade</label>
                            <FormInput id="inputCity" type="text" name="city" value={input.city} onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField>
                            <label htmlFor="inputState">Estado</label>
                            <FormInput id="inputState" type="text" name="uf" value={input.uf} onChange={change} />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField>
                            <label htmlFor="inputLinkedin">Linkedin</label>
                            <FormInput id="inputLinkedin" type="text" name="linkedin" value={input.linkedin} onChange={change} />
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

export default EditParticipant;