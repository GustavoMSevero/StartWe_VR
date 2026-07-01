import styled, { css } from "styled-components";

const purple = "#3f3d89";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const TopHeader = styled.header`
    padding: 14px 32px;
    background-color: ${purple};
    color: #fff;
    font-size: 20px;
    font-weight: 700;
`;

export const Content = styled.div`
    flex: 1;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 24px 32px 100px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const TwoColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Column = styled.div`
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
        color: #333;
    }
`;

export const SectionLabel = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
`;

export const SubSectionLabel = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
`;

const fieldStyles = css`
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #333;
    border-radius: 4px;
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
    height: 36px;
`;

export const FormSelect = styled.select`
    ${fieldStyles}
    height: 36px;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    padding-right: 30px;
    cursor: pointer;
`;

export const FormTextarea = styled.textarea`
    ${fieldStyles}
    min-height: 120px;
    resize: vertical;
    line-height: 1.5;
`;

export const FormTextareaLarge = styled(FormTextarea)`
    min-height: 160px;
`;

export const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const CheckboxItem = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #333;
    cursor: pointer;

    input {
        width: 16px;
        height: 16px;
        cursor: pointer;
    }
`;

export const OtherField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 4px;
`;

export const OtherInput = styled(FormInput)`
    max-width: 200px;
`;

export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const RadioItem = styled.label`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: #666;
    cursor: pointer;
    line-height: 1.4;

    input {
        margin-top: 3px;
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        cursor: pointer;
    }
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
