import React, { Suspense } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Cylinder } from "@react-three/drei";
import { signIn } from "next-auth/react";
import { Plane } from "three";
import { AiFillGoogleSquare } from "react-icons/ai";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1450px) {
    width: min-content;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  margin-left:0%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 74px;
  color: #EDE6CC;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #EDE6CC;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #ffe7eb;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  position: relative;
  font: 800 1.5rem bold;
  color: #1B592E;
  width: 20rem;
  height: 4rem;
  line-height: 42px;
  padding-left: 30px;
  border: #EDE6CC solid 2px;
  border-radius: 5px;
  background: #EDE6CC;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: inset 3px 5px 5px 2px #09491c63;
  outline: none;

  &:hover {
    border: #EDE6CC solid 2px;
    color: #EDE6CC;
    background: transparent;
    box-shadow: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 0.2rem;
    width: 0;
    background: #EDE6CC;
    box-shadow:
      -1px -1px 5px 0px #fff,
      7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 400ms ease all;
  }
`;

const Right = styled(motion.div)`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  
  @media only screen and (max-width: 768px) {
    width: 400px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
const ggStyle = {
  top:'8px', 
  left:'18px', 
  position:'absolute'
};
export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Connect to Cipher Fellows</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who might be your human friend, or your intelligent OpenAI assistant" </Subtitle>
          </WhatWeDo>
          <Desc>
             Let's tap into the most transformative conversations.
          </Desc>
          <Button onClick={()=>{ signIn("google")}}> <AiFillGoogleSquare style={ggStyle} size="2.8rem" /> Sign in with Google </Button>
        </Left>
        <Right 
          initial={{ x: 300 }}
          animate={{ x: 0, y:0 }}
          transition={{
            duration: 1,
        }}>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200, 30]} scale={2.6}>
                <MeshDistortMaterial
                  color="#007e6f"
                  attach="material"
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/poster.png" />
        </Right>
      </Container>
    </Section>
  );
};

