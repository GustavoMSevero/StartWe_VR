import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import avatarLogo from "../../assets/avatars/admin.png";

import {
    Page,
    TopHeader,
    Brand,
    HeaderTitle,
    Body,
    Sidebar,
    Avatar,
    NavMenu,
    NavItem,
    NavText,
    MainContent,
    StartupCard,
    StartupLogo,
    LogoIcon,
    InfoBlock,
    InfoLabel,
    InfoValue,
    SectionTitle,
    TwoColumns,
    Column,
    ColumnTitle,
    ColumnItem,
    ParticipateButton,
    Pagination,
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

const ITEMS_PER_PAGE = 10; // <-- quantas cidades por página (alterar aqui se quiser)

function Feed() {
    const navigate = useNavigate();

    const username = localStorage.getItem("username") ?? "";
    const iduser = localStorage.getItem("iduser") ?? "";

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [startups, setStartups] = useState<Startups[]>([]);

    function getStartups() {
        axios.get("http://localhost:8888/web/react/startWe/php/apiStartup.php", {
                params: {
                    option: "Get Startup",
                },
            })
            .then(function (response) {
                setStartups(Array.isArray(response.data) ? response.data : []);
                setCurrentPage(1);
            });
    }

    useEffect(() => {
        getStartups();
    }, []);

    function logout() {
        localStorage.removeItem("iduser");
        localStorage.removeItem("username");
        navigate("/");
    }

    const totalItems = startups.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentStartups = startups.slice(startIndex, endIndex);

    const getPageNumbers = () => {
        const pages: number[] = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <Page>
            <TopHeader>
                <Brand>StartUs</Brand>
                <HeaderTitle>Perfil Startup</HeaderTitle>
            </TopHeader>

            <Body>
                <Sidebar>
                    <Avatar><img src={avatarLogo} alt="Avatar" width={72} height={72} /></Avatar>
                    <NavMenu>
                    <Link id="link" to="/feed">Startups</Link>
                    <Link id="link" to={`/editar-usuario/${iduser}`}>Perfil usuário</Link>
                        <NavText>Nome: {username || "—"}</NavText>
                        <Link id="link" to="/perfil-startup">Criar nova Startup</Link>
                        <Link id="link" to="/minhas-startups">Minhas Startups</Link>
                        <NavText>Notificações:</NavText>
                        <NavItem type="button" onClick={logout}>
                            Sair
                        </NavItem>
                    </NavMenu>
                </Sidebar>

                <MainContent>
                    <StartupCard>
                        <StartupLogo>
                            <LogoIcon>🚀</LogoIcon>
                            StartWe
                        </StartupLogo>
                        {currentStartups.length > 0
                            ? currentStartups.map((startup) => (
                                  <div key={startup.idStartup}>
                                      <InfoBlock>
                                          <InfoLabel>Nome Startup:</InfoLabel>
                                          <InfoValue>{startup.nameStartup}</InfoValue>
                                      </InfoBlock>

                                      <InfoBlock>
                                          <InfoLabel>Descrição (resumo):</InfoLabel>
                                          <InfoValue>{startup.description}</InfoValue>
                                      </InfoBlock>

                                      <InfoBlock>
                                          <InfoLabel>Responsável:</InfoLabel>
                                          <InfoValue>{startup.nameResponsable}</InfoValue>
                                      </InfoBlock>

                                      <SectionTitle>Buscamos...</SectionTitle>
                                      <InfoBlock>
                                          <InfoLabel>Investimento:</InfoLabel>
                                          <InfoValue>{startup.investment}</InfoValue>
                                      </InfoBlock>

                                      <TwoColumns>
                                          <Column>
                                              <ColumnTitle>Parceiro de Negócio:</ColumnTitle>
                                              <ColumnItem>
                                                  Comercial: {startup.bpComercial}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Contábil: {startup.bpAccounting}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Desenvolvedor: {startup.bpDeveloper}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Designer: {startup.bpDesigner}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Financeiro: {startup.bpFinancial}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Gestão: {startup.bpManagement}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Jurídico: {startup.bpLegal}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Marketing: {startup.bpMarketing}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Outro: {startup.bpOther}
                                              </ColumnItem>
                                          </Column>

                                          <Column>
                                              <ColumnTitle>Prestação de Serviço:</ColumnTitle>
                                              <ColumnItem>
                                                  Comercial: {startup.spComercial}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Contábil: {startup.spAccounting}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Desenvolvedor: {startup.spDeveloper}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Designer: {startup.spDesigner}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Financeiro: {startup.spFinancial}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Gestão: {startup.spManagement}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Jurídico: {startup.spLegal}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Marketing: {startup.spMarketing}
                                              </ColumnItem>
                                              <ColumnItem>
                                                  Outro: {startup.spOther}
                                              </ColumnItem>
                                          </Column>
                                      </TwoColumns>

                                      <InfoBlock>
                                          <InfoLabel>Estágio:</InfoLabel>
                                          <InfoValue>{startup.stage}</InfoValue>
                                      </InfoBlock>

                                      <InfoBlock>
                                          <InfoLabel>Problema:</InfoLabel>
                                          <InfoValue>{startup.problem}</InfoValue>
                                      </InfoBlock>

                                      <InfoBlock>
                                          <InfoLabel>Solução:</InfoLabel>
                                          <InfoValue>{startup.solution}</InfoValue>
                                      </InfoBlock>

                                      <InfoBlock>
                                          <InfoLabel>Diferencial Inovativo:</InfoLabel>
                                          <InfoValue>{startup.differential}</InfoValue>
                                      </InfoBlock>

                                      <ParticipateButton type="button">
                                          Participar
                                      </ParticipateButton>
                                  </div>
                              ))
                            : null}
                    </StartupCard>
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
    );
}

export default Feed;
