import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

type Startups = {
    idStartup: number;
    nameStartup: string;
    description: string;
};

import { InfoBlock, InfoLabel, InfoValue, TopHeader, Brand, HeaderTitle, Body, Page, MainContent } from "./styles";

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

    // const [startups, setStartups] = useState<Startups[]>([]);

    return (
        <div>
            <Page>
                <TopHeader>
                    <Brand>StartUs</Brand>
                    <HeaderTitle>Perfil Startup</HeaderTitle>
                </TopHeader>

                <Body>
                    <Card />

                    <MainContent>
                    {currentStartups.length > 0
                        ? currentStartups.map((myStartups) => (
                                <div key={myStartups.idStartup}>
                                    <InfoBlock>
                                        <InfoLabel>Nome Startup:</InfoLabel>
                                        <InfoValue>{myStartups.nameStartup}</InfoValue>
                                    </InfoBlock>

                                    <InfoBlock>
                                        <InfoLabel>Descrição (resumo):</InfoLabel>
                                        <InfoValue>{myStartups.description}</InfoValue>
                                    </InfoBlock>
                                    <Link to={`/startup/${myStartups.idStartup}`}>Ver</Link>
                                </div>
                            ))
                        : null}
                    </MainContent>
                </Body>
            </Page>
        </div>
    )
}

export default MyStartups;