'use client';
import { signIn } from "next-auth/react";
import { Session, } from "next-auth";
import AuthS from "./AuthS";
interface IAuthProps {
  session: Session | null
  reloadSession: () =>void
}

const Auth: React.FunctionComponent<IAuthProps> = (session, reloadSession) => {
  return (
    
    <AuthS/>
  );
};

export default Auth;
