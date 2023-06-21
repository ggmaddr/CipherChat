import type { NextPage, NextPageContext } from 'next'
import {getSession,useSession} from 'next-auth/react'
import { signIn } from "next-auth/react";

import Chat from '../components/Chat/Chat'
import Auth from '../components/Auth/Auth'
import { Session } from 'next-auth'

import styles from '../styles/Home.module.css' 
import sass from '../styles/style.module.scss'

const Home: NextPage = () => {
  const {data:session} = useSession();
  console.log("SESSION: ",session)
  const reloadSession = () => {
    // const event = new Event("visibilitychange");
    // document.dispatchEvent(event);
  };
  return (
    <div>
      {session?.user ?(<Chat/>
      ):( <Auth session={session} reloadSession={reloadSession} />)}
    </div>
  )
}
export const getServerSideProps = async (context: NextPageContext) => {
  //get session
  const session = await getSession(context)
  return{
    props:{
      session 
    }
  }
}
export default Home
