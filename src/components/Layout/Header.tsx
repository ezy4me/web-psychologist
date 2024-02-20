import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  MyLink,
  Logo,
  HeaderActions,
  Button,
  LogoImage,
  LogoText,
} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo>
          <LogoImage src="/public/logo.png" />
          <LogoText>MindCare</LogoText>
        </Logo>
      </Link>
      <HeaderNav>
        <HeaderNavList>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/tests"}>Тесты</Link>
            </MyLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/articles"}>Статьи</Link>
            </MyLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/"}>Для психологов</Link>
            </MyLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/about"}>О нас</Link>
            </MyLink>
          </HeaderNavItem>
        </HeaderNavList>
      </HeaderNav>
      <HeaderActions>
        <Button>Войти</Button>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
