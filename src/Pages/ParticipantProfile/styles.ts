import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff;
`;

export const Content = styled.div`
    flex: 1;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 32px 24px 100px;
`;

export const Header = styled.header`
    margin-bottom: 28px;
`;

export const Title = styled.h1`
    margin: 0 0 4px;
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const Subtitle = styled.p`
    margin: 0 0 8px;
    font-size: 14px;
    color: #888;
`;

export const UserName = styled.p`
    margin: 0;
    font-size: 14px;
    color: #aaa;
`;

export const UserEmail = styled.p`
    margin: 0;
    font-size: 14px;
    color: #aaa;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        margin-bottom: 6px;
        font-size: 14px;
        font-weight: 500;
        color: #666;
    }
`;

const fieldStyles = css`
    width: 100%;
    padding: 10px 12px;
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

export const FormInput = styled.input`
    ${fieldStyles}
    height: 42px;
`;

export const FormTextarea = styled.textarea`
    ${fieldStyles}
    min-height: 100px;
    resize: vertical;
    line-height: 1.5;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const ButtonRegister = styled.button`
    width: 100%;
    padding: 16px;
    border: none;
    background-color: #3f51b5;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;

    &:hover {
        background-color: #354499;
    }
`;
