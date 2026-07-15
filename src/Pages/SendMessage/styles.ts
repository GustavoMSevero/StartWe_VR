import styled, { css } from "styled-components";

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

export const Sidebar = styled.aside`
    flex-shrink: 0;
    width: 220px;
    padding: 24px 20px;
    border-radius: 12px;
    background-color: ${purple};
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

export const FormRegister = styled.form`
    width: 100%;
    max-width: 420px;
    padding: 0 24px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        margin-bottom: 6px;
        font-size: 14px;
        font-weight: 500;
        color: #000;
    }
`;

const fieldStyles = css`
    width: 100%;
    height: 38px;
    padding: 8px 10px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    background-color: #fff;
    font-size: 14px;
    color: #333;

    &:focus {
        outline: none;
        border-color: #28a745;
    }
`;

export const FormRow = styled.div<{ $twoColumns?: boolean }>`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    ${({ $twoColumns }) =>
        $twoColumns &&
        css`
            ${FormField} {
                flex: 1;
                min-width: 0;
            }
        `}
`;

export const FormInput = styled.input`
    ${fieldStyles}
`;

export const FormActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 8px;
`;

export const ButtonSendMessage = styled.button`
    min-width: 120px;
    padding: 10px 28px;
    border: 1px solid #218838;
    border-radius: 5px;
    background-color: #28a745;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;

export const Pagination = styled.div`
     margin-top: 20px;
     margin-left: 40%;
`