import styled from 'styled-components';
import { signOut } from "next-auth/react";

export const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #1B592E;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const Heading = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #EDE6CC;
  text-align: center;
`;

export const UserBox = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font: 20px American Typer, monospace ;
  padding: 10px 0;
  color: #ffeba4;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #EDE6CC;
  outline: none;
  background: transparent;
  ::placeholder{
    position: absolute;
    color: #9eeaff;
    pointer-events: none;
    transition: 0.5s;
  }
`;

export const SubmitBut = styled.button`
  position: relative;
  left: 35%;
  padding: 10px ;
  color: #9eeaff;
  font-size: 18px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  border: none;
  cursor: pointer;
  background: transparent;

  &:hover {
    background: #b8ffdcda;
    color: #1B592E;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px #b8ffdc
  }
`;
export const Container = styled.div`
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
export const Foot = styled.div`
  font: 400 20px normal American Typer, monospace;
  text-align: center;
  margin-bottom:40px;
`;

