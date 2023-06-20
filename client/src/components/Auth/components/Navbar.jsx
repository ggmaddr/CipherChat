import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  @media only screen and (max-width: 768px) {
  width: 100%;
  }
`;

const Container = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  margin:30px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Logo = styled.img`
  height: 100px;
  @media only screen and (max-width: 768px) {
    height: 80px;
    padding: 10px;
  }
`;

const Button = styled.a`
  width: 120px;
  padding: 10px;
  padding-left:30px;
  background-color: #EDE6CC;
  color: #105044;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  font:1rem normal;
  text-align: center;
`;
const iStyle = {
  top:'5px', 
  left:'10px', 
  position:'absolute',
};
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Logo src="./img/logo.png" />   
          {/* Changed the image due to copyright problems */}
        <Button href="https://www.linkedin.com/in/gradyta/"> <FaLinkedin style={iStyle} size="25px"/> ggmaddr</Button>

      </Container>
    </Section>
  );
};

export default Navbar;
