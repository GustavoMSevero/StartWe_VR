import styled from "styled-components";

const purple = "#3f3d89";

export const Sidebar = styled.aside`
    flex-shrink: 0;
    width: 250px;
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