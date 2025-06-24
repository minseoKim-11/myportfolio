import styled from "styled-components";

export const NavContanier = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 70px;
`;

export const MyIcon = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #cfbe84;
`;

export const MyMenu = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #cfbe84;
    cursor: pointer;
    &:hover {
        color: #e6d8a7;
    }
    
`;
