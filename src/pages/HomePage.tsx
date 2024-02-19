import styled from "styled-components";
import TypingEffect from "../ui/TypingEffect";
import Card from "../ui/Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const HeaderImage = styled.div`
  height: 400px;
  width: 100%;
  background: #bde2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  gap: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
`;

const HomePage = () => {
  return (
    <Container>
      <HeaderImage>
        <TypingEffect
          text="Добро пожаловать!"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </HeaderImage>
      <SectionTitle>Что мы предлагаем?</SectionTitle>
      <Row>
        <Card
          title="Терапия #1"
          text="Некий текст"
          imageUrl="/public/images/psychotherapy-1.png"
        />
        <Card
          title="Терапия #2"
          text="Некий текст"
          imageUrl="/public/images/psychotherapy-2.png"
        />
        <Card
          title="Терапия #1"
          text="Некий текст"
          imageUrl="/public/images/psychotherapy-1.png"
        />
        <Card
          title="Терапия #2"
          text="Некий текст"
          imageUrl="/public/images/psychotherapy-2.png"
        />
      </Row>
    </Container>
  );
};

export default HomePage;
