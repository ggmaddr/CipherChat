'use client';
import { signIn, signOut} from "next-auth/react";
import { Session, } from "next-auth";
import Hero from "./components/Hero.jsx";
import Works from "./components/Works.jsx";
import "./Styles"
import { Container, Foot, Heading, Input, LoginBox, SubmitBut, UserBox } from "./Styles";
import { useState } from "react";
interface IAuthProps {
  session: Session | null
  reloadSession: () =>void
}

const Auth: React.FunctionComponent<IAuthProps> = (session, reloadSession) => {
    const [username, setUsername] = useState("");
    const onSubmit = async () => {
        try{
            // create username mutation to send our username to the graphql api
        } catch (error){
            console.log('onSubmit error', error)
        }
    }
    console.log("auth session",session)
    return (
    <div>
        {session?  
        (
            <LoginBox>
                <Heading>Create a username</Heading>
                <UserBox>
                <Input type="text" placeholder='The coolest username' 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)}/>
                </UserBox>
                <SubmitBut >Submit</SubmitBut>
            </LoginBox>
        ) : 
        (
            <Container>
                <Hero />
                <Works />
                <Foot> © 2023 All Rights Reserved by GGMADDR</Foot>
            </Container>
        )
    }</div>
  );
};

export default Auth;
