import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { 
    Page, 
    TopHeader, 
    Brand, 
    HeaderTitle, 
    Body,  
    MainContent, 
    StartupCard,
    FormRegister,
    FormRow,
    FormField,
    FormActions,
    ButtonSendMessage,
} from './styles';

import Card from "../../components/Card";

type MessageData = {
    iduserRecipient: number;
    emailRecipient: string;
    userRecipient: string;
    iduserSender: number;
    emailSender: string;
    userSender: string;
    message: string;
    option: string;
}


function SendMessage() {

    const { idStartup } = useParams();

    const iduser = localStorage.getItem("iduser");
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");
    
    const [message, setMessage] = useState<MessageData>({
        iduserRecipient: 0,
        emailRecipient: "",
        userRecipient: "",
        iduserSender: 0,
        emailSender: "",
        userSender: "",
        message: "",
        option: "",
    });

    const [userData, setUserData] = useState({
        iduser: 0,
        email: "",
        user: "",
    });

    function getStartupData() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiMessage.php", {
            params: {
                option: "Get Startup Data",
                idStartup: idStartup,
            },
        }).then(function(response) {
            console.log(response.data);
            setUserData(response.data);
        });
    }

    useEffect(() => {
        getStartupData();
    }, []);

    function changeMessage(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setMessage((values) => ({ ...values, [name]: value }));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        message.option = "Send Message";
        message.iduserRecipient = userData.iduser;
        message.emailRecipient = userData.email;
        message.userRecipient = userData.user;
        message.iduserSender = Number(iduser) ?? 0;
        message.emailSender = email ?? "";
        message.userSender = username ?? "";
        message.message = message.message ?? "";
        axios.post("http://localhost:8888/web/react/StartWe_VR/php/apiMessage.php", message).then(function(response) {
            if (response.data.message) {
                alert(response.data.message);
            } else {
                alert("Erro ao enviar mensagem");
            }
        });
    }

    return (
        <Page>
            <TopHeader>
                <Brand>StartUs</Brand>
                <HeaderTitle>Enviar Mensagem</HeaderTitle>
            </TopHeader>

            <Body>
                <Card />

                <MainContent>
                    <StartupCard>
                    <FormRegister onSubmit={submit}>
                    <FormRow $twoColumns>
                        <FormField>
                            {userData.user && (
                                <label htmlFor="inputMessage">Mensagem para {userData.user}</label>
                            )}
                            <textarea id="inputMessage" name="message" rows={5} cols={30} required onChange={(event) => changeMessage(event)} />
                        </FormField>
                    </FormRow>

                    <FormActions>
                        <ButtonSendMessage type="submit">Enviar Mensagem</ButtonSendMessage>
                    </FormActions>
                </FormRegister>
                    </StartupCard>
                </MainContent>
            </Body>
        </Page>
    )
}

export default SendMessage;