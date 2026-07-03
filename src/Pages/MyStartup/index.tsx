import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

import {
    Page,
    TopHeader,
    Brand,
    HeaderTitle,
    Body,
    MainContent,
    StartupCard,
    InfoBlock,
    InfoLabel,
    InfoValue,
    TwoColumns,
    Column,
    ColumnTitle,
    ColumnItem,
} from "./styles";

type Startups = {
    idStartup: number;
    emailUser: string;
    nameStartup: string;
    nameResponsable: string;
    description: string;
    investment: string;
    bpComercial: string;
    bpAccounting: string;
    bpDeveloper: string;
    bpDesigner: string;
    bpFinancial: string;
    bpManagement: string;
    bpLegal: string;
    bpMarketing: string;
    bpOtherChecked: string;
    bpOther: string;
    spComercial: string;
    spAccounting: string;
    spDeveloper: string;
    spDesigner: string;
    spFinancial: string;
    spManagement: string;
    spLegal: string;
    spMarketing: string;
    spOtherChecked: string;
    spOther: string;
    stage: string;
    problem: string;
    solution: string;
    differential: string;
};


function MyStartup() {
    const { idStartup } = useParams();

    const [startups, setStartups] = useState<Startups | null>(null);

    function getMyStartupByIdstartup() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiStartup.php", {
                params: {
                    idStartup: idStartup,
                    option: "Get My Startup By IdStartup",
                },
            })
            .then(function (response) {
                const data = response.data;
            if (data && typeof data === 'object' && !Array.isArray(data)) {
                setStartups(data);
            } else if (Array.isArray(data) && data.length > 0) {
                setStartups(data[0]); // pega o primeiro se vier array
            } else {
                setStartups(null);
            }
            });
    }

    useEffect(() => {
        getMyStartupByIdstartup();
    }, []);

    return (
        <Page>
            <TopHeader>
                <Brand>StartUs</Brand>
                <HeaderTitle>Perfil Startup</HeaderTitle>
            </TopHeader>

            <Body>
                <Card />

                <MainContent>
                    <StartupCard>
                        {/* <StartupLogo>
                            <LogoIcon>🚀</LogoIcon>
                            StartUs
                        </StartupLogo> */}
                        {startups && (
                            <div>
                                <InfoBlock>
                                    <InfoLabel>Nome Startup:</InfoLabel>
                                    <InfoValue>{startups.nameStartup}</InfoValue>
                                </InfoBlock>
                                <InfoBlock>
                                    <InfoLabel>Descrição (resumo):</InfoLabel>
                                    <InfoValue>{startups.description}</InfoValue>
                                </InfoBlock>
                                <InfoBlock>
                                    <InfoLabel>Responsável:</InfoLabel>
                                    <InfoValue>{startups.nameResponsable}</InfoValue>
                                </InfoBlock>
                                <InfoBlock>
                                    <InfoLabel>Investimento:</InfoLabel>
                                    <InfoValue>{startups.investment}</InfoValue>
                                </InfoBlock>

                                <TwoColumns>
                                    <Column>
                                        <ColumnTitle>Parceiro de Negócio:</ColumnTitle>
                                        <ColumnItem>
                                            Comercial: {startups.bpComercial}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Contábil: {startups.bpAccounting}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Desenvolvedor: {startups.bpDeveloper}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Designer: {startups.bpDesigner}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Financeiro: {startups.bpFinancial}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Gestão: {startups.bpManagement}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Jurídico: {startups.bpLegal}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Marketing: {startups.bpMarketing}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Outro: {startups.bpOther}
                                        </ColumnItem>
                                    </Column>

                                    <Column>
                                        <ColumnTitle>Prestação de Serviço:</ColumnTitle>
                                        <ColumnItem>
                                            Comercial: {startups.spComercial}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Contábil: {startups.spAccounting}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Desenvolvedor: {startups.spDeveloper}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Designer: {startups.spDesigner}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Financeiro: {startups.spFinancial}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Gestão: {startups.spManagement}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Jurídico: {startups.spLegal}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Marketing: {startups.spMarketing}
                                        </ColumnItem>
                                        <ColumnItem>
                                            Outro: {startups.spOther}
                                        </ColumnItem>
                                    </Column>
                                </TwoColumns>
                                <InfoBlock>
                                    <InfoLabel>Estágio:</InfoLabel>
                                    <InfoValue>{startups.stage}</InfoValue>
                                </InfoBlock>
                                <InfoBlock>
                                    <InfoLabel>Problema:</InfoLabel>
                                    <InfoValue>{startups.problem}</InfoValue>
                                </InfoBlock>
                                <InfoBlock>
                                    <InfoLabel>Solução:</InfoLabel>
                                    <InfoValue>{startups.solution}</InfoValue>
                                </InfoBlock>
                                <InfoBlock>
                                    <InfoLabel>Diferencial:</InfoLabel>
                                    <InfoValue>{startups.differential}</InfoValue>
                                </InfoBlock>
                                <div>
                                    <Link to={`/editar-startup/${startups.idStartup}`}>Editar Startup</Link>
                                </div>
                            </div>
                        )}      
                    </StartupCard>
                </MainContent>
            </Body>
        </Page>
    );
}

export default MyStartup;
