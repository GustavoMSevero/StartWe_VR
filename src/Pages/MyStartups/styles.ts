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

export const InfoBlock = styled.div`
    margin-bottom: 16px;
`;

export const InfoLabel = styled.div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 2px;
`;

export const InfoValue = styled.div`
    font-size: 14px;
    color: #888;
`;