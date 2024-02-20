import Card from "../ui/Card";
import { Container, Grid, PageImage } from "../ui/Layout";
import { HighlightText, SectionTitle, Text } from "../ui/Typhograthy";
import TypingEffect from "../ui/TypingEffect";
import { FaBrain, FaHouseUser, FaRegHandshake, FaBook } from "react-icons/fa6";

const TestsPage = () => {
  return (
    <Container>
      <PageImage url="/public/images/test-main.jpg">
        <TypingEffect
          text="Тесты"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>
      <SectionTitle>
        Зачем проводить <HighlightText>психологические</HighlightText> тесты ?
      </SectionTitle>
      <Text>
        Психологические тесты являются важным инструментом для изучения и
        понимания различных аспектов человеческой психики, поведения и личности.
        Они позволяют психологам и исследователям получить информацию о
        личностных особенностях, эмоциональном состоянии, склонностях и
        предпочтениях человека. Вот несколько причин, почему психологические
        тесты имеют важное значение:
      </Text>
      <Grid rows={1} columns={4}>
        <Card title="Оценка личностных характеристик">
          <FaHouseUser color="#4ba8ff" size={96} />
        </Card>
        <Card title="Диагностика психологических состояний">
          <FaBrain color="#4ba8ff" size={96} />
        </Card>
        <Card title="Профессиональная ориентация">
          <FaBook color="#4ba8ff" size={96} />
        </Card>
        <Card title="Развитие отношений">
          <FaRegHandshake color="#4ba8ff" size={96} />
        </Card>
      </Grid>
    </Container>
  );
};

export default TestsPage;
