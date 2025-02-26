import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    position: absolute;
    z-index: 1;
    width: 85%;
    transform: ${({ $active }) => !$active ? "translateX(-120%)" : "translateX(0)" };
    transition: transform 0.3s ease-in-out;
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.XS}){
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.6rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: 1.6rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 1.6rem;
    height: 3.4rem;
    font-size: 1rem;

    &[data-menu-active="true"] {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_600};
    }
  }
`;

export const Footer = styled.footer`
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 7px;
  > img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 22px;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > div strong {
    font-size: 1rem;
  }
  > div small {
    font-size: 1rem;
  }

`;

export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

