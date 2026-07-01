import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

type Startups = {
    idStartup: number;
    nameStartup: string;
    description: string;
};

import { TopHeader, 
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
    Pagination
} from "./styles";

const ITEMS_PER_PAGE = 10; // <-- quantas cidades por página (alterar aqui se quiser)

function MyStartups() {
    const { iduser } = useParams();

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [myStartups, setMyStartups] = useState<Startups[]>([]);

    function getMyStartups() {
        axios.get("http://localhost:8888/web/react/startWe/php/apiStartup.php", {
            params: {
                iduser: iduser,
                option: "Get My Startups",
            },
        })
        .then(function(response) {
            setMyStartups(response.data);
            setCurrentPage(1);
        })
    }

    useEffect(() => {
        getMyStartups();
    }, [iduser]);

    const totalItems = myStartups.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentStartups = myStartups.slice(startIndex, endIndex);

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
                    <HeaderTitle>Minhas Startups</HeaderTitle>
                </TopHeader>

                <Body>
                    <Card />

                    <MainContent>
                    {currentStartups.length > 0
                        ? currentStartups.map((myStartups) => (
                                <div key={myStartups.idStartup}>
                                <InfoStartup>
                                    <NameStartup>Nome Startup</NameStartup>
                                    <DescriptionStartup>Descrição (resumo)</DescriptionStartup>
                                    <LinkStartup></LinkStartup>
                                </InfoStartup>

                                <DataStartup>
                                    <StartupName>{myStartups.nameStartup}</StartupName>
                                    <StartupDescription>{myStartups.description}</StartupDescription>
                                    <StartupLink><Link to={`/startup/${myStartups.idStartup}`}>Ver</Link></StartupLink>
                                </DataStartup>
                                    
                                </div>
                            ))
                        : null}
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

export default MyStartups;