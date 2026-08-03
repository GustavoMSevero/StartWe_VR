import styled, { css } from "styled-components";
import loginBackground from "../../assets/login-background.png";

const inputStyles = css`
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background-color: #fff;
    font-size: 14px;
    color: #333;
    font-family: inherit;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        outline: none;
        border-color: #3f51b5;
    }
`;

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const DivLeft = styled.div`
    width: 50%;
    min-height: 100vh;
    background-color: #132B6B;
    background-image: url(${loginBackground});
    background-size: 100% 100%;
    background-position: left top;
    background-repeat: no-repeat;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const DivRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 100vh;
    padding: 32px 24px;
    background-color: #fff;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 360px;
`;

export const InputLogin = styled.input`
    ${inputStyles}
`;

export const InputPassword = styled.input`
    ${inputStyles}
`;

export const BtnEnter = styled.button`
    width: 100%;
    height: 44px;
    margin-top: 4px;
    border: none;
    border-radius: 6px;
    background-color: #3f51b5;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;

    &:hover {
        background-color: #354499;
    }
`;

export const Message = styled.p`
    margin: 8px 0 0;
    font-size: 14px;
    text-align: center;
    color: #4a5568;

    a {
        color: #3f51b5;
        font-weight: 600;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
