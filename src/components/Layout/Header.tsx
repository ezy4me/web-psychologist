import {
  HeaderContainer,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  Link,
  Logo,
  HeaderActions,
  Button,
} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/public/logo.png" />
      <HeaderNav>
        <HeaderNavList>
          <HeaderNavItem>
            <Link>Тесты</Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link>Статьи</Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link>Для психологов</Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link>О нас</Link>
          </HeaderNavItem>
        </HeaderNavList>
      </HeaderNav>
      <HeaderActions>
        <Button>
            Войти
        </Button>
        <Button>
            Зарегистрироваться
        </Button>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
