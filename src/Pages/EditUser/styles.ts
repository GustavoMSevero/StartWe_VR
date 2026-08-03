import styled, { css } from "styled-components";

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

export const ButtonUpdate = styled.button`
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