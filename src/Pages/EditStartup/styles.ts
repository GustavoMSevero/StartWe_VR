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

export const SectionLabel = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
`;

export const OtherField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 4px;
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

export const OtherInput = styled(FormInput)`
    max-width: 200px;
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

export const SubSectionLabel = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
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

export const Pagination = styled.div`
     margin-top: 20px;
     margin-left: 40%;
`