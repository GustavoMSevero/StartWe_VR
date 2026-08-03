import styled from "styled-components";

const darkBlue = "#132B6B";

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
    background-color: ${darkBlue};
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

export const Sidebar = styled.aside`
    flex-shrink: 0;
    width: 220px;
    padding: 24px 20px;
    border-radius: 12px;
    background-color: ${darkBlue};
    color: #fff;
`;

export const Avatar = styled.div`
    width: 72px;
    height: 72px;
    margin: 0 auto 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c5e1a5 0%, #aed581 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    overflow: hidden;
`;

export const NavMenu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const NavItem = styled.button`
    padding: 0;
    border: none;
    background: none;
    color: #fff;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    font-family: inherit;

    &:hover {
        opacity: 0.85;
    }
`;

export const NavText = styled.span`
    font-size: 14px;
    color: #fff;
`;

export const MainContent = styled.main`
    width: 50%;
    margin-left: 20%;
`;

export const StartupCard = styled.section`
    max-width: 720px;
`;

export const StartupLogo = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    padding: 6px 16px 6px 8px;
    border-radius: 999px;
    background-color: #f5f5f5;
    font-size: 14px;
    font-weight: 600;
    color: #333;
`;

export const LogoIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    font-size: 16px;
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

export const SectionTitle = styled.h2`
    margin: 20px 0 8px;
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const TwoColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 8px;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ColumnTitle = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 4px;
`;

export const ColumnItem = styled.div`
    font-size: 14px;
    color: #888;
`;

export const ParticipateButton = styled.button`
    display: block;
    margin: 32px auto 0;
    padding: 10px 48px;
    border: none;
    border-radius: 6px;
    background-color: ${darkBlue};
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;

    &:hover {
        background-color: #353376;
    }
`;

export const Pagination = styled.div`
     margin-top: 20px;
     margin-left: 40%;
`