import styled from "styled-components";

const purple = "#3f3d89";

export const Page = styled.div`
    min-height: 100vh;
    background-color: #fff;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const TopHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 32px;
    background-color: ${purple};
    color: #fff;
`;

export const Brand = styled.span`
    font-size: 22px;
    font-weight: 700;
`;

export const HeaderTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

export const Body = styled.div`
    display: flex;
    gap: 32px;
    padding: 24px 32px;
    align-items: flex-start;
`;

export const MainContent = styled.main`
    width: 50%;
    margin-left: 20%;
`;

export const InfoStartup = styled.div`
    display: flex;
`;

export const NameStartup = styled.div`
    width: 150px;
    background-color:rgba(240, 240, 240, 0.85);
    border-radius: 10px;
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 2px;
    width: 150px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const DescriptionStartup = styled.div`
    width: 150px;
    background-color:rgba(240, 240, 240, 0.85);
    border-radius: 10px;
    margin-left: 10px;
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 2px;
    width: 150px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const LinkStartup = styled.div`
    width: 150px;
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 2px;
    width: 150px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const DataStartup = styled.div`
    display: flex;
`;

export const StartupName = styled.div`
    width: 150px;
`;

export const StartupDescription = styled.div`
    margin-left: 10px;
    width: 150px;
`;

export const StartupLink = styled.div`
    width: 150px;
`;

export const Pagination = styled.div`
     margin-top: 20px;
     margin-left: 40%;
`

