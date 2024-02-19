import styled from "styled-components";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

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
    <Wrapper className="wrapper">
      <Header />
      <Content>
        <HomePage />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default App;
