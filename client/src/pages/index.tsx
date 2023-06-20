import type { NextPage, NextPageContext } from 'next'
import {getSession,useSession} from 'next-auth/react'
import { signIn } from "next-auth/react";

import Chat from '../components/Chat/Chat'
import Auth from '../components/Auth/Auth'
import { Session } from 'next-auth'

import styles from '../styles/Home.module.css' 
import sass from '../styles/style.module.scss'

const Home: NextPage = () => {
  const {data} = useSession();
  console.log(data)
  return (
    <div>
      {data?.user ?(<Chat/>
      ):( <Auth />)}
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
