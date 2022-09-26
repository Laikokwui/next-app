import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    background:rgb(13, 13, 13);
    color: white;
`;

export const FooterLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const FooterLogo = styled.span`
    height: 1em;
    margin-left: 0.5rem;
`;