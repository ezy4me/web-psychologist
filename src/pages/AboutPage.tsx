import { Container, PageImage } from "../ui/Layout";
import TypingEffect from "../ui/TypingEffect";

const AboutPage = () => {
  return (
    <Container>
      <PageImage>
        <TypingEffect
          text="О нас"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>
    </Container>
  );
};

export default AboutPage;
