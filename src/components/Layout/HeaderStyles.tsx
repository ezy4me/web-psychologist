import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom: 2px solid #e5f1fc;
`;

export const HeaderNav = styled.nav``;
export const HeaderNavList = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavItem = styled.li`
  padding: 0.5rem;
`;

export const Link = styled.a`
  background-image: linear-gradient(to right, #53baff, #00bbff 50%, #000 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    background: #8cc7ff;
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;

    &:before {
      width: 100%;
    }
  }

  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const HeaderActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0b85ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0e7ae5;
  }
`;

export const Logo = styled.img`
  width: 64px;
  aspect-ratio: 1;
`;
