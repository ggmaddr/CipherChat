'use client';
import { signIn, signOut} from "next-auth/react";
import { Session, } from "next-auth";
import Hero from "./components/Hero.jsx";
import Works from "./components/Works.jsx";
import { Container, Foot, Heading, Input, LoginBox, SubmitBut, UserBox } from "./components/Styles";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import UserOperations from "../../graphql/operations/user"
import { CreateUsernameData, CreateUsernameVariables } from "../../../util/types.js";
interface IAuthProps {
  session: Session | null
  reloadSession: () =>void
}

const Auth: React.FunctionComponent<IAuthProps> = (session, reloadSession) => {
    const [username, setUsername] = useState("");
    
    //name of function from servers
    const [createUsername, {data, loading, error}] = useMutation< //Inside <>: 1st is return types, 2nd is passing types
        CreateUsernameData, 
        CreateUsernameVariables>
        (UserOperations.Mutations.createUsername) 

    console.log("createUsername DATA", data, loading, error)

    const onSubmit = async () => {
        if (!username) return
        try{
            // create username mutation to send our username to the GraphQL 
            //createUsrname is async because it communicates with API
            await createUsername({variables: {username}})
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
                <SubmitBut onClick={onSubmit}>Submit</SubmitBut>
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
