import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

type Messages = {
    id: number;
    userFrom: string;
    userTo: string;
    message: string;
};

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
    Pagination,
} from "./styles";

const ITEMS_PER_PAGE = 10; // <-- quantas cidades por página (alterar aqui se quiser)

function ReceiveMessage() {

    const { iduser } = useParams();

    const username = localStorage.getItem("username") ?? "";

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [messages, setMessages] = useState<Messages[]>([]);

    function getMessages() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiMessage.php", {
            params: {
                username: username,
                iduser: Number(iduser),
                option: "Get Messages",
            },
        })
        .then(function(response) {
            const data = response.data;
            setMessages(Array.isArray(data) ? data : []);
            setCurrentPage(1);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getMessages();
    }, [username, iduser]);

    const totalItems = messages.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentMessages = messages.slice(startIndex, endIndex);

    const getPageNumbers = () => {
        const pages: number[] = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

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
                    {currentMessages.length > 0 ? (
                        currentMessages.map((message) => (   // ← mudei de "messages" para "message"
                            <div key={message.id}>
                                <InfoStartup>
                                    <NameStartup>De:</NameStartup>
                                    <DescriptionStartup>Para:</DescriptionStartup>
                                    <LinkStartup></LinkStartup>
                                </InfoStartup>

                                <DataStartup>
                                    <StartupName>{message.userFrom}</StartupName>
                                    <StartupDescription>{message.userTo}</StartupDescription>
                                    <StartupLink>{message.message}</StartupLink>
                                    <StartupLink><Link to={`/ler-mensagem/${message.id}`}>Ver mensagem</Link></StartupLink>
                                </DataStartup>
                            </div>
                        ))
                    ) : null}
                        {/* ---------- Controles de paginação ---------- */}
                {totalItems > 0 && (
                    <Pagination>
                        <span>
                            Mostrando {startIndex + 1}–{Math.min(endIndex, totalItems)} de {totalItems} items
                        </span>

                        <div style={{ flexGrow: 1 }} />

                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        >
                            Primeira
                        </button>

                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>

                        {getPageNumbers().map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                style={{
                                    fontWeight: currentPage === num ? "bold" : "normal",
                                    backgroundColor: currentPage === num ? "#ddd" : "transparent",
                                }}
                            >
                                {num}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Próxima
                        </button>

                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            Última
                        </button>
                    </Pagination>
                )}

                {totalItems === 0 && <p>Nenhum item cadastrado ainda.</p>}
                    </MainContent>
                </Body>
            </Page>
        </div>
    )
}

export default ReceiveMessage;