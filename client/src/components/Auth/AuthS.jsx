'use client';

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import styled from "styled-components";
import {Hero,Title} from "./components/Hero.jsx";
import Works from "./components/Works.jsx";
import "../../styles/Home.module.css"
const Container = styled.div`
  height: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: linear-gradient(90deg, rgba(16,80,64,1) 0%, rgba(12,73,37,1) 42%, rgba(46,88,42,1) 100%);

  &::-webkit-scrollbar{
    display: none;
  }
  margin: 0px;
`;
const Foot = styled.div`
  font: 400 20px normal American Typer, monospace;
  text-align: center;
  margin-bottom:40px;
`;
const AuthS = (session, reloadSession) => {
  return (
      <Container>
          <Hero />
          <Works />
        <Foot> © 2023 All Rights Reserved by GGMADDR</Foot>
      </Container>
   
  );
};

export default AuthS;
