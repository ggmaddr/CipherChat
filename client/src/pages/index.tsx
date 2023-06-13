import type { NextPage } from 'next'
import {signIn, signOut, useSession} from 'next-auth/react'
import styles from '../styles/Home.module.css' 
import sass from '../styles/style.module.scss'
const Home: NextPage = () => {
  const {data} = useSession();
  return (
    <div>
      {data?.user ?(
      <button onClick={()=> signOut()}>Sign out</button>
      ):( 
      <button onClick={()=> signIn('google')}>Sign in</button>
      )}
      
    </div>
  )
}

export default Home
