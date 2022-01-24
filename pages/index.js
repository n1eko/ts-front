import Head from 'next/head'
import Layout from '../components/layout'
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
    <div>
      <Head>
        <title>TS3 WEB CONSOLE</title>
      </Head>
      <main>
        <h1>
          TS3 WEB CONSOLE
        </h1>

        <div>
          <section>IP: <code>ts.n1eko.com</code></section>
          {isLoading ? (<code/>) : (
            <>
              <section>Users: <code>{users.length}/{serverInfo.maxClients}</code></section>
              <section>Ping: <code>{serverInfo.averagePing} ms</code></section>
              <section>Uptime: <code>{Math.round(serverInfo.uptime / 86400)} days</code></section>
            </>
          )}
        </div>
        <p>
          {isLoading ? (null) : (<button onClick={updateUsers} >Reload</button>)}
        </p>
        {isLoading ? (  <p>Loading...</p> ) : (
          <div>
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