import styled, { css } from "styled-components";
import loginBackground from "../../assets/login-background.png";

const darkBlue = "#132B6B";

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const DivLeft = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${darkBlue};
    background-image: url(${loginBackground});
    background-size: 100% 100%;
    background-position: left top;
    background-repeat: no-repeat;
    padding-top: 100px;
    width: 50%;
    height: 100vh;
`;

export const DivRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
    width: 50%;
    height: 100vh;
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

export const FormInput = styled.input`
    ${fieldStyles}
`;

export const FormSelect = styled.select`
    ${fieldStyles}
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    padding-right: 30px;
    cursor: pointer;
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

export const FormActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 8px;
`;

export const ButtonRegister = styled.button`
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

export const ButtonBack = styled.button`
    margin-top: 12px;
    padding: 0;
    border: none;
    background: none;
    color: #2563eb;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
