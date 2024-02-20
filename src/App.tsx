import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Theme from "./styles/theme";

const Wrapper = styled.div`
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Content = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <Theme>
      <Wrapper>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
};

export default App;
