import styled from "styled-components";

type PropsType = {
  title?: string;
  text?: string;
  imageUrl?: string;
  children?: React.ReactElement;
};

const Card = ({ title, text, imageUrl, children }: PropsType) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt="Card Image" />}
      <CardContent>
        {children}
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const CardImage = styled.img`
  max-width: 256px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:hover {
    transform: scale(1.05);
  }
  transition: all 0.5s ease-in-out;
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  text-align: center;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`;

export default Card;
