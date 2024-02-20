import { Container, PageImage } from "../ui/Layout";
import TypingEffect from "../ui/TypingEffect";

const ArticlesPage = () => {
  return (
    <Container>
      <PageImage url="/public/images/main.jpg">
        <TypingEffect
          text="Статьи"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>
    </Container>
  );
};

export default ArticlesPage;
