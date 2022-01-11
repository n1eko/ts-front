import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { getAllUsersForHome } from '../lib/api'
import User from '../components/user'
import { useState, useEffect } from "react";

export default function Home() {
  
  const [ isLoading, setIsLoading ] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllUsersForHome();
      setUsers(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);


  const updateUsers = async () => {
    {
      async function fetchData() {
        const data = await getAllUsersForHome();
        setUsers(data);
        setIsLoading(false);
      }
      fetchData();
    }
  }

  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>TS3 WEB CONSOLE</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          TS3 WEB CONSOLE
        </h1>

        <p className={styles.description}>
          IP: {' '}
          <code className={styles.code}>ts.n1eko.com</code>
          &nbsp;
          Users: {' '}
          {isLoading ? (<div/>) : (<code className={styles.code}>{users.length}/64</code>)}
        </p>
        <p className={styles.reload}>
          {isLoading ? (null) : (<button onClick={updateUsers} className={styles.button}>Reload</button>)}
        </p>
        {isLoading ? (  <p>Loading...</p> ) : (
          <div className={styles.grid}>
            {users.map((user) => (
                <User
                  key={user.id}
                  id={user.id}
                  username={user.name}
                  channel={user.channel}
                  platform={user.platform}
                  isMuted={user.isMuted}
                  country={user.country}
                />
              ))
              }
            </div>)}

      </main>
    </div>
    </Layout>
  )
}