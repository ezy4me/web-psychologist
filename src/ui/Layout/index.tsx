import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  gap: 1rem;
`;

export const Grid = styled.div<{ rows: number; columns: number }>`
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 1rem;
`;

export const PageImage = styled.div`
  height: 400px;
  aspect-ratio: "16:9";
  width: 100%;
  background-image: url("/public/images/main.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
