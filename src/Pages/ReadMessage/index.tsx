import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

type Message = {
    id: number;
    idFrom: number;
    idTo: number;
    emailFrom: string;
    emailTo: string;
    userFrom: string;
    userTo: string;
    message: string;
};

type RespondMessage = {
    option: string;
    respondMessage: string;
    idFrom: number;
    idTo: number;
    emailFrom: string;
    emailTo: string;
    userFrom: string;
    userTo: string;
}

import { 
    TopHeader, 
    Brand, 
    HeaderTitle, 
    Body, 
    Page, 
    MainContent, 
    InfoStartup, 
    NameStartup, 
    DescriptionStartup, 
    LinkStartup, 
    DataStartup, 
    StartupName, 
    StartupDescription, 
    StartupLink,
    RespondMessage,
    SendMessage,
} from "./styles";


function ReadMessage() {

    const { id } = useParams();

    const [message, setMessage] = useState<Message>();

    const [respondMessage, setRespondMessage] = useState<RespondMessage>({
        idFrom: 0,
        idTo: 0,
        emailFrom: "",
        emailTo: "",
        userFrom: "",
        userTo: "",
        respondMessage: "",
        option: "",
    });

    function getMessageToRead() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiMessage.php", {
            params: {
                id: id,
                option: "Get Message To Read",
            },
        })
        .then(function(response) {
            // console.log(response.data);
            setMessage(response.data);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getMessageToRead();
    }, []);

    function changeMessage(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setRespondMessage((values) => ({ ...values, [name]: value }));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        respondMessage.option = "Respond Message";
        respondMessage.idFrom = message.idTo;
        respondMessage.idTo = message.idFrom;
        respondMessage.emailFrom = message.emailTo;
        respondMessage.emailTo = message.emailFrom;
        respondMessage.userFrom = message.userTo;
        respondMessage.userTo = message.userFrom;        
        // console.log(respondMessage);
        axios.post("http://localhost:8888/web/react/StartWe_VR/php/apiMessage.php", respondMessage).then(function(response) {
            // console.log(response.data);
            if (response.data.message) {
                alert(response.data.message);
            } else {
                alert("Erro ao enviar mensagem");
            }
        });
    }

    return (
        <div>
            <Page>
                <TopHeader>
                    <Brand>StartUs</Brand>
                    <HeaderTitle>Minhas Mensagens</HeaderTitle>
                </TopHeader>

                <Body>
                    <Card />

                    <MainContent>
                        {message && (
                            <div key={message.id}>
                            <InfoStartup>
                                <NameStartup>De:</NameStartup>
                                <DescriptionStartup>Para:</DescriptionStartup>
                                <LinkStartup></LinkStartup>
                            </InfoStartup>
                            
                            <DataStartup>
                                <StartupName>{message?.userFrom}</StartupName>
                                <StartupDescription>{message?.userTo}</StartupDescription>
                                <StartupLink>{message?.message}</StartupLink>
                            </DataStartup>
                            </div>
                        )}
                        <form onSubmit={submit}>
                            <RespondMessage name="respondMessage" cols={30} rows={10} onChange={changeMessage}></RespondMessage>
                            <br />
                            <SendMessage type="submit">Responder</SendMessage>
                        </form>
                    </MainContent>
                </Body>
            </Page>
        </div>
    )
}

export default ReadMessage;