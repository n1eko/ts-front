import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { getAllUsersForHome, getServerInfoForHome } from '../lib/graphql'
import User from '../components/user'
import { useState, useEffect } from "react";

export default function Home() {
  
  const [ isLoading, setIsLoading ] = useState(true);
  const [users, setUsers] = useState([]);
  const [serverInfo, setServerInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllUsersForHome();
      setUsers(data);
      const serverInfo = await getServerInfoForHome();
      setServerInfo(serverInfo);
      setIsLoading(false);
    }
    fetchData();
  }, []);


  const updateUsers = async () => {
    {
      async function fetchData() {
        const data = await getAllUsersForHome();
        setUsers(data);
        const serverInfo = await getServerInfoForHome();
        setServerInfo(serverInfo);
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

        <div className={styles.description}>
          <section>IP: <code className={styles.code}>ts.n1eko.com</code></section>
          {isLoading ? (<code/>) : (
            <>
              <section>Users: <code className={styles.code}>{users.length}/{serverInfo.maxClients}</code></section>
              <section>Ping: <code className={styles.code}>{serverInfo.averagePing} ms</code></section>
              <section>Uptime: <code className={styles.code}>{Math.round(serverInfo.uptime / 86400)} days</code></section>
            </>
          )}
        </div>
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