import React, { useState } from "react";
import styled from "styled-components";
import FineTune from "./FineTune";
import Imging from "./Imging"
import GPT from "./GPT"

const data = [
  "GPT",
  "IMG Generation",
  "Fine Tuning",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 850px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  color: #EDE6CC;
  position: absolute;

  @media only screen and (max-width: 850px) {
    text-align: center;
    top:-50px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  top: 50px;

  @media only screen and (max-width: 850px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 850px) {
    font-size: 60px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Title>The innnovations</Title>
      <Container>
        <Left>

          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "GPT" ? (
            <GPT />
          ) : work === "IMG Generation" ? (
            <Imging />
          ) : (
            <FineTune />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
