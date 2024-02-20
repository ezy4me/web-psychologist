import styled from "styled-components";
import TypingEffect from "../ui/TypingEffect";
import Card from "../ui/Card";
import QAndA from "../components/QandA";

import { data } from "../data/HomePsychologist.json";
import { HighlightText, SectionTitle } from "../ui/Typhograthy";
import { Container, Grid, PageImage, Row } from "../ui/Layout";

type DataType = {
  request: string;
  imageUrl: string;
};

const HomePage = () => {
  return (
    <Container>
      <PageImage url="/public/images/main.jpg">
        <TypingEffect
          text="Добро пожаловать!"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>

      <SectionTitle>
        С чем <HighlightText>поможет</HighlightText> психолог ?
      </SectionTitle>
      <Grid rows={2} columns={3}>
        {data.map((item: DataType, index: number) => (
          <Card key={index} text={item.request} imageUrl={item.imageUrl} />
        ))}
      </Grid>

      <SectionTitle>
        Что мы <HighlightText>предлагаем</HighlightText> ?
      </SectionTitle>
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
      </Row> 
     <SectionTitle>Часто задаваемые вопросы</SectionTitle>
      <QAndA />
    </Container>
  );
};

export default HomePage;
