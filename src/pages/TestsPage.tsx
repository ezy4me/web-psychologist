import { Container, PageImage } from "../ui/Layout";
import TypingEffect from "../ui/TypingEffect";

const TestsPage = () => {
  return (
    <Container>
      <PageImage>
        <TypingEffect
          text="Тесты"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>
    </Container>
  );
};

export default TestsPage;
